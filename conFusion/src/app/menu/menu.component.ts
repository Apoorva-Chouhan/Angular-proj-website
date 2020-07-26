import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';    //object structure for 1 dish item in menu
import {DISHES} from '../shared/dishes';  //contains the whole menu




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;    //passed on to template as array of individual dish objects
  selectedDish: Dish;
  
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
