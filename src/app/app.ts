import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

import {Zodiaco} from './formularios/zodiaco/zodiaco'


@Component({
  imports: [RouterOutlet, Zodiaco],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('segundoparcialAngular');
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

