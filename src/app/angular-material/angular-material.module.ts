import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { MatTabsModule } from '@angular/material/tabs/public-api';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [MatToolbarModule, MatIconModule],
  declarations: [LoginComponent],
})
export class AngularMaterialModule {}
