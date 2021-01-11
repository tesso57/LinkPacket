import {Component, OnInit} from '@angular/core';
import {BookMarkDbService} from '../../services/BookMarkDb/book-mark-db.service';
import {User} from '../../models/user';
import {Observable} from 'rxjs';
import {AngularFirestoreDocument} from '@angular/fire/firestore';
import {BookMark} from '../../models/book-mark';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  text = 'aa';
  bookMarks: Observable<BookMark>[] = new Array<Observable<BookMark>>();
  bookMark = this.bookMarks[0];

  constructor(public bookMarkDbService: BookMarkDbService) {
  }

  user: User = {
    uid: 'e0GzJEgM7l24O0gladS9'
  };


  ngOnInit(): void {
    this.bookMarkDbService.getBookMarkRefsFromUser(this.user.uid)
      .subscribe(bookMarkRefs => {
        bookMarkRefs.forEach(bookMarkRef => {
          (bookMarkRef.valueChanges()
            .subscribe(bookmark =>
              console.log(Object.assign({}, bookmark))
            ));
        });
      });
  }

  testButton(): void {
    console.log(Object.assign({}, this.bookMark));
  }
}
