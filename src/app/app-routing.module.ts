import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  {path:'search',component:SearchComponent},
  {path:'',redirectTo:'index',pathMatch: 'full'},
  {path:'index',component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log("hello")
  }
}
