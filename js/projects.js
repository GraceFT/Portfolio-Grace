$(document).ready(init);

function init(){
    var proj= $('#projects li');
   $.each(proj,function(){
       $(this).click(onClickProject);
       
    }); 
}
function onClickProject(){
    alert("holaaa");
    
    
} 
/*
function project(_name,_image,_message){
this.name= _name; 
this.imageURL= _image;
this.lastmessage= _lastmessage; 
}

var info=[
 //   
    new project1("User Testing ",'../images/User2.png'),
    new project2("Lyft",'../images/lyft2.png'),
];
function initChatList(){
    var listChats = document.getElementById(".projects");
    for(var i in info){
        var htmlChatList = '<li><div class="avatar">'+
		  '<img src="'+ dataListChats[i].imageURL+'" alt="" class="wh-44">'+
		      '<h4 class="w-contact-name">'+dataListChats[i].name +'</h4>' +
		          '<p class="w-last-message" id="mensaje">'+dataListChats[i].lastmessage+'</p>'+
		  '</div>'+
        '<div class="time" id="hora">'+dataListChats[i].timelastmessage+'</div></li>';
        dataListChats[i].deleteMessage();
        listChats.innerHTML+=htmlChatList;
    }
    setEventsListChats();
}
function init(){
    $("#pro_1").click(onClick1);
    $("#pro_2").click(onClick2);
    $("#pro_3").click(onClick3);
    $("#pro_4").click(onClick4);
}
function onClick1(){
    clickProject('pr1');
}
function onClick2(){
    clickProject('pr2');
}
function onClick3(){
    clickProject('pr3');
}
function onClick4(){
    clickProject('pr4');
}

function clickProject(_id){
    currentSection.removeClass('display');//display show
    var nextSection = $('#'+_id);
    nextSection.addClass('display');
    currentSection=nextSection;
}
function goToSection(_id)
{
    currentSection.removeClass('visible');//display show
    var nextSection = $('#'+_id);
    nextSection.addClass('visible'); //display block 
    //TweenMax.from(nextSection, 1.5, {scale: 0.2, opacity: 0, ease: Elastic.easeOut});
    currentSection=nextSection;
    //se le va a plicar a todas las pantallas
}*/