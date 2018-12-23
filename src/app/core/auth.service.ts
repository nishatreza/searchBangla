import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
// import { firebase } from '@firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {User} from '../shared/models/user';
import 'rxjs/add/operator/switchMap';
import { Subscriber } from 'rxjs/Subscriber';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { of } from 'rxjs';


@Injectable()
export class AuthService {
  loggedInUser: any;
  user: Observable<User>;
  uid: any;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
      // Get auth data, then get firestore user document || null
      this.user = this.afAuth.authState
        .switchMap(user => {
          if (user) {
            this.loggedInUser = user;
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null)
          }
        })
  }
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

 facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.oAuthLogin(provider);
  }


  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }

  emailSignUp(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((credential) => {
      this.updateUserData(credential)
    });
  }

  emailSignIn(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public updateUserData(user) {
    // Sets user data to firestore on login
    let roles: any = {};
    let existingPhotoURL: string;
    if (user.roles) {
      if (user.roles.subscriber){
        roles.subscriber = true;
      }else {
        roles.subscriber = false;
      }
      if(user.roles.editor){
        roles.editor = true;
      } else {
        roles.editor = false;
      }
      if(user.roles.admin){
        roles.admin = true;
      } else {
        roles.admin = false;
      }

    }


    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles
    }
    return userRef.set(data, { merge: true })
  }

  updateProfilePic(user){
    
  }

  // public addToUserFavorites(user, content) {
  //   const collectionRef = this.afs.collection('userFavorites');
  //   const data: UserFavorites = {
  //     uid: user.uid,
  //     title: content.animeTitle,
  //     titleSlug: content.titleSlug,
  //     episodeTitleSlug: content.episodeTitleSlug
  //   }
    
  //    return collectionRef.add(data)
  // }

  // public addToRecent(user, content) {
  //   const collectionRef = this.afs.collection('recentlyWatched');
  //   const data: RecentlyWatched = {
  //     uid: user.uid,
  //     title: content.animeTitle,
  //     titleSlug: content.titleSlug,
  //     episodeTitleSlug: content.episodeTitleSlug,
  //     thumbnail:content.animePosterImage,
  //     timeStamp: new Date()
  //   }
    
  //    return collectionRef.add(data)
  // } 

  // public addTofreeCourseRegistration(user, formData) {
  //   const collectionRef = this.afs.collection('freeCourseRegistration');
  //   const data: FreeCourseRegistration = {
  //     user: user,
  //     courseid: formData.courseSelection, 
  //     phone: formData.phone,
  //     collegeGraduate: formData.collegeGraduate,
  //     collegeDegree: (formData.collegeDegree) ? formData.collegeDegree:'nodata',
  //     programmingLanguages:formData.programmingLanguages,
  //     skillSummary:formData.programmingSummary,
  //   }
    
  //    return collectionRef.add(data)
  // }


  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }

    ///// Role-based Authorization //////
  
  canRead(user: User): boolean {
    const allowed = ['admin', 'editor', 'subscriber']
    return this.checkAuthorization(user, allowed)
  }
  
  canEdit(user: User): boolean {
    const allowed = ['admin', 'editor']
    return this.checkAuthorization(user, allowed)
  }
  
  canDelete(user: User): boolean {
    const allowed = ['admin']
    return this.checkAuthorization(user, allowed)
  }
  
  
  
  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false
    for (const role of allowedRoles) {
      if ( user.roles && user.roles[role] ) {
        return true
      }
    }
    return false
  }


}

