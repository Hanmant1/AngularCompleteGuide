import { Ingredient } from "../shared/ingredient.model";

export class Reciepe {
    public name: string;
    public desc: string;
    public imagePath: string;
    public ingredient: Ingredient[]

    constructor(name: string, desc: string, imagePath: string,ingredient: Ingredient[]){
        this.name = name;
        this.desc = desc;
        this.imagePath = imagePath;
        this.ingredient = ingredient;
    }
}