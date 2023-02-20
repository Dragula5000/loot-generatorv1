const artArrays = {
artCollection25Gp : [
'Silver Ewer',
'Carved Bone Statuette',
'Small gold bracelet',
'Cloth of gold vestements',
'Black Velvet mask stitched with silver thread',
'Copper chalice with silver filigree',
'Pair of engraved bone dice',
'Small mirror set in a painted wooden frame',
'Embroidered Silk handerchief',
'Gold locket with a painted portrait inside'
],

artCollection250Gp : [
'Gold ring set with bloodstones',
'Carved ivory statuette',
'Large gold bracelet',
'Silver necklace with a gemstone pendant',
'Bronze Crown',
'Silk robe with gold embroidery',
'Large well-made tapesty',
'Brass mug with jade tapestry',
'Box of turquoise animal figurines',
'Gold bird cage with electrum filgree'
],

artCollection750Gp : [
'Silver chalice set with moonstones',
'Silver-plated steel longsword with jade set in hilt',
'Carved harp of exotic wood with ivory inlay and zircon gems',
'Small gold idol',
'Gold dragon comb set with red garnets as eyes',
'Bottle stopper cork embossed with gold leaf and set with amethysts',
'Ceremonial electrum dagger with black pearl in pommel',
'Silver and gold brooch',
'Obsidian statuette with gold fittings and inlay',
'Painted gold war mask'
],

artCollection2500Gp : [
'Fine gold chain set with fire opal',
'Old masterpiece painting',
'Embroidered Silk and velvet mantle set with numerous moonstones',
'Platinum bracelet set with sappgire',
'Embroidered Glove set with jewel chips',
'Jeweled anklet',
'Gold Music box',
'Eye patch with a mock eye set in blue sapphire and moonstone',
'Necklace string of small pink pearls'
],

artCollection7500Gp : [
'Jeweled Gold Crown',
'Jeweled Platinum ring',
'Small gold statuette set with rubies',
'Gold cup set with emeralds',
'Gold jewelry box with platinum filgree',
'Painted gold childs sarcophagus',
'Jade game board with solid gold playing pieces',
'Bejeweled ivory drinking horn with gold filgree'
]
}
/*
artCollection25Gp => [0-9]
artCollection250Gp => [0-0]
artCollection750Gp => [0-9]
artCollection2500Gp => [0-9]
artCollection7500Gp => [0-7]
NOTE: **artCollection250GP => [0-9]**
*/
const gemArrays = {
gemCollection10gp : [
'Azurite',
'Banded Agate',
'Blue Quartz',
'Eye Agate',
'Hematite',
'Lapis Lazula',
'Malachite',
'Moss Agate',
'Obsidian',
'Rhodochrosite',
'Tiger eye',
'Turquoise'
],

gemCollection50Gp : [
'Bloodstone',
'Carnelian',
'Chalcedony',
'Chrysoprase',
'Citrine',
'Jasper',
'Moonstone',
'Onyx',
'Quartz',
'Sardonyx',
'Star Rose Quartz',
'Zircon'
],

gemCollection100Gp : [
'Amber',
'Amethyst',
'Chrysoberyl',
'Coral',
'Garnet',
'Jade',
'Jet',
'Pearl',
'Spinel',
'Tourmaline'
],

gemCollection500Gp : [
'Alexabdrite',
'Aquamarine',
'Black Pearl',
'Blue spinel',
'Peridot',
'Topaz'
],

gemCollection1000Gp : [
'Black Opal', 
'Blue Sapphire',
'Emerald',
'Fire Opal',
'Opal',
'Star Ruby',
'Star Sapphire',
'Yellow Sapphire'
],

gemCollection5000Gp : [
'Black Sapphire',
'Diamond',
'Jacinth',
'Ruby'
]
}
/*
gemCollection10gp => [0-11] {12}
gemCollection50Gp => [0-11] {12}
gemCollection100Gp => [0-9] {10}
gemCollection500Gp => [0-5] {6}
gemCollection1000Gp => [0-7] {8}
gemCollection5000Gp => [0-3] {4}
*/
const potions = [
'Potion of Healing',
'Potion of Climbing',
'Potion of Greater Healing',
'Potion of Fire Breath',
'Potion of Resistance',
'Potion of Animal Friendship',
'Potion of Hill Giant',
'Potion of Growth',
'Potion of Water Breathing',
'Potion of Poison',
'Potion of Superior healing',
'Potion of Clairvoyance',
'Potion of Diminution',
'Potion of Gaseous form',
'Potion of Frost Giant Strength',
'Potion of Stone Giant Strength',
'Potion of Heroism',
'Potion of Invulverability',
'Potion of Mind reading',
'Potion of Fire Giant Strength',
'Potion of Supreme Healing',
'Potion of Invisibility',
'Potion of Speed',
'Potion of Flying',
'Potion of Cloud Giant Strength',
'Potion of Longevity',
'Potion of Vitality',
'Potion of Storm Giant Strength'
];
const magicEquipment = [
'Bag of Holding',
'Alchemy Jug',
'Latern of Revealing',
'Rope of Climbing',
'Saddle of the Cavalier',
'Bag of Beans',
'Decanter of Endless Water',
'Bag of devouring',
'Folding Boat',
'Sending Stones',
'Universal Solvent',
'Bag of Tricks',
'Eversmoking bottle',
'Wind fan',
'Carpet of Flying',
'Efreeti Bottle',
'Horn of Blasting',
'Broom of Flying',
'Horseshoes of a zephyr',
'Doss Lute',
'Fochlucan Bondore',
'Mac-Fuimidh Cittern',
'Pearl of Power',
'Pipes of haunting',
'Pipes of the Sewers',
'Rope of entaglement',
'Manual of Bodily health',
'Manual of Gainful exercise',
'Manual of Golems',
'Manual of quickness of action',
'Mirror of life trapping',
];
module.exports.artArrays = artArrays
module.exports.gemArrays = gemArrays
module.exports.potions = potions
module.exports.magicEquipment = magicEquipment
const rings = [
'Ring of Water Walking',
'Ring of Warmth',
'Ring of Mind Shielding',
'Ring of Jumping',
'Ring of Swimming',
'Ring of Animal Influence',
'Ring of Evasion',
'Ring of Feather Falling',
'Ring of Free Action',
'Ring of Protection',
'Ring of Resistance',
'Ring of Spell Storing',
'Ring of the Ram',
'Ring of X-Ray Vision',
'Ring of Regeneration',
'Ring of Shooting Stars',
'Ring of Telekinesis',
'Ring of Invisibility',
'Ring of Spell Turning',
'Ring of Lordly Might',
'Ring of Air Elemental Command',
'Ring of Earth Elemental Command',
'Ring of Fire Elemental Command',
'Ring of Three Wishes',
'Ring of Water Elemental Command'
];
const staves = [
'Staff of the Adder',
'Staff of the Python',
'Staff of Charming',
'Staff of Healing',
'Staff of Swarming Insects',
'Staff of the Woodlands',
'Staff of Withering',
'Staff of Fire',
'Staff of Frost',
'Staff of Power',
'Staff of Striking',
'Staff of Thunder and Lightning',
'Staff of the Magi'
];
const Wands = [
'Wand of Magic Detection',
'Wand of Secrets',
'Wand of Magic Missles',
'Wand of the War Mage',
'Wand of the Web',
'Wand of Binding',
'Wand of Enemy Detection',
'Wand of Fear',
'Wand of Fireballs',
'Wand of Lightning Bolts',
'Wand of Paralysis',
'Wand of the War Mage +2',
'Wand of Wonder',
'Wand of the Warmage +3'
];
module.exports.rings = rings
module.exports.staves = staves
module.exports.Wands = Wands
const armor = [
//Chain Mail:
'Armor +1 Chain Mail',
'Armor +2 Chain Mail',
'Armor +3 Chain Mail',
'Adamantine Armor (Chain Mail)',
'Armor of Resistance (Chain Mail)',
//Chain Shirt:

'Armor +1 Chain Shirt',
'Armor +2 Chain Shirt',
'Armor +3 Chain Shirt',
'Adamantine Armor (Chain Shirt)',
'Armor of Resistance (Chain Shirt)',
//Leather:
'Armor +1 Leather',
'Armor +2 Leather',
'Armor +3 Leather',
'Armor of Resistance (Leather)',
//Studded Leather:
'Armor +1 Studded Leather',
'Armor +2 Studded Leather',
'Armor +3 Studded Leather',
'Armor of Resistance (Studded Leather)',
//Scale Mail:
'Armor +1 Scale Mail',
'Armor +2 Scale Mail',
'Armor +3 Scale Mail',
'Adamantine Armor (Scale Mail)',
'Armor of Resistance (Scale Mail)',
//Breastplate:
'Armor +1 Breastplate',
'Armor +2 Breastplate',
'Armor +3 Breastplate',
'Adamantine Armor (Breastplate)',
'Armor of Resistance (Breastplate',
//Splint:
'Armor +1 Splint',
'Armor +2 Splint',
'Armor +3 Splint',
'Adamantine Armor (Splint)',
'Armor of Resistance (Splint)',
//Half Splint:
'Armor +1 Half Plate',
'Armor +2 Half Plate',
'Armor +3 Half Plate',
'Adamantine Armor (Half Plate)',
'Armor of Resistance (Half Plate)',
//Plate:
'Armor +1 Plate',
'Armor +2 Plate',
'Armor +3 Plate',
'Adamantine Armor (Plate)',
//Magic Armor:
'Plate Armor of Resistance',
'Plate Armor of Etherealness',
'Dwarvern Plate',
'Mariners Armor',
'Mithral Armor',
'Armor of Vulnerability',
'Demon Armor',
'Dragon Scale Mail',
'Armor of Invulnerability'
];
/*REFERENCES:
***CHAIN MAIL*** => [0-4]
***CHAIN SHIRT*** => [5-9]
***LEATHER*** => [10-13]
***STUDDED LEATHER*** => [14-17]
***SCALE MAIL*** => [18-22]
***BREASTPLATE*** => [23-27]
***SPLINT*** => [28-32]
***HALF-PLATE*** => [33-37]
***PLATE*** => [38-41]
***MAGIC*** => [42-50]
*/

const tomes = [
'Alchemical Compendium',
'Arcane Grimoir',
'Atlas of Endless Horizons',
'Demonomicon of Iggwilv',
'Fulminating Treatise',
'Heart Weavers Primer',
'Libram off Souls and Flesh',
'Planecallers Codex'
];
module.exports.armor = armor
module.exports.tomes = tomes