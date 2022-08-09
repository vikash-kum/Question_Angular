import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftsidebarComponent } from './component/leftsidebar/leftsidebar.component';
import { RightsidebarComponent } from './component/rightsidebar/rightsidebar.component';
import { ErrorComponent } from './page/error/error.component';
import { HomeComponent } from './page/home/home.component';
import { QuestionComponent } from './page/subject/question/question.component';
import { AdminLeftComponent } from './admin/admin-left/admin-left.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { AddQuestionComponent } from './admin/add-question/add-question.component';
import { AddTopicComponent } from './admin/add-topic/add-topic.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import  { MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { AboutComponent } from './page/about/about.component';
import { SubjectComponent } from './page/subject/subject.component';
import { HeaderComponent } from './component/header/header.component';
import { OppsComponent } from './java/opps/opps.component';
import { DatatypeComponent } from './java/datatype/datatype.component';
import { JavaComponent } from './java/java.component';
import { CppComponent } from './cpp/cpp.component';
import { PythonComponent } from './python/python.component';
import { NetworkingComponent } from './networking/networking.component';
import { OperatingSystemComponent } from './operating-system/operating-system.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LeftsidebarComponent,
    RightsidebarComponent,
    ErrorComponent,
    HomeComponent,
    QuestionComponent,
    AdminLeftComponent,
    AddQuestionComponent,
    AddTopicComponent,
    AdminDashboardComponent,
    AboutComponent,
    SubjectComponent,
    QuestionComponent,
    HeaderComponent,
    OppsComponent,
    DatatypeComponent,
    JavaComponent,
    CppComponent,
    PythonComponent,
    NetworkingComponent,
    OperatingSystemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
