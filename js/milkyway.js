//parecido pero no es responsive
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