import { Component, OnInit ,HostListener} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

//loader
showLoader =false;

imageRecords;
blogPostRecords;

//Posts
getPostsPath='/api/getPosts';
postPostsPath='/api/insertPost';
PostsEditPath='/api/editPost';
PostsDeletePath='/api/deletePost';

//images
getImagesPath='/api/getAllImages';
postImagesPath='/api/uploadImage';
ImagesDeletePath='/api/deleteImage';

/*scroll to top*/
showScroll: boolean;
showScrollHeight = 300;
hideScrollHeight = 10;


constructor(private http : HttpClient) {
  this.showLoader =true;
 }

 ngOnInit(): void {
  debugger;
  //throw new Error("Method not implemented.");
  this.loadPosts(this.getPostsPath);
  
  this.loadImages(this.getImagesPath);
}

loadPosts(apiPath: string){
  let obs = this.http.get(apiPath);
  obs.subscribe((res)=>{
    debugger;
    this.blogPostRecords = <any[]>res;
    this.showLoader =false;
  }); 
}

loadImages(apiPath: string){
  let obs = this.http.get(apiPath);
  obs.subscribe((res)=>{
    debugger;
    this.imageRecords = <any[]>res;
    this.showLoader =false;
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
