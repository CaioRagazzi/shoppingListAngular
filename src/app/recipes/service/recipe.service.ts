import { Recipe } from '../recipes.model';
import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            1,
            'A Test Recipe',
            'This is simple a test',
            'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg',
            [
                new Ingredient('Tomato', 1),
                new Ingredient('Meat', 2),
            ]),
        new Recipe(
            2,
            'A Second Recipe',
            'This is another test',
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/slow-cooker-recipes-1574787490.jpg?crop=0.753xw:1.00xh;0.224xw,0&resize=640:*',
            [
                new Ingredient('Potato', 2),
                new Ingredient('French Fries', 5),
            ]),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}