import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
	selector: 'my-dasboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
	heroes: Hero[]

	constructor(private heroService: HeroService) { }
	ngOnInit(): void {
		this.heroService.getHeroes() //populate heroes with an array of 4 top heroes
		.then(heroes => this.heroes = heroes.slice(1,5));
	}
}
