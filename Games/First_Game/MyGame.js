alert("Only keyboard controls and best to play in full screen for easier gameplay");

myCodeArea = {
	canvas1 : document.getElementById('canvas1'),
	start : function() {
	this.canvas1.width = window.innerWidth;
	this.canvas1.height = window.innerHeight;
	this.context = this.canvas1.getContext('2d');
	// window.addEventListener('mousemove',function(event) {
		// mouse.x = event.x;
		// mouse.y = event.y;
	// });

	// var mouse = {
			// x : undefined,
			// y : undefined
		// }
		window.addEventListener('resize',function() {
			this.canvas1.width = window.innerWidth;
			this.canvas1.height = window.innerHeight;
			init()
		});

		window.addEventListener('keydown', function (e) {
			ControlImage.keys = (ControlImage.keys || []);
			ControlImage.keys[e.keyCode] = (e.type == "keydown");
		})
		window.addEventListener('keyup', function (e) {
			ControlImage.keys[e.keyCode] = (e.type == "keydown");            
		})
	},
	 clear : function() {
        //this.context.clearRect(0, 0, this.canvas1.width, this.canvas1.height);
		this.context.fillStyle="rgba(0,0,0,0.3)";
		this.context.fillRect(0,0,this.canvas1.width,this.canvas1.height);
    },
	 pause : function() {
		this.context.clearRect(0,0,this.canvas1.width,this.canvas1.height);
		ctx.fillStyle = "white";
		ctx.fillText("You Crashed",(myCodeArea.canvas1.width/2),(myCodeArea.canvas1.height/2));
		cancelAnimationFrame(animate);
	 }
}

function tech() {
	boxHeight = myCodeArea.canvas1.height
	myCodeArea.start();
}
tech();

var ctx = myCodeArea.context;
var img1 = document.getElementById('rocket1');
var img2 = document.getElementById('rocket2');
var img3 = document.getElementById('rocket3');
var img4 = document.getElementById('rocket4');

var mtr = document.getElementById('meteor');

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

function setRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

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

var frameR = 0;
var scoreCount = 0;
var frameNo = 0;

function everyinterval(n) {
  if ((frameNo / n) % 1 == 0) {return true;}
  return false;
}

function everyinterval(n) {
  if ((frameR / n) % 1 == 0) {return true;}
  return false;
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
		ctx = myCodeArea.context;
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
		if (this.x + this.radius > myCodeArea.canvas1.width || this.x - this.radius < 0) {
			this.vx = -this.vx;
		}
		if (this.y + this.radius > myCodeArea.canvas1.height || this.y - this.radius < 0) {
			this.vy = -this.vy;
		}
		this.draw();
	}
}
BigBall = [];

function codeBall(a,b,size,da,db) {
	this.a = a;
	this.b = b;
	this.size = size;
	this.da = da;
	this.db = db;
	this.color = color;
		this.code = function() {
		ctx.beginPath();
		ctx.arc(this.a,this.b,this.size,0,2*Math.PI,false)
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}
	this.drop = function() {
		//this.a += this.da;
		this.b += this.db;
		if (this.b - this.size < 0) {
			this.db = -this.db;
		}
		if(this.b + this.size > myCodeArea.canvas1.height) {
			this.b = 10;
		}
		this.code();
	}
}
SmallBall = [];

function drawGame(m,n,dm,width,height) {
	this.m = m;
	this.n = n;
	this.dm = dm;
	this.color = colorArray [Math.floor(Math.random() * colorArray .length)];
	this.moveM = 0;
	this.moveN = 0;
	this.width = width;
	this.height = height;
	this.gameImage = img1;
	this.Image = function() {
		ctx.drawImage(this.gameImage,this.m,this.n,this.width,this.height);
	}
	this.score = function() {
		if (this.dm == "text") {
		ctx.font = this.width + " " + this.height;
		ctx.fillStyle = "white";
		ctx.fillText(this.text, this.m, this.n);
		}
	}
	this.obstacle = function() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.m, this.n, this.width, this.height);
	}
	this.obstacle2 = function() {
		ctx.font = "20px Arial";
		ctx.fillText("Beware",this.m,this.n);
		ctx.fillStyle = "red";
		ctx.fillRect(this.m, this.n, this.width, this.height);
	}
	this.obstacle3 = function() {
		ctx.fillStyle = "brown";
		ctx.font = "30px Arial";
		ctx.fillText("Danger",this.m,this.n);
		ctx.fillStyle = "rgb(50,0,0)";
		ctx.fillRect(this.m, this.n, this.width, this.height);
	}
	this.disturb = function() {
		if (this.m < -100) {
			this.m = (myCodeArea.canvas1.width + 200);
			this.n = Math.random() * myCodeArea.canvas1.height
			this.width = (Math.random() * 100)+10;
			this.height = (Math.random() * 40)+10;
		}
		this.obstacle2();
	}
	this.disturb2 = function() {
		if (this.m < -400) {
			this.m = (myCodeArea.canvas1.width + 1000);
			this.n = Math.random() * myCodeArea.canvas1.height
		}
		this.obstacle3();
	}
	this.speed = function() {
		this.m += this.moveM;
		this.n += this.moveN;
		if (this.m > canvas1.width) {
			this.m = -10;
		}
		this.Image();
	}
	this.crashWith = function(otherobj) {
    var myleft = this.m;
    var myright = this.m + (this.width);
    var mytop = this.n;
    var mybottom = this.n + (this.height);
    var otherleft = otherobj.m;
    var otherright = otherobj.m + (otherobj.width);
    var othertop = otherobj.n;
    var otherbottom = otherobj.n + (otherobj.height);
    var crash = true;
    if ((mybottom - 15 < othertop) || (mytop + 15 > otherbottom) ||
    (myright - 5 < otherleft) || (myleft + 5 > otherright)) {
      crash = false;
    }
    return crash;
  }
}

var ControlImage = new drawGame(0,10,0,50,70)

var myObstacle = new drawGame(myCodeArea.canvas1.width,
Math.random() * myCodeArea.canvas1.height,0,
(Math.random() * 100)+10
,(Math.random() * 40)+10)

var bossObstacle = new drawGame((myCodeArea.canvas1.width - 1000),
Math.random() * myCodeArea.canvas1.height,0,300,60);

var myScore = new drawGame((myCodeArea.canvas1.width/2), 30, "text", "25px","Consolas");

var gameObstacle;
gameObstacle = [];

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
//gameObstacle = [];

// m = -10;
// n = Math.random() * canvas1.height;
// dm = Math.random() * 0.3;


for(i = 0; i < 300; i++) {
	a = Math.random() * canvas1.width;
	b = Math.random() * canvas1.height;
	size = 0.5;
	da  = 1;
	db = Math.random() * 0.1;
	
	SmallBall.push(new codeBall(a,b,size,da,db));
}

}


animate = function() {
	myCodeArea.clear();
	requestAnimationFrame(animate);
	frameR += 1;
	
	for(i = 0; i < BigBall.length;i++) {
		BigBall[i].update();
	}
	for (i = 0; i < SmallBall.length;i++) {
	SmallBall[i].drop();
	}
	if (ControlImage.crashWith(myObstacle)) {
		myCodeArea.pause();
        return;
	}
	if (ControlImage.crashWith(bossObstacle)) {
		myCodeArea.pause();
        return;
	}
	var m, n;
	for (i = 0; i < gameObstacle.length; i += 1) {
    if (ControlImage.crashWith(gameObstacle[i])) {
		myCodeArea.pause();
        return;
		}
	}
	myCodeArea.frameNo += 1;
	frameNo += 2;
	  if (frameNo == 1 || everyinterval(150)) {
		m = myCodeArea.canvas1.width;
		n = (Math.random() + 0.06) * canvas1.height;
		minWidth = 20;
		maxWidth = 200;
		width = Math.floor(Math.random()*(maxWidth-minWidth + 1) + minWidth);
		minGap = 50;
		maxGap = 200;
		gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
		//Blocks.push(new drawBall(x, 0, 0, 0, 0, 20, height));
		// GameObstacle.push(new component(10, height, "green", x, 0));
		// Blocks.push(new drawBall(width + gap, y, 0, 0, 0, y - width - gap, 20));
		gameObstacle.push(new drawGame(m,n,0,width,20))
	  }
	  for (i = 0; i < gameObstacle.length; i += 1) {
		gameObstacle[i].m += -1;
		gameObstacle[i].obstacle();
	  }
	myObstacle.disturb();
	myObstacle.m -= (Math.random() * 5);
	bossObstacle.disturb2();
	bossObstacle.m -= 0.5;
	
	if((frameR % 100) == 0) {
		scoreCount += 1;
	}
	myScore.text = "SCORE: " + scoreCount;
	myScore.score();
	ControlImage.speed();
	ControlImage.moveM = 0;
	ControlImage.moveN = 0;
	if (ControlImage.keys && ControlImage.keys[37]) {
		ControlImage.moveM = -1; 
		ControlImage.gameImage = img1;
	}
    if (ControlImage.keys && ControlImage.keys[39]) {
		ControlImage.moveM = 1; 
		ControlImage.gameImage = img2;
		}
    if (ControlImage.keys && ControlImage.keys[38]) {ControlImage.moveN = -1; }
    if (ControlImage.keys && ControlImage.keys[40]) {ControlImage.moveN = 1; }
}
animate();

init();


 