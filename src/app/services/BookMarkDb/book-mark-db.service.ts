import {Injectable} from '@angular/core';
import {FunctionUrlService} from '../FunctionUrl/function-url.service';
import {BookMark} from '../../models/book-mark';
import {Observable} from 'rxjs';
import {UserDbService} from '../UserDb/user-db.service';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from '../../models/user';
import {map, mergeMap} from 'rxjs/operators';


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

  getBookMarkRefsFromUser(userId: string): Observable<AngularFirestoreDocument<BookMark>[]> {
    return this.afs.doc<User>(`users/${userId}`)
      .valueChanges()
      .pipe(
        map(user => user.bookMarkRefs),
      );
  }
}
