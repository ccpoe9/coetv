// videojs.ts component
import { Component, ElementRef, Input, OnDestroy, 
  OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from 
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
        muted:boolean,
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
      this.player.controlBar.addChild('QualitySelector');
    }

    ngOnChanges( changes : SimpleChanges){
      if(!changes['options'].firstChange){
        this.player.src(this.options.sources);
        this.player.load();
        this.player.play();
      }
    }
  
    ngOnDestroy() {
      // destroy player
      if (this.player) {
        this.player.dispose();
      }
    }
  }