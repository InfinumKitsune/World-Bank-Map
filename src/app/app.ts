import { Component, signal, Output, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InfoPanelComponent } from './world-map/info.component';
import { MapComponent } from './world-map/map.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, InfoPanelComponent, MapComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WorldBankSGV');

  selectedCountry: string | null = null;

  onCountrySelected(iso: string) {
    this.selectedCountry = iso;
  }
}
