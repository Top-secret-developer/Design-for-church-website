

const menuContainer = document.getElementById("nav__menu");

const openMenu = () => {

    if(menuContainer.classList.contains("nav_open")){
        menuContainer.classList.remove("nav_open");
    }else{
        menuContainer.classList.add("nav_open");
    }
}



 var container = document.getElementById('popup')

 function openPopup(){
  container.classList.add('open-popup')
 }

 function closePopup(){
  container.classList.remove('open-popup')
 }