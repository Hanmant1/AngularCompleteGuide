import { Injectable } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Ingredient } from "../shared/ingredient.model";
import { Reciepe } from "./reciepe.model";

@Injectable()
export class ReciepeService {
    private reciepes: Reciepe[] = [
        new Reciepe(
            'A Test Reciepe',
            'This is reciepe description',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [new Ingredient('Meat', 20)]
        ),
        new Reciepe(
            'Another Reciepe',
            'This is another reciepe description',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [new Ingredient('Egg', 10)]
        )
    ];

    constructor(private slService:ShoppingListService) {

    }
 

    getReciepes() {
        return this.reciepes.slice();
    }

    getReciepe(index: number) {
        return this.reciepes[index];
      }

    addIngredientToShoppingList(ingredient: Ingredient[]){
        this.slService.addIngredients(ingredient);
    }
}