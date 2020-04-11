import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Params } from '@angular/router'
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : String
  password: String
  typeText = {
    text: "",
    password: ""
  }
  diablePass : boolean


  public usernameValidated: String
  public passwordValidated: String

  constructor(
    private _router: Router,
  ) { 
    this.usernameValidated = "ingquirozramirez@gmail.com";
    this.passwordValidated = "taller.angular.9";
    this.typeText.text = "text"
    this.typeText.password = "password"
    this.diablePass = false
  
  }

  login = () => {
    /*this.username == this.usernameValidated && this.password == this.passwordValidated 
    ? 
    this._router.navigate(['/usuarios']) : Swal.fire('Oops...', 'Campos incompletos', 'error')*/
    if(this.username == this.usernameValidated && this.password == this.passwordValidated){
      const token = "ABC123#"
      sessionStorage.setItem('token', token)
      localStorage.setItem('token', token)
      this._router.navigate(['/usuarios']) 
    }else{
      Swal.fire('Oops...', 'Campos incompletos', 'error')
    }
  }

  changePass = (v) => {

    this.diablePass = !v
    this.verPassword(this.diablePass)
  }

  verPassword = (k) => {
    //k = true
    if(k){
      this.typeText.password = "text"
    }else{     
      this.typeText.password = "password"
    }
    
  }

  

  ngOnInit(): void {    
    const tokenSession = sessionStorage.getItem('token')
    const token = localStorage.getItem('token')
    if(tokenSession){
      this._router.navigate(['/usuarios'])
    }
  }

}
