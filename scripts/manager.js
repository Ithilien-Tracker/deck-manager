function fillDeckTable(tableID, data) {
	let table = document.getElementById(tableID);
	data.forEach((element) => {
		let newRow = table.insertRow();

		let nameCell = newRow.insertCell();
		nameCell.appendChild(document.createTextNode(element.name));
	});
}

function fillCardTable(tableID, data) {
	let table = document.getElementById(tableID);
	data.forEach((element) => {
		let newRow = table.insertRow();

		let nameCell = newRow.insertCell();
		nameCell.appendChild(document.createTextNode(element.name));

		let typeCell = newRow.insertCell();
		typeCell.appendChild(document.createTextNode(element.type));

		switch (element.sphere) {
			case 'Leadership':
				newRow.classList.add('leadership');
				break;

			case 'Tactics':
				newRow.classList.add('tactics');
				break;

			case 'Lore':
				newRow.classList.add('lore');
				break;

			case 'Spirit':
				newRow.classList.add('spirit');
				break;

			case 'Neutral':
				newRow.classList.add('neutral');
				break;
		}
	});
}

function getTotalCards(deck) {
	let total = 0;
	deck.forEach((element) => {
		total++;
	});
	return total;
}

function init() {
	let testDecks = [
		{
			name : 'deck1'
		},
		{
			name : 'deck2'
		},
		{
			name : 'deck3'
		}
	];

	fillCardTable('heroes-cards', Cards);
	fillDeckTable('heroes-decks', testDecks);
}

init();
