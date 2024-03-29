import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishDetailsComponent } from '../dish-details/dish-details.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes : Routes = [
    {path: 'home', component: HomeComponent}, 
    {path: 'menu', component: MenuComponent},
    {path: 'dishdetails/:id', component: DishDetailsComponent},
    {path: 'contactus', component: ContactComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'} 
]