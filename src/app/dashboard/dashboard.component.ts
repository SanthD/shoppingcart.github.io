import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any
  constructor(private route:Router) { 
    this.user= localStorage.getItem('user')
  }

  ngOnInit() {
  }

    logoutUser(){
        localStorage.removeItem('token'),
        localStorage.removeItem('user'),
        this.route.navigate(['/login'])
    }
}
