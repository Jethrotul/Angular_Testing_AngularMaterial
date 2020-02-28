import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Pais1Component } from './pais1/pais1.component';
import { Pais2Component } from './pais2/pais2.component';
import { Pais3Component } from './pais3/pais3.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { FormselecComponent } from './formselec/formselec.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule} from '@angular/material/form-field';
import { Formselec2Component } from './formselec2/formselec2.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Formselec3Component } from './formselec3/formselec3.component';
import { MatSelectModule } from '@angular/material/select';
import { AdminModule } from './admin/admin.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LogComponent } from './log/log.component';


const config = {
  apiKey: 'AIzaSyBD5HDflRVPd_o6GxAwnSlRAGO1-Un5738',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'testangularadmin',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID'
};

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    Pais1Component,
    Pais2Component,
    Pais3Component,
    BotonesComponent,
    FormularioComponent,
    FormselecComponent,
    Formselec2Component,
    Formselec3Component,
    LogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    AdminModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    ReactiveFormsModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


