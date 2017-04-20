$(document).ready(init);
function init(){
    $("#name_user").on("keyup",validateName);
    $("#email").on("keyup",validateEmail);
    $('#btn_send').on("click",validateForm);
}
//********************************validate form*******************************************//
function validateForm(){
    validateName();
    validateEmail();
    if (validateName() && validateEmail()){
        var next= $("#btn_send");
        var valiName = $("#name");
        var valiMail = $("#email");
        localStorage.setItem("nameUser",valiName.val());
        localStorage.setItem("emailUser",valiMail.val());
    }
}
//********************************CCapitalize*******************************************//
function CapitaliseFirstLetter(_id) {
        var txt = _id.val().toLowerCase();
        _id.val(txt.replace(/^(.)|\s(.)/g, function($upperCase) {
        return $upperCase.toUpperCase(); }));
}
//********************************Validate name*******************************************//
function validateName(){
   var valName = $('#name_user');
    var isName= false;
    if(valName.val().length!=0 && valName.val().match(/^[a-zA-Z\s]*$/)){
        //CapitaliseFirstLetter(valiName);
        $("#avisename").html('<span style="color:#fff; font-size:11px; font-style:italic;">Validate Name</span>');
        isName=true; 
    }else{
        $("#avisename").html('<span style="color:blue; font-size:11px; font-style:italic;">Complete with your name</span>');
        isName=false; 
    }
    return isName;
}
//********************************Validate Email*******************************************//
function validateEmail(){
    var valiMail = $("#email");
    var isEmail= false;
    if(valiMail.val().length!=0 && valiMail.val().length<50 && valiMail.val().match(/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/)){
        $("#avisemail").html('<span style="color:#fff; font-size:11px; font-style:italic;">Validate Email</span>');
        isEmail=true; 
    }else{
        $("#avisemail").html('<span style="color:blue; font-size:11px; font-style:italic;">Complete with your email</span>');
        isEmail=false;
    }
    return isEmail;
}
