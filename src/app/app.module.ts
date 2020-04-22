import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BetonskeCesmeComponent } from './betonske-cesme/betonske-cesme.component';
import { GrckiStuboviComponent } from './grcki-stubovi/grcki-stubovi.component';
import { MontazniObjektiComponent } from './montazni-objekti/montazni-objekti.component';
import { BetonskeOgradeComponent } from './betonske-ograde/betonske-ograde.component';
import {MaterialModule} from './material.module'
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BetonskeCesmeComponent,
    GrckiStuboviComponent,
    MontazniObjektiComponent,
    BetonskeOgradeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
