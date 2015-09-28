# React and Flux application to display Bill information from JSON data.

Run `npm install` in the directory to install React from npm. Then run:

    watchify -t babelify ./jsx/*.jsx ./js/*.js -o ./dist/bundle.js -v

to produce `bundle.js`.

### Note

###### A good example of re-usable React Component is BillList.jsx. Note that it accepts itemRenderer as a property and uses it to render individual items.
###### BillDataStore loads the bill data by require'ing' BillService and when data is loaded, emits change event to notify interested parties.
###### Didn't get to write unit test(in Jasmine) for the Data Store and Actions. Happy to produce if requested.
###### You can see the rendered output by running Your Bill.html. I have used Bootstrap css lightly to structure the information.
###### Again happy to format and improve the look of the bill information further.

