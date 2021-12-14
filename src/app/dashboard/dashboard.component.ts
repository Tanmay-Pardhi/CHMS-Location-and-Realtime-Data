import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as L from 'leaflet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  public chmsdata: any;
  public tabledata = [];
  private map;

  private initMap(lat, long): void {
    const iconDefault = L.icon({
      iconRetinaUrl: 'assets/images/marker-icon-2x-black.png',
      iconUrl: 'assets/images/marker-icon-2x-black.png',
      shadowUr: 'assets/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    this.map = L.map('map', {
      center: [lat, long],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 15,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    L.marker([lat, long], { icon: iconDefault }).addTo(this.map)
  }
  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    const things = this.db.list('CHMS Database');
    things.valueChanges().subscribe((data) => {
      this.chmsdata = data
      for (const key in this.chmsdata[0]) {
        if (Object.prototype.hasOwnProperty.call(this.chmsdata[0], key)) {
          this.tabledata.push(this.chmsdata[0][key])
        }
      }
      this.tabledata.reverse()
      if(this.tabledata.length > 0){
        this.initMap(this.tabledata[0].location_lattitude, this.tabledata[0].location_longitude);
      }
    })
  }
  ngAfterViewInit() {
    
  }
}
