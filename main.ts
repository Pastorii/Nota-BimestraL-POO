import { Aluno} from "./aluno";
import prompt from 'prompt-sync';

let control: Aluno = new Aluno(0, 0, 120);
let teclado = prompt();
let option: number = 0;


while (option !== 9) {
    console.log(`---Boletim Do Aluno--- 👨‍🎓`);
    console.log('1. 🧾--Digite sua Nota BIMESTRAL--🧾');
    console.log('.       ---Valendo uma 🍕--- ');
    console.log('9.                   ---Sair--- 🚪');
    console.log('=================================');

    option = +teclado('Ecolha uma ação : ');

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