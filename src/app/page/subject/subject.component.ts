import {Component, Input, OnInit, Output} from '@angular/core';
import {TopicdataService} from "../../service/topicdata.service";



@Component({
  selector: 'app-questiontype',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  // objects = [{title : "Core" , link : "core/questions"} ,
  //   {title: "opps" , link: "opps/questions"} ,
  //   {title: "arrays" , link:"array/questions"}];

  @Input() public subject: string = "";
  topics : Object | undefined ;


  constructor(private topicService : TopicdataService) {
  }

  ngOnInit(): void {
    this.topicService.getTopic(this.subject).subscribe(
      response => {
        this.topics = response;
      }
    );
  }


}
