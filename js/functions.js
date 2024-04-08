/**
 * Description
 * @param {string} 
 * @returns {boolean}
 */
function verificaPalindromo(parola) {
    let lunghezza = parola.length;
    let halfLunghezza = Math.floor(lunghezza / 2);
  
    for (let i = 0; i < halfLunghezza; i++) {
    //   console.log(`Confronto ${i}: ${parola[i]} vs ${parola[lunghezza - 1 - i]}`);
      if (parola[i] !== parola[lunghezza - 1 - i]) {
        // console.log("Risultato: Non è palindroma");
        return false;
      }
    }
    console.log("Risultato: È palindroma");
    return true;
  }