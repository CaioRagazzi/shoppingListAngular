import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../service/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputReference: ElementRef;
  @ViewChild('amountInput') amountInputReference: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputReference.nativeElement.value;
    const ingAmount = this.amountInputReference.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);

    this.shoppingListService.addIngredient(newIngredient);
  }

}
