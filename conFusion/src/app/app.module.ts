import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// adding newly downloaded modules for angluar
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import 'hammerjs';

import {DishService} from './services/dish.service';  //importing service
import {PromotionService} from './services/promotion.service';  //importing service
// end of my imports
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

//including below module for app routing
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatToolbarModule,           //i changed the order of imports. 
    FlexLayoutModule,
    MatListModule,
    MatGridListModule, 
    MatCardModule,
    MatButtonModule,
    AppRoutingModule 
  ],
  providers: [
    DishService,      //services are specifies as provider in root module
    PromotionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
