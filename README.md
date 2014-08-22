fishie
======

A small, collabatory game about catching fish played in a web browser.

Target is a side-view game with some visual details.
The visual theme is cartoony and stylized, but game lends itself well to minimal graphics. Optionally, the game could be entirely rendered in flat-design css and svg.
I haven't figured out scoring and level/difficulty progression yet.
I imagined javascript could comfortably handle all the functionality, though I'd be interested in trying coffeescript as well.

Development Progression Keys
======

// establish a platform scene where a player-controlled boat object can travel left and right in water with the water's bottom also visually established

// establish a bait entity that is controlled by the mouse via click-and-flick (lends itself to mobile platforms, if that becomes a target for the project)

// establish that bait should fall towards water and sink (gravity physics)

// enable player to retract the bait and cast again

// enforce that bait must travel back towards the boat at non-instantaneous speed (reeling the bait back)

// player can add/remove weights/sinkers make bait sink faster and throw further

// establish objects in the water that can be obtained by landing bait on them

// objects that are caught should be reeled up towards the boat after attaching to bait

// have objects begin traveling in a constant direction (following a stream current) at various heights within the water

// have some traveling objects use a direction-facing conic-proximity ; if fish sees bait, the fish should chase towards the bait and bite it automatically

// establish some graphics for scene and entities and objects (add a chibi-like fisherman on the boat as the player character - also make some fish with facial attitude)

// add a fishing line to the bait that reaches to the rod of the character on the boat (an experiment in line-drawing with physics)

// include casting and reeling and rowing animations (should also make a LoZ treasure-found pose for obtaining a fish/item)

// include passive eye-blink and idle-waiting animations

// include simple fish swimming animation (flopping motion)

// include some wave elements that gently push boat around

// experiment with loading background music

// load in sfx for casting/reeling and splashes and waves - maybe one for successful catching too

// on scene load, zoom-out from the charater on the boat to reveal the playable scene

// on successful catch, zoom-in to character holding the catch for a close-up view

// generate two complete scenes: player on a boat in the ocean, player on a shore-line along a river

// add environmental affects: light-rain, heavy-rain, light-waves, heavy-waves (waves push boat around)

// generate a seamless, scrolling map for player to travel along
