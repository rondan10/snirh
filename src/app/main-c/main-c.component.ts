import { Component } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [MapComponent, DataTableComponent],
  templateUrl: './main-c.component.html',
  styleUrls: ['./main-c.component.css']
})
export class MainContentComponent {
  generalData = [
    { Descripción: 'Delimitación de unidades hidrográficas de Perú por el método de Pfafstetter, fueron aprobadas por R.M. N°033-2008-AG, tuvo como base cartográfica la Carta Nacional Digital Topográfica del IGN, a escala 1:100 000.' },
    { 'Fecha publicación': '05/01/2008', 'Frecuencia actualización': 'No aplica', 'Última actualización': '07/10/2021' },
    { Resolución: 'R.M. N°033-2008-AG', Estado: 'Terminado' }
  ];

  technicalData = [
    { Representación: 'Polígono', Escala: '1:100000', 'Sistema coordenadas': 'WGS84' }
  ];

  contactData = [
    { 'Responsable información': 'Humberto Richard Torres Giraldo / htorres@ana.gob.pe' },
    { 'Responsable registro': 'Jean Carlo Céspedes Reshegui / jcespedes@ana.gob.pe' }
  ];

  downloadsData = [
    { 'Servicio WMS': 'https://geosnirh.ana.gob.pe/server/services/wii_UnidadesHidro/MapServer/WMSServer?' },
    { 'Servicio WFS': 'https://geosnirh.ana.gob.pe/server/services/wii_UnidadesHidro/MapServer/WFSServer?' },
    { 'Servicio KML/KMZ': 'https://geosnirh.ana.gob.pe/Repositorio/kml/UnidadesHidrograficas.kmz' },
    { 'ShapeFile': 'https://geosnirh.ana.gob.pe/Repositorio/Shape/UnidadesHidrograficas.zip' }
  ];

  dictionaryData = [
    { 'N°': 1, Campo: 'OBJECTID', 'Tipo dato': 'Object ID', Tamaño: '', Descripción: 'Identificador del registro' },
    { 'N°': 2, Campo: 'NIVEL1', 'Tipo dato': 'Text', Tamaño: 1, Descripción: 'Código del nivel 1 de unidades hidrográficas' },
    { 'N°': 3, Campo: 'NIVEL2', 'Tipo dato': 'Text', Tamaño: 2, Descripción: 'Código del nivel 2 de unidades hidrográficas' },
    { 'N°': 4, Campo: 'NIVEL3', 'Tipo dato': 'Text', Tamaño: 3, Descripción: 'Código del nivel 3 de unidades hidrográficas' },
    { 'N°': 5, Campo: 'NIVEL4', 'Tipo dato': 'Text', Tamaño: 4, Descripción: 'Código del nivel 4 de unidades hidrográficas' },
    { 'N°': 6, Campo: 'NIVEL5', 'Tipo dato': 'Text', Tamaño: 5, Descripción: 'Código del nivel 5 de unidades hidrográficas' },
    { 'N°': 7, Campo: 'NIVEL6', 'Tipo dato': 'Text', Tamaño: 6, Descripción: 'Código del nivel 6 de unidades hidrográficas' },
    { 'N°': 8, Campo: 'NIVEL7', 'Tipo dato': 'Text', Tamaño: 7, Descripción: 'Código del nivel 7 de unidades hidrográficas' },
    { 'N°': 9, Campo: 'NOMB_UH_N1', 'Tipo dato': 'Text', Tamaño: 40, Descripción: 'Nombre de nivel 1 de unidades hidrográficas' }
  ];
}

