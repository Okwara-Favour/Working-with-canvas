var c = document.getElementById('canvas1')
var ctx = c.getContext('2d')

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

window.addEventListener('resize',function() {
	canvas1.width = window.innerWidth;
	canvas1.height = window.innerHeight;
	init()
});

friction = 1;
gravity = 0.01;

function drawBall(x,y,radius,vx,vy) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.vx = vx;
	this.vy = vy;
		this.draw = function() {
			ctx.beginPath()
			ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false)
			ctx.fillStyle = "white";
			ctx.fill();
			ctx.strokeStyle = "white";
			ctx.stroke();
		};
		this.update = function() {
			// this.x += this.vx;
			this.y += this.vy;
		// if (this.x + this.radius > canvas1.width || this.x - this.radius < 0 ) {
			// this.vx = -this.vx;
			// }
	
		if ( this.y - this.radius < 0 ) {
			this.vy = -this.vy;
			}
		if	( this.y - this.radius > canvas1.height) {
			this.y = 10 ;
			}
			// else {
				// this.vy += gravity;
		this.draw();
		}
		 
 }
Balls = [];

function init() {
Balls = [];
	for (i = 0; i < 600; i++) {
	x = Math.random() * canvas1.width;
	y = (Math.random() + 0.06) * canvas1.height;
	radius = 1;
	vx = Math.random() * 10;
	vy = Math.random() * 3;
	Balls.push(new drawBall(x,y,radius,vx,vy));
	}
}
function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,canvas1.width,canvas1.height);	
	for (i = 0; i < Balls.length; i++) {
	Balls[i].update();
		}
	}
animate();
init();