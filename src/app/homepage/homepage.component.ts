import { Component, OnInit,HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: false,
    autoplay : true,
    autoWidth: true
  }
  slidesimage : OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 4,
    nav: true,
    autoplay : true,
    autoWidth: true
  }
  constructor() { }

  ngOnInit() {
  }
  /*scroll to top*/
showScroll: boolean;
showScrollHeight = 300;
hideScrollHeight = 10;

@HostListener('window:scroll', [])
    onWindowScroll() 
    {
      if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) 
      {
        this.showScroll = true;
      } 
      else if ( this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) 
      { 
        this.showScroll = false; 
      }
    }

    scrollToTop() 
    { 
      (function smoothscroll() 
      { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
        if (currentScroll > 0) 
        {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 5));
        }
      })();
    }
/*scroll to top*/

}
