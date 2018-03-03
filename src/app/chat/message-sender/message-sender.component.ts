import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlName } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({

//        time: [this.currentTime.getTime(), Validators.required],
        name: ['', Validators.required],
        content: ['', Validators.required]

    });

    this.formSubmitSubject
      .filter(() => this.form.valid)
      .map(() => this.form.value)
      .subscribe(this.formSubmit);
  }
}