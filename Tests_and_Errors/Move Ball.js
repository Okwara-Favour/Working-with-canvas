var c = document.getElementById('canvas1')
var ctx = c.getContext('2d')

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

class randomVariables {
	x = Math.random() * canvas1.width;
	y = Math.random() * canvas1.height;
	radius = Math.random() * (30-15) + 15;
	vx = Math.random() * (8-3) + 3;
	vy = Math.random() * (8-3) + 3;
	
	palette = function() {
		this.colorArray = [
			'green',
			'blue',
			'red',
			'purple',
			'yellow',
			'orange',
		]
		this.colors = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
		return this.colors;
	}
}

class DrawBall {
	constructor(x,y,radius, vx, vy) {
		this.radians = 1;
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.vx = vx;
		this.vy = vy;
		this.color = "green";
		this.radians = (3/2) * Math.PI * 2;
		this.speed = 0.09;
		//this.radians = (3/2) * Math.PI * 2;
		
	}
	
	drawCircle = function() {
		ctx.beginPath()
		ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}
	updateCircle = function() {
		this.drawCircle();
		this.x += (this.vx);
		this.y += (this.vy * Math.sin(this.radians));
		this.radians += this.speed;
		console.log(this.vx);
		if (this.x + this.radius > canvas1.width || this.x - this.radius < 0) {
			this.vx = -this.vx;
		}
		if (this.y + this.radius > canvas1.height) {
			this.vy = -this.vy * 0.9;
		}
		else {
			this.vy += 0.5;
		}
	}
}

callRandom = new randomVariables();

x = (canvas1.width/2);
y = (canvas1.height/2);
radius = 20;
vx = 5;
vy = 5;

aBall = new DrawBall(callRandom.x,callRandom.y,callRandom.radius, vx , vy);
//aBall = new DrawBall(callRandom.x,callRandom.y,callRandom.radius, vx , vy);
aBall.color = callRandom.palette();
function drawBall() {
	ctx.beginPath()
	ctx.arc(x,y,radius,0,2*Math.PI,false);
	ctx.fillStyle = "green";
	ctx.fill();
	ctx.closePath();
	x += vx;
	y += vy;
		if (x + radius > canvas1.width || x - radius < 0) {
			vx = -vx;
		}
		if (y + radius > canvas1.height || y - radius < 0) {
			vy = -vy;
		}
}

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,canvas1.width,canvas1.height);
	//drawBall();
	aBall.updateCircle();
	
}
animate();