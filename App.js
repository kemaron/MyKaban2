

// generator templatek (z wykorzystaniem mustache.js)
function generateTemplate(name, data, basicElement) {
	var template = document.getElementById(name).innerHTML;
	var element = document.createElement(basicElement || 'div');

	Mustache.parse(template);
	element.innerHTML = Mustache.render(template, data);

	return element;
}


// zmienne do połączenia z API
var prefix = 'https://cors-anywhere.herokuapp.com/';
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '3922',
  'X-Auth-Token': '94a8ebe6aaa9040ac24de9d7c1798ff8'
};

fetch(prefix + baseUrl + '/board', { headers: myHeaders })
  .then(function(resp) {
    return resp.json();
  })
  .then(function(resp) {
    setupColumns(resp.columns);
	});
	
	function setupColumns(columns) {
		columns.forEach(function (column) {
			var col = new Column(column.id, column.name);
			board.addColumn(col);
			setupCards(col, column.cards);
		});
	}

	function setupCards(col, cards) {
		cards.forEach(function (card) {
			var cardObj = new Card(card.id, card.name);
			col.addCard(cardObj);
		});
	}


	
