import { Component, OnInit } from '@angular/core';
import { DepositoService } from '../../services/deposito.service'
import { Deposito } from 'src/app/models/Deposito';
import { Router } from '@angular/router'

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  tiles = []

  depositos: Array<Deposito>
  deposito: Deposito;
  likes;
  public edit

  constructor(
    private _route: Router,
    private _serviceDepo: DepositoService
  ) { 

    this.deposito = new Deposito()
    
  }



  ngOnInit(): void {
    this.tiles.push({
      color: "red",
      cols: 3,
      rows: 4,
      text: "diego"
    },{
      color: "blue",
      cols: 1,
      rows: 2,
      text: "diego"
    },{
      color: "blue",
      cols: 1,
      rows: 2,
      text: "diego"
    })
    this.edit = false        
    this.getDepositos()
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

  likeDeposito(deposito: Deposito){
    console.log("antes de sumar un like ", deposito)
    deposito.likes = deposito.likes +1 
    this._serviceDepo.likeDeposito(deposito).subscribe(
      res=>{
        this.getDepositos()
      }
    )
    console.log("sumando un like", deposito)

  }
}
