import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Beach } from '../models/beach';

@Injectable({
  providedIn: 'root',
})
export class BeachService {
  constructor(private firestore: AngularFirestore) {}

  getAllBeaches(): Observable<Beach[]> {
    return this.firestore.collection<Beach>('beaches').valueChanges();
  }
}
