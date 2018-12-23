import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { FireStoreUtilityService } from '../../../shared/services/fire-store-utility.service';
// storecollection
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import * as _ from "lodash";

@Component({
  selector: 'app-restaurant-menu-form',
  templateUrl: './restaurant-menu-form.component.html',
  styleUrls: ['./restaurant-menu-form.component.css']
})

export class RestaurantMenuFormComponent implements OnInit {

  addMenuForm: FormGroup;

  menuCategory: AbstractControl;
  itemTitle: AbstractControl;
  itemDescription: AbstractControl;
  price: AbstractControl;

  public addRestaurantMenuCollection: AngularFirestoreCollection<any>;
  public addRestaurantMenuObservable: Observable<any[]>;

  sections = [];
  selectedName;
  businessId;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private fsu: FireStoreUtilityService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addMenuForm = this.fb.group({
      'menuCategory': ['', [Validators.required]],
      'itemTitle': ['', [Validators.required]],
      'itemDescription': ['', [Validators.required]],
      'price': ['', [Validators.required]]
    });

    this.menuCategory = this.addMenuForm.controls['menuCategory'];
    this.itemTitle = this.addMenuForm.controls['itemTitle'];
    this.itemDescription = this.addMenuForm.controls['itemDescription'];
    this.price = this.addMenuForm.controls['price'];

    this.addRestaurantMenuCollection = this.afs.collection('restaurantMenus');
    this.addRestaurantMenuObservable = this.addRestaurantMenuCollection.valueChanges();
    this.addRestaurantMenuObservable.subscribe(restaurantMenus => {
      console.log('restaurantMenus', restaurantMenus);
    })

    this.businessId = this.route.snapshot.params['businessid'];
    console.log('business ID: ', this.businessId);
  }

  addItem() {
    const item = {
      name: this.itemTitle.value,
      description: this.itemDescription.value,
      price: this.price.value
    }
    const w = this.sections.find(k => k.name == this.selectedName);
    w.foodItems.push(item);
    console.log('after addItem', this.sections);
  }

  addSection(section) {
    this.selectCategory(section);
    const sec = {
      name: section,
      description: '',
      foodItems: []
    }
    if (!this.sections.find(k => k.name == section)) {
      this.sections.push(sec);
    } else {
      alert('duplicate menu section entered.');
    }
    console.log('Section', this.sections);
  }

  selectCategory(e) {
    this.selectedName = e;
  }

  itemDelete(sectionsName, foodName) {
    const selectedSection = this.sections.find(k => k.name == sectionsName);
    console.log('section selected to delete from', selectedSection);
    const selectedFoodNameIndex = selectedSection.foodItems.map(function (item) { return item.name; }).indexOf(foodName);
    console.log(selectedFoodNameIndex);
    selectedSection.foodItems.splice(selectedFoodNameIndex, 1);
    console.log(selectedSection.foodItems);
  }

  onSubmit() {
    const payload = { businessId: this.businessId, sections: this.sections }
    this.db.collection('restaurantMenus').add(payload).then(() => {
      alert('added menu successfully');
      console.log('addig to menu  Requests');
    })
    this.sections = [];
    this.addMenuForm.reset();
  }

}
