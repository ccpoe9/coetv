// videojs.ts component
import { Component, ElementRef, Input, OnDestroy, 
  OnInit, ViewChild, ViewEncapsulation } from 
  '@angular/core';
  import videojs from 'video.js';
  
  @Component({
    selector: 'app-videojs',
    templateUrl: './videojs.component.html',
    styleUrls: ['./videojs.component.scss'],
    encapsulation: ViewEncapsulation.None,
  })
  export class VjsPlayerComponent implements OnInit, 
  OnDestroy {
    @ViewChild('target', {static: true}) target: 
  ElementRef;
    @Input() options: {
        fluid: boolean,
        aspectRatio: string,
        autoplay: boolean,
        controls:boolean,
        sources: {
            src: string,
            type: string,
        }[],
    };
    player: videojs.Player;
  
    constructor(
      private elementRef: ElementRef,
    ) { }
  
    ngOnInit() {
      // instantiate Video.js
      this.player = videojs(this.target.nativeElement, 
      this.options, function onPlayerReady() {
        console.log('onPlayerReady', this);
      });
    }
  
    ngOnDestroy() {
      // destroy player
      if (this.player) {
        this.player.dispose();
      }
    }
  }