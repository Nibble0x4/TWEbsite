

// Small function to get a random integer
function getRandomInt (max) {
	return Math.floor(Math.random() * max);
}


// The event to be tied to the Fae Event table
function rollFaeEvent () {
	var rolledNum = getRandomInt(100);

	switch(rolledNum) {
	case 1:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "A burst of pollen explodes from nearby plants; all creatures in 10 ft sneeze.";
		document.getElementById("effect").innerHTML = "Fort DC14 or Sickened 1";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 2:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "The target’s hair changes color every round for 1 minute.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 3:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "A random creature grows deer antlers for 1 hour.";
		document.getElementById("effect").innerHTML = "No armor headgear fits, gains Gore Attack";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 4:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "The air fills with drifting motes of light.";
		document.getElementById("effect").innerHTML = "Bright light 10 ft";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 5:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "A spectral satyr appears and toasts the group.";
		document.getElementById("effect").innerHTML = "Illusory; drinking contest grants gold or Sickened 4";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 6:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "Target’s next sneeze releases confetti.";
		document.getElementById("effect").innerHTML = "-2 Stealth";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 7:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "Everyone’s hair color swaps.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 8:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "The target’s voice echoes musically.";
		document.getElementById("effect").innerHTML = "+4 Performance for 1 hour";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 9:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "Petal rain follows the target for 1 minute.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 10:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "Giggles follow Target for 12 hours.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 11:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "Target’s laughter becomes infectious.";
		document.getElementById("effect").innerHTML = "Will DC14 or Slowed 1 round to all creatures who can hear it.";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 12:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "A cloud rains only above the target.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 13:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "Footprints glow softly for 1d6 days.";
		document.getElementById("effect").innerHTML = "Target is easy to track.";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 14:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "Target’s shadow performs exaggerated dances.";
		document.getElementById("effect").innerHTML = "Will DC14 or Fascinated 1 round";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 15:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "Flowers bloom in a 10-ft radius when target speaks.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 16:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "Target’s reflection acts independently.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 17:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "Small animals gather to watch.";
		document.getElementById("effect").innerHTML = "+2 Handle Animal while present";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 18:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "Clothing smells of lilac.";
		document.getElementById("effect").innerHTML = "+1 Diplomacy for 1 hour";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 19:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "Target’s words rhyme uncontrollably for 10 minutes.";
		document.getElementById("effect").innerHTML = "-2 Concentration";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 20:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "A playful sprite steals a random trinket.";
		document.getElementById("effect").innerHTML = "Lose 1 mundane item";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 21:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "Target hums cheerful tunes.";
		document.getElementById("effect").innerHTML = "-2 Stealth";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 22:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "A mirror nearby briefly shows the viewer as a woodland creature.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 23:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "A pocket fills with glittering dust.";
		document.getElementById("effect").innerHTML = "No effect but messy";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 24:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "The target’s next sneeze makes a bell tone.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 25:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Whimsy";
		document.getElementById("flavor").innerHTML = "Everyone feels briefly tipsy and giggly.";
		document.getElementById("effect").innerHTML = "-3 Reflex for 1 minute";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 26:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "All food in 30 ft becomes delicious.";
		document.getElementById("effect").innerHTML = "Next Will save +1 morale";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 27:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "Eyes glow faintly; gain darkvision 10 ft for 1 hour.";
		document.getElementById("effect").innerHTML = "+4 Perception in darkness";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 28:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "A halo of fireflies follows the target.";
		document.getElementById("effect").innerHTML = "5 ft light; +1 vs fear";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 29:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "A faint harp chord accompanies every spell cast.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 30:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "Flowers bloom where the target walks.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 31:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "The target’s next drink heals +1 HP.";
		document.getElementById("effect").innerHTML = "If healing, add +1";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 32:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "Target outlined in pollen.";
		document.getElementById("effect").innerHTML = "+2 to hit Target and bugs are attracted to them.";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 33:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "Small creatures become friendly.";
		document.getElementById("effect").innerHTML = "+2 Handle Animal for 24h";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 34:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "A gentle breeze clears smoke and fog in 200 ft.";
		document.getElementById("effect").innerHTML = "Removes obscuring effects";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 35:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "Target’s next ranged attack releases a butterfly arrow.";
		document.getElementById("effect").innerHTML = "Normal damage but butterflies swarm the target";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 36:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "Target’s hair becomes living vines.";
		document.getElementById("effect").innerHTML = "Can manipulate as Mage Hand for 12 hours";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 37:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "A calming aura emanates from the target.";
		document.getElementById("effect").innerHTML = "Enemies –1 attack 1 minute";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 38:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "Target gains gossamer wings.";
		document.getElementById("effect").innerHTML = "Fly 20 ft (clumsy) 1 minute";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 39:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "A spectral fox spirit curls at the target’s feet.";
		document.getElementById("effect").innerHTML = "It follows you until you sleep or it is threatened.";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 40:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "A strong lavender scent fills the area.";
		document.getElementById("effect").innerHTML = "Next healing effect restores maximum value.";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 41:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "Target glows softly until it sleeps.";
		document.getElementById("effect").innerHTML = "Bonus +2 Diplomacy";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 42:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "A soft rain of petals falls, soothing all.";
		document.getElementById("effect").innerHTML = "Bonus +6 saves vs emotion for 1 minute";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 43:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "Weapon hums happily.";
		document.getElementById("effect").innerHTML = "+1 morale attack for 1 minute";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 44:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "Reflection compliments the target.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 45:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "Nearby mushrooms emit healing spores.";
		document.getElementById("effect").innerHTML = "Heals 1d4 HP allies in 10 ft";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 46:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "All iron within 10 ft warms to pleasant heat.";
		document.getElementById("effect").innerHTML = "No mechanical effect";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 47:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "Target’s tears crystallize into pearls.";
		document.getElementById("effect").innerHTML = "Gain tear-shaped pearls.";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 48:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "Target’s next critical hit bursts into sparkles.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 49:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "A gentle hum enhances balance.";
		document.getElementById("effect").innerHTML = "Bonus +4 Acrobatics 10 min";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 50:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Blessing";
		document.getElementById("flavor").innerHTML = "Moonlight grants resilience.";
		document.getElementById("effect").innerHTML = "DR 10/magic 1 min";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 51:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Target’s armor turns to rose petals.";
		document.getElementById("effect").innerHTML = "Lose armor for 1 minute";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 52:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Pixies tie the target’s shoelaces.";
		document.getElementById("effect").innerHTML = "Prone unless Reflex DC10";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 53:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "All mirrors in 60 ft fog over.";
		document.getElementById("effect").innerHTML = "No reflection 1 hour";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 54:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Area becomes filled with shimmering glitter.";
		document.getElementById("effect").innerHTML = "All Dazzled 2 rounds";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 55:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "The ground turns spongy and slows movement.";
		document.getElementById("effect").innerHTML = "Difficult Terrain in 60 ft radius";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 56:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Random ally compelled to compliment target each round.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 57:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Target’s weapon grows vines that entangle.";
		document.getElementById("effect").innerHTML = "Attack –2 but can make 1 free grapple attempt";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 58:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Target becomes semi-transparent and ";
		document.getElementById("effect").innerHTML = "Bonus +4 Stealth, ";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 59:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Glass hums loudly and shatters if struck.";
		document.getElementById("effect").innerHTML = "4d6 sonic damage; DC13 Fort half";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 60:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Thought gives way to instinct.";
		document.getElementById("effect").innerHTML = "Next saving throw auto succeeds but lose memory of last 5 min.";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 61:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "A swarm of harmless bees surrounds target.";
		document.getElementById("effect").innerHTML = "Penalty –6 Stealth";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 62:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "A patch of ground becomes quickmud.";
		document.getElementById("effect").innerHTML = "Ref DC15 or stuck 1 round";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 63:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Gravity tilts 45°.";
		document.getElementById("effect").innerHTML = "Ref DC14 or fall prone";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 64:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Weapons shrink to toy size for 1 round.";
		document.getElementById("effect").innerHTML = "Half damage dealt";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 65:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Target’s hands turn into flowers.";
		document.getElementById("effect").innerHTML = "Drop items; Cannot use hands for 1 round.";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 66:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Spectral stag charges through battlefield.";
		document.getElementById("effect").innerHTML = "Ref DC15 or knocked prone";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 67:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Nearby text rearranges into nonsense.";
		document.getElementById("effect").innerHTML = "Unreadable for 12 hours";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 68:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Spirits are drawn about.";
		document.getElementById("effect").innerHTML = "Target and ally swap bodies for 1 minute.";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 69:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Illusion of worst fear appears.";
		document.getElementById("effect").innerHTML = "Will DC14 or Frightened 6";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 70:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "All critical hits release confetti.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 71:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Song compels everyone to dance.";
		document.getElementById("effect").innerHTML = "Will DC15 or flat-footed 1 round";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 72:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "A muse strikes.";
		document.getElementById("effect").innerHTML = "Target speaks only in rhyme 24h or takes 1 nonlethal damage each failure.";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 73:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Weapon hums loudly.";
		document.getElementById("effect").innerHTML = "–4 Stealth";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 74:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "Target’s shadow detaches to scout.";
		document.getElementById("effect").innerHTML = "Can relay images for 10 min";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 75:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Trickery";
		document.getElementById("flavor").innerHTML = "A fae gate opens; roll 1d4 for visitor type.";
		document.getElementById("effect").innerHTML = "1–Pixie, 2–Herald, 3–Dryad, 4–Shrum";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 76:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Target becomes invisible when sneezing.";
		document.getElementById("effect").innerHTML = "1 round invisibility";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 77:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Random item enlarges ×10.";
		document.getElementById("effect").innerHTML = "1 minute";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 78:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Bright flower crowns appear, but can be taken off.";
		document.getElementById("effect").innerHTML = "Crowns taken off apply -6 diplomacy.";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 79:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Ringing bells disrupt spellcasting.";
		document.getElementById("effect").innerHTML = "Concentration DC 17 or fail";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 80:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Spectral butterflies fill 20 ft cube.";
		document.getElementById("effect").innerHTML = "20% concealment";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 81:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Shadow fights alongside target.";
		document.getElementById("effect").innerHTML = "Duplicate with ½ HP for 3 rounds";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 82:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "All within 30 ft swap voices for 10 min.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 83:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Target teleports 30 ft randomly after sneezing.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 84:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Creature sprouts tail with mind of its own.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 85:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Nature’s Judgment";
		document.getElementById("effect").innerHTML = "The landscape forms a Giant aggressive golem.";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 86:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Fae laughter echoes.";
		document.getElementById("effect").innerHTML = "Ripple of laughter heals 1d6 HP to allies but provokes AoO from fey.";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 87:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Time slows";
		document.getElementById("effect").innerHTML = "Gain extra action then Fatigued.";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 88:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Bees fly from target’s mouth when speaking.";
		document.getElementById("effect").innerHTML = "Harmless";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 89:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Weapon bursts into rainbow flame.";
		document.getElementById("effect").innerHTML = "+2d6 fire damage added to next hit";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 90:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "A weapon hums with instability.";
		document.getElementById("effect").innerHTML = "Next attack auto crits but weapon crumbles.";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 91:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Sunlight dims to twilight for 3 rounds.";
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 92:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Laughter deafens all within 10 ft.";
		document.getElementById("effect").innerHTML = "Fort DC14 negates";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 93:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Liquids turn to sparkling cider for 1 minute.";		
		document.getElementById("effect").innerHTML = "";
		document.getElementById("impact").innerHTML = "🌸";
		break;
	case 94:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Aurora Veil: The sky fills with swirling aurora lights that empower magic";
		document.getElementById("effect").innerHTML = "spells gain +1 DC for 1 minute";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 95:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "The Seasons Blink";
		document.getElementById("effect").innerHTML = "Within a 30-ft radius, the environment cycles rapidly through all four seasons in 10 seconds";
		document.getElementById("impact").innerHTML = "🍄";
		break;
	case 96:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Target’s soul steps out to dance";
		document.getElementById("effect").innerHTML = "Unconscious 1 round then heal 2d6.";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 97:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "The World Breathes. The ground itself seems to inhale and exhale ";
		document.getElementById("effect").innerHTML = "Terrain ripples, lightly tossing creatures (Acrobatics DC 15 or fall prone).";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 98:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Time hiccups a bit";
		document.getElementById("effect").innerHTML = "Time rewinds 1 round; everyone remembers both timelines.";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 99:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "The Veil thins";
		document.getElementById("effect").innerHTML = "Minor fey spill into area for 1 minute.";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	case 100:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "Chaos";
		document.getElementById("flavor").innerHTML = "Reality flickers";
		document.getElementById("effect").innerHTML = "GM choice of spectacularly strange event.";
		document.getElementById("impact").innerHTML = "🦋";
		break;
	default:
		document.getElementById("result").innerHTML = rolledNum;
		document.getElementById("category").innerHTML = "nah";
		document.getElementById("flavor").innerHTML = "nah";
		document.getElementById("effect").innerHTML = "nah";
		document.getElementById("impact").innerHTML = "nah";
	}
}




// Unobstrusive event binding example
// Here, we look for only the first button and make it run the
// above function onclick. This way, we don't make our HTML messy
document.querySelector("button")
	.addEventListener("click",rollFaeEvent);