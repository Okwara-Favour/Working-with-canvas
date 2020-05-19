var c = document.getElementById('canvas1')
var ctx = c.getContext('2d')

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

function drawBall(x,y,radius,vx,vy) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.vx = vx;
	this.vy = vy;
		this.draw = function() {
	
			ctx.beginPath()
			ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false)
			ctx.fillStyle = "blue";
			ctx.fill();
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
		this.draw();
		}
}
Balls = [];
	for (i = 0; i < 100; i++) {
	x = Math.random() * canvas1.width;
	y = Math.random() * canvas1.height;
	radius = 20;
	vx = Math.random() * 10;
	vy = Math.random() * 10;
	Balls.push(new drawBall(x,y,radius,vx,vy));
	}
function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,canvas1.width,canvas1.height);	
	for (i = 0; i < Balls.length; i++) {
	Balls[i].update();
		}
	}
animate();