// import { TestBed } from '@angular/core/testing';
// import { Flowbite } from './flowbite';

// describe('Flowbite', () => {
//   let service: Flowbite;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(Flowbite);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FlowbiteService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  loadFlowbite(callback: (flowbite: any) => void): void {
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then(flowbite => {
        callback(flowbite);
      });
    }
  }
}