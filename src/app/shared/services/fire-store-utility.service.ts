import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { tap, sample } from 'rxjs/operators';
// import { User } from '../shared/models/user';
import { map } from 'rxjs/operators';
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class FireStoreUtilityService {

  USERS_COLLECTION: string = 'users';

  constructor(
    private afs: AngularFirestore,
    private router: Router
  ) { }

  public addToCollection(collectionName, data) {
    const collectionRef = this.afs.collection(collectionName);
    return collectionRef.add(data);
  }





  public getCollectionRef(name) {
    return this.afs.collection(name);
  }

  public updateUserData(uid, data) {
    const collectionRef = this.afs.collection(this.USERS_COLLECTION);
    return collectionRef.doc(uid).update(data)
  }
  public setUserData(uid, data) {
    const collectionRef = this.afs.collection(this.USERS_COLLECTION);
    return collectionRef.doc(uid).set(data, { merge: true });
  }

  public addToUserSubcollection(userData, prop, newData) {
    const collectionRef = this.afs.collection(this.USERS_COLLECTION);
    let dataToSave = { [prop]: userData[prop] || [] };
    dataToSave[prop].push(newData);
    console.log('final data', dataToSave);
    // return collectionRef.doc(userData.uid).set(dataToSave, {merge:true});
    return collectionRef.doc(userData.uid).update(dataToSave);
  }

  public removeFromUserSubCollection(userData, prop, formData) {
    const collectionRef = this.afs.collection(this.USERS_COLLECTION);
    const removedExperience = _.remove(userData[prop], {
      fireStoreId: formData.fireStoreId
    });
    let dataToSave = { [prop]: userData[prop] || [] };

    console.log('final data', dataToSave);
    // return collectionRef.doc(userData.uid).set(dataToSave, {merge:true});
    return collectionRef.doc(userData.uid).update(dataToSave);
  }

  updateUserSubCollection(userData, prop, formData){
    const collectionRef = this.afs.collection(this.USERS_COLLECTION);
    _.remove(userData[prop], {
      fireStoreId: formData.fireStoreId
    });
    let dataToSave = { [prop]: userData[prop] || [] };
    dataToSave[prop].push(formData);
    console.log('final data', dataToSave);
    // return collectionRef.doc(userData.uid).set(dataToSave, {merge:true});
    return collectionRef.doc(userData.uid).update(dataToSave);
  }

  public updateUserProperty(userData, experience, newData) {
    const usersCollection = this.afs.collection(this.USERS_COLLECTION);
    const userDocument = usersCollection.doc(userData.uid);
    // const experienceCollection = userDocument.collection('experience', ref => ref.where('id', '==', experience.id));
    return userDocument;

  }

  public pushToAnyProperty(doc, prop, newData) {
    let dataToSave = { [prop]: doc[prop] || [] };
    dataToSave[prop].push(newData);
    console.log('final data', dataToSave);
    return this.afs.collection(doc.collectionName).doc(doc.id).update(dataToSave);
  }

  public createId() {
    return this.afs.createId();
  }



  public getDocWithId(collection, key, value) {
    const collectionRef = this.afs.collection(collection, ref => ref.where(key, '==', value));
    // collectionRef.valueChanges().subscribe( res => {
    //   console.log(res);
    // })
    const documentWithId = collectionRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const firestoreId = a.payload.doc.id;
        return { firestoreId, ...data };
      }))
    );

    return documentWithId;

  }
  public updateDocument(collectionName, id, data) {
    console.log('id', id);
    return this.afs.collection(collectionName).doc(id).update(data);
  }

  /**
   * 
   * @param collectionName name of the collection
   * @param cusomtDocId the name of unique id created from firestore's creatId() method or any unique identifier
   * @param customDocIdVal the value of customDocId
   * @param updatePayload the new form data which will replace the existing data
   */
  // public updateDoc(options): any {
  //   this.getDocWithId(options.collectionName, options.cusomtDocId, options.customDocIdVal).take(1).subscribe(
  //     data => {
  //       const docId = data[0].firestoreId;
  //       options.currentDoc = data[0];
  //       return this.afs.collection(options.collectionName).doc(docId).update(options.updatePayload).then(
  //         () => {
  //           options.updatePayload.fireStoreId = docId;
  //           this.addToChangeHistory(options);
  //           alert(options.successMessage);
  //         }
  //       ).catch(err => {
  //         alert(options.failureMessage)
  //       });
  //     }
  //   )
  // }

  public addToChangeHistory(options){
    const changeHistory = {
      changeId: this.createId(),
      currentDoc: options.currentDoc, 
      changedDoc: options.updatePayload
    }
    this.addToCollection('changeHistory', changeHistory)
  }



  public deleteUserPropertyItem() {

  }

}
