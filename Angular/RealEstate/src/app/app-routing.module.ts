import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { AgentsComponent } from './agents/agents.component';
import { PropertiesComponent } from './properties/properties.component';
import { HowComponent } from './how/how.component';
import { HeadlineComponent } from './headline/headline.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
	{ path: '',   redirectTo: '/Home', pathMatch: 'full' },
	{ path: 'Home', component: HeaderComponent },
	{ path: 'Properties', component: PropertiesComponent },
	{ path: 'Agents', component: AgentsComponent },
	{ path: 'About', component: AboutComponent },
	{ path: 'Contact', component: ContactComponent },
	{ path: 'Services', component: ServicesComponent },
	{ path: 'Testimonials', component: TestimonialsComponent }

	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
