import { Routes } from '@angular/router';
import { App } from './app';
import { MapComponent } from './world-map/map.component';

export const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  { path: 'map', component: App }
];
