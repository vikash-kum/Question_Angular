import {Component, Input, OnInit} from '@angular/core';
import {Router, Routes} from "@angular/router";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() fromparent : any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  questiontype( link :string ) {
    this.router.navigate([link]);
  }

}
