import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionUrlService {
  constructor() { }
  getBookMarkFromUserId = 'https://us-central1-linkpacket.cloudfunctions.net/getBookMarkFromUserId';
}
