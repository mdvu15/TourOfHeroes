import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-hero';

@Injectable()
export class HeroService{
	getHeroes(): Promise<Hero[]> {  /*generates a promise object that can resolve 
		to an array of hero objects */
		return Promise.resolve(HEROES);
	}

	getHero(id: number): Promise<Hero> {
		return this.getHeroes()
					.then(heroes => heroes.find(hero => hero.id === id));
	//filters the heoroes list (from getHeroes) by id
	}
}

