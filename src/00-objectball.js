function gameObject () {
    const game = {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players": {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                },
            }
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                },
            }
        }
    };

    return game;
}

function getPlayerStat (playerName, stat) {
    const object = gameObject();
    
    for (const teamName in object) {
        const team = object[teamName];
        if (Object.keys(team.players).indexOf(playerName) !== -1) {
            return team.players[playerName][stat];
        }
    }
}

function numPointsScored (playerName) {
    return getPlayerStat(playerName, 'points');
}

function shoeSize (playerName) {
    return getPlayerStat(playerName, 'shoe');
}

function teamColors (teamName) {
    const object = gameObject();
    for (const team in object) {
        const teamObject = object[team];
        if (teamObject.teamName === teamName) {
            return teamObject.colors;
        }
    }
}

function teamNames () {
    const object = gameObject();
    let names = [];
    for (const teamKey in object) {
        names.push(object[teamKey].teamName);
    }

    return names;
}

function playerNumbers (teamName) {
    const object = gameObject();
    for (const teamKey in object) {
        if (object[teamKey].teamName === teamName) {
            const players = object[teamKey].players;
            return Object.values(players).map(player => player.number);
        }
    }
}

function playerStats (playerName) {
    const object = gameObject();
    for (const teamKey in object) {
        const players = object[teamKey].players;
        for (const player in players) {
            if (player === playerName) {
                return players[player];
            }
        }
    }
}

function bigShoeRebounds () {
    const object = gameObject();
    const playersNames = [];
    for (const teamKey in object) {
        const teamPLayers = object[teamKey].players;
        playersNames.push(...Object.keys(teamPLayers));
    }
    
    let bigRebound = 0;
    playersNames.forEach(playerName => {
        const playerRebound = getPlayerStat(playerName, 'rebounds');
        if (playerRebound > bigRebound) {
            bigRebound = playerRebound;
        }
    });

    return bigRebound;
}

console.log(bigShoeRebounds());