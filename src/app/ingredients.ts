export class Ingredients {

    ingredientId:number | any;
    constructor (amount:string, ingredientName:string, recipeId:number) {
		this.amount = amount; 
		this.ingredientName = ingredientName;
		this.recipeId = recipeId;
	}


    amount:string;
    ingredientName:string;
    recipeId:number;
    
}
