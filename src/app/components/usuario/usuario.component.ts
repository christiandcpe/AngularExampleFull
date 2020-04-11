import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario'
import { Router, ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario
  usuarios: Array<Usuario>
  color = 'green'
  parametro;
  public user;
  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.usuarios = [
      new Usuario(1,'Diego Antonio', 'Quiroz Ramirez', 26, 'ignquirozramirez@gmail.com', 'mas'),
      new Usuario(2,'Antonio', 'Ramirez', 26, 'aramirez@gmail.com','mas'),
      new Usuario(3,'Diego', 'Quiroz', 26, 'dquiroz@gmail.com','mas'),
      new Usuario(4,'Rubi Esmeralda', 'Mendieta Pisco', 21, 'rubi@gmail.com','fem')
    ]
    console.log(this.usuarios)
    
   }

  ngOnInit() {
    
    this.usuario = new Usuario(1,'Diego Antonio', 'Quiroz Ramirez', 26, 'ignquirozramirez@gmail.com','mas')
    console.log(this.usuario) 

    this._route.params.forEach((params: Params) =>{
      this.parametro = params['id']
      this.user = this.usuarios.find(v => v.id == this.parametro)
      console.log("este es el resultado ",this.user) 
    })

    const tokenSession = sessionStorage.getItem('token')
    const token = (localStorage.getItem('token'))
    if(!tokenSession){
      this._router.navigate(['/'])
    }
   
  }

  detallesUser(id){
    localStorage.setItem('id', id)
    this.user = this.usuarios.find(v => v.id == parseInt(localStorage.getItem('id')))
    console.log("resutado de detalle ", this.user)
    if(this.user){
      console.log("si existe el usuario")
    }
    this._router.navigate(['/usuarios'])
    .then(
      res => {
        console.log("la navegacion fue exitosa")
      },
      err => {
        console.log("la navegacion no fue exitosa => ", err)
      }
    )
  }

  logout = () => {
    sessionStorage.removeItem('token')
    this._router.navigate(['/'])
  }


}
