import { Component, OnInit, ViewChild} from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Dish } from '../shared/dish';
import { DishService} from '../services/dish.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})


export class DishdetailComponent implements OnInit {

 // @Input()  -- needed only when receiving input from html file
  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  commentForm: FormGroup;
  comment: Comment;
  rating: MatSliderModule;

  @ViewChild('cform') commentFormDirective;


  formErrors = {
    'author': '',
    'comment': ''
  };
  validationMessages =
  {
    'author': {
      'required':      ' Name is required.',
      'minlength':     ' Name must be at least 2 characters long.',
      'maxlength':     ' Name cannot be more than 25 characters long.'
    },
    'comment': {
      'required':      'Message is required.',
      'minlength':     'Message must be at least 2 characters long.'
    }
  };

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private cf: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {

    this.dishService.getDishIds()
      .subscribe(dishIds => this.dishIds = dishIds);

    this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }


  createForm() {

    const todayISOString: string = new Date().toISOString();
    console.log(todayISOString);


    this.commentForm = this.cf.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: 5,
      comment: ['', [Validators.required, Validators.minLength(2)]],
      date: todayISOString
    });
    this.commentForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // re(set) form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) {
       return ;
    }

    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field) ) {

        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)){
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }

  }


  onSubmit() {

    this.comment = this.commentForm.value;
    console.log(this.comment);

    // push the comments
    this.dish.comments.push(this.comment);

    // reset the comment form
    this.commentForm.reset ({
      author: '',
      rating: 5,
      comment: ''
    });

    this.commentFormDirective.resetForm();
  }


  setPrevNext(dishId: string){
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void{
    this.location.back();  // back navigation
  }

}
