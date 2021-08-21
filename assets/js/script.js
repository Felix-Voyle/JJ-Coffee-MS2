//burger icon animation and dropdown menu
function burgerDropMenu() {
  var burger = document.getElementById('burger-menu');
  var links = document.getElementById("navLinks");
  burger.classList.toggle('opened');
  burger.setAttribute('aria-expanded', burger.classList.contains('opened'));
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

//toggles basket info
function basketShow(){
  var basketContainer = document.getElementById('basket-info-container');
  var basketInfo = document.getElementById('basket-info');

    basketContainer.classList.toggle('basket-show');
    basketInfo.classList.toggle('basket-info-show');
    
  }  

//alternates between menus
function alternateMenu() {
  $('.secondary-menu').hide();
  $('.primary-menu-btn, .secondary-menu-btn').click(function(){
      $('.primary-menu-btn, .secondary-menu-btn').removeClass('btn-active');
      $(this).addClass('btn-active');
  });
  $('.secondary-menu-btn').click(function(){
      $('.secondary-menu').show();
      $('.primary-menu').hide();
  });
  $('.primary-menu-btn').click(function(){
      $('.primary-menu').show();
      $('.secondary-menu').hide();
  });

}

$(document).ready(function(){ 
alternateMenu();
});