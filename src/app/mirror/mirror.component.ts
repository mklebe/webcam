import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.less']
})
export class MirrorComponent implements OnInit, AfterViewInit {

  @ViewChild('video') video:any; 

  /** List of all available mediaelements of the current device */
  private cameras: Array<string> = [];
  private speaker: Array<string> = [];

  private videoSources: Array<any> = [];

  constructor(
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    let _video = this.video.nativeElement;
    
    navigator.mediaDevices.enumerateDevices()
      .then( devices => {
        let cameras = devices.filter( media => media.kind.indexOf('video') > -1 );
        let speaker = devices.filter( media => media.kind.indexOf('audiooutput') > -1 );

        cameras.forEach( device => {
          this.cameras.push(device)
        })

        if( cameras[0].deviceId ) {
          let constraints = { video: { facingMode: "environment" } }
          navigator.mediaDevices.getUserMedia( constraints )
            .then( stream => {
              _video.src = window.URL.createObjectURL(stream);
              _video.play();
            })

        }


        speaker.forEach( device => {
          this.speaker.push(device)
        })
       })
       .catch( e => {
         console.log( e )
       } )
  }

}
