function getMovieById(id) {
      var dfd = new $.Deferred();
    $.ajax({
        url:"https://api.themoviedb.org/3/movie/"+id
 +"?api_key=35e16679c616a21b9ddebb66272c5902",
          dataType: "json",
         complete: function (response) {          
             var movie = response.responseJSON;
             return dfd.resolve( movie );//movie gets sent to .then()
         },
         error: function () {
             dfd.reject("error on ajax call");
         },
     });
     return dfd.promise();  //returns before resolve
}

function getMovie(id) {
   getMovieById(id).then(
      function(movie) {//success
                       //getMovieById finished to process results.
                       //This is better as we removed dependency on html
                       //need to stringify to display results.
			$('#output').html(JSON.stringify(movie));
            $('#overview').html(movie.overview);              
      },
      function(message) {//failure
            $('#promise').html('Bummer: there was an error! ' + message);
      }
      );
}
