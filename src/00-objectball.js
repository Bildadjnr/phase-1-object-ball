// creating a function gameObject

function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
}

console.log(gameObject())


// function 
function numPointsScored(playerName) {
  let game = gameObject();
  if (game.home.players[playerName]) {
    return game.home.players[playerName].points;
  }

  if (game.away.players[playerName]) {
    return game.away.players[playerName].points;
  }
}

console.log(numPointsScored("Ben Gordon"));

// 2nd function
function shoeSize(playerName) {
  let shoe = gameObject();
  if (shoe.home.players[playerName]) {
    return shoe.home.players[playerName].shoe;
  }
  if (shoe.away.players[playerName]) {
    return shoe.away.players[playerName].shoe;
  }
}
console.log(shoeSize("Ben Gordon"));

//function teamColors
function getTeamColorsByPlayer(playerName) {
  const game = gameObject();

  // going to Home Team
  if (game.home && game.home.players) {
    if (game.home.players[playerName]) {
      return game.home.colors;
    }
  }

  // going to away team
  if (game.away && game.away.players) {
    if (game.away.players[playerName]) {
      return game.away.colors;
    }
  }

  return "Sorry, I can’t find that player or their team!";
}

// function teamNames that operates on the game object to return an array of the team names.
function teamNames() {
  let game = gameObject();
  let myTeamNames = [];
  if (game.home && game.home.teamName) {
    myTeamNames.push(game.home.teamName);
  }
  if (game.away && game.away.teamName) {
    myTeamNames.push(game.away.teamName);
  }
  return myTeamNames
}

// function playerNumbers, that takes in an argument of a team name 
// and returns an array of the jersey numbers for that team.
function playerNumbers(teamName) {
  let box = gameObject();
  // creating an empty box for jersey numbers
  let jerseyNumbers = [];
  // then I checked if its an home team and if teamName matches the one I will give
  if (box.home && box.home.teamName === teamName);
  {
    if (box.home.players) {
      // I am looking at each player in the home team
      for (let playerName in box.home.players) {
        let player = box.home.players[playerName];
        if (player.number !== undefined) {
          jerseyNumbers.push(player.number);
        }
      }
    }
  }
  if (box.away && box.away.teamName === teamName);
  {
    if (box.away.players) {
      for (let playerName in box.away.players) {
        let player = box.away.players[playerName];
        if (player.number !== undefined) {
          jerseyNumbers.push(player.number);
        }
      }
    }
  }
  return jerseyNumbers;
}



// function playerStats  that takes in an argument of a player's name 
// and returns an object of that player's stats.
function playerStats(playerName) {
  let container = gameObject();
  if (container.home && container.home.players) {
    if (container.home.players[playerName]) {
      return container.home.players[playerName];
    }
  }
  if (container.away && container.away.players) {
    if (container.away.players[playerName]) {
      return container.away.players[playerName];
    }
  }
}

// function bigShoeRebounds that will return the number of rebounds associated 
// with the player that has the largest shoe size.
function bigShoeRebounds() {
  let game = gameObject();
  let maxShoeSize = -Infinity;
  let maxShoePlayerRebounds = 0;
  if (game.home.players) {
    console.log("Checking Home Team Players");
    for (let playerName in game.home.players) {
      let player = game.home.players[playerName];
      console.log(
        `player: ${playerName}, shoe size: ${player.shoe}, rebounds: ${player.rebounds}`
      );
      if (player.shoe > maxShoeSize) {
        maxShoeSize = player.shoe;
        maxShoePlayerRebounds = player.rebounds;
        console.log(
          `New biggest shoe size! ${playerName} with shoe size ${maxShoeSize}, rebounds: ${maxShoePlayerRebounds}`
        );
      }
    }
  }
  if (game.away.players) {
    console.log("Checking Away Team Players");
    for (let playerName in game.away.players) {
      let player = game.away.players[playerName];
      console.log(
        `Player: ${playerName}, shoe size: ${player.shoe}, rebounds: ${player.rebounds}`
      );
      if (player.shoe > maxShoeSize) {
        maxShoeSize = player.shoe;
        maxShoePlayerRebounds = player.rebounds;
        console.log(
          `New Biggesst shoe size! ${playerName} with shoe size ${maxShoeSize}, rebounds: ${maxShoePlayerRebounds}`
        );
      }
    }
  }
  console.log(`final results: Player with biggest shoe size has ${maxShoePlayerRebounds}
        rebounds`);
  return maxShoePlayerRebounds;
}


//  function mostPointsScored that returns a player that has the most points
function mostPointsScored() {
  const game = gameObject();
  // I wanted to keep track of the highest points and the player with that score
  let maxPoints = 0;
  let topScorer = "";
  // let me check the Home Team's players
  if (game.home && game.home.players) {
    console.log("Checking Home Team Players");
    // I want look at each player one by one to compare their points.
    for (let playerName in game.home.players) {
      const player = game.home.players[playerName];
      console.log(`Player: ${playerName}, Points: ${player.points}`);
      if (player.points > maxPoints) {
        maxPoints = player.points;
        topScorer = playerName;
        console.log(`New Top Scorer! ${playerName} with ${maxPoints} points`);
      }
    }
  }

  // let me check the away team players now
  if (game.away && game.away.players) {
    console.log("Checking Away Team Players");
    for (let playerName in game.away.players) {
      const player = game.away.players[playerName];
      console.log(`Player: ${playerName}, Points: ${player.points}`);
      if (player.points > maxPoints) {
        maxPoints = player.points;
        topScorer = playerName;
        console.log(`New Top Scorer! ${playerName} with ${maxPoints} points`);
      }
    }
  }
  // I am asking Js to return the name of the player with the most points
  return `Final Resuls: Top scorer is ${topScorer} with ${maxPoints} points`;
}


// function winningTeam that returns team which had the most points
function winningTeam() {
  const game = gameObject();
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;
  if (game.home && game.home.players) {
    console.log("Checking Home team Players Now");
    for (let playerName in game.home.players) {
      const player = game.home.players[playerName];
      console.log(`Player: ${playerName} Points: ${player.points}`);
      homeTeamPoints += player.points;
      console.log(`Home team has ${homeTeamPoints} points`);
    }
  }

  if (game.away && game.away.players) {
    console.log("Checking away team Players Now");
    for (let playerName in game.away.players) {
      const player = game.away.players[playerName];
      console.log(`Player: ${playerName} Points: ${player.points}`);
      awayTeamPoints += player.points;
      console.log(`away team has ${awayTeamPoints} points`);
    }
  }

  console.log(`Home team total: ${homeTeamPoints} points`);
  console.log(`Away team total: ${awayTeamPoints} points`);
  if (homeTeamPoints > awayTeamPoints) {
    console.log(`Home Team wins`);
    return game.home.teamName;
  } else if (awayTeamPoints > homeTeamPoints) {
    console.log(`away Team wins`);
    return game.away.teamName;
  } else {
    console.log(`It is a tie!`);
    return `it is a tie`;
  }
}

// creating a function playerWithLongestName that returns a player with longest name
function playerWithLongestname() {
  const game = gameObject();
  let longestNamelength = 0;
  let playerWithLongest = "";

  if (game.home && game.home.players) {
    console.log("Checking the Home team Players");
    for (let playerName in game.home.players) {
      console.log(`Player: ${playerName}, Name length: ${playerName.length}`);
      if (playerName.length > longestNamelength) {
        longestNamelength = playerName.length;
        playerWithLongest = playerName;
        console.log(
          `New longest name1 ${playerName} with length ${longestNamelength}`
        );
      }
    }
  }

  if (game.away && game.away.players) {
    console.log("Checking the away team Players");
    for (let playerName in game.away.players) {
      console.log(`Player: ${playerName}, Name length: ${playerName.length}`);
      if (playerName.length > longestNamelength) {
        longestNamelength = playerName.length;
        playerWithLongest = playerName;
        console.log(
          `New longest name1 ${playerName} with length ${longestNamelength}`
        );
      }
    }
  }

  console.log(`player with the longest name is ${playerWithLongest} 
        with ${longestNamelength} characters`);
  return playerWithLongest;
}



//  function doesLongNameStealAton that returns true 
// if the player with the longest name had the most steals.
function doesLongNameStealATon() {
  const game = gameObject();
  // started by Finding the player with the longest name
  let longestNameLength = 0;
  let playerWithLongestName = "";
  if (game.home && game.home.players) {
    console.log("Hunting for longest name in Home Team");
    for (let playerName in game.home.players) {
      console.log(`Checking: ${playerName}, Length: ${playerName.length}`);
      if (playerName.length > longestNameLength) {
        longestNameLength = playerName.length;
        playerWithLongestName = playerName;
        console.log(
          `New longest! ${playerName} with ${longestNameLength} letters`
        );
      }
    }
  }
  if (game.away && game.away.players) {
    console.log("Hunting for longest name in Away Team...");
    for (let playerName in game.away.players) {
      console.log(`Checking: ${playerName}, Length: ${playerName.length}`);
      if (playerName.length > longestNameLength) {
        longestNameLength = playerName.length;
        playerWithLongestName = playerName;
        console.log(
          `New longest! ${playerName} with ${longestNameLength} letters`
        );
      }
    }
  }
  console.log(
    `Longest name found: ${playerWithLongestName} (${longestNameLength} letters)`
  );

  // I want to Find the player with the most steals
  let maxSteals = 0;
  let playerWithMostSteals = "";
  if (game.home && game.home.players) {
    console.log("Hunting for most steals in Home Team...");
    for (let playerName in game.home.players) {
      const player = game.home.players[playerName];
      console.log(`Checking: ${playerName}, Steals: ${player.steals}`);
      if (player.steals > maxSteals) {
        maxSteals = player.steals;
        playerWithMostSteals = playerName;
        console.log(`New steal leader! ${playerName} with ${maxSteals} steals`);
      }
    }
  }
  if (game.away && game.away.players) {
    console.log("Hunting for most steals in Away Team...");
    for (let playerName in game.away.players) {
      const player = game.away.players[playerName];
      console.log(`Checking: ${playerName}, Steals: ${player.steals}`);
      if (player.steals > maxSteals) {
        maxSteals = player.steals;
        playerWithMostSteals = playerName;
        console.log(`New steal leader! ${playerName} with ${maxSteals} steals`);
      }
    }
  }
  console.log(
    `Most steals found: ${playerWithMostSteals} (${maxSteals} steals)`
  );

  // time to Compare and return
  const result = playerWithLongestName === playerWithMostSteals;
  console.log(
    `Does ${playerWithLongestName} (longest name) have the most steals like ${playerWithMostSteals}? ${result}`
  );
  return result;
}

