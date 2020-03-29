import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

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
