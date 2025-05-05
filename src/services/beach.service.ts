import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Beach } from '../models/beach';
import { collection, CollectionReference, doc, docData, DocumentData, Firestore, setDoc } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class BeachService {
  private firestore = inject(Firestore);
  private beachCollection: CollectionReference<DocumentData> = collection(this.firestore, 'beaches');

  getAllBeaches(): Observable<Beach[]> {
    return collectionData(this.beachCollection, { idField: 'id' }) as Observable<Beach[]>;
  }
}
