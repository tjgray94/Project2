export class Favorites {

    userId:number | any;
    constructor (userId:number, recipeId:number) {
		this.userId = userId;
		this.recipeId = recipeId;
	}

    recipeId:number;
}
