
export default function validaCPF(cpf) {
  let cpfFormated = cpf.replaceAll('.', '');
  cpfFormated = cpfFormated.replace('-', '');
  const cpfFinal = cpfFormated.slice(9, 11);
  if(cpfFormated.length !== 11) return false;

  let total = 0;
  let round = 10;
  for(let i = 0; i < 9; i += 1) {
    total += cpfFormated[i] * round;
    round -= 1;
  }
  let digits;
  if((total * 10) % 11 === 10){
    digits = '0';
  }else{
    digits = ((total * 10) % 11).toString();
  }
  total = 0;
  round = 11;
  for(let i = 0; i < 10; i += 1) {
    total += cpfFormated[i] * round;
    round -= 1;
  }
  if((total * 10) % 11 === 10){
    digits += '0';
  }else{
    digits += ((total * 10) % 11).toString();
  }
  console.log(digits);
  if(digits === cpfFinal) return true;
  return false;
}
