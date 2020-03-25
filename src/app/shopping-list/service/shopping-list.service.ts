import { Ingredient } from 'src/app/shared/ingredients.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('asdasd', 2),
    ];

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients());
    }
}