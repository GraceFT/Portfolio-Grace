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
    nextSection.addClass('visible'); //display block;
    currentSection=nextSection;
    //timeline.append( new TweenLite('#about_me', 5, {_x:"-150", ease:Elastic.easeOut}) );
    //TweenLite.to('#about_me',1.5);
    //TweenLite.to('#about_me',1.5, {x:"-=1",delay:"=1s});
    
    //se le va a plicar a todas las pantallas
}
///+++++++++++++++++++++++++++++++++++++++ADTIONAL FUNCTIONS++++++++++++++++++++++++++++///

