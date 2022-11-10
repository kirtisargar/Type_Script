var Directions;
(function (Directions) {
    Directions[Directions["north"] = 1] = "north";
    Directions[Directions["south"] = 2] = "south";
    Directions[Directions["east"] = 3] = "east";
    Directions[Directions["west"] = 4] = "west";
})(Directions || (Directions = {}));
console.log("By setting value of 1st:".concat(Directions));
