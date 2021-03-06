/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/

var	mongoose = require("mongoose");
	Listing = require('./ListingSchema.js');
	config = require('./config');

	mongoose.connect(config.db.uri);

/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

	Listing.find({ name: 'Library West' } , function(err, result) {
		if (err) throw err;

		console.log(result);
	});

};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

	Listing.findOneAndRemove({ code: 'CABL' }, function(err) {
		if (err) throw err;

		console.log('CABL has been deleted.');
	});

};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

	Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, 
				{ address: '1953 Museum Rd, Gainesville, Fl, 32603' },
				function(err, result) {
					if (err) throw err;
					console.log(result);
	});

};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */

	Listing.find({}, function(err, result) {
		if (err) throw err;
		else console.log(result);

	});
}

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
