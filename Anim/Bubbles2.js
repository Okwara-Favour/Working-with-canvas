var c = document.getElementById('canvas1')
var ctx = c.getContext('2d')

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

window.addEventListener('mousemove',function(event) {
	mouse.x = event.x;
	mouse.y = event.y;
});

window.addEventListener('resize',function() {
	canvas1.width = window.innerWidth;
	canvas1.height = window.innerHeight;
	init()
});
	var mouse = {
		x : undefined,
		y : undefined
	}
	
	var minRadius = 2;
	var maxRadius = 30;
	
function drawBall(x,y,radius,vx,vy) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.vx = vx;
	this.vy = vy;
		this.draw = function() {
	
			ctx.beginPath()
			ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false)
			ctx.strokeStyle = "white";
			ctx.stroke();
		};
		this.update = function() {
			this.x += this.vx;
			this.y += this.vy;
		if (this.x + this.radius > canvas1.width || this.x - this.radius < 0 ) {
			this.vx = -this.vx;
			}
	
		if (this.y + this.radius > canvas1.height || this.y - this.radius < 0 ) {
			this.vy = -this.vy;
			}
		if (mouse.x - this.x < 100 && mouse.x - this.x > -100 && 
		mouse.y - this.y < 100 && mouse.y - this.y > -100) {
			 if (this.radius > minRadius) {
				 this.radius -= 1
			 }
		}
		else if (this.radius < maxRadius) {
				this.radius += 1
		};
		this.draw();
		}
}
Balls = [];
	for (i = 0; i < 500; i++) {
	x = Math.random() * canvas1.width;
	y = Math.random() * canvas1.height;
	radius = 30;
	vx = (Math.random()-0.5) * 4;
	vy = (Math.random()-0.5) * 4;
	Balls.push(new drawBall(x,y,radius,vx,vy));
	}
function animate() {
	requestAnimationFrame(animate);
	
	ctx.fillStyle="rgba(0,0,0,0.1)";
	ctx.fillRect(0,0,canvas1.width,canvas1.height);
	
	for (i = 0; i < Balls.length; i++) {
	Balls[i].update();
		}
	}
animate();