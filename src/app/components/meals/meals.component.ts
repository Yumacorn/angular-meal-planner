import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../Meal';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit{
  meals: Meal[] = [];

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.mealService.getMeals().subscribe((meals) => this.meals = meals);
  }

  deleteMeals(meal: Meal) {
    this.mealService.deleteMeal(meal).subscribe(() => 
      this.meals = this.meals.filter((m) => m.id !== meal.id)
    );
  }

  toggleFavorite(meal: Meal) {
    meal.favorite = !meal.favorite;
    this.mealService.updateMealFavorite(meal).subscribe();
  }

  addMeal(meal: Meal) {
    this.mealService.addMeal(meal).subscribe((meal) => (this.meals.push(meal)));
  }
}
