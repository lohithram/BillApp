'use strict';

var AppDispatcher = require('./AppDispatcher')
		;

var BillEvents = {LOAD_BILL: 'loadBill', BILL_DATA_LOADED: 'billDataLoaded'};

var BillActions = {

	BillEvents: BillEvents,

	loadBillData: function() {

		AppDispatcher.dispatch({

			actionType: BillEvents.LOAD_BILL
		});
	},

	billDataLoaded: function(billData) {

		AppDispatcher.dispatch({

			actionType: BillEvents.BILL_DATA_LOADED,
			data: billData	
		});
	}
};

module.exports = BillActions;