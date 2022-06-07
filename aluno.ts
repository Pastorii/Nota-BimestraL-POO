export class Aluno {
    constructor(
       private _bimestre01: number,
       private _bimestre02: number,
       private _nota: number 

    ) { }

    
    public get bimestre01() : number {
        return this._bimestre01;
    }
    
    
    public set bimestre01(bimestre01: number) {
        this._bimestre01 = bimestre01;
    }

    
    public get bimestre02() : number {
        return this._bimestre02;
    }

    
    public set bimestre02(bimestre02 : number) {
        this._bimestre02 = bimestre02;
    }

    
    public get nota() : number {
        return this._nota;

    }

    public set nota(nota : number) {
        this._nota = nota;
    }
    
    permitida(valor: number,b1: number,b2: number): void {
        this.nota = valor;
        this._bimestre01 = b1;
        this._bimestre02 = b2;
      
    }

    prova(): void {
        this.nota = (this.bimestre01 + this.bimestre02)/2;
        if (this.nota <= 59.9) {
            console.log('ALUNO REPROVADO! ❌ ');
        }else{
            console.log('ALUNO APROVADO! ✅ ');
        }
        console.log('NOTA FINAL DO ALUNO:  🎓  ' +  this.nota);
    }

    
    
}