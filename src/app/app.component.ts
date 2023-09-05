import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  banana: string = 'estudo-angular'
  isUpdate = true

  productName = 'initial value'

  products = [
    { name: 'test 123'},
    { name: 'test 456'},
    { name: 'test 789'},
  ]

  altDesc = 'jogo do sonic'
  link = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho_cLt1d2sopagMWOCAUdyr-XyqFEkxInw3VMLdj85N3ZAdvJWGy_8oDLTADgta1azQ1E-Emu7-kJc8_Y8VuX6QO-ajlgq7kCHPSVsERvPRc-D-iu-8IUdBkWQkbQm4DiFQotUbLv-TJLGLo-7e9zy28N3EKKNQmKJkl5hMsnsYCzuJKFVk4736-Zy/s780/super-mario.webp'

  testEventBindind(): void {
    console.log('testando event binding');
  }

}
