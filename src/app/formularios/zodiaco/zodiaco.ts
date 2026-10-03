import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-zodiaco',
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',
  standalone: true,
})

export class Zodiaco {
  nombre: string = '';
  paterno: string = '';
  materno: string = '';
  dia: string = '';
  mes: string = '';
  anio: string = '';
  resultado: string = '';
  sexo: string = '';
  edad: number = 0;
  signo: string = '';
  imagen: string = '';
  numero: number = 0;



  imprimir(): void {
    this.edad = 2026 - parseInt(this.anio);

    this.numero = (parseInt(this.anio) - 4) % 12;
    if(this.numero === 0 ){
      this.signo = 'Rata'
      this.imagen = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Rata.jpg';
    }else if (this.numero === 1 ){
      this.signo = 'Buey'
      this.imagen = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Buey.jpg';
    }else if (this.numero === 2){
      this.signo = 'Tigre'
      this.imagen = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Tigre.jpg';
    } else if (this.numero === 3){
      this.signo = 'Conejo'
      this.imagen = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Conejo.jpg';
    } else if (this.numero ===4){
      this.signo = 'Dragón'
      this.imagen = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Dragon.jpg';
    } else if (this.numero === 5){
      this.signo = 'Serpiente'
      this.imagen = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Serpiente.jpg';
    } else if (this.numero === 6){
      this.signo = 'Caballo'
      this.imagen = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg';
    } else if (this.numero ===7){
      this.signo = 'Cabra'
      this.imagen = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cabra.jpg';
    } else if (this.numero ===8){
      this.signo = 'Mono'
      this.imagen = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Mono.jpg';
    } else if ( this.numero === 9){
      this.signo = 'Gallo'
      this.imagen = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Gallo.jpg';
    } else if (this.numero === 10){
      this.signo = 'Perro'
      this.imagen = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Perro.jpg';
    } else if (this.numero ===11){
      this.signo = 'Cerdo'
      this.imagen = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cerdo.jpg';
    }

    this.resultado = 'Hola ' + this.nombre + ' ' + this.paterno+ ' ' +this.materno  + ', ' +
    'Tienes ' + this.edad + ' ' + 'años'+ ' ,' +
    'Tu signo zodiacal es: ' + this.signo ;
    
  }
  
}
