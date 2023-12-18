let modInfo = {
	name: "The Point Tree",
	id: "ThepointTreeRD82",
	author: "randim82",
	pointsName: "Point Fragments",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 10,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.0",
	name: "Rebirth + 5 New upgrades (13 Total)",
}

let changelog = `<h1>Changelog:</h1><br>
<h3>v1.0</h3><br>
- Decrease BU3 and BU5 Scaling.<br>
- Increase BU7 and BU8 Scaling.<br>
- Added 4 new point upgrades and 1 new rebirth upgrade!<br>
- ADDED REBIRTH RESET LAYER.<br>
- Current Endgame: RU1 (Or 200M Point Fragments, 2M Basic Points).<br>
<h3>v0.3</h3><br>
- Decrease BU2's scaling by a lot.<br>
- Added 3 more upgrades, again.<br>
- Changed ID.<br>
- Current Endgame: 1.5K Basic Points (or 200K Point Fragments).<br>
    <h3>v0.2</h3><br>
		- Decrease BU2's cost.<br>
		- Added 3 more upgrades.<br>
		- Made changelog work.<br>
		- Current Endgame: 20 points a sec.<br>
	<h3>v0.1</h3><br>
		- One upgrade.<br>
		- Added Basic Points and Point Fragments.
		- Current Endgame: 6 points a sec.<br>`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('basic', 12)) gain = gain.times(upgradeEffect('basic', 12))
	if (hasUpgrade('basic', 23)) gain = gain.times(upgradeEffect('basic', 23))
	if (hasUpgrade('basic', 25)) gain = gain.times(upgradeEffect('basic', 25))
	if (hasUpgrade('basic', 11)) gain = gain.times(2)
	if (hasUpgrade('basic', 21)) gain = gain.times(2)
	if (hasUpgrade('basic', 24)) gain = gain.times(3)
	if (hasUpgrade('basic', 31)) gain = gain.times(2.5)
	if (hasUpgrade('basic', 32)) gain = gain.times(5)
	if (hasUpgrade('basic', 14)) gain = gain.times(1.35)
	if (hasUpgrade('rebirth', 11)) gain = gain.times(4)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}