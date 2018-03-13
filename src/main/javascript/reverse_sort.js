
(function() {

	function troubleSort() {

		const devoxxCities = [
			"Antwerp",
			"Casablanca",
			"Paris",
			"London",
			"Krakow",
			"San Jose"
		];

		const sortedDevoxxCities = devoxxCities.sort();
		const reversedDevoxxCities = sortedDevoxxCities.reverse();

		console.log("<== Forward");
		devoxxCities.forEach(c => console.log(c));

		console.log("==> Reverse");
		reversedDevoxxCities.forEach(c => console.log(c));
	}

	troubleSort();

})();
