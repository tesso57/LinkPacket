import { Component, OnInit , Input} from '@angular/core';
import { Card } from '../../../models/card';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit {
@Input() cards: Card[];
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.cards);
  }

}
