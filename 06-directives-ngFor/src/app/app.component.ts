import { Membro } from './membro.interface';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [
        'app.component.scss'
    ]
})
export class AppComponent{
    membros: Membro[];
    musicas = ['Moster', 'Love Shot', 'Tempo', 'Ko Ko Bop', 'Growl'];

    constructor(){
        this.membros = [
            { nome: 'Xiumin -- Kim Minseok', posicao: 'vocalista, rapper e dançarino', idade: 30, ativo: false },
            { nome: 'Suho -- Kim Junmyeon', posicao: 'vocalista principal e lider', idade: 29, ativo: true },
            { nome: 'Lay -- Zhang Yixing', posicao: 'vocalista e dançarino principal', idade: 28, ativo: false },
            { nome: 'Baekhyun -- Byun Baekhyun', posicao: 'vocalista principal', idade: 28, ativo: true },
            { nome: 'Chen -- Kim Jongdae', posicao: 'vocalista principal', idade: 27, ativo: true },
            { nome: 'Chanyeol -- Park Chanyeol', posicao: 'vocalista e rapper principal', idade: 27, ativo: true },
            { nome: 'D.O -- Do Kyungsoo', posicao: 'vocalista principal', idade: 27, ativo: false },
            { nome: 'Kai -- Kim Jongin', posicao: 'dançarino principal, rapper e center', idade: 26, ativo: true },
            { nome: 'Sehun -- Oh Sehun', posicao: 'dançarino principal, rapper lider e maknae', idade: 26, ativo: true },
        ];
    }
}