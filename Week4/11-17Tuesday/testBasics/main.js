// function worldcounter(num){
//     for(i=0; i <= num; i++) {
//       console.log(i)
//         if(num % 4 === 0){
//           console.log('true');
//           if(num % 100 === 0 && num % 400 !== 0){
//             console.log('double false')
//           }
//         }
//         else{
//           console.log('false')
//         }
//     }
//
// }
//
//  worldcounter(2000);
//
// module.exports = {
//   isLeapYear:isLeapYear
// };
//
//
//
// function isLeapYear(year){
//   var isLeap = false;
//   if(year % 4 === 0){
//     isLeap = true;
//     console.log(isLeap);
//   }
//   if (year % 100 === 0 && year % 400 !==0) {
//     isLeap = false;
//     console.log(isLeap);
//   }
//   else{
//     console.log('this is nothing')
//   }
//   return isLeap;
// }
// isLeapYear(1700);



//tax calc test
function calculate(cost){
  var amountTaxed = 0;

  if(cost <= 10){
    amountTaxed = cost * 0.1;
  }else if(cost > 0){
    amountTaxed += 10 * 0.1;
  }
  cost -= 10;

  if(cost <= 10 && cost > 0){
    amountTaxed += cost * 0.07;
  }else if(cost > 0){
    amountTaxed += 10 * 0.07;
  }
  cost -= 10;

  if(cost <= 10 && cost > 0){
    amountTaxed += cost * 0.05;
  }else if(cost > 0){
    amountTaxed += 10 * 0.05;
  }
  cost -= 10;

  if(cost > 0){
    amountTaxed += cost * 0.03;
  }

  return parseFloat(amountTaxed.toFixed(2),10);

}
