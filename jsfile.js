function darktheme()
{
    document.body.style.backgroundColor = "black";
    var all = document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) {
        all[i].style.color = "white";
    }
}

function lighttheme()
{
    document.body.style.backgroundColor = "white";
    var all = document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) {
        all[i].style.color = "black";
    }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function showCoords(event) 
{
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("coordinates").innerHTML = coords;
}

function getDate()
{
    var date = new Date();
    document.getElementById("date").innerHTML = date.toLocaleString();
}

function updateClock()
{
    getDate();
    setTimeout(updateClock, 1000);
}
updateClock();

function moveright()
{
index = (index+1)%pokemon.length;
image = "pokemon/" + pokemon[index];
document.getElementById('myImage').src=image;
}

function moveleft()
{
index--;
if(index<0) index = pokemon.length-1;
image = "pokemon/" + pokemon[index];
document.getElementById('myImage').src=image;
}

var index = 0;
var pokemon = [
"Aerodactyl.webp",
"Alakazam.webp",
"Arbok.webp",
"Arcanine.webp",
"Articuno.webp",
"Beedrill.webp",
"Blastoise.webp",
"Butterfree.webp",
"Charizard.webp",
"Cloyster.webp",
"Dewgong.webp",
"Dodrio.webp",
"Dragonair.webp",
"Dragonite.webp",
"Dugtrio.webp",
"Electabuzz.webp",
"Electrode.webp",
"Exeggutor.webp",
"Fearow.webp",
"Flareon.webp",
"Gengar.webp",
"Golbat.webp",
"Golduck.webp",
"Golem.webp",
"Gyarados.webp",
"Hitmonchan.webp",
"Hitmonlee.webp",
"Hypno.webp",
"Jolteon.webp",
"Kabutops.webp",
"Kangaskhan.webp",
"Kingler.webp",
"Lapras.webp",
"Machamp.webp",
"Magmar.webp",
"Magneton.webp",
"Marowak.webp",
"Mew.webp",
"Mewtwo.webp",
"Moltres.webp",
"Muk.webp",
"Nidoking.webp",
"Nidoqueen.webp",
"Ninetales.webp",
"Omastar.webp",
"Onix.webp",
"Parasect.webp",
"Persian.webp",
"Pidgeot.webp",
"Pinsir.webp",
"Poliwrath.webp",
"Primeape.webp",
"Raichu.webp",
"Rapidash.webp",
"Rhydon.webp",
"Sandslash.webp",
"Scyther.webp",
"Seadra.webp",
"Seaking.webp",
"Slowbro.webp",
"Snorlax.webp",
"Starmie.webp",
"Tauros.webp",
"Tentacruel.webp",
"Vaporeon.webp",
"Venomoth.webp",
"Venusaur.webp",
"Victreebel.webp",
"Vileplume.webp",
"Weezing.webp",
"Zapdos.webp"
];
var image = "pokemon/" + pokemon[index];
