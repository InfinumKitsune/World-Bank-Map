import {
  Component, ElementRef, AfterViewInit, Output, EventEmitter, Inject, PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'world-map',
  standalone: true,
  template: '<div id="mapContainer"></div>',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  @Output() countrySelected = new EventEmitter<string>();

  constructor(private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      fetch('assets/world_map.svg')
        .then(response => response.text())
        .then(svg => {
          const container = this.el.nativeElement.querySelector('#mapContainer');
          container.innerHTML = svg;

          this.attachEvents(container);
        });
    }
  }

  private attachEvents(container: HTMLElement) {
    const countries = container.querySelectorAll('path');

    countries.forEach((country: any) => {
      country.addEventListener('mouseenter', () => {
        country.classList.add('hover');
        console.log("Mouse over " + country);
      });

      country.addEventListener('mouseleave', () => {
        country.classList.remove('hover');
      });

      country.addEventListener('click', () => {
        const iso = country.getAttribute('id') || country.getAttribute('name');
        this.countrySelected.emit(iso);
        console.log("Clicked: ", iso);
      });
    });
  }
}

