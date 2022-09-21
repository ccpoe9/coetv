import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  now : Date;

  constructor() { }

  ngOnInit(): void {
    this.now = new Date();
  }

}
