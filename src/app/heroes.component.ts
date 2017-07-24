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
    this.getHeroes();   //call getHeroes upon intialization
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id ]);
  }

  add(name: string): void {
    name = name.trim()
    if (!name) {return;}
    this.heroService.create(name) //call heroService's method create
    .then(hero => {
      this.heroes.push(hero); //add to heroes object of the component (not the service)
      this.selectedHero = null;
    });
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id) //call heroService's delete method
    .then(() => {
      this.heroes.filter(h => h !== hero); //returns an array that satisfies the callback conditions
      if (this.selectedHero === hero) {this.selectedHero = null};
    })
  }
};

