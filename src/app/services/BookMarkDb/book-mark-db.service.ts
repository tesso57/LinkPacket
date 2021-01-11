import {Injectable} from '@angular/core';
import {User} from '../../models/user';
import {FunctionUrlService} from '../FunctionUrl/function-url.service';
import {BookMark} from '../../models/book-mark';
import {AngularFireFunctions} from '@angular/fire/functions';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookMarkDbService {

  constructor(
    private functionUrlService: FunctionUrlService,
    private aff: AngularFireFunctions
  ) {
  }

  getBookMarkFromUser(user: User): Observable<BookMark[]> {
    const callable =  this.aff.httpsCallable(this.functionUrlService.getBookMarkFromUserId);
    return  callable({text: user.uid});
  }
}
