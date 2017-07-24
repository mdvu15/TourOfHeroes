import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template:`
		<h1>{{title}}</h1>
		<nav> 
			<a routerLink='/dashboard'>Dashboard</a>
			<a routerLink="/heroes">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['./app.component.css']

//set 2 navigation links (routers) to /dashboard and /heroes
/* <router-outlet> tags define the area the component will appear
on the page after clicking on the routerLink */
})

export class AppComponent {
	title = "Tour of Heroes"
}