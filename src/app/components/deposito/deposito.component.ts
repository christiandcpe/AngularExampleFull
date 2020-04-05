import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
/** importamos la clase del servicio  DepositoService */
import { DepositoService } from '../../services/deposito.service'
import { Deposito } from 'src/app/models/Deposito';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  depositos: Array<Deposito>
  deposito: Deposito;
  public edit

  constructor(
    private _route: Router,
    private _serviceDepo: DepositoService
  ) { 

    this.deposito = new Deposito()
    
  }

  /** ngOnInit se ejecuta cuando se carga el componente */
  ngOnInit(): void {
    this.edit = false        
    this.getDepositos()
  }

  goToUsuarioComponet(){
    console.log("Se ejecuto el routeo hacia Usuarios Component");
    this._route.navigate(['/usuarios']);    
  }

  /** METODOS DE HTTP  */
    // GET
     getDepositos(){
      this._serviceDepo.getDepositos().subscribe(
        res => {
          this.depositos = res
          console.log("la respuesta del servicio de depositos es ", res)
        }
      )
    }

    addDeposito(deposito: Deposito){
      console.log("este es lo que se envia: ", deposito)
      const long = deposito.descripcion.length
      if(long > 30){
        alert("El campo descripcion tiene "+long+", debe tener hasta 30 digitos")
        //this.getDepositos()
      }else{
        if(deposito.codigo === NaN){
          alert("El campo codigo debe ser de tipo numerico")
        }else{
          this._serviceDepo.addDeposito(deposito).subscribe(
            res => {         
              this.deposito = new Deposito()
              this.getDepositos()
            },
            err =>{
              alert("El campo codigo debe ser de tipo numerico")
            }
          )
        }
        
      }
      
    }

    getOneDeposito(id){
      this.edit = true
      this._serviceDepo.getOneDeposito(id).subscribe(
        res => {
          this.deposito = res;
          console.log("la respuesta del servicio de un deposito es ", res)
        }
      )
    }

    updateDeposito(deposito: Deposito){
      this._serviceDepo.updateDeposito(deposito).subscribe(
        res => {
          console.log("se actualizo correctamente")
          this.deposito = new Deposito()
          this.edit = false
          this.getDepositos()
        },
        err => {
          console.log("hubo un error")
        }
      )
    }

    deleteDeposito(id){
      this._serviceDepo.deleteDeposito(id).subscribe(
        res => {
          console.log(" se elimino exitosamente ", res)
          this.getDepositos()
        }
      )
    }

  /** ################################ */

  cancelar(){
    this.deposito = new Deposito()
    this.edit=false
  }

  reset(){
    this.deposito = new Deposito()
  }

}
