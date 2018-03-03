import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.messages = db.collection('Chat').valueChanges();
  }

  ngOnInit() {
  
  }

  formMessageSender(event: any){
    this.db.collection('Chat').add({
//        'time' : event.time,
        'name' : event.name,
        'content' : event.content
    });
  }
}