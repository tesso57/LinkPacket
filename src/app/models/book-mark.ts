import {AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from './user';
import {Tag} from './tag';

export interface BookMark {
  uid: string;
  user: AngularFirestoreDocument<User>;
  tags: AngularFirestoreDocument<Tag>[];
}
