import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GallerystoreComponent } from './gallerystore/gallerystore.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component'


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home',
  
  },
  {
    path:'home',
    component: HomepageComponent,
  },
 
  {
    path:'blogs',
    component: BlogsComponent,
  },
  {
    path:'contact',
    component: ContactusComponent ,
  
  },
  {
    path:'gallery',
    component: GallerystoreComponent,
  
  },
  {
    path:'admin',
    component: AdminPanelComponent,
  
  },
  {
    path:'events',
    component: EventsComponent ,
  
  },
  {
    path:'Profile',
    component: ProfileComponent ,
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
