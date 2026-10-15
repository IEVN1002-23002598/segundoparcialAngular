import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ICinepolis } from '../cine';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis implements OnInit {
  formulario!: FormGroup;

  clientes: ICinepolis[] = [];
  nuevoCliente: ICinepolis = {
    nombre: '',
    compradores: '',
    tarjeta: '',
    boletos: '',
    valorPagar: '' // <- Aquí faltaba para cumplir con ICinepolis
  };

  compradores: number = 0;
  boletos: number = 0;
  tarjeta: string = '';
  maxBoletitos: number = 0;
  precio: number = 12;
  total: number = 0;
  mensaje: string = '';

  ngOnInit(): void {
    const datos = localStorage.getItem('clientes');
    if (datos) {
      this.clientes = JSON.parse(datos);
    }

    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(''),
      tarjeta: new FormControl(''),
      boletos: new FormControl(''),
      valorPagar: new FormControl('')
    });
  }

  procesar(): void {
    this.compradores = parseInt(this.formulario.value.compradores) || 0;
    this.boletos = parseInt(this.formulario.value.boletos) || 0;
    this.tarjeta = this.formulario.value.tarjeta;

    this.maxBoletitos = this.compradores * 7;

    if (this.boletos > this.maxBoletitos) {
      this.mensaje = 'No se pueden comprar más de 7 boletos por persona';
      this.formulario.controls['valorPagar'].setValue('');
    } else {
      this.mensaje = '';
      this.total = this.boletos * this.precio;

      if (this.boletos > 5) {
        this.total = this.total - (this.total * 0.15);
      } else if (this.boletos >= 3) {
        this.total = this.total - (this.total * 0.10);
      }

      if (this.tarjeta === 'si') {
        this.total = this.total - (this.total * 0.10);
      }

      this.formulario.controls['valorPagar'].setValue('$' + this.total);

      this.nuevoCliente.nombre = this.formulario.value.nombre;
      this.nuevoCliente.compradores = this.formulario.value.compradores;
      this.nuevoCliente.tarjeta = this.formulario.value.tarjeta;
      this.nuevoCliente.boletos = this.formulario.value.boletos;
      this.nuevoCliente.valorPagar = '$' + this.total;

      this.clientes.push({ ...this.nuevoCliente });
      localStorage.setItem('clientes', JSON.stringify(this.clientes));
    }
  }
}