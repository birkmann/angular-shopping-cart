// create a data service that provides a store and a shopping
// cart that will be shared by all views
// (instead of creating fresh ones for each view).

storeApp.factory("DataService", function() {
	var myStore = new store();
	var myCart = new shoppingCart("AngularStore");
	myCart.addCheckoutParameters("PayPal", "your PayPal merchant account id");
	myCart.addCheckoutParameters("Google", "your Google merchant account id ", {
		ship_method_name_1: "UPS Next Day Air",
		ship_method_price_1: "20.00",
		ship_method_currency_1: "USD",
		ship_method_name_2: "UPS Ground",
		ship_method_price_2: "15.00",
		ship_method_currency_2: "USD"
	});
	return {
		store: myStore,
		cart: myCart
	};
});