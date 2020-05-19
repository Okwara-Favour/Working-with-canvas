


window.onload = function() {
var c = document.getElementById('canvas1');
var ctx = c.getContext('2d');
var img = document.getElementById('rocket');


canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

window.addEventListener('mousemove',function(event) {
	mouse.x = event.x;
	mouse.y = event.y;
});

var mouse = {
		x : undefined,
		y : undefined
	}


window.addEventListener('resize',function() {
	canvas1.width = window.innerWidth;
	canvas1.height = window.innerHeight;
	init()
});

var colorArray = [
	'rgb(255,210,210)',
    'rgb(210,255,210)',
    'rgb(210,210,255)',
    'rgb(143,210,255)',
]
var color = [
	'white',
]
function setRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

	
function drawBall(x,y,radius,vx,vy) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.vx = vx;
	this.vy = vy
	this.color = colorArray [Math.floor(Math.random() * colorArray .length)]
	this.radians = Math.random() * Math.PI * 2;
	this.speed = 0.01;
	this.distance = setRange(130,250);
	
	this.draw = function() {
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false)
		ctx.fillStyle = this.color;
		ctx.fill();
	}
	this.update = function() {
		this.radians += this.speed;
		this.x = this.vx
		this.x = x + Math.cos(this.radians) * this.distance;
		this.y = y + Math.sin(this.radians) * this.distance;
		if (this.x + this.radius > canvas1.width || this.x - this.radius < 0) {
			this.vx = -this.vx;
		}
		if (this.y + this.radius > canvas1.height || this.y - this.radius < 0) {
			this.vy = -this.vy;
		}
		this.draw();
	}
}
BigBall = [];

function codeBall(a,b,size,da,db,m,n,dm) {
	this.a = a;
	this.b = b;
	this.size = size;
	this.da = da;
	this.db = db;
	this.m = m;
	this.n = n;
	this.dm = dm;
	this.color = color;
	
	this.code = function() {
		ctx.drawImage(img,this.m,this.n,30,30);
		ctx.beginPath();
		ctx.arc(this.a,this.b,this.size,0,2*Math.PI,false)
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}
	this.drop = function() {
		//this.a += this.da;
		this.b += this.db;
		this.m += this.dm;
		if (this.b - this.size < 0) {
			this.db = -this.db;
		}
		if(this.b + this.size > canvas1.height) {
			this.b = 10;
		}
		if (this.m > canvas1.width) {
			this.m = -10;
		}
		this.code();
	}
}
SmallBall = [];

init = function() {
	BigBall = [];
	
for(i = 0; i < 200; i++) {
	x = (canvas1.width)/2;
	y = (canvas1.height)/2;
	radius = (Math.random()* 4)+ 0.5;
	vx  = Math.random() * 10;
	vy = Math.random() * 5;
	BigBall.push(new drawBall(x,y,radius,vx,vy));
}


SmallBall = [];

m = -10;
n = Math.random() * canvas1.height;
dm = Math.random() * 0.3;

for(i = 0; i < 300; i++) {
	a = Math.random() * canvas1.width;
	b = Math.random() * canvas1.height;
	size = 0.5;
	da  = 1;
	db = Math.random() * 0.1;
	
	SmallBall.push(new codeBall(a,b,size,da,db,m,n,dm));
}

}


animate = function() {
	requestAnimationFrame(animate);
	
	ctx.fillStyle="rgba(0,0,0,0.3)";
	ctx.fillRect(0,0,canvas1.width,canvas1.height);
	
	for(i = 0; i < BigBall.length;i++) {
		BigBall[i].update();
	}
	for (i = 0; i < SmallBall.length;i++) {
	SmallBall[i].drop();
	}
}
animate();

init();
}


