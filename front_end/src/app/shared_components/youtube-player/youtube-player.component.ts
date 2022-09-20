import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'corp-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit {
    private apiLoaded = false;

    @Input() videoId: string;
    @Input() playerConfig = {
      controls: 0,
      mute: 1,
      autoplay: 1
    };
    @Input() width: number;
    @Input() height: number;
  
    constructor() { }
  
    ngOnInit(): void {
      if(!this.apiLoaded) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        this.apiLoaded = true;
      }
    }

}
