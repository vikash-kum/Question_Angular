import { Component, OnInit } from '@angular/core';


export class Question {
   constructor(private content : string ,
               private option1 : string ,
               private option2 : string ,
               private option3 : string ,
               private option4 : string,
               private correctAnswer : string,
               private topic : string ,
               private isCorrect : boolean) {
   }
}

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})

export class AddQuestionComponent implements OnInit {

  question : Question | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}


