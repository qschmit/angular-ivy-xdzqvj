import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../../interfaces/planet.interface';

@Component({
  selector: 'app-planet-display',
  templateUrl: './planet-display.component.html',
  styleUrls: ['./planet-display.component.css'],
})
export class PlanetDisplayComponent implements OnInit {
  @Input() planet: Planet;
  constructor() {}

  ngOnInit() {}
}
