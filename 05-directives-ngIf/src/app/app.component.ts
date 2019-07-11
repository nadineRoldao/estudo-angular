import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [
        'app.component.scss'
    ]
})
export class AppComponent{
    email: string;
    username: string;

    cadastrar(){
        this.email = 'junmyeon@gmail.com';
        this.username = 'Junmyeon';
    }
}