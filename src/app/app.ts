import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core'
import {Zodiaco} from './formularios/zodiaco/zodiaco'
import {Navbar} from './navbar/navbar'
import {Usuario}  from './formularios/usuario/usuario'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App implements OnInit{
  title = 'web-app';
   
  ngOnInit(): void {
    initFlowbite();
  }
}

