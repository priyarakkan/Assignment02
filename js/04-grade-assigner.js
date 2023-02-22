
let score = parseInt(prompt('Enter your score: '));
switch (true) {
    case score >= 90 && score <=100:
        console.log('You received an A');
        break;
    case score >= 80 && score < 90:
        console.log('You received an B');
        break;
    case score >= 70 && score < 80:
        console.log('You received an C');
        break;
    case score >= 60 && score < 70:
        console.log('You received an D');
        break;
    case score >=1 && score < 60:
        console.log('You received an F');
        break;
    default:
        console.log('Enter valid score!');
}


    
