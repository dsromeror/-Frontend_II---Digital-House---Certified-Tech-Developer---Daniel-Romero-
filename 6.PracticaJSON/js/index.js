const jsonData = `
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`;

//Recorrer el JSON e insertar en el listado del html los nombres de los miembros
function recorrerMiembros() {
  const miembros = JSON.parse(jsonData).members;
  miembros.forEach( miembro => {
    renderizar(miembro);
  })
};

function renderizar(miembro){
  const miembros = document.querySelector('#miembros');
  const template = `
  <li class="personajes"">
    <h3>${miembro.name}</h3>
    <div>Edad: ${miembro.age}</div>
    <div>Identidad Secreta: ${miembro.secretIdentity}</div>
    <div>Superpoderes: ${miembro.powers.join(', ')}</div>
  </li>
  `;
  miembros.innerHTML += template;
}

recorrerMiembros();