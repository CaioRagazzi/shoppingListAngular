import { Ingredient } from 'src/app/shared/ingredients.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    ingredients: Ingredient[] = [];

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.getIngredients());
    }

    addIngredients(ingredient: Ingredient[]) {
        this.ingredients.push(...ingredient);
        this.ingredientsChanged.next(this.getIngredients());
    }
}