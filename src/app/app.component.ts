import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  menuBtn = 'string';
  navItem = 'string';


  constructor() { }

  ngOnInit() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuBranding = document.querySelector('.menu-branding');
    const navItem = document.querySelectorAll('.nav-item');

    let showMenu = false;

    menuBtn.addEventListener('click', toggleMenu);
    navItem.forEach(item => item.addEventListener('click', removeNav));


    function toggleMenu() {
      if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));

        showMenu = true ;
      } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));

        showMenu = false ;
      }
    }

    function removeNav() {
      if (showMenu) {
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      menuBranding.classList.remove('show');
      navItem.forEach(item => item.classList.remove('show'));
    }
      showMenu = false;
    }


  }
}
