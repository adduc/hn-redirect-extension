var regex = /\item\?id=(\d+)/;
var destination = "http://hn.premii.com/#/comments/";

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
		var result = details.url.match(regex);

        return {
             redirectUrl: destination + result[1] + "/"
        };
    },
    {
        urls: [
            "*://news.ycombinator.com/item?id=*"
        ]
    },
    ["blocking"]
);
