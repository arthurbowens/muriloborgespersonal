import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  /** Substitua pelo seu número com DDI, sem símbolos: 5561999999999 */
  readonly whatsappHref =
    'https://wa.me/5561999999999?text=Ol%C3%A1%2C%20Murilo%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20F%C3%B3rmula%20Queima%20R%C3%A1pida.';
}
