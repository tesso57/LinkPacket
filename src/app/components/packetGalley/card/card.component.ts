import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() url: string;

  public img: string;
  constructor() { }

  ngOnInit(): void {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

    this.getOGPImage(CORS_PROXY + this.url); // 'https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494' WIP
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
