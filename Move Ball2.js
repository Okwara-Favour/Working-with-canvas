var c = document.getElementById('canvas1')
var ctx = c.getContext('2d')

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

x = Math.random() * canvas1.width;
y = Math.random() * canvas1.height;
radius = 20;
vx = Math.random() * 10;
vy = Math.random() * 10;

function drawBall(x,y,radius,vx,vy) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.vx = vx;
	this.vy = vy;
		this.draw = function() {
			ctx.beginPath()
			ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
			ctx.fillStyle = "red";
			ctx.fill();
			ctx.closePath();
		}
		this.effects = function() {
		this.x += this.vx;
		this.y += this.vy;
		if (this.x + this.radius > canvas1.width || this.x - this.radius < 0) {
			this.vx = -this.vx;
			}
		if (this.y + this.radius > canvas1.height|| this.y - this.radius < 0) {
			this.vy = -this.vy;
			}
			this.draw();
		}
}
var Balls = new drawBall(60,60,20,10,10)
function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,canvas1.width,canvas1.height);
	Balls.effects();
}
animate();