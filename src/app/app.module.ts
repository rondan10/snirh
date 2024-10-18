import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-c/main-c.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MapComponent } from './map/map.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainContentComponent,
    DataTableComponent,
    MapComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    MapComponent 
  ],
  providers: [],
  bootstrap: [MainContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }