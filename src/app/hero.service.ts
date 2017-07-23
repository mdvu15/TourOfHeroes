import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';


@Injectable()
export class HeroService{
    private heroesUrl = 'api/heroes';

    constructor(private http: Http) {}

    getHeroes(): Promise<Hero[]> {  /*generates a promise object that can resolve 
        to an array of hero objects */
        return this.http.get(this.heroesUrl) //http.get returns an Observable
        .toPromise()
        .then(response => response.json().data as
            Hero[])
        .catch(this.handleError); //returns a promise resolving to the return value of the callback
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
                .toPromise()
                .then(response => response.json().data as Hero)
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error); //return a promise object rejected with a given reason
    }

    private headers = new Headers({'Content-Type': 'application/json'});

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
                .toPromise()
                .then(() => hero)
                .catch(this.handleError);
    }
}

