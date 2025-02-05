import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AppRoutingModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule
  ],
  entryComponents : [LoginComponent],
  providers: [DishService, PromotionService, LeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
