class Aluno{

       get id(){
        return this._id;
       }

       get nome(){
        return this._nome;
       }

       set nome(value){
          this._nome = value;
       }

       get email(){
        return this._email;
       }

       get nota(){
        return this._nota;
       }
       
       constructor(id, nome, email, nota){
        this._id = id;
        this._nome = nome;
        this._email= email;
        this._nota =  nota;
       }

       
}

var alunos = [];

 function Adicionar(nome, email, nota){
    alunos.push(new Aluno(alunos.length + 1, nome, email, nota));
 }

 function ImprimirAlunos(pupilsToPrint){
    let divAlunos = window.document.getElementById("divAlunos");
    divAlunos.innerHTML = '';
    pupilsToPrint.forEach(element => {
        let linha = 'Id: ' + element.id;
        linha += ' Nome: ' + element.nome;
        linha += ' Email: ' + element.email;
        linha += ' Nota: ' + element.nota;
        linha += ' Nivel: ' + element.nivel;
        
        divAlunos.innerHTML += linha + '</br>';
    });
}

function AcimaDaMedia(){
    var acima = alunos.filter(x => x.nota > 7);
    this.ImprimirAlunos(acima);
}

function Estudar(id){
    let aluno = alunos[id];
    aluno.nivel++;

    this.ImprimirAlunos(alunos);

}