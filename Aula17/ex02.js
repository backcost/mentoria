// 02.  Escreva um programa em JavaScript que exclua uma 
// propriedade de um objeto, imprimindo o objeto antes e 
// depois de excluir a propriedade,


const deleteProperty = (object, key) => {
    console.log(object)
    delete object[key]
    console.log(object)
}

const student = {
    name: 'Marcle Rodrigues',
    grade: 'A',
    age: 26
}    

deleteProperty(student, 'grade');
