const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function getUserInput(question) {
  return new Promise(resolve => {
    readline.question(question, input => {
      resolve(input);
    });
  });
}

async function main() {
  while (true) {
    const input = await getUserInput(
      'Enter words or digits deviding them in spaces: ');
    const data = input.split(' ');
    const operation = await getUserInput(
      '\nWhat operation would you like to perform?\n1. Words by name (from A to Z)\n2. Show digits from the smallest\n3. Show digits from the biggest\n4. Words by quantity of leters\n5. Show only unique words\n6. Show only all unique values\nSelect (1 - 6) and press ENTER: ');

    switch (operation.toLowerCase()) {
      case '1':
        const wordsByName = data.filter(item => isNaN(item)).sort();
        console.log(wordsByName.toString());
        break;
      case '2':
        const digitsFromSmallest = data.filter(item => !isNaN(item)).sort((a, b) => (a - b));
        console.log(digitsFromSmallest.toString());
        break;
      case '3':
        const digitsFromBiggest = data.filter(item => !isNaN(item)).sort((a, b) => (b - a));
        console.log(digitsFromBiggest.toString());
        break;
      case '4':
        const wordsByLength = data.filter(item => isNaN(item)).sort((a, b) => a.length - b.length);
        console.log(wordsByLength.toString());
        break;
      case '5':
        const uniqueWords = data.filter(item => isNaN(item));
        console.log(([... new Set(uniqueWords)]).toString());
        break;
      case '6':
        console.log(([... new Set(data)]).toString());
        break;
      case 'exit':
        readline.close();
        return;
      default:
        console.log('Wrong answer');
    }
  }
}

main();
