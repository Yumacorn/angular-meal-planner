import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Meal } from '../Meal';
import { MEALS } from '../mock-meals';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = `http://localhost:5000/meals`

  constructor(private http:HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.apiUrl);
  }

  deleteMeal(meal: Meal): Observable<Meal> {
    const url = `${this.apiUrl}/${meal.id}`;
    return this.http.delete<Meal>(url);
  }

  updateMealFavorite(meal: Meal): Observable<Meal> {
    const url = `${this.apiUrl}/${meal.id}`;
    return this.http.put<Meal>(url, meal, httpOptions);
  }

  addMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(this.apiUrl, meal, httpOptions);
  }
}
