const functions = require('../src/index');

test('Addition', function(){
  const expected = 5;
  const result = functions.add(2, 3);
  expect(result).toBe(expected);
});

test("longest string",function(){
  const expected="hello world we are in london atm";
  const result = functions.arrayOfString(["hello world we are in london atm","apple","another apple"]);
  expect(result).toBe(expected);
});

test('decode text', function(){
  const expected = "h3110";
  const result = functions.encrypt("hello");
  expect(result).toBe(expected);
});

test('unique string', function(){
  const expected = ['a','b','c','d'];
  const result = functions.stringsAndNumbers(['a','a','b','c','d','d']);
  expect(result).toEqual(expected);
});

test("Developer", function(){
  const expected = {
    name: "nikki",
    languages:["css", "html", "javascript"]
    }
  const result=functions.developer;
  expect(result).toEqual(expected);
});


test("new language learned", function(){
  const expected = ["css", "html", "javascript","python"];
  const result = functions.developerLearned.learnLanguage("python");
  expect (result).toEqual(expected);
})


test("string concat", function(){
  const expected = "hello Nikki and Kate";
  const result = functions.stringsConcat(["hello",333,"Nikki","and","Kate",123,44])
  expect (result).toBe(expected);

})

test("negativeOnly", function(){
  const expected = [-1, -3, -10, -111, -763];
  const result = functions.negativeOnly([-1, 2, -3, 10, -10, 24,-111, 44,-763])
  expect (result).toEqual(expected);
})


test("camelise strings",function(){
  const expected="helloKateNikkiWedSunny";
  const result = functions.camelise("hello kate nikki wed sunny");
  expect (result).toEqual(expected);
})
