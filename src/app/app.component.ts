import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/folder/Perfil', icon: 'mail' },
    { title: 'Pedidos', url: '/folder/Pedidos', icon: 'paper-plane' },
    { title: 'Beneficios', url: '/folder/Beneficios', icon: 'heart' },
    { title: 'Premium', url: '/folder/Premium', icon: 'archive' },
    { title: 'Productos', url: '/folder/Productos', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
