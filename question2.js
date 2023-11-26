// 2. (3p) Skapa en funktion, removeDuplicates, som tar en array
// med element och returnerar en ny array där alla duplicerade
// element har tagits bort och endast unika element finns kvar.

const arry = [1, 2, 1, 3, 4, 3, 5];

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

const uniqueArray = removeDuplicates(arry);
console.log(uniqueArray);