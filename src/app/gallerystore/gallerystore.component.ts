import { Component, OnInit,HostListener, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallerystore',
  templateUrl: './gallerystore.component.html',
  styleUrls: ['./gallerystore.component.scss']
})
export class GallerystoreComponent implements OnInit {

  @ViewChild('youtube') myDiv: ElementRef;
  
  galleryImages;
  showLoader =false;
  imageRecords;

  imagesPath='/api/getAllImages';
  youtubePath='/api/getYoutubeURL';
  youtubeRecords: any[];
  sanitizer: any;
  showIframe = false; 

  constructor(private http : HttpClient) {
   }

   ngAfterViewInit() {
    this.loadAssets();
    } 

  ngOnInit() {
  }

  loadAssets() {
    this.showLoader =true;
    this.loadImages(this.imagesPath);
    this.loadYoutubeLinks(this.youtubePath);
  }

   /*scroll to top*/
  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;


  loadImages(apiPath: string){
    let obs = this.http.get(apiPath);
    obs.subscribe((res)=>{
      this.imageRecords = <any[]>res;
      this.showLoader =false;
    }); 
  }
  loadYoutubeLinks(apiPath: string){
    let obs = this.http.get(apiPath);
    obs.subscribe((res)=>{
      debugger;
      this.youtubeRecords = <any[]>res;
      var innerhtml='';
      var record;
      for(var idx in this.youtubeRecords){
        record = this.youtubeRecords[idx];    // this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeRecords[idx].url); 
        innerhtml += '<div class="col-12 col-sm-6 col-md-3">\
                        <div class="single-album-area">\
                            <div class="album-thumb">\
                              <iframe width="560" height="315" src="'+record.url+'" frameborder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
                            </div>\
                            <div class="album-info">\
                                <a href="#">\
                                    <h5>'+record.title+'</h5>\
                                </a>\
                                <p>'+record.about+'</p>\
                            </div>\
                        </div>\
                    </div>';
      }

      
      this.myDiv.nativeElement.innerHTML = innerhtml;

      this.showLoader =false;
      this.showIframe = true; 
    }); 
  }

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
