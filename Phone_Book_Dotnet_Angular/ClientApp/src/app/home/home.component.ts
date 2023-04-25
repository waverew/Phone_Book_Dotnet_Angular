import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public phones: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
interface PhonebookItem {
  name: string;
  familyName: string;
  number: string;
}
