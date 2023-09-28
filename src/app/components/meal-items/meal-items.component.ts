import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../../Meal';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-meal-items',
  templateUrl: './meal-items.component.html',
  styleUrls: ['./meal-items.component.css']
})
export class MealItemsComponent {
  @Input() meal!: Meal;
  @Output() onDeleteMeal: EventEmitter<Meal> = new EventEmitter();
  @Output() onToggleFavorite: EventEmitter<Meal> = new EventEmitter();

  faTimes = faTimes;

  constructor() {
  }

  onDelete(meal: Meal) {
    this.onDeleteMeal.emit(meal);
  }

  onToggle(meal: Meal) {
    this.onToggleFavorite.emit(meal);
  }
}
