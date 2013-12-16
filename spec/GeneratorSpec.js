describe("Generator", function() {
  var generator;

  beforeEach(function() {
    generator = new Generator();
  });

  it("should be able to generate Roman numbers from decimal numbers", function() {
    var validInputs = {
      1: "I",
      5: "V",
      7: "VII",
      10: "X",
      11: "XI",
      20: "XX",
      25: "XXV",
      711: "DCCXI",
      1234: "MCCXXXIV",
      1954: "MCMLIV",
      1990: "MCMXC",
      2008: "MMVIII",
      2013: "MMXIII",
      3999: "MMMCMXCIX",
      "1": "I",
      "5": "V",
      "7": "VII",
      "10": "X",
      "11": "XI",
      "20": "XX",
      "25": "XXV",
      "711": "DCCXI",
      "1234": "MCCXXXIV",
      "1954": "MCMLIV",
      "1990": "MCMXC",
      "2008": "MMVIII",
      "2013": "MMXIII",
      "3999": "MMMCMXCIX"
    };

    for (var key in validInputs) {
      expect(generator.romanNumeralGenerator(key)).toEqual(validInputs[key]);
    }
  });

  it("should be able to detect wrong inputs", function() {
    var invalidInputs = [
      "dvd",
      "seven",
      -1,
      0,
      true
    ];

    for (var index in invalidInputs) {
      expect(generator.romanNumeralGenerator(invalidInputs[index])).toEqual(null);
    }
  });
});
