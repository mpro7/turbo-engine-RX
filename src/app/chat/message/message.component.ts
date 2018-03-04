import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {

  @Input('message') message;

  public thisIsImage: boolean = false;
  public thisIsURL: boolean = false;
  public multimediaContent: string;
  
  constructor() { }

  ngOnInit() {
/*    
    this.message
    .map(element => {
      if (this.checkIsThisImage(element.content)) {
        element.isThisImage = true;
        this.thisIsImage = true
        this.multimediaContent = element.content;
        return element;
      } else if (this.checkIsThisURL(element.content)) {
        element.isThisURL = true;
        this.thisIsURL = true;
        this.multimediaContent = element.content; 
        return element;
      } else {
        return element;
      }
    }
  
    )

    }

    checkIsThisURL(element: string):boolean {
      let isThisURL: boolean = false;
      const expression: any = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
      let regex = new RegExp(expression);

      if (element.match(regex)) {
        isThisURL = true;
      }
      
      console.log('URL: ' + isThisURL);
      return isThisURL;
    }

    checkIsThisImage(element: string):boolean {
      let isThisImage: boolean = false;
      const expression: any = /(https?:\/\/.*\.(?:png|jpg))/i;
      let regex = new RegExp(expression);

      if(element.match(regex)) {
        isThisImage = true;
      }

      console.log('IMAGE: '+ isThisImage);
      return isThisImage;
    }
  */
  }
}