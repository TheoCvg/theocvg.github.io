//Appliquer le thème sur le bouton d'une section
const nav_items = document.getElementsByClassName('nav-item');

export function apply_listeners(){

    for(let nav_item of nav_items){
        nav_item.addEventListener("click", setAsActiveElement);
    }
}

function setAsActiveElement(event){

    for(let nav_item of nav_items){
        if(nav_item == event.target){
            nav_item.classList.add("nav-active")
        }else{
            nav_item.classList.remove("nav-active")
        }
    }
}
