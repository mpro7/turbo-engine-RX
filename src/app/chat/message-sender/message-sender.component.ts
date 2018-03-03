import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlName } from '@angular/forms';
import { element } from 'protractor';
@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent {
  @Input() public submitButtonText = 'Submit';
  public form: FormGroup;
//  public currentTime = new Date();

  @Output() formSubmit = new EventEmitter();
  formSubmitSubject = new Subject();

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.form = this.formBuilder.group({

//      time: [this.currentTime.getTime(), Validators.required],
      name: ['', Validators.required],
      content: ['', Validators.required]

    });

    this.formSubmitSubject
      .filter(() => this.form.valid)
      .map(() => this.form.value)
      .map(element => {
        if (this.checkIsThisURL(element.content)) {
          element.ifURL = true;
          return element;
        } else {
          return element;
        }
      }

      )
      .subscribe(this.formSubmit);
  }

  private checkIsThisURL(element: string):boolean {
    let isThisURL: boolean = false;
    const expression: any = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);

    if (element.match(regex)) {
      isThisURL = true;
    }
    
    console.log(isThisURL);
    return isThisURL;
  }
}