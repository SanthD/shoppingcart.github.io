import { Component, OnInit } from '@angular/core';
import { FormBuilder }  from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService} from'../../services/authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb:FormBuilder,
    private authService:AuthenticationService,
    private router:Router
    ) { }

  ngOnInit() {
    console.log(this.registationForm.value)
  }

  registationForm = this.fb.group({
    firstName:[''],
    lastName:[''],
    email:[''],
    phone:[''],
    password:[''],
    address:this.fb.group({
      street:[''],
      city:[''],
      state:[''],
      zipcode:[''],
    })
  });

  registationUser(){
    this.authService.registerUser(this.registationForm.value)
              .subscribe(
                res =>{
                  console.log(res),
                  this.router.navigate(['/login'])
                } ,
                err => console.log(err)
              )
  }

}
