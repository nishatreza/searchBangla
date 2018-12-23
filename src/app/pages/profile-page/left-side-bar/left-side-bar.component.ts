import { Component, OnInit, Input} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { LazyLoadImageDirective } from 'ng2-lazyload-image';
@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css'],
  // directives: [ LazyLoadImageDirective]
})
export class LeftSideBarComponent implements OnInit {
  @Input() userData;

  public usersCollection: AngularFirestoreCollection<any> = this.db.collection('users');

  offset = 10;
  defaultImage = "https://lh6.googleusercontent.com/-zHrU7a42acU/AAAAAAAAAAI/AAAAAAAABk4/aPDn3J3Htv4/photo.jpg";

  constructor(
    private db: AngularFirestore,

  ) { }

  ngOnInit() {
  }

}
