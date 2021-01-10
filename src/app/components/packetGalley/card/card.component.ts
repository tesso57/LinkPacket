import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public img: string;
  constructor() { }

  ngOnInit(): void {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    const url = CORS_PROXY + 'https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494';

    this.getOGPImage(url);
  }

  private getOGPImage(url: string){
    fetch(url)
    .then((res) => res.text())
    .then((text) => {
      const el = new DOMParser().parseFromString(text, 'text/html');
      const headEls = el.head.children;
      Array.from(headEls).map((v) => {
        const prop = v.getAttribute('property');
        if (prop === 'og:image'){
          console.log(v.getAttribute('content'));
          this.img =  v.getAttribute('content');
        }
      });
    });
  }

}
