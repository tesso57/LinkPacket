import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-packet-galley',
  templateUrl: './packet-galley.component.html',
  styleUrls: ['./packet-galley.component.scss']
})
export class PacketGalleyComponent implements OnInit {
  public cards: Card[];
  constructor() {
    this.cards  = [
      {title: 'test1', description : 'this is description', url : 'https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494'},
      {title: 'test2', description : 'this is description', url : 'https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494'},
      {title: 'test3', description : 'this is description', url : 'https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494'},
      {title: 'test4', description : 'this is description', url : 'https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494'},
      {title: 'test4', description : 'this is description', url : 'https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494'},
      {title: 'test4', description : 'this is description', url : 'https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494'},
      {title: 'test4', description : 'this is description', url : 'https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494'},
      {title: 'test4', description : 'this is description', url : 'https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494'},
      {title: 'test4', description : 'this is description', url : 'https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494'},
      {title: 'test4', description : 'this is description', url : 'https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494'},
      {title: 'test4', description : 'this is description', url : 'https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494'},
      {title: 'test4', description : 'this is description', url : 'https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494'},
    ]; // ダミーデータ
  }

  ngOnInit(): void {
  }

}
