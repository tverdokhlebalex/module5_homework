let users = new Map; 
users.set("player 1", "Game W");
users.set("player 2", "Game Y");
users.set("player 3", "Game Z");
users.set("player 4", "Game Y");

for (let [user, game] of users.entries()) {
    console.log(user + " is " + game);
}

