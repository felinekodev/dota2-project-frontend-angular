/* Author: Felipe reyes  => { Nekosor } Github*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private router: Router) { }

  cerrarSesion(): void {
   
    this.router.navigate(['/auth/login']);
  }

  regresarInicio(): void {

    this.router.navigate(['/auth/login']);
  }

}
