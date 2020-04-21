import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GrckiStuboviComponent } from './grcki-stubovi/grcki-stubovi.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'stubovi',component:GrckiStuboviComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
