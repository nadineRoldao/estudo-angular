import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [
        'app.component.scss'
    ]
})
export class AppComponent{
    url: string = 'https://i.ytimg.com/vi/sO_YEdTcVXc/maxresdefault.jpg';
    descricao = 'imagem wwe';
    msg = 'UMA COISA É UMA COISA, OUTRA COISA É OUTRA COISA';
    nome = 'Nadine';

    change():void {
        this.msg = 'EAE BRO';
    }
}