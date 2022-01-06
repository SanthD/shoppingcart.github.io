import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators }  from '@angular/forms';
import { AuthenticationService} from'../../services/authentication.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  httpError:any;
  isError:boolean=false;
  disabledForm:any ={
    disabled:true,
    class:"bg-dark"
  };
  constructor(private fb:FormBuilder,private authService:AuthenticationService, private router:Router) { }
  loginForm = this.fb.group({
    email:['',[ Validators.required,Validators.minLength(4)]],
    password:['',[ Validators.required,Validators.minLength(4),Validators.maxLength(8)]]
  });

  get email(){ return this.loginForm.get('email');}

  get password(){ return this.loginForm.get('password');}

  // Login User

  
  loginUser(){
    this.authService.loginUser(this.loginForm.value)
            .subscribe(
              res=>{
                console.log(res),
                console.log(res.data)
                 localStorage.setItem('token', res.data._id),
                 localStorage.setItem('user',res.data.firstName)
                this.router.navigate(['/dashboard'])
                },
              err =>{
                this.isError=true;
                console.log(err),
                console.log(err.error.message)
                  this.httpError=err.error.message
                  alert(this.httpError)
              }
            )
  }

  ngOnInit() {
  }

}
