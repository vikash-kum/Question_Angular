import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questiontype',
  templateUrl: './questioned.component.html',
  styleUrls: ['./questioned.component.css']
})
export class QuestionedComponent implements OnInit {

  objects = [{title : "Core" , link : "core/questions"} ,
    {title: "opps" , link: "opps/questions"} ,
    {title: "arrays" , link:"array/questions"}];

  constructor() {
  }

  ngOnInit(): void {
  }
}

