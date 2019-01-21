import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Financa } from '../models/financa';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FinanceServiceService {

  financa: Observable<Financa>;

  constructor(private db: AngularFirestore, public snackBar: MatSnackBar, private router: Router) { }

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

  listFincanca(id): Observable<any> {
    return this.db.collection<Financa>("Financas").doc(id).snapshotChanges();
  }

  saveFinance(finance: Financa) {
    this.db.collection("Financas").add(finance);
    this.router.navigate(['/listarFinanças']);
  }

  updateFinance(finance: Financa) {
    this.db.collection("Financas").doc(finance.id).update({
      nome: finance.nome,
      valor: finance.valor,
      tipo: finance.tipo
    })
      .then(() => {
        this.openSnackBar('Finança atualizada com sucesso!', '');
        this.router.navigate(['/listarFinanças']);
      })
      .catch((error) => {
        this.openSnackBar('Houve um erro ao atualizar a finança!', '');
      });
  }

  deleteFinance(id) {
    this.db.collection("Financas").doc(id).delete()
      .then((doc) => {
        this.openSnackBar('Finança deletada com sucesso!', '');
      })
      .catch(function (error) {
        this.openSnackBar('Houve um erro ao deletar a finança!', '');
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });

  }

}
