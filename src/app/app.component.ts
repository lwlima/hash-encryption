import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HASH-ENCRYPTION';
  text: string = '';
  type: string = '';
  hash: string = '';

  encrypt = (text: string, type: string): string => {
    let md5 = (text: string): string => {
      return this.hash = '';
    }

    let cbc = (text: string): string => {
      return this.hash = '';
    }

    let hmac = (text: string): string => {
      return this.hash = '';
    }

    let mac = (text: string): string => {
      return this.hash = '';
    }

    let sha1 = (text: string): string => {
      return this.hash = '';
    }

    let sha2 = (text: string): string => {
      return this.hash = '';
    }

    var methods: any = {
      'md5':  md5(text),
      'cbc':  cbc(text),
      'hmac': hmac(text),
      'mac':  mac(text),
      'sha1': sha1(text),
      'sha2': sha2(text),
    };

    return methods[type]();
  }
}
