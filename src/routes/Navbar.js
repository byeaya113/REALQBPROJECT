export default class Menu {
    constructor() {
      this.menu = document.getElementsByClassName('menu')[0];
      this.navLinks = document.getElementsByClassName('navLinks')[0];
      
      this.menu.addEventListener('click', () => {
        this.navLinks.classList.toggle('active');
      });
    }
  }
