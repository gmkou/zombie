// Initialize
var zombie = require('zombie');
var assert = require('assert');
var util = require('util');

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
		      console.log( e.getAttribute('href'));
		  });
	      }
	    );
