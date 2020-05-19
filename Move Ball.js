var c = document.getElementById('canvas1')
var ctx = c.getContext('2d')

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

x = Math.random() * canvas1.width;
y = Math.random() * canvas1.height;
radius = 20;
vx = Math.random() * 10;
vy = Math.random() * 10;

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
		if (y + radius > canvas1.width || y - radius < 0) {
			vy = -vy;
		}
}

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,canvas1.width,canvas1.height);
	drawBall();
}
animate();