import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-questiontype',
  templateUrl: './questioned.component.html',
  styleUrls: ['./questioned.component.css']
})
export class QuestionedComponent implements OnInit {

  objects : any;
  private link: string | null = "";

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.link = this.activatedRoute.snapshot.paramMap.get('subject');

    this.objects = [{title : "Core" , link : this.link+ "/core"} ,
      {title: "opps" , link: this.link+"/opps"} ,
      {title: "arrays" , link: this.link+"/arrays"}];
  }
}
