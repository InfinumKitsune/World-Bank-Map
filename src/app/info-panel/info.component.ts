import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../country.service';

@Component({
  selector: 'info-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
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
