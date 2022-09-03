import { Component, OnInit } from '@angular/core';
import { Live } from 'src/app/models/live.model';
import { LiveService } from 'src/app/services/live.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {

  constructor(private liveservice : LiveService) { }

  channels : Live[];
  currentChannel : Live;
  ngOnInit(): void {
    this.getLive();
  }

  getLive(){
    this.liveservice.getLive().subscribe( data => {
      this.channels = data;
      this.currentChannel = this.channels[0];
    })
  }

  changeChannel(channel : Live){
    this.currentChannel = channel;
  }

}
