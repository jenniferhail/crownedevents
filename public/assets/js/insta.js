$(document).ready(function(){
	var feed = new Instafeed({
	    get: 'user',
	    limit: 5,
	    userId: '{{ socialMedia.instagramId }}',
	    accessToken: '{{ socialMedia.instagramAccessToken }}',
	    clientId: '5ff1d8068b4a47ccb4836a0dbd7c15e1',
	    // template: '<a class="instagram" href="{{ instaLink }}"><img src="{{ instaImg }}" /></a>'
	});
	feed.run();
});