import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
import { NavigationComponent } from './navigation/navigation.component';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    TestimonialsComponent,
    ServicesComponent,
    AboutComponent,
    AgentsComponent,
    PropertiesComponent,
    HowComponent,
    HeadlineComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
