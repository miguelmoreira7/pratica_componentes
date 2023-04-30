import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  exports: [MenuComponent]

})
export class LayoutModule { }
