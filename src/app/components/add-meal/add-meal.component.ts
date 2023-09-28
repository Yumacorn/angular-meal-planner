import { Component, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Meal } from '../../Meal';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent {
  @Output() onAddMeal: EventEmitter<Meal> = new EventEmitter();
  title: string = '';
  number_cooked: number = 0;
  protein: string = '';
  carb: string = '';
  favorite: boolean = false;
  showAddMeal: boolean = false;
  subcription!: Subscription;

  constructor(private uiService: UiService) {
    this.subcription = this.uiService.onToggle().subscribe((value) => (this.showAddMeal = value));
  }

  onSubmit() {
    if(!this.title) {
      alert('Please add a title of meal!');
      return;
    }

    const newMeal = {
      title: this.title,
      number_cooked: this.number_cooked,
      protein: this.protein,
      carb: this.carb,
      favorite: this.favorite
    }

    this.onAddMeal.emit(newMeal);

    this.title = '';
    this.number_cooked = 0;
    this.protein = '';
    this.carb = '';
    this.favorite = false;
  }
}
