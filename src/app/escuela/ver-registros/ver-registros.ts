import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ICinepolis } from '../cine';

@Component({
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  selector: 'app-ver-registros',
  styleUrl: './ver-registros.css',
  templateUrl: './ver-registros.html',
})
export class VerRegistros implements OnInit {
  formulario!: FormGroup;
  indiceEdicion: number = -1;
  clientes: ICinepolis[] = [];

  nuevoCliente: ICinepolis = {
    nombre: '',
    compradores: '',
    tarjeta: '',
    boletos: '',
    valorPagar: ''
  };

  precio: number = 12;

  ngOnInit(): void {
    this.cargarClientes();
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(''),
      tarjeta: new FormControl(''),
      boletos: new FormControl('')
    });
  }

  calcularTotal(boletosNum: number, tieneTarjeta: string): string {
    let total = boletosNum * this.precio;

    if (boletosNum > 5) {
      total = total - (total * 0.15);
    } else if (boletosNum >= 3) {
      total = total - (total * 0.10);
    }

    if (tieneTarjeta === 'si') {
      total = total - (total * 0.10);
    }

    return '$' + total;
  }

  agregarCliente(): void {
    if (
      this.nuevoCliente.nombre === '' ||
      this.nuevoCliente.compradores === '' ||
      this.nuevoCliente.boletos === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const cantBoletos = parseInt(this.nuevoCliente.boletos) || 0;
    const cantCompradores = parseInt(this.nuevoCliente.compradores) || 0;

    if (cantBoletos > cantCompradores * 7) {
      alert('No se pueden comprar más de 7 boletos por persona');
      return;
    }

    this.nuevoCliente.valorPagar = this.calcularTotal(cantBoletos, this.nuevoCliente.tarjeta);

    if (this.indiceEdicion !== -1) {
      this.clientes[this.indiceEdicion] = { ...this.nuevoCliente };
    } else {
      this.clientes.push({ ...this.nuevoCliente });
    }

    localStorage.setItem('clientes', JSON.stringify(this.clientes));
    this.limpiarCampos();
  }

  muestraClientes(): void {
    this.nuevoCliente.nombre = this.formulario.value.nombre;
    this.nuevoCliente.compradores = this.formulario.value.compradores;
    this.nuevoCliente.tarjeta = this.formulario.value.tarjeta;
    this.nuevoCliente.boletos = this.formulario.value.boletos;
    this.agregarCliente();
  }

  cargarClientes(): void {
    const datos = localStorage.getItem('clientes');
    if (datos) {
      this.clientes = JSON.parse(datos);
    }
  }

  editarClientes(index: number): void {
    this.nuevoCliente = { ...this.clientes[index] };
    const cliente = this.clientes[index];
    this.formulario.patchValue({
      nombre: cliente.nombre,
      compradores: cliente.compradores,
      tarjeta: cliente.tarjeta,
      boletos: cliente.boletos
    });
    this.indiceEdicion = index;
  }

  eliminarCliente(index: number): void {
    this.clientes.splice(index, 1);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

  limpiarCampos(): void {
    this.nuevoCliente = {
      nombre: '',
      compradores: '',
      tarjeta: 'no',
      boletos: '',
      valorPagar: ''
    };
    this.formulario.patchValue({
      nombre: this.nuevoCliente.nombre,
      compradores: this.nuevoCliente.compradores,
      tarjeta: this.nuevoCliente.tarjeta,
      boletos: this.nuevoCliente.boletos
    });

    this.indiceEdicion = -1;
  }
}