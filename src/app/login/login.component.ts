import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //properties
  aim="Perfect Banking Partner"  //example for string interpolation
  accno="Account number"              //example for property binding
  acno=""
  pswd="" 
 
  

  


   constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

// //user defined function 

// acnoChange(event:any){        // here any ennu parayunnathu event enna variable nte type aanu
// this.acno=event.target.value
// console.log(this.acno)
// }

// pswdChange(event:any){        // here any ennu parayunnathu event enna variable nte type aanu
//   this.pswd=event.target.value
//   console.log(this.pswd)
//   }
//two way
  
  login()             //example for view to component : HTML le functione ts lekki share cheyyunnathinu 
{
  var acno=this.acno    //variable assign cheyyunnu
  var pswd=this.pswd     
   const result = this.ds.login(acno,pswd)

     if(result){              //check if accno is available in db
     {
       alert("Login Successful")
      this.router.navigateByUrl('dashboard')
      }
      
    }}
  }



//template referencing variable

//   login(a:any,b:any)            // function order same aayirikkanam

// {  console.log(a.value)
//   var acno=a.value 
//   var pswd=b.value    
//    let db=this.db

//      if(acno in db){              
//      if(pswd==db[acno]["password"]){
//        alert("Login Successful")}
//        else{
//         alert("Login Unuccessful")
//        }
//       }
// else{
//   alert("user does not exist")

//    }


//   }
  

// }


// }