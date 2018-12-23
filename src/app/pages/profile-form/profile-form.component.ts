import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {Router, ActivatedRoute} from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  user:any;
  profileId:string;
  public usersCollection: AngularFirestoreCollection<any>;
  public usersObservable: Observable<any[]>;

  constructor(
    public auth:AuthService,
     private afs: AngularFirestore, 
     private route: ActivatedRoute,
      private router: Router
  ) { }

  setLoggedInUserData(){
    this.auth.user.subscribe(user => {
      this.user = user
      console.log('user data from profile page main',this.user);
    })
   }

  //  setProfileUserData(){
  //   this.usersCollection = this.afs.collection('users', ref => ref.where('uid', '==', this.profileId));
  //   this.usersObservable = this.usersCollection.valueChanges();
  //   this.usersObservable.subscribe( user => {
  //     this.user = user[0];
  //     console.log('other user data from profile page main',this.user);
  //   });
  //  }
  ngOnInit() {
    window.scroll(0,0);
    this.setLoggedInUserData();
    // this.setProfileUserData();
  }

}
