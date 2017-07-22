import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
//to take :id from ParamMap observable in ActivatedRoute service
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap'

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
	constructor( 
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
		) {}

	hero: Hero; //var hero takes input from other components

	ngOnInit(): void {
		this.route.paramMap
		.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
		//switchMap maps the id in the Observable route parameters to a new Observable, the
		//result of the HeroService.getHero() method
		//the '+' operator converts route parameter (a string) to a number.
		.subscribe(hero => this.hero = hero)
	}

	goBack(): void {
		this.location.back();
	}
}