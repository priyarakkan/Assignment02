
let lang = prompt('Enter your language code(en, de, en & fr): ');
if (lang == 'es') {
    console.log('Hello World translated in Spanish is: Hola Mundo');
} else if (lang == 'de') {
    console.log('Hello World translated in German is: Hallo Welt');
} else if (lang == 'fr') {
    console.log ('Hello World translated in French is: Bonjour le monde');
}
else{
    console.log('Hello World');
}
