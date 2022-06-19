import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { QuestionedComponent } from './questiontype/questioned.component';
import { QuestionsComponent } from './questiontype/questions/questions.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLeftComponent } from './admin/admin-left/admin-left.component';
import {AppRoutingModule} from './app-routing.module';

// const appRoutes : Routes = [
//   { path: ''  , component: HomeComponent },
//   { path: 'admin'  , component: AdminComponent },
//   { path: ':subject'  , component: QuestionedComponent },
//   { path: ':subject/:section'  , component: QuestionsComponent },
//   { path: '**'  , component: ErrorComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CardComponent,
    LeftsidebarComponent,
    RightsidebarComponent,
    ErrorComponent,
    HomeComponent,
    QuestionedComponent,
    QuestionsComponent,
    AdminComponent,
    AdminLeftComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
