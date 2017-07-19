import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, /** <-- import the FormsModule before binding with 
[(ngModel)] */
	RouterModule.forRoot([
		{
			path: 'heroes', //define the component of /heroes
			component: HeroesComponent
		},
		{
			path: 'dashboard', //define the component of /dashboard
			component: DashboardComponent
		},
		{
			path: '', //redirect to dashboard immediately if users go to home/
			redirectTo: '/dashboard',
			pathMatch: 'full'
		},
		{
			path: 'detail/:id', //:id serves as a place holder
			component: HeroDetailComponent
		}
	])
  ],
  providers: [HeroService], //set HeroService available for all components
  bootstrap: [AppComponent]
})
export class AppModule { }

