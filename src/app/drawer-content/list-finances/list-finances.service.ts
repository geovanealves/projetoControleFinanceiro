import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Financa } from 'src/app/models/financa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListFinancesService {

  private itemsCollection: AngularFirestoreCollection<Financa>;

  constructor(private db: AngularFirestore) {
    this.itemsCollection = this.db.collection<Financa>("Financas");
  }

  listFincancas(): Observable<Financa[]> {
    return this.itemsCollection.valueChanges();
  }
}
