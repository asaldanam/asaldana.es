import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { curriculum } from '../interfaces/curriculum.interface';

@Injectable()
export class FirebaseService {

  private itemsCollection: AngularFirestoreCollection<curriculum>;
  public cv:any = [];
  public prueba:string = "esto es una prueba";

  constructor(private afs: AngularFirestore) {
    console.log('fireservice works!')
  }

  getCurriculum() {
    this.itemsCollection = this.afs.collection<curriculum>('curriculum');
    return this.itemsCollection.valueChanges().map((resp: curriculum[]) => {
      this.cv = resp[0];
    });
  }

}
