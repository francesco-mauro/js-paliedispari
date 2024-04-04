

  
  // prompt
  let parolaUtente = prompt("Inserisci una parola:");
  // verifica
  if (verificaPalindromo(parolaUtente)) {
    alert(parolaUtente + " è un palindromo.");
  } else {
    alert(parolaUtente + " non è un palindromo.");
  }