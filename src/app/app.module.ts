import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const route: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    MatButtonModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  declarations: [AppComponent, LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
