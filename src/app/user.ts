export class User {

    userId:number | any;
    constructor (fName:string,lName:string, email:string, username:string, passWord:string) {
		this.fName = fName; 
		this.lName = lName;
		this.email = email;
		this.username = username;
        this.passWord = passWord;
	}


    fName:string;
    lName:string;
    email:string;
    username:string;
    passWord:string;
}
