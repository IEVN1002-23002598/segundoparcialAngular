import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core'
import {Zodiaco} from './formularios/zodiaco/zodiaco'
import {Navbar} from './navbar/navbar'
import {Usuario}  from './formularios/usuario/usuario'

@Component({
  imports: [RouterOutlet, Navbar, Usuario],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App implements OnInit{
  title = 'web-app';
   
  ngOnInit(): void {
    initFlowbite();
  }
}

// import { Component } from '@angular/core';
// import { OnInit } from '@angular/core';
// import { initFlowbite } from 'flowbite';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'web-app';

//   ngOnInit(): void {
//     initFlowbite();
//   }
// }

