import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BetonskeOgradeComponent } from './betonske-ograde/betonske-ograde.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'ograde',component:BetonskeOgradeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
