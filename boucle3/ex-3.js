for (let i = 0; i <= 100; i++) {
    // De 0 à 50 : affichez un nombre sur deux
    if (i <= 50) {
      if (i % 2 === 0) {
        console.log(i + " : Pair");
      } else {
        console.log(i + " : Impair");
      }
    } 
    // De 51 à 100 : affichez un nombre sur trois
    else {
      if (i % 3 === 0) {
        if (i % 2 === 0) {
          console.log(i + " : Pair");
        } else {
          console.log(i + " : Impair");
        }
      }
    }
  }
  