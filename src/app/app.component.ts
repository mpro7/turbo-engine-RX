import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Message } from './Message'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  messages: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.messages = db.collection('Chat').valueChanges();
  }
}