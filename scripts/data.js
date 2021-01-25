const Cards = [
	// * Core Set * //
	{
		name   : 'Aragorn',
		sphere : 'Leadership',
		type   : 'Hero'
	},
	{
		name   : 'Théodred',
		sphere : 'Leadership',
		type   : 'Hero'
	},
	{
		name   : 'Glóin',
		sphere : 'Leadership',
		type   : 'Hero'
	},
	{
		name   : 'Gimli',
		sphere : 'Tactics',
		type   : 'Hero'
	},
	{
		name   : 'Legolas',
		sphere : 'Tactics',
		type   : 'Hero'
	},
	{
		name   : 'Thalin',
		sphere : 'Tactics',
		type   : 'Hero'
	},
	{
		name   : 'Éowyn',
		sphere : 'Spirit',
		type   : 'Hero'
	},
	{
		name   : 'Eleanor',
		sphere : 'Spirit',
		type   : 'Hero'
	},
	{
		name   : 'Dúnhere',
		sphere : 'Spirit',
		type   : 'Hero'
	},
	{
		name   : 'Denethor',
		sphere : 'Lore',
		type   : 'Hero'
	},
	{
		name   : 'Glorfindel',
		sphere : 'Lore',
		type   : 'Hero'
	},
	{
		name   : 'Beravor',
		sphere : 'Lore',
		type   : 'Hero'
	},
	{
		name   : 'Guard of the Citadel',
		sphere : 'Leadership',
		type   : 'Ally'
	},
	{
		name   : 'Faramir',
		sphere : 'Leadership',
		type   : 'Ally'
	},
	{
		name   : 'Son of Arnor',
		sphere : 'Leadership',
		type   : 'Ally'
	},
	{
		name   : 'Snowbourn Scout',
		sphere : 'Leadership',
		type   : 'Ally'
	},
	{
		name   : 'Silverlode Archer',
		sphere : 'Leadership',
		type   : 'Ally'
	},
	{
		name   : 'Longbeard Orc Slayer',
		sphere : 'Leadership',
		type   : 'Ally'
	},
	{
		name   : 'Brok Ironfist',
		sphere : 'Leadership',
		type   : 'Ally'
	},
	{
		name   : 'Ever Vigilant',
		sphere : 'Leadership',
		type   : 'Event'
	},
	{
		name   : 'Common Cause',
		sphere : 'Leadership',
		type   : 'Event'
	},
	{
		name   : 'For Gondor!',
		sphere : 'Leadership',
		type   : 'Event'
	},
	{
		name   : 'Sneak Attack',
		sphere : 'Leadership',
		type   : 'Event'
	},
	{
		name   : 'Valiant Sacrifice',
		sphere : 'Leadership',
		type   : 'Event'
	},
	{
		name   : 'Grim Resolve',
		sphere : 'Leadership',
		type   : 'Event'
	},
	{
		name   : 'Steward of Gondor',
		sphere : 'Leadership',
		type   : 'Attachment'
	},
	{
		name   : "Celebrían's Stone",
		sphere : 'Leadership',
		type   : 'Attachment'
	},
	{
		name   : 'Veteran Axehand',
		sphere : 'Tactics',
		type   : 'Ally'
	},
	{
		name   : 'Gondorian Spearman',
		sphere : 'Tactics',
		type   : 'Ally'
	},
	{
		name   : 'Horseback Archer',
		sphere : 'Tactics',
		type   : 'Ally'
	},
	{
		name   : 'Beorn',
		sphere : 'Tactics',
		type   : 'Ally'
	},
	{
		name   : 'Blade Mastery',
		sphere : 'Tactics',
		type   : 'Event'
	},
	{
		name   : 'Rain of Arrows',
		sphere : 'Tactics',
		type   : 'Event'
	},
	{
		name   : 'Feint',
		sphere : 'Tactics',
		type   : 'Event'
	},
	{
		name   : 'Quick Strike',
		sphere : 'Tactics',
		type   : 'Event'
	},
	{
		name   : 'Thicket of Spears',
		sphere : 'Tactics',
		type   : 'Event'
	},
	{
		name   : 'Swift Strike',
		sphere : 'Tactics',
		type   : 'Event'
	},
	{
		name   : 'Stand Together',
		sphere : 'Tactics',
		type   : 'Event'
	},
	{
		name   : 'Blade of Gondolin',
		sphere : 'Tactics',
		type   : 'Attachment'
	},
	{
		name   : 'Citadel Plate',
		sphere : 'Tactics',
		type   : 'Attachment'
	},
	{
		name   : 'Dwarven Axe',
		sphere : 'Tactics',
		type   : 'Attachment'
	},
	{
		name   : 'Horn of Gondor',
		sphere : 'Tactics',
		type   : 'Attachment'
	},
	{
		name   : 'Wandering Took',
		sphere : 'Spirit',
		type   : 'Ally'
	},
	{
		name   : 'Lórien Guide',
		sphere : 'Spirit',
		type   : 'Ally'
	},
	{
		name   : 'Northern Tracker',
		sphere : 'Spirit',
		type   : 'Ally'
	},
	{
		name   : "The Galadhrim's Greeting",
		sphere : 'Spirit',
		type   : 'Event'
	},
	{
		name   : 'Strength of Will',
		sphere : 'Spirit',
		type   : 'Event'
	},
	{
		name   : 'Hasty Stroke',
		sphere : 'Spirit',
		type   : 'Event'
	},
	{
		name   : 'Will of the West',
		sphere : 'Spirit',
		type   : 'Event'
	},
	{
		name   : 'A Test of Will',
		sphere : 'Spirit',
		type   : 'Event'
	},
	{
		name   : 'Stand and Fight',
		sphere : 'Spirit',
		type   : 'Event'
	},
	{
		name   : 'A Light in the Dark',
		sphere : 'Spirit',
		type   : 'Event'
	},
	{
		name   : 'Dwarven Tomb',
		sphere : 'Spirit',
		type   : 'Event'
	},
	{
		name   : 'Fortune or Fate',
		sphere : 'Spirit',
		type   : 'Event'
	},
	{
		name   : 'The Favor of the Lady',
		sphere : 'Spirit',
		type   : 'Attachment'
	},
	{
		name   : 'Power in the Earth',
		sphere : 'Spirit',
		type   : 'Attachment'
	},
	{
		name   : 'Unexpected Courage',
		sphere : 'Spirit',
		type   : 'Attachment'
	},
	{
		name   : 'Daughter of the Nimrodel',
		sphere : 'Lore',
		type   : 'Ally'
	},
	{
		name   : 'Erebor Hammersmith',
		sphere : 'Lore',
		type   : 'Ally'
	},
	{
		name   : 'Henamarth Riversong',
		sphere : 'Lore',
		type   : 'Ally'
	},
	{
		name   : 'Miner of the Iron Hills',
		sphere : 'Lore',
		type   : 'Ally'
	},
	{
		name   : 'Gléowine',
		sphere : 'Lore',
		type   : 'Ally'
	},
	{
		name   : 'Lore of Imladris',
		sphere : 'Lore',
		type   : 'Event'
	},
	{
		name   : "Lórien's Wealth",
		sphere : 'Lore',
		type   : 'Event'
	},
	{
		name   : "Radagast's Cunning",
		sphere : 'Lore',
		type   : 'Event'
	},
	{
		name   : 'Secret Paths',
		sphere : 'Lore',
		type   : 'Event'
	},
	{
		name   : "Gandalf's Search",
		sphere : 'Lore',
		type   : 'Event'
	},
	{
		name   : "Beorn's Hospitality",
		sphere : 'Lore',
		type   : 'Event'
	},
	{
		name   : 'Forest Snare',
		sphere : 'Lore',
		type   : 'Attachment'
	},
	{
		name   : 'Protector of Lórien',
		sphere : 'Lore',
		type   : 'Attachment'
	},
	{
		name   : 'Dark Knowledge',
		sphere : 'Lore',
		type   : 'Attachment'
	},
	{
		name   : 'Self Preservation',
		sphere : 'Lore',
		type   : 'Attachment'
	},
	{
		name   : 'Gandalf',
		sphere : 'Neutral',
		type   : 'Ally'
	},

	// * The Hunt for Gollum * //
	{
		name   : 'Bilbo Baggins',
		sphere : 'Lore',
		type   : 'Hero'
	}
];
