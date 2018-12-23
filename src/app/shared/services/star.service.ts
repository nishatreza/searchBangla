import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface Star {
  uid: any;
  // businessRatingsId: any;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private afs: AngularFirestore) { }
  getUserStars(uid) {
    const starsRef = this.afs.collection('stars', ref => ref.where('userId', '==', uid) );
    return starsRef.valueChanges();
  }

  // Get all stars
  getBusinessStars(businessRatingsId) {
    const starsRef = this.afs.collection('stars', ref => ref.where('businessId', '==', businessRatingsId) );
    return starsRef.valueChanges();
  }

  // Create or update star
  // setStar(uid, businessRatingsId, value)
  setStar(uid, value)
  
  {
    // Star document data
    // const star: Star = { uid, businessRatingsId, value };
    const star: Star = { uid, value };

    // const star: Star = { userId, value };


    // Custom doc ID for relationship
    // const starPath = `stars/${star.uid}_${star.businessRatingsId}`;
    const starPath = `stars/${star.uid}`;

    // const starPath = `stars/${star.userId}`;


    // Set the data, return the promise
    return this.afs.doc(starPath).set(star)
  }

}
