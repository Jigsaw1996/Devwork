$.ajax({
 
	url:"https://api.themoviedb.org/3/movie/popular?page=1&api_key=35e16679c616a21b9ddebb66272c5902",
	dataType: "json",
	complete: function (response) {
		// response contains number of items one of which
		// is any associated data .responseText
		$('#output').html(response.responseText);
	},
	error: function () {
		$('#output').html('Bummer: there was an error!');
	},
});
