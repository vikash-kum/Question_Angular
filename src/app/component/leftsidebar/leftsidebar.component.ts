import {Component, OnInit} from '@angular/core';
import {SubjectDataService} from "../../service/subject.service";

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {

  public subjects : string[] | undefined;

  constructor(private subjectService : SubjectDataService) { }

  ngOnInit(): void {
    this.subjectService.getSubject().subscribe(
      response => {
        this.subjects = response;
      }
    );
  }


}
