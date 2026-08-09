import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WorldBankSGV');

  countries: any[] = [];

  ngOnInit() {
    fetch('https://api.worldbank.org/v2/country?format=json')
      .then(res => res.json())
      .then(data => {
        this.countries = data[1].map((c: any) => ({
          name: c.name,
          capital: c.capitalCity,
          region: c.region.value,
          income: c.incomeLevel.value,
          iso: c.iso2Code,
          longitude: c.longitude,
          latitude: c.latitude
        }));
      });
  }
}
