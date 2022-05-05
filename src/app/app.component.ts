import { Component } from '@angular/core';
import { Md5 } from 'ts-md5';
import { sha256, sha224 } from 'js-sha256';
import { sha384,sha512, sha512_224, sha512_256 } from 'js-sha512';
import { SHA3 } from 'sha3';

declare let require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HASH-ENCRYPTION';
  textMd5: string = '';
  textSha1: string = '';
  textSha2: string = '';
  textSha3: string = '';
  type: string = '';
  hashMd5: string | Int32Array = '';
  hashSha1: string = '';
  hashSha2_224: string = '';
  hashSha2_256: string = '';
  hashSha2_384: string = '';
  hashSha2_512: string = '';
  hashSha2_512_224: string = '';
  hashSha2_512_256: string = '';
  hashSha3_224: any = null;
  hashSha3_256: any = null;
  hashSha3_384: any = null;
  hashSha3_512: any = null;
  
  encrypt = (type: string): string => {
    let md5 = () => {
      const md5 = new Md5();
      this.hashMd5 = md5.appendStr(this.textMd5).end();
    }

    let sha1 = () => {
      let sha1 = require('sha1');
      this.hashSha1 = sha1(this.textSha1);
    }

    let sha2 = () => {
      this.hashSha2_224 = sha224(this.textSha2);
      this.hashSha2_256 = sha256(this.textSha2);
      this.hashSha2_384 = sha384(this.textSha2);
      this.hashSha2_512 = sha512(this.textSha2);
      this.hashSha2_512_224 = sha512_224(this.textSha2);
      this.hashSha2_512_256 = sha512_256(this.textSha2);
    }

    let sha3 = () => {
      const hash224 = new SHA3(224);
      const hash256 = new SHA3(256);
      const hash384 = new SHA3(384);
      const hash512 = new SHA3(512);
      hash224.update(this.textSha3);
      hash256.update(this.textSha3);
      hash384.update(this.textSha3);
      hash512.update(this.textSha3);
      this.hashSha3_224 = hash224.digest('hex');
      this.hashSha3_256 = hash256.digest('hex');
      this.hashSha3_384 = hash384.digest('hex');
      this.hashSha3_512 = hash512.digest('hex');
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
