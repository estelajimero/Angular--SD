import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validator, NG_VALIDATORS } from '@angular/forms';
import { Usuario } from './../usuario';

@Component({
  selector: 'app-sin-material',
  templateUrl: './sin-material.component.html',
  styleUrls: ['./sin-material.component.css']
})


export class SinMaterialComponent implements OnInit {

  accion          : String = 'registrar'
  posicion        : any    = 0

  listaUsuarios   : Array<Usuario> = [] 

  usuario : Usuario = {
    nombre          : '',
    apellidos       : '',
    edad            : '',
    dni             : '',
    cumpleanos      : new Date(),
    colorFavorito   : '',
    sexo            : ''
  }

  constructor() { }

  // Métodos
  registroUsuario(form: NgForm) {
     if(this.accion === 'registrar'){
            let fecha   = new Date(this.usuario.cumpleanos) 
            let dia     = fecha.getUTCDay()
            let mes     = fecha.getUTCMonth()
            let anio    = fecha.getUTCFullYear()

            this.listaUsuarios.push(this.usuario)
      
            this.usuario = {
              nombre        : '',
              apellidos     : '',
              edad          : '',
              dni           : '',
              cumpleanos    : new Date(),
              colorFavorito : '',
              sexo          : ''
            }

            this.usuario.cumpleanos = `${dia}/${mes}/${anio}`

          } else {
            this.listaUsuarios[this.posicion] = this.usuario
            this.accion = 'registrar'
          }

          form.resetForm()
          
        }  borrarUsuario(posicionBorrar : number) : void {
              this.listaUsuarios.splice(posicionBorrar, 1)
        }
      
        actualizarUsuario(posicionActualizar : number) : void {
          this.usuario = this.listaUsuarios[posicionActualizar];
          this.accion = 'actualizar'
          this.posicion = posicionActualizar
        }
      
        ngOnInit(): void {
        }

    }
