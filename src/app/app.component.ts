import { Component } from '@angular/core';
import { DepositoService } from './services/deposito.service'
import { Deposito } from './models/Deposito'
import { Router, ActivatedRoute, Params } from '@angular/router'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /** variable */
  title = 'Taller v2'; 
  promesa = 'Promesa 1'
  mi_nombre = 'Diego Quiroz Ramirez'
  slogan = 'PROYECTOS UNFV'
  edad: Number
  /** fin de variables */
  names: any
  public msg = 'ALERTA, CODIGO ROJO'
  /** propiedades */
  private age: Number
  /** fin de propiedades */
  nombres: Array<any> = ['diego','rubi','quiroz', 'mendieta']
  deposito : Array<Deposito>


  constructor(
    private _serviceDeposito: DepositoService,
    private _router: Router  
  ){ /** inicializar el valor de las propiedad */
    console.log(this.title)
    this.age = 26
    this.edad = this.age
   // this.alerta(this.msg)
 
  }

  alerta(msg){
    //msg = 'ALERTA, CODIGO ALTERADO'
    alert('Este es el mensaje desde el constructor: ' + msg)
  }

  cambiarNombre(nombre){
    this.alerta(nombre)
  }



  ngOnInit(){    /** es el primer metodo que se ejecuta dentro del componente */
    /** diferencia entre VAR y LET */
    /** PARA EL VAR => GLOBAL PARA EL LET => LOCAL/BLOQUE */
    var colegio = 'Santa Rosa'
    console.log('Antes de entrar al IF ' + colegio)
    if(colegio === 'Santa Rosa'){
      let colegio = 'Miguel Grau' 
      console.log('Dentro del IF ' + colegio)
    }
    console.log('Fuera del IF ' + colegio)
    this._serviceDeposito.getDepositos().subscribe(
      res => {
        if( res.ok ){
          alert("usted si puede ver los depositos")
        }
        console.log("esta es la respuesta del servicio de depositos ", res)
        this.deposito = res
      },
      err => {
       if(err.status == "401"){
         alert("Usted no tiene permisos para ver los depositos")
       }
      }
    )

  
  }

 

}
