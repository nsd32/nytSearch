$(document).ready(function() {

  

  function returnSearch() {
  	$('#article-card').empty();
  	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var apiKey = '?api-key=e8ebd8e4829344168c4623ea1a7831b4';
    var q = '&q=';
    var searchTerm = $('#search').val();
    var queryURL = url + apiKey + q + searchTerm;

  	$.ajax({

  		url: queryURL,
  		method: 'GET'

  	}).done(function(response) {
  		console.log(searchTerm)
  		console.log(queryURL);
  		console.log(response);

  		$('#article-title').text(response.response.docs[0].headline.main);
  		$('#author').text(response.response.docs[0].byline.original);
  		$('#date').text(response.response.docs[0].pub_date);
  		$('#link').text(response.response.docs[0].web_url);

  		for (var i = 0; i < response.response.docs.length; i++) {
  			var newArticle = $('<div class="article">');
  			var newCard = $('<div class="card-body">');
  			var articleTitle = $('<h4 class="card-text">');
  			var articleAuthor = $('<p class="card-text">');
  			var articleDate = $('<p class="card-text">');
  			var articleLink = $('<a href="" target="_blank">');

  			$(articleTitle).text(response.response.docs[i].headline.main);
  		    $(articleAuthor).text(response.response.docs[i].byline.original);
  			$(articleDate).text(response.response.docs[i].pub_date);
  			$(articleLink).text(response.response.docs[i].web_url);
  			$(articleLink).attr('href', response.response.docs[i].web_url);

  			$('#article-card').append(newArticle);
  			newArticle.append(newCard);
  			newCard.append(articleTitle);
  			newCard.append(articleAuthor);
  			newCard.append(articleDate);
  			newCard.append(articleLink);
  		  

  	    }

  	}); // ajax request
  }

  $(document).on('click', '.btn', returnSearch);
  	
  	

  	


}); // document.ready