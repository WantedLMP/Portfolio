class MenuMobile {
  constructor(menuMobile, listNavbar){
    this.menuMobile = document.querySelector(menuMobile);
    this.listNavbar = document.querySelector(listNavbar);
    this.active = "active";
    this.addActive = this.addActive.bind(this);
  }

  addActive (){
    console.log(this);
    this.listNavbar.classList.toggle(this.active);
    this.menuMobile.classList.toggle(this.active);
  }

  addEventoClick (){
    this.menuMobile.addEventListener("click", this.addActive);
  }

  init(){
    if (this.addEventoClick){
      this.addEventoClick();
    }
    return this;
  }
}

const menuMobile = new MenuMobile(
  ".menu-mobile",
  ".list-navbar"
);
 
menuMobile.init();