'use strict';

var BillActions = require('./BillActions'),
	$ = require('@rtorr/ajax-only'),
	BillEvents = require('./BillActions').BillEvents
	;

// This should ideally be in a service layer
$.get('https://still-scrubland-9880.herokuapp.com/bill.json', function (result) {

		var billData = JSON.parse(JSON.stringify(result));
		console.log("Bill Data Service: " + billData);
		//_billData = billData;
		//BillDataStore.emitChange();
		BillActions.billDataLoaded(billData);
	}
);

module.exports = {};
