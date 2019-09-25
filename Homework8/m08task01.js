// Task01 - create regular expression which tests for corectness phone numbers.
// Phone number should have 10 digits optionally divided to 3-digit groups by periods ("."), dashes ("-"),
// brackets ("()"), or space symbols (" "). Brackets should be used only at the beginning
// Examples of correct phone numbers:
// (123) 456 7899
// (123).456.7899
// (123)-456-7899
// 123-456-7899
// 123 456 7899
// 1234567899

function task01(testNumber) {
    var reg = /\(?[0-9]{3}\)?\.?-?\s?[0-9]{3}\.?-?\s?[0-9]{4}/gm;
   console.log(reg.test(testNumber));
}