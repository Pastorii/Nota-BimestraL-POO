import { Aluno} from "./aluno";
import prompt from 'prompt-sync';

let control: Aluno = new Aluno(0, 0, 120);
let teclado = prompt();
let option: number = 0;


while (option !== 9) {
    console.log(`---Boletim Do Aluno--- ๐จโ๐`);
    console.log('1. ๐งพ--Digite sua Nota BIMESTRAL--๐งพ');
    console.log('.       ---Valendo uma ๐--- ');
    console.log('9.                   ---Sair--- ๐ช');
    console.log('=================================');

    option = +teclado('Ecolha uma aรงรฃo : ');

    switch (option) {
        case 1:
            let b1: number = +teclado('Digite a Nota do Primeiro Bimestre: ');
            let b2: number = +teclado('Digite a Nota do Segundo Bimestre: ');
            control.permitida(120,b1,b2);
            console.log(control.prova
                ());
            break;
        
        default:
            break;
    }
}