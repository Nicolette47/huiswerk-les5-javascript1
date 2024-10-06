//OPDRACHT 1

//console.log(departments);
//Opdracht 1a:
//console.log('De afdeling Sales heeft ' + departments.sales.numberOfEmployees + ' employees');

//Opdracht 1b
//console.log('Marketing is een leuke afdeling om te werken.' + departments.marketing.description);

//Opdracht 1c:
//console.log('De afdeling Customer service heeft ' + departments["customer-service"].numberOfEmployees + ' medewerkers');

//  Opdracht 1d:
//console.log('Sales is een uitdagende afdeling om te werken als Verkoopmanager. ' + departments.sales.jobs[1].description + ' .');



//OPDRACHT 2
//Opdracht 2A
//const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: marketing / sales / customer-service');
//console.log(userInput);

// OPDRACHT 2 B EN 2C
// input :  marketing
//output : beschrijving afdeling (departments.marketing.description)
// Stappenplan: 1. prompt.  2. gekozen afdeling opgeslagen in userInput. 3 if statement of case switch check wat is ingevuld. En goede match dan komt de beschrijving :  "Je koos [ingevoerde keuze]. [beschrijving afdeling]"

//if (userInput === 'marketing') {
//console.log('je koos ' + userInput + '. ' + departments.marketing.description);
//} else if (userInput === 'sales') {
//console.log('je koos ' + userInput + '. ' + departments.sales.description);
//} else if (userInput === 'customer-service') {
//  console.log('je koos ' + userInput + '. ' + departments["customer-service"].description);
//} else {
// console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.');
//}


// OPDRACHT 3

//const choiceMarketing = prompt('Je koos marketing. Over welke functie wil je meer weten? Voor een getal in tussen 0 en 3 in.' + '\n' +
//  '0: ' + departments.marketing.jobs[0].title + '\n' +
//'1: ' + departments.marketing.jobs[1].title + '\n' +
// '2: ' + departments.marketing.jobs[2].title + '\n' +
//'3: ' + departments.marketing.jobs[3].title);
//console.log(choiceMarketing);

// input: gebruiker vult een getal in
// output: gebruiker krijgt beschrijving  "Je koos [ingevoerde keuze]. [beschrijving afdeling]"
//Stappenplan:
// 1. gebruiker krijgt prompt met keuze 1 tot 3
// 2. getal wordt vergeleken met de cases van switch statement
// 3. console logt dan de output "Je koos [titel ingevoerde marketing functie]. Een uitdagende rol! [beschrijving ingevoerde marketing functie]"


//switch (choiceMarketing) {
//  case '0':
//     console.log('Je koos ' + departments.marketing.jobs[0].title + '. Een uitdagende rol! ' + departments.marketing.jobs[0].description + '.');
//   break;
//case '1':
//  console.log('Je koos ' + departments.marketing.jobs[1].title + '. Een uitdagende rol! ' + departments.marketing.jobs[1].description + '.');
//break;
//case '2':
//  console.log('Je koos ' + departments.marketing.jobs[2].title + '. Een uitdagende rol! ' + departments.marketing.jobs[2].description + '.');
//break;
//case '3':
//   console.log('Je koos ' + departments.marketing.jobs[3].title + '. Een uitdagende rol! ' + departments.marketing.jobs[3].description + '.');
// break;
//default:
//   console.log('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.');
//}


//OPDRACHT 4A
const inputDepartment = prompt('Over welke afdeling wil je meer informatie? Kies uit: marketing / sales / customer-service');

let chosenDepartment = ' ';

if (inputDepartment === 'marketing') {
    chosenDepartment = 'marketing';
    console.log(chosenDepartment + ' is een leuke afdeling om te werken. Er werken op dit moment ' + departments[chosenDepartment].numberOfEmployees + ' medewerkers');
} else if (inputDepartment === 'sales') {
    chosenDepartment = `sales`;
    console.log(chosenDepartment + ' is een leuke afdeling om te werken. Er werken op dit moment ' + departments[chosenDepartment].numberOfEmployees + ' medewerkers');
} else if ((inputDepartment === 'customer-service') || (inputDepartment=== 'customer service')) {
    chosenDepartment = 'customer-service';
    console.log(chosenDepartment + ' is een leuke afdeling om te werken. Er werken op dit moment ' + departments[chosenDepartment].numberOfEmployees + ' medewerkers');
} else {
    const errorMessage1 = 'Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.';
    console.error(errorMessage1);
    document.getElementById('error-message').textContent = errorMessage1;
}

const jobSelection = prompt('Je koos ' + chosenDepartment +'. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.'+' \n'+
    '0: ' + departments[chosenDepartment].jobs[0].title + '\n' +
    '1: ' + departments[chosenDepartment].jobs[1].title + '\n' +
    '2: ' + departments[chosenDepartment].jobs[2].title + '\n' +
    '3: ' + departments[chosenDepartment].jobs[3].title);

let chosenJob = ' ';

switch (jobSelection) {
    case '0':
        chosenJob = departments[chosenDepartment].jobs[0];
        console.log('Je koos ' + departments[chosenDepartment].jobs[0].title + '. Een uitdagende rol! ' + departments[chosenDepartment].jobs[0].description + '.');
        break;
    case '1':
        chosenJob = departments[chosenDepartment].jobs[1];
        console.log('Je koos ' + departments[chosenDepartment].jobs[1].title + '. Een uitdagende rol! ' + departments[chosenDepartment].jobs[1].description + '.');
        break;
    case '2':
        chosenJob = departments[chosenDepartment].jobs[2];
        console.log('Je koos ' + departments[chosenDepartment].jobs[2].title + '. Een uitdagende rol! ' + departments[chosenDepartment].jobs[2].description + '.');
        break;
    case '3':
        chosenJob = departments[chosenDepartment].jobs[3];
        console.log('Je koos ' + departments[chosenDepartment].jobs[3].title + '. Een uitdagende rol! ' + departments[chosenDepartment].jobs[3].description + '.');
        break;
    default:
        const errorMessage2 = 'Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.';
        console.log(errorMessage2);
        document.getElementById('error-message').textContent = errorMessage2;
}





//OPDRACHT 5 BONUS

//document.getElementById('role-title').textContent = 'Nicolette van Zeijl';
//document.getElementById('department-description').textContent = 'pannenkoeken';

if ((jobSelection >= 0) && (jobSelection <=3)) {
document.getElementById('role-title').textContent = inputDepartment;
document.getElementById('department-description').textContent = departments[chosenDepartment].description;
document.getElementById('role-description').textContent = chosenJob.description;
}