import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { DialogModule } from '@angular/cdk/dialog';
import { EditPhoneComponent } from './edit-phone/edit-phone.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPhoneComponent,
    EditPhoneComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    DialogModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'add-phone', component: AddPhoneComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
