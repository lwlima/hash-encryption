import { Component } from '@angular/core';
import { Md5 } from 'ts-md5';
import { sha256, sha224 } from 'js-sha256';
import { sha384,sha512, sha512_224, sha512_256 } from 'js-sha512';

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
  hashMd5: string | Int32Array = '';
  hashSha1: string = '';
  hashSha2_224: string = '';
  hashSha2_256: string = '';
  hashSha2_384: string = '';
  hashSha2_512: string = '';
  hashSha2_512_224: string = '';
  hashSha2_512_256: string = '';
  
  encrypt = (type: string): string => {
    let md5 = () => {
      const md5 = new Md5();
      this.hashMd5 = md5.appendStr(this.text).end();
    }

    let sha1 = () => {
      let sha1 = require('sha1');
      this.hashSha1 = sha1(this.text);
    }

    let sha2 = () => {
      this.hashSha2_224 = sha224(this.text);
      this.hashSha2_256 = sha256(this.text);
      this.hashSha2_384 = sha384(this.text);
      this.hashSha2_512 = sha512(this.text);
      this.hashSha2_512_224 = sha512_224(this.text);
      this.hashSha2_512_256 = sha512_256(this.text);
    }

    let sha3 = () => {
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
