let pinguin = {
    grösse: 120,
    alter: 16,
    augen: {
        farbe: "blau",
        offen: true
    }
};

schlafen(); // Entfernen wenn der Pinguin aufgeweckt werden soll.

if(pinguin.augen.offen == true) {
    console.log("Der Pinguin ist gerade wach!\n")
}
else {
    console.log("Der Pinguin ist gerade am schlafen.\n");
}

pinguinDetails();

function pinguinDetails() {
    console.log("Pinguin Details:");
    console.log("Der Pinguin ist " + pinguin.grösse + "cm Gross. \nEr ist bereits " + pinguin.alter + " Jahre alt und seine Augenfarbe ist " + pinguin.augen.farbe + ".");
}
function schlafen() {
    pinguin.augen.offen = false;
}