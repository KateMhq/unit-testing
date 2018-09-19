const obj = require('../src/index');

test('Addition', function(){
  const expected = 5;
  const result = obj.add(2, 3);
  expect(result).toBe(expected);
});

test("longest string",function(){
  const expected="hello world we are in london atm";
  const result = obj.arrayOfString(["hello world we are in london atm","apple","another apple"]);
  expect(result).toBe(expected);
});

test('decode text', function(){
  const expected = "h3110";
  const result = obj.encrypt("hello");
  expect(result).toBe(expected);
});

test('unique string', function(){
  const expected = ['a','b','c','d'];
  const result = obj.stringsAndNumbers(['a','a','b','c','d','d']);
  expect(result).toEqual(expected);
});

test("Developer", function(){
  const expected = {
    name: "nikki",
    languages:["css", "html", "javascript"]
    }
  const result=obj.developer;
  expect(result).toEqual(expected);
});


test("new language learned", function(){
  const expected = ["css", "html", "javascript","python"];
  const result = obj.developerLearned.learnLanguage("python");
  expect (result).toEqual(expected);
})


test("string concat", function(){
  const expected = "hello Nikki and Kate";
  const result = obj.stringsConcat(["hello",333,"Nikki","and","Kate",123,44])
  expect (result).toBe(expected);

})

test("negativeOnly", function(){
  const expected = [-1, -3, -10, -111, -763];
  const result = obj.negativeOnly([-1, 2, -3, 10, -10, 24,-111, 44,-763])
  expect (result).toEqual(expected);
})


test("camelise strings",function(){
  const expected="helloKateNikkiWedSunny";
  const result = obj.camelise("hello kate nikki wed sunny");
  expect (result).toEqual(expected);
})

test("check if it is a prime number",function(){
  const expected=true;
  const result=obj.isPrime("7");
  expect (result).toEqual(expected);
})

test("current walk location", function(){
  const walker=new obj.Walker(5,6)
  const expected=[[0,0],[5,6]];
  walker.trackJourney()
  const result=walker.journey;
  expect (result).toEqual(expected);
})

test("steps walked",function(){
  const walker= new obj.Walker(20,30)
  const expected=[[0,0],[20,20]];
  walker.trackJourney();
  walker.walk("S",10);
  const result=walker.journey;
  expect(result).toEqual(expected)
})

test("current location",function(){
  const walker=new obj.Walker(30,40)
  const expected=[30,40]
  walker.trackJourney();
  const result = walker.currentLocation();
  expect(result).toEqual(expected)

})

test("total steps",function(){
  const walker=new obj.Walker(10,40)
  const expected=50;
  walker.trackJourney();
  const result = walker.totalStep();
  expect(result).toEqual(expected)
})
