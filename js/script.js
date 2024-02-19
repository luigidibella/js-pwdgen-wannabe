const nome = prompt('Scrivi il tuo nome');

const cognome = prompt('Scrivi il tuo cognome');

const colorePreferito = prompt('Scrivi il colore preferito');

const numero = 24;

const password = nome + cognome + colorePreferito + numero;

console.log(password);

document.getElementById('output').innerHTML = 
` 
<p>Ciao ${nome}, la tua password è: ${password} </p>
`;