import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import Feedback from '../interfaces/feedback.interface';

@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  constructor(
    private firestore: Firestore
  ) { }


  addFeedback(feedback:Feedback) {
    const feedbackRef = collection(this.firestore, 'feedback');
    return addDoc(feedbackRef, feedback)
 }
}
