import { DatePipe } from '@angular/common';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
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
  guide : any[];
  programs : any[] = [];
  currentProgramTitle : string;
  currentProgramDesc : string;

  ngOnInit(): void {
    this.getLive();
    setInterval(() => {
      this.now = new Date();
      this.formattedDate = this.pipe.transform(this.now, 'short');
    }, 1000);

    setInterval(() => {
      this.getGuide();
    }, 30000);
    
  }

  getLive(){
    this.liveservice.getLive().pipe( switchMap ( data => {
      this.channels = data;
      this.currentChannel = this.channels[0];
      return this.liveservice.getGuide();
    }))
    .subscribe( data => {
      this.guide = data;
      this.currentProgramTitle = this.getPrograms(this.currentChannel, this.guide)[0]['sub-title'][0];
      this.currentProgramDesc = this.getPrograms(this.currentChannel, this.guide)[0].desc[0];
      this.setGuide();
    })
  }

  changeChannel(channel : Live){
    this.currentChannel = channel;
    this.currentProgramTitle = this.getPrograms(this.currentChannel, this.guide)[0]['sub-title'][0];
    this.currentProgramDesc = this.getPrograms(this.currentChannel, this.guide)[0].desc[0];
  }

  getPrograms(channel : Live, guide : any[]){
    let count = 0;
    let now = this.pipe.transform(this.now, 'yyyyMMddHHmmss','UTC-0');
    let val = Number(now);
    return this.guide.filter(function(item) {
      if (count < 3 && item.$.channel == channel.EPGID && Number(item.$.stop.substring(0,14)) > val) {
        count++;
        return true;
      }
      return false;
    }, );
  }
  getGuide(){
    this.liveservice.getGuide().subscribe( data => {
      this.guide = data;
      this.programs = [];
      this.currentProgramTitle = this.getPrograms(this.currentChannel, this.guide)[0]['sub-title'][0];
      this.currentProgramDesc = this.getPrograms(this.currentChannel, this.guide)[0].desc[0];
      this.setGuide();
    })
  }

  setGuide(){
    for(let channel of this.channels){
      this.programs.push(this.getPrograms(channel, this.guide));
    }
  }

}
