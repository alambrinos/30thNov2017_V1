// launch-driver.js

const webdriver = require('selenium-webdriver');

// instantiate the firefox browser
const builder = new webdriver.Builder();
builder.forBrowser('firefox');
const driver = builder.build();

// go to the url
driver.get('https://www.realestate.com.au/buy/in-werribee,+vic+3030/list-1');

// print the title
driver.getTitle().then(title => console.log(title));

// close the browser
driver.quit();