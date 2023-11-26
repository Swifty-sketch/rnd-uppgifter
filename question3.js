// 3. (3p) Skriv en funktion, capitalizeWords, som tar en array av
// strängar som input och returnerar en ny array där varje
// ord börjar med en stor bokstav.

function capitalizeWords(words) {
    var capitalizedWords = []; // Steg 2

    for (var i = 0; i < words.length; i++) { // Steg 3
        var word = words[i];
        var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1); // Steg 4
        capitalizedWords.push(capitalizedWord); // Steg 5
    }

    return capitalizedWords; // Steg 6
}

var words = ['hello', 'world', 'programming'];
var capitalizedWords = capitalizeWords(words);
console.log(capitalizedWords); // Output: ['Hello', 'World', 'Programming']