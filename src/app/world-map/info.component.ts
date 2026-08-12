import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../country.service';

@Component({
  selector: 'info-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div id="infoContainer">
        <h2 *ngIf="country">Selected Country: {{ country }}</h2>
        <p *ngIf="!country">Select a country.</p>
      </div>
  `,
  styleUrls: ['./info.component.css']
})
export class InfoPanelComponent {
  @Input() country: string | null = null;
  countryInfo: any = null;

  constructor(private api: CountryService) { }

  ngOnChanges() {
    if (this.country) {
      this.api.getCountryDetails(this.country).subscribe(response => {
        const data = response[1][0];

        this.countryInfo = {
          name: data.name,
          capital: data.capitalCity,
          region: data.region.value,
          income: data.incomeLevel.value,
          iso2: data.iso2code,
          longitude: data.longitude,
          latitude: data.latitude
        };
      });
    }
  }
  
}
