import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  // constructor does nothing, simply defines a private heroService
  // property and identifies it as a HeroService injection site
  constructor(private heroService: HeroService,
              private router: Router
              ) {}
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  // call method getHeroes of the HeroService class in hero.service
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero; //set selectedHero to the current hero object selected
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  // call getHeroes upon intialization
  gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id ]);
  }
};

