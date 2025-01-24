const { clickAndSendkeys, sleep, toClick, assertText, Click, sendkeys } = require('../Helper/Action');
const { pageObject } = require('../Hooks/PageObjects');
require('dotenv').config();

const PageLocators={
    height: "//input[contains(@data-testid,'height')]",
    weight: "//input[contains(@data-testid,'weight')]",

}