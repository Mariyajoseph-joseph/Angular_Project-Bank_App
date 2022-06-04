import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
   
  acno:[''],
 pswd:[''],
 uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]] //* means more than one alphabets and numbers kodukkaam 
                        
})


 constructor(private ds:DataService,private router:Router,private fromBuilder:Router,private fb:FormBuilder){}

  ngOnInit(): void {
  }

  register(){
  
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd

if(this,this.registerForm.get("uname")?.errors)   {
  alert("invalid username")
} 

if(this.registerForm.valid){
  const result=this.ds.register(uname,acno,pswd)

  if(result){
 alert("successfully registered")
 this.router.navigateByUrl("")
 }
 else{
   alert("already existing customer.Please login")
   this.router.navigateByUrl("")
 }
 
}
else{
  alert("invalid credentials")
}
}
}
