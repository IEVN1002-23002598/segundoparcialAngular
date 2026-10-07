import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IAlumnos } from '../alumnos';  

@Component({
  imports: [FormsModule,ReactiveFormsModule],
  selector: 'app-lista-alumnos',
  styleUrl: './lista-alumnos.css',
  templateUrl: './lista-alumnos.html',
})
export class ListaAlumnos implements OnInit{
  formulario!:FormGroup

  alumnos:IAlumnos[]=[]
  nuevoAlumno:IAlumnos={
    matricula:'',
    nombre:'',
    correo:'',
    materia:''
  }
  ngOnInit(): void {
    this.cargarAlumno()
    this.formulario=new FormGroup({
      matricula: new FormControl(''),
      nombre: new FormControl(''),
      correo: new FormControl(''),
      materia: new FormControl(''),
    })
  }

  cargarAlumno():void{

  }

}
