// Initialize
var zombie = require('zombie');
var assert = require('assert');
var util = require('util');
var url = require('url');

var visitUrl = 'http://www.cnn.com';

// access url
zombie.visit( visitUrl, 
	      function(err, browser, status) {
		  browser.wait(function(){
		      //console.log(browser.html());
		  });
		  
		  if(err) {
		      console.log(err);
		      return err;
		  }
		  links = browser.querySelectorAll('a');
		  return Array.prototype.map.call(links, function(e) {
		      href = e.getAttribute('href');
		      var obj = url.parse(href);
		      if (obj.protocol === undefined) {
			  var tmp = visitUrl + href;
			  obj = url.parse(tmp) ;
			  href = obj.href;
		      }
		      console.log(href);
		  });
	      }
	    );
