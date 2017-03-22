$(document).ready(init);
var currentSection= null;
var currrentGameId;
///+++++++++++++++++++++++++++++++++++++++INIT++++++++++++++++++++++++++++++++++++///
function init()
{
    currentSection= $('#welcome');
    $('#btn_initial').click(onClickInitial);
    $('#btn_about_me').click(onClickAboutMe);
    $('#btn_skills').click(onClickSkills);
    $('#btn_project').click(onClickProjects);
    $('#btn_contact_me').click(onClickContactMe);
}
///+++++++++++++++++++++++++++++++++++++++PAGINATION++++++++++++++++++++++++++++++++++++///
function onClickInitial()
{
    goToSection('initial');
}
function onClickAboutMe()
{
    goToSection('about_me');
    TweenMax.to('.visible',2,{right:600});
}
function onClickSkills()
{
    goToSection('skills');
}
function onClickProjects()
{
    goToSection('projects');
}
function onClickContactMe()
{
    goToSection('contact_me');
}
///+++++++++++++++++++++++++++++++++++++++GO SECTIONS++++++++++++++++++++++++++++++++++++///
function goToSection(_id)
{
    currentSection.removeClass('visible');//display show
    var nextSection = $('#'+_id);
    nextSection.addClass('visible'); //display block 
    //TweenMax.from(nextSection, 1.5, {scale: 0.2, opacity: 0, ease: Elastic.easeOut});
    currentSection=nextSection;
    //se le va a plicar a todas las pantallas
}
///+++++++++++++++++++++++++++++++++++++++ADTIONAL FUNCTIONS++++++++++++++++++++++++++++///
   /*$('#projects ul').hover(function(){
        $(this).addClass("hover");
        $('#projects-image').text("holaaaa");
    },function(){
        $(this).removeClass("hover");
        $('#projects-image').text(" ");
    });*/
