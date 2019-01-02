import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Financa } from '../models/financa';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FinanceServiceService {

  private itemsCollection: AngularFirestoreCollection<Financa>;

  constructor(private db: AngularFirestore, public snackBar: MatSnackBar, private router: Router) {
    //this.itemsCollection = this.db.collection<Financa>("Financas");
  }

  listFincancas(): Observable<Financa[]> {
    return this.db.collection<Financa>("Financas").snapshotChanges().pipe(
      map(
        changes => {
          return changes.map(result => {
            const data = result.payload.doc.data();
            data.id = result.payload.doc.id;
            return data;
          })
        }
      )
    )
  }

  listFinancasOrderDate(): Observable<Financa[]> {
    return this.db.collection<Financa>("Financas").valueChanges();
  }

  saveFinance(finance: Financa) {
    debugger
    this.db.collection("Financas").add(finance);
    this.router.navigate(['/listarFinanças']);
  }

  deleteFinance(id) {
    this.db.collection("Financas").doc(id).delete().then((doc) => {
      this.openSnackBar('Finança deletada com sucesso!', '');
    }).catch(function (error) {
      this.openSnackBar('Houve um erro ao deletar a finança!', '');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });

  }

}
