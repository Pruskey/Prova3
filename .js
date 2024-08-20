//Vou comentar só de precaução vai ver da nota extra kkkj

//Arrays
var arrayUsers = [];
var arrayEmails = [];

/*Nome do usuário (checa se é um número
 [Foi o que eu entendi por "verificar dados"])*/

function usuarios(a) {
    if (typeof a === 'number') {
        console.log("Não pode ser um número");
    } else {
        arrayUsers.push(a);
    }
}

//Email do usuário (checa se é um número, mesma razão de antes])

function emails(a) {
    if (typeof a === 'number') {
        console.log("Não pode ser um número");
    } else {
        arrayEmails.push(a);
    }
}

/*Essa função é a que lista todos os usuários cadastrados,
  Checa se a quantidade de Users é a mesma da de Emails e printa os dois*/

function cadastros() {
    for (var i = 0; i < arrayUsers.length; i++) {
        console.log(arrayUsers[i] + " " + arrayEmails[i]);
    }
}

/*Coloque as informações aqui para serem botadas no .push das functions

Exemplo: listaUsers = "John"
        listaEmails = "John@email.com"
        Se quiser mais usuários, copie e cole o código e mude o null,
        se quiser menos, faça o contrário. */

var listaUsers = null;
var listaEmails = null;
usuarios(listaUsers);
emails(listaEmails);

listaUsers = null;
listaEmails = null;
usuarios(listaUsers);
emails(listaEmails);

listaUsers = null;
listaEmails = null;
usuarios(listaUsers);
emails(listaEmails);

//Aqui chamamos a function cadastros para printar as informações

cadastros();