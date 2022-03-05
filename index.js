//Quando precisa recortar cada exercício par rodar certo

//Exercício 1:
//Para ver o resultado, aperte F12 e click em Console.
const mediano = arr => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };
  console.log(mediano([9, 2, 1, 4, 6]));

  //Exercício 2 está em HTML

  //Exercício 3 não consegui entender