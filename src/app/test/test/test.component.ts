import {Component, OnInit} from '@angular/core';
import {BookMarkDbService} from '../../services/BookMarkDb/book-mark-db.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(public bookMarkDbService: BookMarkDbService) {
  }

  user: User = {
    uid: 'e0GzJEgM7l24O0gladS9'
  };

  ngOnInit(): void {
  }

}
