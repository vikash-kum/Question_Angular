import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  objects = [{image : "assets/image/java.png", link : "java"} ,
    {image : "assets/image/cpp.png", link: "cpp"},
    {image : "assets/image/python.jpg",  link : "python"} ,
    {image : "assets/image/dbms.png", link: "dbms"} ,
    {image : "assets/image/networking.jpg", link : "networking"} ,
    {image : "assets/image/operating system.jpg", link: "operating-system"} ];

  constructor() { }

  ngOnInit(): void {
  }

}
