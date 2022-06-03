import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  acno=""
  pswd=""

//form group: should be above constructor
registerForm=this.fb.group({ //user input cheyyunna details empty array aayi declare cheyyanam
 acno:'',
 pswd:'',
 uname:''                          
})


 constructor(private ds:DataService,private router:Router,private fromBuilder:Router,private fb:FormBuilder){}

  ngOnInit(): void {
  }

  register(){
    var uname=this.uname
    var acno=this.acno
    var pswd=this.pswd
 let result=this.ds.register(uname,acno,pswd)
if(result){
alert("successfully registered")
}
else{
  alert("already existing customer")
}
}
}
