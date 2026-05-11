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
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
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
                "Bismack Biyombo": {
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
                "Brendan Hayword": {
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

// --- Helper: get all players from both teams as a flat object ---
function allPlayers() {
    const game = gameObject();
    return Object.assign({}, game.home.players, game.away.players);
}

// --- Helper: find which team a player belongs to ---
function findTeam(playerName) {
    const game = gameObject();
    if (game.home.players[playerName]) return game.home;
    if (game.away.players[playerName]) return game.away;
    return null;
}

// 1. Returns the home team name
function homeTeamName() {
    return gameObject().home.teamName;
}

// 2. Returns the away team name
function awayTeamName() {
    return gameObject().away.teamName;
}

// 3. Returns the number of points scored by a given player
function numPointsScored(playerName) {
    return allPlayers()[playerName].points;
}

// 4. Returns the shoe size of a given player
function shoeSize(playerName) {
    return allPlayers()[playerName].shoe;
}

// 5. Returns the colors for a given team name
function teamColors(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) return game.home.colors;
    if (game.away.teamName === teamName) return game.away.colors;
}

// 6. Returns an array of both team names
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// 7. Returns an array of jersey numbers for a given team name
function playerNumbers(teamName) {
    const game = gameObject();
    const team = game.home.teamName === teamName ? game.home : game.away;
    return Object.values(team.players).map((player) => player.number);
}

// 8. Returns the stats object for a given player
function playerStats(playerName) {
    return allPlayers()[playerName];
}

// 9. Returns the name of the player with the largest shoe size
function bigShoeRebounds() {
    const players = allPlayers();
    let biggestShoe = 0;
    let playerWithBigShoe = "";

    for (const name in players) {
        if (players[name].shoe > biggestShoe) {
            biggestShoe = players[name].shoe;
            playerWithBigShoe = name;
        }
    }

    return players[playerWithBigShoe].rebounds;
}

// 10. Returns the name of the player who scored the most points
function mostPointsScored() {
    const players = allPlayers();
    let mostPoints = 0;
    let topScorer = "";

    for (const name in players) {
        if (players[name].points > mostPoints) {
            mostPoints = players[name].points;
            topScorer = name;
        }
    }

    return topScorer;
}

// 11. Returns the name of the team with the most points
function winningTeam() {
    const game = gameObject();

    const teamTotal = (players) =>
        Object.values(players).reduce((sum, p) => sum + p.points, 0);

    const homeTotal = teamTotal(game.home.players);
    const awayTotal = teamTotal(game.away.players);

    return homeTotal > awayTotal ? game.home.teamName : game.away.teamName;
}

// 12. Returns the name of the player with the longest name
function playerWithLongestName() {
    const players = allPlayers();
    return Object.keys(players).reduce((longest, name) =>
        name.length > longest.length ? name : longest
    );
}

// 13. Returns true if the player with the longest name also has the most steals
function doesLongNameStealATon() {
    const players = allPlayers();
    const longestName = playerWithLongestName();

    let mostSteals = 0;
    let topStealer = "";

    for (const name in players) {
        if (players[name].steals > mostSteals) {
            mostSteals = players[name].steals;
            topStealer = name;
        }
    }

    return longestName === topStealer;
}