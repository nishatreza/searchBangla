import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {Router, ActivatedRoute} from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
// import { userInfo } from 'os';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  user:any;
  profileId:string;
  public usersCollection: AngularFirestoreCollection<any>;
  public usersObservable: Observable<any[]>;
// experience = this.user.experience;
// experience:any;
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

 
  ngOnInit() {
    window.scroll(0,0);
    this.setLoggedInUserData();
  }

}
