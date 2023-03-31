import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-button-basic',
  template: `
    <button nz-button nzType="primary" (click)="sendEmail()">Send email</button>
  `,
})
export class NzDemoButtonBasicComponent {
  sendEmail() {
    var api_key = 'key-caca07b54c5abc26da3efa781f98c11b';
    var domain = 'mg.company-tree.com';
    var to = 'galangerison@gmail.com';
    var subject = 'Test Email';
    var template = 'welcome_email';
    var data = {
      from: 'Ison <galangerison@serverless-secure.com>',
      to: to,
      subject: subject,
      // html: `<html><body><h1>Hello there!</h1><p>This is an example email sent with Mailgun.</p></body></html>`,
      template: template,
      'h:X-Mailgun-Variables': JSON.stringify({
        name: 'John',
      }),
    };
    var url = 'https://api.mailgun.net/v3/' + domain + '/messages';
    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + btoa('api:' + api_key),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data),
    })
      .then((response) => {
        console.log('Email sent!');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
