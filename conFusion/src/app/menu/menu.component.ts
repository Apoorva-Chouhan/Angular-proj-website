import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';    //object structure for 1 dish item in menu
// import {DISHES} from '../shared/dishes';  //contains the whole menu, not the ideal way to tie data 
//in the component, rather make a service fetch the data for you. 
import {DishService} from '../services/dish.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];    //passed on to template as array of individual dish objects
  selectedDish: Dish;
  
  
  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dishFromTemp: Dish) {
    this.selectedDish = dishFromTemp;
  }

}
