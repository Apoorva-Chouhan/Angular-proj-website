import { Component, OnInit, Input } from '@angular/core';
import { Dish } from "../shared/dish";
import { Params, ActivatedRoute } from "@angular/router";
import {Location} from "@angular/common";
import {DishService} from "../services/dish.service";




@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {

  dish : Dish;
  constructor(
    private dishService : DishService, 
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];  //this provides the dish id required, which can be accessed using dishsevice
    // console.log(this.route.snapshot);
    this.dish = this.dishService.getDish(id);
  }

  goBack() : void {
    this.location.back();
  }

}
