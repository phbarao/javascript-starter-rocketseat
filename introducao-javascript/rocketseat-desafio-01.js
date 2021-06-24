// 01. Crie uma função que dado o objeto "endereço", retorne: "O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" comnº 1293.":
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP",
};

var myFunction = (objeto) => {
  return `O usuário mora em ${objeto.cidade} / ${objeto.uf}, no bairro ${objeto.bairro}, na rua ${objeto.rua} com nº ${objeto.numero}.`;
};

console.log(myFunction(endereco));

// 02. Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
  while (x <= y) {
    if (x % 2 == 0) {
      console.log(x);
    }
    x++;
  }
}

pares(32, 321);

// 03. Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"e retorna um booleano true/false caso exista ou não. Dica: para verificar se um vetor contém um valor, utilize o método indexOf.
function temHabilidade(skills) {
  console.log(skills.indexOf("Javascript") != -1);
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills);

// 04. Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
  if (anos == 0 || anos == 1) {
    return "Iniciante";
  } else if (anos > 1 && anos <= 3) {
    return "Intermediário";
  } else if (anos >= 4 && anos <= 6) {
    return "Avançado";
  } else if (anos >= 7) {
    return "Jedi";
  } else {
    return "Impossível"; // caso digite nº negativos
  }
}

var anosEstudo = 7;
console.log(experiencia(anosEstudo));

// 05. Dado o seguinte vetor de objetos:
var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"],
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];

function candidato(array) {
  for (var value of array) {
    console.log(
      "O " +
        value.nome +
        " possui as habilidades: " +
        value.habilidades.join(", ")
    );
  }
}

candidato(usuarios);
