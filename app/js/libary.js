console.log("Hello ich bin eine andere datei");
//$('input.cb-value').prop("checked", true);
let buttonContentSouvenir=document.querySelector(".wrapperButtons");
let buttonSubmit=document.querySelector(".button--submit");
$('.cb-value').click(function() {
  var mainParent = $(this).parent('.toggle-btn');
  if($(mainParent).find('input.cb-value').is(':checked')) {
    $(mainParent).addClass('active');
    buttonContentSouvenir.style.display="none";
    buttonSubmit.style.display="block";

  } else {
    $(mainParent).removeClass('active');
    buttonContentSouvenir.style.display="block";
    buttonSubmit.style.display="none";
  }

})

var div = document.querySelector(".form--souvenir");
var headerImgBox =document.querySelector(".header__img");
var headerMain =document.querySelector(".header__main");

document.addEventListener("scroll",function(){

  var rect = div.getBoundingClientRect();
  y = rect.top;
  if(y>0){
    console.log(y);
    headerImgBox.style.height=y+"px";
    headerMain.style.backgroundColor="transparent";
    if(y<50){
      headerMain.style.backgroundColor="#EDE7F2";
    }
  }
  
  
})


