import { Component } from '@angular/core';
import { Md5 } from 'ts-md5';

declare let require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HASH-ENCRYPTION';
  text: string = '';
  type: string = '';
  hash: string | Int32Array = '';

  encrypt = (type: string): string => {
    let md5 = () => {
      const md5 = new Md5();
      this.hash = md5.appendStr(this.text).end();
    }

    let sha1 = () => {
      let sha1 = require('sha1');
      this.hash = sha1(this.text);
    }

    let sha2 = () => {
      return this.hash = '';
    }

    let sha3 = () => {
      return this.hash = '';
    }

    var methods: any = {
      'md5':  md5,
      'sha1': sha1,
      'sha2': sha2,
      'sha3': sha3,
    };

    return methods[type]();
  }
}
