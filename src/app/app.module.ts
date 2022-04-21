import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './components/home.page';
import { LoginPage } from './components/login.page';
import { SignupPage } from './components/signup.page';
import { UtentiPage } from './components/utenti.page';
import { ClientiPage } from './components/clienti.page';
import { FatturePage } from './components/fatture.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './interceptors/my-http.interceptor';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DettagliClientePage } from './components/dettagli-cliente.page';
import { DettagliFatturaPage } from './components/dettagli-fattura.page';
import { FattureClientePage } from './components/fatture-cliente.page';
import { NewFatturaPage } from './components/new-fattura.page';
import { ModificaClientePage } from './components/modifica-cliente.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    LoginPage,
    SignupPage,
    UtentiPage,
    ClientiPage,
    FatturePage,
    NavbarComponent,
    DettagliClientePage,
    DettagliFatturaPage,
    FattureClientePage,
    NewFatturaPage,
    ModificaClientePage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
