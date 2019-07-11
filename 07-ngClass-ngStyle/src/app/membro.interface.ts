import { StatusMembro } from './status-membro.enum';
export interface Membro{
    nome: string;
    posicao: string;
    idade: number;
    status: StatusMembro;
}