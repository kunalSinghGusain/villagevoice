import { AfterViewInit,Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit{
  // @ViewChild('blogPosts') blogPosts: ElementRef;
  // @ViewChild('images') imagesHandle: ElementRef;
  // @ViewChild('blogSection') blogSection: ElementRef;
  // @ViewChild('gallerySection') gallerySection: ElementRef;

  
  //loader
  showLoader =false;
  
  hideBlogForm =true;
  hideImageForm =true;
  hideYoutubeForm  =true;

  isgalleryShow=true;
  isYoutubeShow = false;
  isBlogShow:boolean;

  imageRecords;
  youtubeRecords;
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

  //youtube api path
  postYoutubePath = '/api/getYoutubeURL';
  getYoutubePath = '/api/insertYoutubeURL';
  deleteYoutubePath = '/api/deleteYoutubeURL';



  constructor(private http : HttpClient) {
    
    this.showLoader =true;
   }
   openGalleryForm(){
    this.closeModal();
    this.hideImageForm = false;
   }
   openBlogForm(){
    this.closeModal();
    this.hideBlogForm = false;
   }
   closeModal(){
     debugger;
    this.hideBlogForm = true;
    this.hideImageForm = true;
    this.hideYoutubeForm  =true;
   }
   openYoutubeForm(){
    this.hideYoutubeForm  =false;
   }



  
  ngOnInit(): void {
    debugger;
    //throw new Error("Method not implemented.");
    this.loadPosts(this.getPostsPath);
    
    this.loadImages(this.getImagesPath);

    this.loadYoutube(this.getYoutubePath);
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

  loadYoutube(apiPath: string){
    let obs = this.http.post(apiPath,{});
    obs.subscribe((res)=>{
      debugger;
      this.youtubeRecords = <any[]>res;
      this.showLoader =false;
    }); 
  }
  
  openTab(tab: string) {
    if (tab === 'gallery'){
      this.isgalleryShow = true
    }else if(tab === 'blog') {
      this.isgalleryShow = false
    }
  }
  deleteImage(e, record){
    this.showLoader =true;
    let obs = this.http.post(this.ImagesDeletePath,record);
    obs.subscribe((res)=>{
      this.imageRecords = <any[]>res;
      this.showLoader =false;
    }); 
  }
  deletePost(e, record){
    this.showLoader =true;
    let obs = this.http.post(this.PostsDeletePath,record);
    obs.subscribe((res)=>{
      debugger;
      this.blogPostRecords = <any[]>res;
      this.showLoader =false;
    }); 
  }
  deleteYoutube(e,record){
    this.showLoader =true;
    let obs = this.http.post(this.deleteYoutubePath,record);
    obs.subscribe((res)=>{
      debugger;
      this.youtubeRecords = <any[]>res;
      this.showLoader =false;
    }); 
  }
}

