export class Favorites {

    username:string | any;
    constructor (username:string, recipeName:string) {
		this.username = username;
		this.recipeName = recipeName;
	}

    recipeName:string;
}
