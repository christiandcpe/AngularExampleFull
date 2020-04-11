import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  //templateUrl: './youtube.component.html',
  template: `
  
  
        <div style="margin-top: 100px">
            <div class="container">            
                <div class="row">    
                  <div class="col-12">
                      <button class="btn btn-primary" style="margin: 5px" (click)="changeOnePunchMan()">One Punch Man</button>
                      <button class="btn btn-info" style="margin: 5px" (click)="changeMusic()">Música</button>
                      <button class="btn btn-success" style="margin: 5px" (click)="changeDockerKubernetes()">Docker y Kubernetes</button>
                      <youtube-player videoId="{{videoId}}" 
                      suggestedQuality="highres"
                      [height]="500"
                      [width]="1080"
                      [startSeconds]="17"
                      [endSeconds]="34"
                      ></youtube-player> 
                  </div>
                </div>
            </div>
        </div>
  `,
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {


  videoId : String
  constructor() {
  this.videoId = "dQw4w9WgXcQ"
 }
 changeOnePunchMan = () => {
    this.videoId = "OHy751cASz4"
 }
 changeMusic(){
  this.videoId = "dQw4w9WgXcQ"
 }
 changeDockerKubernetes = () => {
  this.videoId = "U57Ha-uRD_M"
 }


  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
