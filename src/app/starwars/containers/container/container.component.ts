import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

import { flattenDeep } from 'lodash';
import { Planet } from '../../interfaces/planet.interface';

interface Result {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  res$: Observable<Result>;

  planets$: Observable<Planet[]>;

  filteredPlanets$: Observable<Planet[]>;

  terrains$: Observable<any[]>;

  search$ = new BehaviorSubject<string | null>(null);

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.res$ = this.httpClient.get<Result>('https://swapi.dev/api/planets');

    this.planets$ = this.res$.pipe(
      map((res) => {
        console.log(res);
        return res.results;
      })
    );

    this.terrains$ = this.planets$.pipe(
      map((planets) => {
        let arrayOfTerrains = planets.map((p) => p.terrain.split(', '));

        return flattenDeep(arrayOfTerrains);
      })
    );

    this.filteredPlanets$ = combineLatest([this.planets$, this.search$]).pipe(
      map(([planets, search]) => {
        if (!search?.length) {
          return planets;
        }

        return planets.filter((p) => p.terrain.includes(search));
      })
    );
  }
}
