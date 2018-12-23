import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-business-category-menu',
  templateUrl: './business-category-menu.component.html',
  styleUrls: ['./business-category-menu.component.css']
})
export class BusinessCategoryMenuComponent implements OnInit {
  businessCategoryMenu;
  businessListMenu;
  public addRestaurantMenuCollection: AngularFirestoreCollection<any>;
  public addRestaurantMenuObservable: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
  
    private storage: AngularFireStorage,
    private db: AngularFirestore,
  ) { 
    this.businessCategoryMenu = this.route.snapshot.params['link'];
    console.log('business category menu link',this.businessCategoryMenu);
  }

  ngOnInit() {
     
   this.addRestaurantMenuCollection = this.afs.collection('addrestaurantmenu',ref=>ref.where('menustoreId','==',this.businessCategoryMenu));
   this.addRestaurantMenuObservable = this.addRestaurantMenuCollection.valueChanges();
    this.addRestaurantMenuObservable.subscribe(menu => {
      console.log('addrestaurantmenu',menu);
      this.businessListMenu = menu;
     

     })
  }

}
