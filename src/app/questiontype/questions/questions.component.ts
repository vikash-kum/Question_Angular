import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  marksGot = 3;
  correctAnswers =  'a';
  attempted: any;
  isSubmit: any;
  ob1 = {
    option1 : 'hii' ,
    option2 : 'hello' ,
    option3 : 'dslddlaldd' ,
    option4 : 'dadadad',
    content : "Number of primitive data types in Java are?",
    answer : "hii",
    givenAnswer : ''
  }
  ob2 = {
    option1 : 'true' ,
    option2 : 'hello' ,
    option3 : 'dslddlaldd' ,
    option4 : 'dadadad',
    content : "Number of primitive data types in Java are?",
    answer : "hello",
    givenAnswer : false
  }
  ob3 = {
    option1 : 'true' ,
    option2 : 'hello' ,
    option3 : 'dslddlaldd' ,
    option4 : 'dadadad',
    content : "Number of primitive data types in Java are?",
    answer : "hello",
    givenAnswer : false
  }
  questions = [this.ob1  , this.ob2, this.ob3,this.ob1  , this.ob2, this.ob3,this.ob1  , this.ob2, this.ob3
  ,this.ob1  , this.ob2, this.ob3,this.ob1  , this.ob2, this.ob3,this.ob1  , this.ob2, this.ob3];

  constructor() { }

  ngOnInit(): void {
  }

  ans(index: number , selectedOption : string) {
    if (this.questions[index].answer == selectedOption) {
      this.questions[index].givenAnswer = true;
      console.log("Corrent ans");
    } else {
      this.questions[index].givenAnswer = true;
      console.log("Wrong ans");
    }
  }

}
