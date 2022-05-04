import { Component } from '@angular/core';
import { Md5 } from 'ts-md5';

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
    let md2 = (): string => {
      return this.hash = '';
    }

    let md4 = (): string => {
      return this.hash = '';
    }

    let md5 = (): string|Int32Array => {
      const md5 = new Md5();
      this.hash = md5.appendStr(this.text).end();
      return this.hash;
    }

    let sha1 = (): string => {
      return this.hash = '';
    }

    let sha2 = (): string => {
      return this.hash = '';
    }

    let sha3 = (): string => {
      return this.hash = '';
    }

    var methods: any = {
      'md2':  md2,
      'md4':  md4,
      'md5':  md5,
      'sha1': sha1,
      'sha2': sha2,
      'sha3': sha3,
    };

    return methods[type]();
  }
}
