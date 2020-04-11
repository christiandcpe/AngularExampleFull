import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Params } from '@angular/router'
import Swal from 'sweetalert2'
import { LoginService } from '../../services/login/login.service'
import { User } from '../../models/User'
import {Md5} from 'ts-md5/dist/md5'


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
  user: User
  loginStatus: boolean


  public usernameValidated: String
  public passwordValidated: String

  constructor(
    private _router: Router,
    private _loginService: LoginService
  ) { 
    //this.usernameValidated = "ingquirozramirez@gmail.com";
   // this.passwordValidated = "taller.angular.9";
    this.typeText.text = "text"
    this.typeText.password = "password"
    this.diablePass = false
    this.loginStatus = true
  
  }

  login = () => {
    /*this.username == this.usernameValidated && this.password == this.passwordValidated 
    ? 
    this._router.navigate(['/usuarios']) : Swal.fire('Oops...', 'Campos incompletos', 'error')*/
    if(this.username && this.password){
      const md5 = new Md5()
      const passwordHash = (md5.appendStr(this.password.toString()).end()).toString()
      this.user = new User(this.username, passwordHash)
      const token = "ABC123#"
      this._loginService.sendData(this.user).subscribe(
        res => {
          if(res.codRes == "00"){
            sessionStorage.setItem('token', token)
            localStorage.setItem('token', token)
            this.username = ''
            this.password = ''
            this._router.navigate(['/usuarios']) 
            Swal.fire('Great', `${res.msm}`, 'success')
          }else{
            Swal.fire('Opps', `${res.msm}`, 'error')
          }
          
        },
        err => {
          console.log(err)
        }
      )
      
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

  registrame = () => {
    this.loginStatus = false
  }

  regisrar = () => {
    this.user = new User(this.username, this.password)
    this._loginService.createData(this.user)
    .subscribe(
      res => {
        if(res.codRes == "00"){
          this.loginStatus = true
          this.username = ''
          this.password = ''
          Swal.fire('Great', `${res.msm}`, 'success')
        }else{
          this.username = ''
          this.password = ''
          Swal.fire('Opps', `${res.msm}`, 'error')
        }
        
      },
      err => {
        console.log(err)
      }
    )
  }

  

  ngOnInit(): void {    
    const tokenSession = sessionStorage.getItem('token')
    const token = localStorage.getItem('token')
    if(tokenSession){
      this._router.navigate(['/usuarios'])
    }
  }

}
