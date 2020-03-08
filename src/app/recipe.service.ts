import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

/**
 * Service class to get recipes based on Cuisine and inidividual recipe based on Meal ID
 */
@Injectable({
  providedIn: "root"
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  /**
   * Gets list of Recipes based on Cuisine
   * @param cuisine
   */
  getRecipes(cuisine: string): Observable<any> {
    return this.http.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + cuisine
    );
  }

  /**
   * Gets recipe details based on Meal ID
   * @param idMeal
   */
  getRecipe(idMeal: string): Observable<any> {
    return this.http.get(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal
    );
  }

  /**
   * Utility method to turn Recipes Array into Iterable Recipes Array for creating
   * three rows and multi column layout in RecipesComponent
   * @param recipesList
   */
  createIterableRecipes(recipesList) {
    let iterableRecipes: Array<any> = [];
    for (let i = 0; i < recipesList.length; i += 3) {
      iterableRecipes.push({ items: recipesList.slice(i, i + 3) });
    }
    return iterableRecipes;
  }
}
