$(document).ready(init);
function init(){
    $("#name").on("keyup",validateName);
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
   var valiname = $('#name');
    var isName= false;
    if(valiName.val().length!=0 && valiName.val().length<30 && valiName.val().match(/^[a-zA-Z\s]*$/)){
        CapitaliseFirstLetter(valiName);
        $("#avise").html('<span style="color:green; font-size:11px; font-style:italic;">Validate Name and Lastname</span>');
        isName=true; 
    }else{
        $("#avise").html('<span style="color:#ff0; font-size:11px; font-style:italic;">Complete with your name and lastname</span>');
        isName=false; 
    }
    return isName;
}
//********************************Validate Email*******************************************//
function validateEmail(){
    var valiMail = $("#email");
    var isEmail= false;
    if(valiMail.val().length!=0 && valiMail.val().length<50 && valiMail.val().match(/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/)){
        $("#avisemail").html('<span style="color:green; font-size:11px; font-style:italic;">Validate Email</span>');
        isEmail=true; 
    }else{
        $("#avisemail").html('<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your email</span>');
        isEmail=false;
    }
    return isEmail;
}
