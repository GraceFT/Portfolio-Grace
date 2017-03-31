(function () {

    // Star Numbers
    var starsNumber = 500,
        canvas = document.getElementById('divCanvas'),
        context = canvas.getContext('2d'),
        width = window.innerWidth,
        height = window.innerHeight,
        x = 100,
        y = 100,
        i = 0,
        t = 0,
        stars = [],
        colors = [
            '#e7fcff', // Sirius        (Canis Major)
            '#217cee', // Rigel         (Orion)
            '#eef310', // Sun & Capella (Auriga)
            '#fe8028', // Albedaran     (Taurus)
            '#87f903'  // Betelgeuse    (Orion)
        ];

    function Star() {

        // Random Position
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        // Location Starting
        this.speed = 0;

        // Colors
        this.color = colors[Math.floor(Math.random() * colors.length)];

        // Size Limits
        this.size = Math.random();
    }

    function draw() {

        // Colors
        var star;

        // Canvas Size
        canvas.width = width;
        canvas.height = height;

        for (t = 0; t < stars.length; t += 1) {

            // Getting Star
            star = stars[t];
            
            // Building
            context.beginPath();
            context.fillStyle = star.color;
            context.arc(star.x, star.y, star.size, Math.PI * 2, false);
            context.fill();

            // Animation
            star.x -= star.speed;

            // Keeping Stars on canvas
            if (star.x < -star.size) {
                star.x = width + star.size;
            }

            if (star.size < 5) {
                star.speed = 1;
            }

            if (star.size < 4) {
                star.speed = 0.5;
            }

            if (star.size < 3) {
                star.speed = 0.25;
            }
        }
    }

    for (i = 0; i < starsNumber; i += 1) {
        stars.push(new Star());
    }

    setInterval(draw, 20);

}()); 

/*(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || 
								  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
	  window.requestAnimationFrame = requestAnimationFrame;
	})();

	// Terrain stuff.
	var terrain = document.getElementById("terCanvas"),
		background = document.getElementById("bgCanvas"),
		//terCtx = terrain.getContext("2d"),
		bgCtx = background.getContext("2d"),
		width = window.innerWidth,
		height = document.body.offsetHeight;
    //(height < 400)?height = 3000:height;

	//terrain.width = background.width = width;
	//terrain.height = background.height = height;

	// Some random points
	var points = [],
		displacement = 140,
		power = Math.pow(2,Math.ceil(Math.log(width)/(Math.log(2))));
	
	// set the start height and end height for the terrain
	points[0] = (height - (Math.random()*height/2))-displacement;
	points[power] = (height - (Math.random()*height/2))-displacement;

	// create the rest of the points
	for(var i = 1; i<power; i*=2){
		for(var j = (power/i)/2; j <power; j+=power/i){
			points[j] = ((points[j - (power/i)/2] + points[j + (power/i)/2]) / 2) + Math.floor(Math.random()*-displacement+displacement );
		}
		displacement *= 0.6;
	}

	// draw the terrain
	/*terCtx.beginPath();
					
	for(var i = 0; i<=width; i++){
		if(i === 0){
			terCtx.moveTo(0, points[0]);
		}else if(points[i] !== undefined){
			terCtx.lineTo(i, points[i]);
		}
	}

	terCtx.lineTo(width,terrain.height);
	terCtx.lineTo(0,terrain.height);
	terCtx.lineTo(0,points[0]);
	terCtx.fill();*/

/*
	// Second canvas used for the stars
	bgCtx.fillStyle = '#05004c';
	bgCtx.fillRect(0,0,width,height);

	// stars
	function Star(options){
		this.size = Math.random()*2;
		this.speed = Math.random()*.1;
		this.x = options.x;
		this.y = options.y;
	}

	Star.prototype.reset = function(){
		this.size = Math.random()*2;
		this.speed = Math.random()*.1;
		this.x = width;
		this.y = Math.random()*height;
	}
	
	Star.prototype.update = function(){
		this.x-=this.speed;
		if(this.x<0){
		  this.reset();
		}else{
		  bgCtx.fillRect(this.x,this.y,this.size,this.size); 
		}
	}
	
	function ShootingStar(){
		this.reset();
	}
	
	ShootingStar.prototype.reset = function(){
		this.x = Math.random()*width;
		this.y = 0;
		this.len = (Math.random()*80)+10;
		this.speed = (Math.random()*10)+6;
		this.size = (Math.random()*1)+0.1;
    // this is used so the shooting stars arent constant
		this.waitTime =  new Date().getTime() + (Math.random()*3000)+500;
		this.active = false;
	}
	
	ShootingStar.prototype.update = function(){
		if(this.active){
			this.x-=this.speed;
			this.y+=this.speed;
			if(this.x<0 || this.y >= height){
			  this.reset();
			}else{
			bgCtx.lineWidth = this.size;
				bgCtx.beginPath();
				bgCtx.moveTo(this.x,this.y);
				bgCtx.lineTo(this.x+this.len, this.y-this.len);
				bgCtx.stroke();
			}
		}else{
			if(this.waitTime < new Date().getTime()){
				this.active = true;
			}			
		}
	}

	var entities = [];
	
	// init the stars
	for(var i=0; i < height; i++){
		entities.push(new Star({x:Math.random()*width, y:Math.random()*height}));
	}
  
	// Add 2 shooting stars that just cycle.
	entities.push(new ShootingStar());
	entities.push(new ShootingStar());
	
	//animate background
	function animate(){
		bgCtx.fillStyle = '#05004c';
		bgCtx.fillRect(0,0,width,height);
		bgCtx.fillStyle = '#ffffff';
		bgCtx.strokeStyle = '#ffffff';

		var entLen = entities.length;
	  
		while(entLen--){
			entities[entLen].update();
		}
		
		requestAnimationFrame(animate);
	}
	animate();*
*/
/*//parecido pero no es responsive
var $freezed = false;
var $speddOffset = 0;
var $canvas=document.getElementById('staryNight');
var $ctx=$canvas.getContext('2d');
$ctx.canvas.width  = window.innerWidth;
$ctx.canvas.height = window.innerHeight;
//if($canvas){
     // return false;
    //}
//stars
var $stars=[],
 
    $numStars=100,
    $centerX=$canvas.width/2,
    $centerY=$canvas.height/2;

//returns random hex color
function randomHexColor(){
  var $color='#';
  for (var i=0;i<6;i++) {
    $val=Math.ceil(Math.random()*15);
    switch ($val) {
      case 10:
        $val='A';
        break;
      case 11:
         $val='B';
        break;
      case 12:
        $val='C';
        break;
      case 13:
         $val='D';
         break;
      case 14:
         $val='E';
         break;
      case 15:
         $val='F';
         break;
    }
    $color+=$val;
  }
  return $color;
}

//object constructor
function star(){
  this.x=0;
  this.y=0;
  this.w=Math.ceil(Math.random()*2);
  this.h=Math.ceil(Math.random()*2);
  this.color=randomHexColor();
 this.color='rgba(255,255,255,0.1)';
  this.angle=Math.ceil(Math.random()*1440-720);
  this.movmentRadius=Math.ceil(Math.random()*$canvas.width);
  this.speed=1/Math.ceil(Math.random()*10+10);
}
function populateSky() {
  for (var i=0;i < $numStars;i++){
    var $newStar=new star();
    $stars.push($newStar);
  }
}

//actual drawing of the sky
function drawStars() {
  
  for (var i=0;i<$numStars;i++){
    
    $stars[i].x=$centerX+Math.cos($stars[i].angle*Math.PI/180)*$stars[i].movmentRadius;
    $stars[i].y=$centerY+Math.sin($stars[i].angle*Math.PI/180)*$stars[i].movmentRadius;
    
    $ctx.fillStyle=$stars[i].color;
    $ctx.fillRect($stars[i].x,$stars[i].y,$stars[i].w,$stars[i].h);
    
    $stars[i].angle+=$stars[i].speed;
  }
  
}
populateSky();
setInterval(drawStars,1);
*/




//EL DE LA WEB
/*
function Milkyway(options){
  this.init = function(){
    this.freezed = false;
    this.speddOffset = 0;
    this.canvas = document.getElementById(options.id);
    if(!this.canvas){
      return false;
    }
    this.ctx = this.canvas.getContext('2d');
  
    this.stars = [];
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
  };
  this.random = function (min, max, precision){
    return parseFloat(Math.min(min +(Math.random()*(max - min)), max).toFixed(precision|| 4));
  };
  this.randomDistribution = function (){
    return arguments[Mah.floor(Math.random()* arguments.length)];
  };
  this.toRoad = function (deg){
    return deg * (Math.PI/180);
  };
};
  /*Register canvas handlers*/
/*this.registerHandler = function (container){
  var self = this;
  container = container ? document.querySelector(container):this;
  container.addEventListener('mousemove',function (e){
    
    var fromCenterX = Math.abs(self.centerX - e.clientX);
    var fromCenterY = Math.abs(self.centerY - e.clientY);
    var fromCenter = Math.max(fromCenterX, fromCenterY);
    var toCenterX = Math.abs(self.centerX - fromCenterX);
    var toCenterY = Math.abs(self.centerY - fromCenterY);
    var toCenter = Math.min(toCenterX, toCenterY);
    if(fromCenter < 150){
      self.freezed = true;
      self.speedOffset = Math.min(0.2, toCenter/13000);
    }else{
      self.freezed = false;
      self.speddOffset = Math.min(0.2, toCenter/5000);
    }
  });
};

this.populateSky = function (){
  var maxRadius = Math.round(Math.sqrt(Math.pow(this.centerY,2)+ Math.pow(this.centerX,2)));
  var num = Math.floor(this.canvas.width * options.popularity);
  this.stars = [];
  for (var i = 0; i<num; i++){
    var star = {};
    star.color = [255,255,255];
    star.angle = Math.ceil(Math.random()*360);
    star.opacity = this.random(0.15,0.85);
    star.width = this.randomDistribution(3,2,2,2,2,1);
    star.length = star.width / 2000;
    star.trailLength = 0;
    star.radius = this.randomDistribution(
      this.randomInt(0, maxRadius),
      this.randomInt(25, maxRadius),
      this.randomInt(45, maxRadius),
      this.randomInt(50, maxRadius)
    );
    star.speed = Math.abs((20/star.radius + Math.random())/10);
    this.stars.push(star);
  }
};

this.clearCtx = function(){
  this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
};

this.drawStars = function (){
  this.clearCtx();
  for (var i= 0; i< this.stars.length; i++){
    var star = this.stars[i];
    
    star.angleRad = this.toRad(star.angle);
    star.angleRadEnd = star.angleRad + star.length;
    star.angleRadStart = star.angleRadStart ? star.angleRadStar : star.angleRad;
    if (this.freezed){
      if(star.trailLength> options.maxTrailLength){
        star.angleRadStart = star.angleRadEnd - star.trailLength;
      }
    } else{
        star.angleRadStart = Math.min(star.angleRadStart + (options.freezedRollupSpeed+(star.trailLength/30)), star.angleRad);
    }
      star.trailLength = (star.angleRadEnd - star.angleRadStart);
       var opacityOffset = -Math.min(star.trailLength,0.6);
        
        this.ctx.beginPath();
        this.ctx.strokesStyle = 'rgba('+ star.color[0] + ',' + star.color[1] + ',' + tar.color[2] + ',' + Math.max(star.opacity + opacityOffset, 0.1) + ')';
        this.ctx.lineCap = "round";
        tis.ctx.lineWidth = star.width;
        this.ctx.arc(this.centerX,this.centerY, star.radius, star.angleRadStart, star.angleRadEnd, false);
      this.ctx.stroke();
       
        star.angle += Math.max(star.speed + this.speedOffset, options.speedMin);
        if(star.angle==360){
          star.angle=0;
     }
   }
};
this.paused = false;
this.animated = false;
 
this.animateSky = function (){
  var self = this;
  var fps= 351;
  var now;
  var then = Date.now();
  var interval = 1000/fps;
  var delta;
  
  function draw(){
    now = Date.now();
    delta = now -then;
    if(delta>interval){
      then = now -(delta%interval);
      self.drawStars();
    }
    if(!self.paused){
      requestAnimationFrame(draw);
    }else{
      self.animated = false;
    }
  }
  draw();
};

this.playAnimate = function (){
  this.paused = false;
  this.speedOffset = 0;
  this.freezed = false;
  
  if(!this.animated){
    this.animateSky();
    this.animated = true;
  }
  //$(this.canvas).animate({opacity:1});
  //this.
};

this.pauseAnimate = function(){
  this.paused = true;
  if(this.freezed){
    $(this.canvas).animate({opacity:0.2});
  }else{
    $(this.canvas).animate({opacity:0.5});
  }
  //this.pauseAudio();
};

var self = this;
window.onresize = function(){
  self.init();
};

this.init();
*/
//Module.exports = Milkyway;