import {AngularFirestoreDocument} from '@angular/fire/firestore';
import {BookMark} from './book-mark';

export interface Tag {
  uid: string;
  bookMarkRefs: AngularFirestoreDocument<BookMark>[];
  name: string;
}
