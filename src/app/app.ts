import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPanelComponent } from './info-panel/info.component';
import { MapComponent } from './world-map/map.component';
import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InfoPanelComponent, MapComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App{
  selectedCountry: string | null = null;
  selectedCountryInfo: any = null;
  loading = false;

  constructor(private api: CountryService,
    private cdr: ChangeDetectorRef
  ) { }

  onCountrySelected(iso: string) {
    this.loading = true;
    this.selectedCountry = iso;

    console.log("API start: ", performance.now());

    this.api.getCountryDetails(iso).subscribe(response => {
      const data = response[1][0];

      console.log("API end: ", performance.now());

        this.selectedCountryInfo = {
          name: data.name,
          capital: data.capitalCity,
          region: data.region.value,
          income: data.incomeLevel.value,
          iso2: data.iso2Code,
          longitude: data.longitude,
          latitude: data.latitude
      };
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
}

