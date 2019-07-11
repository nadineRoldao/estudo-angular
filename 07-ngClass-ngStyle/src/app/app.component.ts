import { Membro } from './membro.interface';
import { Component } from '@angular/core';
import { StatusMembro } from './status-membro.enum';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [
        'app.component.scss'
    ]
})
export class AppComponent{
    membros: Membro[];

    constructor(){
        this.membros = [
            { nome: 'Xiumin -- Kim Minseok', posicao: 'vocal e dancer', idade: 30, status: StatusMembro.AFASTADO_TEMPORARIAMENTE },
            { nome: 'Luhan -- Xiao Luhan', posicao: 'main vocal', idade: 30, status: StatusMembro.EX_MEMBRO },
            { nome: 'Kris -- Wu Yifan', posicao: 'rapper', idade: 30, status: StatusMembro.EX_MEMBRO },
            { nome: 'Suho -- Kim Junmyeon', posicao: 'main vocal e leader', idade: 29, status: StatusMembro.ATIVO },
            { nome: 'Lay -- Zhang Yixing', posicao: 'vocal e main dancer', idade: 28, status: StatusMembro.INATIVO },
            { nome: 'Baekhyun -- Byun Baekhyun', posicao: 'main vocal', idade: 28, status: StatusMembro.ATIVO },
            { nome: 'Chen -- Kim Jongdae', posicao: 'main vocal', idade: 27, status: StatusMembro.ATIVO },
            { nome: 'Chanyeol -- Park Chanyeol', posicao: 'vocal, visual e main rapper', idade: 27, status: StatusMembro.ATIVO },
            { nome: 'D.O -- Do Kyungsoo', posicao: 'main vocal', idade: 27, status: StatusMembro.AFASTADO_TEMPORARIAMENTE },
            { nome: 'Tao -- Huang Zitao', posicao: 'dancer', idade: 30, status: StatusMembro.EX_MEMBRO },
            { nome: 'Kai -- Kim Jongin', posicao: 'vocal, visual, main dancer, rapper e center', idade: 26, status: StatusMembro.ATIVO },
            { nome: 'Sehun -- Oh Sehun', posicao: 'main dancer, visual, leader rapper e maknae', idade: 26, status: StatusMembro.ATIVO },
        ];
    }
}