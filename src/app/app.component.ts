import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/folder/Perfil', icon: 'person-circle' },
    { title: 'Pedidos', url: '/folder/Pedidos', icon: 'bag' },
    { title: 'Beneficios', url: '/folder/Beneficios', icon: 'heart' },
    { title: 'Premium', url: '/folder/Premium', icon: 'star' },
    { title: 'Ajustes', url: '/folder/Ajustes', icon: 'settings' },
  ];
  public labels = ['Favoritos', 'Deseados', 'Amigos'];
  constructor() {}
}
