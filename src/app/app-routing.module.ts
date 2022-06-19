import {RouterModule, Routes} from "@angular/router";
import {ErrorComponent} from "./error/error.component";
import {HomeComponent} from "./home/home.component";
import {QuestionedComponent} from "./questiontype/questioned.component";
import {NgModule} from "@angular/core";
import {QuestionsComponent} from "./questiontype/questions/questions.component";


const routes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'java' ,
    children :[
      {path: '' , component : QuestionedComponent },
      {path: 'core/questions'  , component: QuestionsComponent},
      {path: 'opps/questions'  , component: QuestionsComponent},
      {path: 'array/questions'  , component: QuestionsComponent}
    ]
  },

  {
    path: 'cpp' ,
    children :[
      {path: '' , component : QuestionedComponent },
      {path: 'core/questions'  , component: QuestionsComponent},
      {path: 'opps/questions'  , component: QuestionsComponent},
      {path: 'array/questions'  , component: QuestionsComponent}
    ]
  },
  {
    path: 'python' ,
    children :[
      {path: '' , component : QuestionedComponent },
      {path: 'core/questions'  , component: QuestionsComponent},
      {path: 'opps/questions'  , component: QuestionsComponent},
      {path: 'array/questions'  , component: QuestionsComponent}
    ]
  },
  {
    path: 'dbms' ,
    children :[
      {path: '' , component : QuestionedComponent },
      {path: 'core/questions'  , component: QuestionsComponent},
      {path: 'opps/questions'  , component: QuestionsComponent},
      {path: 'array/questions'  , component: QuestionsComponent}
    ]
  },
  {
    path: 'networking' ,
    children :[
      {path: '' , component : QuestionedComponent },
      {path: 'core/questions'  , component: QuestionsComponent},
      {path: 'opps/questions'  , component: QuestionsComponent},
      {path: 'array/questions'  , component: QuestionsComponent}
    ]
  },
  {
    path: 'operating-system' ,
    children :[
      {path: '' , component : QuestionedComponent },
      {path: 'core/questions'  , component: QuestionsComponent},
      {path: 'opps/questions'  , component: QuestionsComponent},
      {path: 'array/questions'  , component: QuestionsComponent}
    ]
  },

  {
      path: "admin",
      component: HomeComponent
      // pathMatch: 'full',

      //   children : [
      //     {
      //       path : '',
      //       component : WelcomeComponent,
      //     },
      //     {
      //       path : 'profile',
      //       component : ProfileComponent,
      //     },
      //     {
      //       path : 'view-categories',
      //       component : ViewCategoriesComponent,
      //     },
      //     {
      //       path : 'add-category',
      //       component : AddCategoryComponent,
      //     },
      //     {
      //       path : 'view-quizzes',
      //       component : ViewQuizzesComponent,
      //     },
      //     {
      //       path : 'add-quiz',
      //       component : AddQuizComponent,
      //     },
      //     {
      //       path : 'quiz/:qId',
      //       component : UpdateQuizComponent,
      //     },
      //     {
      //       path : 'view-questions/:qId/:title',
      //       component : ViewQuizQuestionsComponent,
      //     },
      //     {
      //       path : "add-questions/:qId/:title",
      //       component : AddQuestionsComponent,
      //     },
      //     {
      //       path : "update-question/:quesId",
      //       component : UpdateQuestionComponent,
      //     },
      //     {
      //       path : "update-category/:cid",
      //       component : UpdateCategoryComponent,
      //     }
      //   ]
    } ,
    {
      path: "**",
      component: ErrorComponent,
    },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
