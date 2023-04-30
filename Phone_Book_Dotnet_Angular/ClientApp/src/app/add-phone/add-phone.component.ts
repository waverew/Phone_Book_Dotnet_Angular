import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public submit(login:any) {
    console.log("bebra", login);
  }
}
