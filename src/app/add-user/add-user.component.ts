import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private usersservice:UsersService) { }

  user : User =new User('','','','','');
  submitted = false;

  ngOnInit(): void {
    this.submitted=false;
  }

  usersaveform=new FormGroup({
    userId:new FormControl('' ,[Validators.required, Validators.minLength(5) ]),
    fName:new FormControl('' ,[Validators.required, Validators.minLength(50) ]),
    lName:new FormControl('' ,[Validators.required, Validators.minLength(50) ]),
    email:new FormControl('' ,[Validators.required, Validators.minLength(50) ]),
    username:new FormControl('' ,[Validators.required, Validators.minLength(50) ]),
    passWord:new FormControl('' ,[Validators.required, Validators.minLength(50) ])
  });

 
  save(){
    this.usersservice.createUser(this.user)
    .subscribe((data) => {console.log(data);
    this.user = new User(data.fName, data.lName, data.email, data.username, data.passWord), (error: any) => console.log(error)});
  
  }
}
