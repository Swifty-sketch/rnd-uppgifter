// 1. (3p) Använd forEach för att skapa en funktion, calculateAverage,
// som tar en array av tal som input och returnerar medelvärdet
// av dessa tal.
// tips: Googla hur man räknar ut medelvärdet av ett antal tal

const arr = [1, 5, 3, 7, 3, 0];

function calculateAverage(arr) {
    const arrSum = arr.reduce((partialSum, a) => partialSum + a, 0);
    const medel = arrSum / arr.length;
    return medel;
}

const average = calculateAverage(arr);
console.log(average);