import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.css']
})
export class FormreactiveComponent implements OnInit {

  constructor() { }

  loginForm=new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  })

  loginUser(){
    console.log(this.loginForm);
  }

  ngOnInit() {
  }

}
