import { Component, OnInit , ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Feedback, ContactType } from '../shared/feedback';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    feedbackform: FormGroup;
    feedback: Feedback;
    contactType = ContactType;



  constructor(private fb: FormBuilder) {
    this.createForm();
   }

    createForm() {
      this.feedbackform = this.fb.group({
        firstname: ['', Validators.required ],
        lastname: ['', Validators.required ],
        telnum: ['', Validators.required ],
        email: ['', Validators.required ],
        agree: false,
        contacttype: 'None',
        message: ''
      });
    }

  onSubmit() {
    this.feedback = this.feedbackform.value;
    console.log(this.feedback);
    this.feedbackform.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });

  }


  ngOnInit() {
  }

}
