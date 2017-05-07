$(document).ready(function() {
	
	function movieLoad(getMovieId) {
		$.ajax({
			url:"https://api.themoviedb.org/3/movie/" + getMovieId + "?api_key=965ce677954823fbdb9aa8c85647fc2f",
			dataType: "json",
			complete: function (response) {
				var movie = JSON.parse(response.responseText);
				$('#name').html(movie.title);
				$('#score').html("Average Score: " + movie.vote_average + "/10");
				$('#overview').html("<h3>Overview:</h3>" + movie.overview);
			},
			error: function () {
				$('#output').html('Bummer: there was an error!');
			},
		});
	}
	
	$("#movie").change(function() {
		if ($("#movie").val() == "Fate") {
			movieLoad("337339");
		}
		else if ($("#movie").val() == "Rogue") {
			movieLoad("330459");
		}
		else if ($("#movie").val() == "Breathe") {
			movieLoad("300669");
		}
	});
});
