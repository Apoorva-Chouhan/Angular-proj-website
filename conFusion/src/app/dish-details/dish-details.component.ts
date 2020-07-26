import { Component, OnInit, Input } from '@angular/core';
import { Dish } from "../shared/dish";




@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {

  @Input()      //input decorator to tell that this parameter comes as input from parent
  dish : Dish;
  constructor() { }

  ngOnInit() {
  }

}
