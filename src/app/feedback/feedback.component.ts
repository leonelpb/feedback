import { Component,NgModule } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopComponent } from '../pop/pop.component';
import { FormControl, FormGroup } from '@angular/forms';
import { FeedbackServiceService } from '../services/feedback-service.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})


export class FeedbackComponent {

  form: FormGroup;

  constructor(
    private modalService: NgbModal,
    private feedbackService:FeedbackServiceService,
    )
    {
      this.form = new FormGroup({
        experienceRating : new FormControl,
        paymentRating:  new FormControl,
        serviceRating:  new FormControl,
        feedbackComment:  new FormControl,
      })
    }


	async onSubmit() {
		const popUp = this.modalService.open(PopComponent);
    console.log(this.form.value)
    const response = await this.feedbackService.addFeedback(this.form.value);
    console.log(response);
	}

}
