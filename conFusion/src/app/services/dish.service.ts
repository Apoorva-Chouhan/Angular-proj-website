import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import {DISHES} from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes() : Dish[] {
    return DISHES;
  }

  getDish(id: string) : Dish{     // to get a perticular dish from dishes
    return DISHES.filter((dish)=>(dish.id===id))[0];
  }

  getFeaturedDish() : Dish {    //to get dish which is set as featured=true
    return DISHES.filter((dish)=>dish.featured)[0];
  }
}


/*
filter() function filters out an array, by passing each value in the boolesn test function being passed on to 
filter function as parameter, and it it returns true, puts the value in the Resultant array 
being returned. If no value passes the filter, it returns an empty array. 
*/
