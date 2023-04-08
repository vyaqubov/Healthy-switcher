const open_menu = document.getElementById("open")
const menu = document.getElementById("mobile-menu")
const change = document.getElementsByClassName('menu-mob')[0];

let bool = true;
open_menu.addEventListener("click", () => {
    if(bool){
        bool = !bool;
        menu.style.height = "150px";
    }else if(!bool){
        bool = !bool;
        menu.style.height = "0";
    }

    change.classList.toggle('active');
})