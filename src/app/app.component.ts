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
    let md5 = (): string|Int32Array => {
      const md5 = new Md5();
      this.hash = md5.appendStr(this.text).end();
      return this.hash;
    }

    let cbc = (): string => {
      return this.hash = '';
    }

    let hmac = (): string => {
      return this.hash = '';
    }

    let mac = (): string => {
      return this.hash = '';
    }

    let sha1 = (): string => {
      return this.hash = '';
    }

    let sha2 = (): string => {
      return this.hash = '';
    }

    var methods: any = {
      'md5':  md5,
      'cbc':  cbc,
      'hmac': hmac,
      'mac':  mac,
      'sha1': sha1,
      'sha2': sha2,
    };

    return methods[type]();
  }
}
