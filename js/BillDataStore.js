'use strict';

var AppDispatcher = require('./AppDispatcher'),
	EventEmitter = require('events').EventEmitter,
	BillEvents = require('./BillActions').BillEvents,
	dataService = require('./BillService'),
	assign = require('object-assign')
	;


var _billData = {};

/**
 *	Dispatches change event on data load
 */
var BillDataStore = assign({}, EventEmitter.prototype, {


	getBillData: function(){

		return _billData;
	},
	emitChange: function(){
		this.emit('change');
	},

	dispatcherToken: AppDispatcher.register(function(action){

		switch(action.actionType){
			case BillEvents.BILL_DATA_LOADED: _billData = action.data;
												BillDataStore.emitChange();
												break;
			default:;
		}
		return true;
	})
});

module.exports = BillDataStore;