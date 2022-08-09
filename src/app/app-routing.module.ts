import {RouterModule, Routes} from "@angular/router";
import {ErrorComponent} from "./page/error/error.component";
import {HomeComponent} from "./page/home/home.component";
import {NgModule} from "@angular/core";
import {QuestionComponent} from "./page/subject/question/question.component";
import {AddQuestionComponent} from "./admin/add-question/add-question.component";
import {AddTopicComponent} from "./admin/add-topic/add-topic.component";
import {AdminDashboardComponent} from "./admin/admin-dashboard/admin-dashboard.component";
import {AboutComponent} from "./page/about/about.component";
import {SubjectComponent} from "./page/subject/subject.component";
import {JavaComponent} from "./java/java.component";
import {CppComponent} from "./cpp/cpp.component";
import {PythonComponent} from "./python/python.component";
import {NetworkingComponent} from "./networking/networking.component";


const routes: Routes = [

  {
    path: '', component: HomeComponent
  },

  {
    path: 'about', component: AboutComponent
  },

  {
    path: "admin",
    children: [
      {path: "", component: AdminDashboardComponent},
      {path: "addquestion", component: AddQuestionComponent},
      {path: "addtopic", component: AddTopicComponent}
    ]
  },

  {
    path: 'java' ,
    children :[
      {path: '' , component : JavaComponent },
      {path: ':subject/questions'  , component: QuestionComponent},
    ]
  },

  {
    path: 'cpp' ,
    children :[
      {path: '' , component : CppComponent },
      {path: ':subject/questions'  , component: QuestionComponent}
    ]
  },
  {
    path: 'python' ,
    children :[
      {path: '' , component : PythonComponent },
      {path: ':subject/questions'  , component: QuestionComponent}
    ]
  },
  {
    path: 'dbms' ,
    children :[
      {path: '' , component : SubjectComponent },
      {path: ':subject/questions'  , component: QuestionComponent}
    ]
  },
  {
    path: 'networking' ,
    children :[
      {path: '' , component : NetworkingComponent },
      {path: ':subject/questions'  , component: QuestionComponent}
    ]
  },

  {
    path: 'operating-system' ,
    children :[
      {path: '' , component : SubjectComponent },
      {path: ':subject/questions'  , component: QuestionComponent}
    ]
  },

  {
      path: "**", component: ErrorComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
