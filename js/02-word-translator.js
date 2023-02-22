/*Create an application that prompts the user for a language code 
("es", "de", "en", and "fr"). If they enter one of the four codes, 
display the translated version of "Hello World" for the given 
language within the console window. If the user enters 
anything but those four language codes, 
the application should default to English. 
The result should be (for example):

Hello World translated in French is: Bonjour le monde */
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
