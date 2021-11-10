// Serie A Football Tips
// this application will return random tips for Serie A football matches

let teams = ['Atalanta', 'Bologna', 'Cagliari', 'Empoli', 'Fiorentina', 'Genoa', 'Inter', 'Juventus', 'Lazio', 'Milan',
'Napoli', 'Roma', 'Salernitana', 'Sampdoria', 'Sassuolo', 'Spezia', 'Torino', 'Udinese', 'Venezia', 'Verona'];
let results = ['will win against', 'will tie with', 'will lose against'];

// store message components
let homeRandomTeam = teams[Math.floor(Math.random() * teams.length)];
let awayRandomTeam = teams[Math.floor(Math.random() * teams.length)];
let randomResult = results[Math.floor(Math.random() * results.length)];

// create the message
let message = homeRandomTeam + ' ' + randomResult + ' ' + awayRandomTeam;

console.log(message);