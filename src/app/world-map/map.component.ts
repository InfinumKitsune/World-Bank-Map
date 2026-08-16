import { Component, ElementRef, AfterViewInit, Output, EventEmitter, Inject, PLATFORM_ID, NgZone }
  from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'world-map',
  standalone: true,
  template: '<div id="mapContainer"></div>',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  @Output() countrySelected = new EventEmitter<string>();

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone
  ) { }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      this.zone.run(() => {
        this.loadMap();
      });
    });
  }

  private loadMap() {
    fetch('assets/world_map.svg')
      .then(response => response.text())
      .then(svg => {
        const container = this.el.nativeElement.querySelector('#mapContainer');
        container.innerHTML = svg;

        this.attachEvents(container);
      });
  }

  private attachEvents(container: HTMLElement) {
    const countries = container.querySelectorAll('path');

    countries.forEach((country: any) => {
      country.addEventListener('mouseenter', () => {
        country.classList.add('hover');
      });

      country.addEventListener('mouseleave', () => {
        country.classList.remove('hover');
      });

      country.addEventListener('click', () => {
        this.zone.run(() => {
          const iso =
            country.getAttribute('id') ||
            country.getAttribute('name');
          this.countrySelected.emit(iso);
        });
      });
    });
  }
}


