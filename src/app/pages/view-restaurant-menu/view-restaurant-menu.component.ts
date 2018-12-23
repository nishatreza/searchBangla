import { Component, OnInit, Input } from '@angular/core';;
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'firebase/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-view-restaurant-menu',
  templateUrl: './view-restaurant-menu.component.html',
  styleUrls: ['./view-restaurant-menu.component.css']
})
export class ViewRestaurantMenuComponent implements OnInit {

  businessId;
  restaurantMenu;
  restaurantInfo;
  public restaurantMenuCollection: AngularFirestoreCollection<any>;
  public restaurantMenuObservable: Observable<any[]>;
  public restaurantInfoCollection: AngularFirestoreCollection<any>;
  public restaurantInfoObservable: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
    // window.scrollTo(0, 0);

    this.businessId = this.route.snapshot.params['businessid'];
    console.log('business id from restaurant ', this.businessId);

    this.restaurantMenuCollection = this.afs.collection('restaurantMenus', ref => ref.where('businessId', '==', this.businessId));
    this.restaurantMenuObservable = this.restaurantMenuCollection.valueChanges();
    this.restaurantMenuObservable.subscribe(menu => {
      this.restaurantMenu = menu;
      console.log('restaurantMenu', this.restaurantMenu);
    })

    this.restaurantInfoCollection = this.afs.collection('businesses', ref => ref.where('firestoreId', '==', this.businessId));
    this.restaurantInfoObservable = this.restaurantInfoCollection.valueChanges();
    this.restaurantInfoObservable.subscribe(info => {
      this.restaurantInfo = info;
      console.log('restaurantInfo', this.restaurantInfo);
    })
  }

}
