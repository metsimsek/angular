import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  constructor(private dishService: DishService) { }

  dishes: Dish[];
  selectedDish: Dish;
  
  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
