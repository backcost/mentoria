// 7. Crie um array com datas de quando você foi à academia ou fez 
// atividade fisica. Crie uma função para verficar se dado um array 
// de datas, você fez atividade física no primeiro dia do ano de 2021.


// Entrada => array com datas q vc fez atividade física
// Processamento =>
// 1. função com for para ver se a data está presente no array
// Saída => Dizer se fez ou não atividade física no dia 01/01/2021


const firstDay2021 = (datesArray) => {
    for (let date of datesArray) {
        if (date === '01/01/2021') {
            return `Você fez atividade física no dia 01/01/2021`
        }
    }
    return `Você NÃO fez atividade física no dia 01/01/2021`
}


const physicalActivities = ['14/02/2021', '13/02/2021', '12/02/2021',
                            '11/02/2021', '10/02/2021', '09/02/2021',
                            '08/02/2021', '07/02/2021', '01/01/2021']

console.log(firstDay2021(physicalActivities))

//Marcle
// const datesExercises = [
//     '2020/2/10',
//     '2021/2/4',
//     '2021/2/1',
//     '2021/2/7',
//     '2021/2/5',
//     '2021/1/1',
//   ];
  
//   const madePhysicalActivity = (dates) => {
//     const firstDayOfYear = new Date(2021, 0, 1);
//     let result = 'Não';
  
//     for(let date of dates) {
//       const convertedDate  = new Date(date);
  
//       if (convertedDate.getTime() === firstDayOfYear.getTime()) {
//         result = 'Sim';
//         break;
//       }
//     }
  
//     console.log(result);
//   };
  
//   madePhysicalActivity(datesExercises);