import { Component, OnInit,HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router,@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  gotoPage()
  {
    this.route.navigate(['album']);
  }
  public isMenuCollapsed = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      document.getElementById('header-fixed').classList.add('header-fixed');
      // document.getElementById('paragraph').classList.add('green');
    }
    else{
      document.getElementById('header-fixed').classList.remove('header-fixed');
    }
  }
  name = 'Angular';


}
