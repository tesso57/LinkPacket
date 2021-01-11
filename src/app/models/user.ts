import {AngularFirestoreDocument} from '@angular/fire/firestore';
import {BookMark} from './book-mark';

export interface User {
  uid: string;
  bookMarkRefs?: AngularFirestoreDocument<BookMark>[];
  displayName?: string;
}
