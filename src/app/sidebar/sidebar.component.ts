import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  name: string;
  icon: string;
  expanded?: boolean;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  menuItems: MenuItem[] = [
    {
      name: 'Ámbitos de gestión',
      icon: 'folder-icon',
      children: [
        { name: 'Consejo de Recursos Hídricos de Cuenca - CRHC', icon: 'folder-icon' },
        { name: 'Sectores Hidráulicos', icon: 'folder-icon' },
        { name: 'Unidades Hidrográficas', icon: 'file-icon' },
        { name: 'Autoridad Administrativa del Agua - AAA', icon: 'file-icon' },
        { name: 'ALA', icon: 'file-icon' }
      ]
    },
    {
      name: 'Oferta',
      icon: 'folder-icon',
      children: [
        { name: 'Principales Presas', icon: 'file-icon' }
      ]
    },
    {
      name: 'Calidad',
      icon: 'folder-icon',
      children: [
        { name: 'Puntos de Muestreo', icon: 'file-icon' },
        { name: 'Fuentes Contaminantes', icon: 'file-icon' },
        { name: 'Vertimientos de Aguas Residuales Tratadas', icon: 'file-icon' }
      ]
    },
    {
      name: 'Demanda',
      icon: 'folder-icon',
      children: [
        { name: 'Usos de Agua', icon: 'folder-icon' },
        { name: 'Acred. Disp. Hídrica', icon: 'file-icon' },
        { name: 'Aut. Ejec. Obras', icon: 'file-icon' },
        { name: 'Formalización', icon: 'file-icon' }
      ]
    },
    {
      name: 'Fuentes de Agua',
      icon: 'folder-icon',
      children: [
        { name: 'Superficial', icon: 'folder-icon' },
        { name: 'Subterráneo', icon: 'folder-icon' },
        { name: 'Glaciares', icon: 'file-icon' }
      ]
    },
    {
      name: 'Infraestructura Hidráulica',
      icon: 'folder-icon',
      children: [
        { name: 'Obras de Almacenamiento', icon: 'folder-icon' },
        { name: 'Obras de Arte', icon: 'folder-icon' },
        { name: 'Bocatomas', icon: 'file-icon' },
        { name: 'Estructuras de Bombeo', icon: 'file-icon' },
        { name: 'Canales Túneles', icon: 'file-icon' },
        { name: 'Canales Laterales', icon: 'file-icon' },
        { name: 'Drenes', icon: 'file-icon' }
      ]
    },
    {
      name: 'Gestión de Riesgo',
      icon: 'folder-icon',
      children: [
        { name: 'Puntos Críticos', icon: 'file-icon' },
        { name: 'Faja Marginal', icon: 'file-icon' },
        { name: 'Inundaciones Generadas por Activación de Quebradas', icon: 'file-icon' }
      ]
    },
    {
      name: 'Otras Entidades',
      icon: 'folder-icon',
      children: [
        { name: 'IGN', icon: 'folder-icon' },
        { name: 'INEI', icon: 'folder-icon' },
        { name: 'MIDAGRI', icon: 'folder-icon' },
        { name: 'SENAMHI', icon: 'folder-icon' },
        { name: 'SERNANP', icon: 'folder-icon' }
      ]
    }
  ];

  toggleItem(item: MenuItem) {
    item.expanded = !item.expanded;
  }

}
