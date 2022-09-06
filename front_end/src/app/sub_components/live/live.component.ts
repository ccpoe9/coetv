import { DatePipe } from '@angular/common';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
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
  pipe = new DatePipe('en-US');
  now = new Date();
  formattedDate = this.pipe.transform(this.now, 'short');
  GUIDE : any[];
  currentPrograms : any[];
  currentProgramTitle : string;
  currentProgramDesc : string;

  ngOnInit(): void {
    this.getLive();
    setInterval(() => {
      this.now = new Date();
      this.formattedDate = this.pipe.transform(this.now, 'short');
    }, 1000);
  }

  getLive(){
    this.liveservice.getLive().pipe( switchMap ( data => {
      this.channels = data;
      this.currentChannel = this.channels[0];
      return this.liveservice.getGuide();
    }))
    .subscribe( data => {
      this.GUIDE = data;
      this.currentPrograms = this.getPrograms(this.currentChannel, this.GUIDE);
      this.currentProgramTitle = this.currentPrograms[0]['sub-title'][0];
      this.currentProgramDesc = this.currentPrograms[0].desc[0];
    })
  }

  changeChannel(channel : Live){
    this.currentPrograms = this.getPrograms(channel, this.GUIDE);
    this.currentChannel = channel;
    this.currentProgramTitle = this.currentPrograms[0]['sub-title'][0];
    this.currentProgramDesc = this.currentPrograms[0].desc[0];

  }

  getPrograms(channel : Live, GUIDE : any[]){
    let count = 0;
    let now = this.pipe.transform(this.now, 'yyyyMMddHHmmss','UTC-0');
    let val = Number(now);
    return GUIDE.filter(function(item) {
      if (count < 3 && item.$.channel == channel.EPGID && Number(item.$.stop.substring(0,14)) > val) {
        count++;
        return true;
      }
      return false;
    }, );
  }

  getGuide(){
    this.liveservice.getGuide().subscribe( data => {
      this.GUIDE = data;
      this.currentPrograms = this.getPrograms(this.currentChannel,this.GUIDE);
      this.currentProgramTitle = this.currentPrograms[0]['sub-title'][0];
      this.currentProgramDesc = this.currentPrograms[0].desc[0];
    });
  }

}
