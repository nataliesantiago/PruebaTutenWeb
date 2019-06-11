import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { routing } from './routes/app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListDataComponent } from './components/list-data/list-data.component';
import { GridDataComponent } from './components/grid-data/grid-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListDataComponent,
    GridDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
