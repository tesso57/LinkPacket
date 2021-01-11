import {Injectable} from '@angular/core';
import {FunctionUrlService} from '../FunctionUrl/function-url.service';
import {BookMark} from '../../models/book-mark';
import {Observable} from 'rxjs';
import {UserDbService} from '../UserDb/user-db.service';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class BookMarkDbService {
  constructor(
    private functionUrlService: FunctionUrlService,
    private userDbService: UserDbService,
    private afs: AngularFirestore
  ) {
  }

  getBookMarkValueChanges(bookMark: AngularFirestoreDocument<BookMark>): Observable<BookMark> {
    return bookMark.valueChanges();
  }
}
