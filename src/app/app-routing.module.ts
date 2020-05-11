import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GrckiStuboviComponent } from './grcki-stubovi/grcki-stubovi.component';
import { BetonskeOgradeComponent } from './betonske-ograde/betonske-ograde.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'ograde',component:BetonskeOgradeComponent},
  {path:'stubovi',component:GrckiStuboviComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
