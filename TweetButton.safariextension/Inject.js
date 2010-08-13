function urlencode(str) {
	return escape(str).replace(/\+/g,'%2B').replace(/%20/g, '+').replace(/\*/g, '%2A').replace(/\//g, '%2F').replace(/@/g, '%40');
}

(function() {

	// console.log("loaded inject.js");

	if (window !== window.top)
		return;


	var handleMessage = function(msgEvent) {
		var messageName = msgEvent.name;
		var messageData = msgEvent.message;
		// console.log('inject message: ' + messageName);
		
		if (messageName === 'do-tweet') {

			tweetUrl = "http://twitter.com/share?url=" + urlencode(window.location.href) + "&related=danls&text=" + urlencode(document.title);
			console.log(tweetUrl);
			window.open(tweetUrl,"","status=0,toolbar=0,height=600,width=600");
		
		}
	}

	
	safari.self.addEventListener("message", handleMessage, false);

})();