//general thoughts

//take 4 data structures and parse them into a single data structures
//our storage needs to hold the following information
//candy name
//quantity sold
//total sales

//we will use an object to store the data

var store1 = {
  '2015-01-06': [
    ['Dark Chocolate Crunchies', '4.39', 1],
    ['Mint Wafers', '1.19', 3],
    ['Peppermint Poppers', '2.48', 2],
    ['Peanut Butter Buttered Peanuts', '1.89', 6]
  ],
  '2015-01-07': [
    ['Dark Chocolate Crunchies', '4.39', 4],
    ['Berry Bites', '7.99', 3],
    ['Peppermint Poppers', '2.48', 1],
    ['Caramel Twists', '.60', 7]
  ],
  '2015-01-08': [
    ['Banana Bunches', '4.63', 1],
    ['Peppermint Poppers', '2.48', 3],
    ['Mint Wafers', '1.19', 7],
    ['Dark Chocolate Crunchies', '4.39', 2],
    ['Caramel Twists', '.60', 1]
  ],
  '2015-01-09': [
    ['Caramel Twists', '.60', 3],
    ['Peanut Butter Buttered Peanuts', '1.89', 2]
  ],
  '2015-01-10': [
    ['Peanut Butter Buttered Peanuts', '1.89', 7],
    ['Caramel Twists', '.60', 2],
    ['Berry Bites', '7.99', 3],
    ['Dark Chocolate Crunchies', '4.39', 8],
    ['Mint Wafers', '1.19', 2]
  ]
}

var store2 = {
  'inventory prices': {
      'Dark Chocolate Crunchies': 4.29,
      'Mint Wafers': 1.09,
      'Peppermint Poppers': 2.38,
      'Peanut Butter Buttered Peanuts': 1.79,
      'Berry Bites': 7.89,
      'Caramel Twists': .50,
      'Banana Bunches': 4.53
  },
  'sale dates': {
      'Dark Chocolate Crunchies': ['2015-01-06', '2015-01-06', '2015-01-06', '2015-01-08'],
      'Mint Wafers': ['2015-01-06', '2015-01-07', '2015-01-07', '2015-01-09'],
      'Peppermint Poppers': ['2015-01-08', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10'],
      'Peanut Butter Buttered Peanuts': ['2015-01-07', '2015-01-07'],
      'Berry Bites': ['2015-01-06', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10'],
      'Caramel Twists': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10'],
      'Banana Bunches': ['2015-01-10', '2015-01-10']
  }
}

var store3 = [
  {
    'date':'2015-01-06',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost': 4.29,
        'quantity':1
      },
      'Mint Wafers': {
        'cost': 1.09,
        'quantity':0
      },
      'Peppermint Poppers': {
        'cost': 2.38,
        'quantity':3
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.79,
        'quantity':2
      },
      'Berry Bites': {
        'cost': 7.89,
        'quantity':0
      },
      'Caramel Twists': {
        'cost': .50,
        'quantity':0
      },
      'Banana Bunches': {
        'cost': 4.53,
        'quantity':1
      }
    }
  },
  {
    'date':'2015-01-07',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost':4.29,
        'quantity':0
      },
      'Mint Wafers': {
        'cost':1.09,
        'quantity':2
      },
      'Peppermint Poppers': {
        'cost':2.38,
        'quantity':1
      },
      'Peanut Butter Buttered Peanuts': {
        'cost':1.79,
        'quantity':0
      },
      'Berry Bites': {
        'cost':7.89,
        'quantity':3
      },
      'Caramel Twists': {
        'cost':.50,
        'quantity':7
      },
      'Banana Bunches': {
        'cost':4.53,
        'quantity':1
      }
    }
  },
  {
    'date':'2015-01-08',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost':4.29,
        'quantity':1
      },
      'Mint Wafers': {
        'cost':1.09,
        'quantity':1
      },
      'Peppermint Poppers': {
        'cost':2.38,
        'quantity':0
      },
      'Peanut Butter Buttered Peanuts': {
        'cost':1.79,
        'quantity':0
      },
      'Berry Bites': {
        'cost':7.89,
        'quantity':0
      },
      'Caramel Twists': {
        'cost':.50,
        'quantity':2
      },
      'Banana Bunches': {
        'cost':4.53,
        'quantity':0
      }
    }
  },
  {
    'date':'2015-01-09',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost':4.29,
        'quantity':0
      },
      'Mint Wafers': {
        'cost':1.09,
        'quantity':3
      },
      'Peppermint Poppers': {
        'cost':2.38,
        'quantity':2
      },
      'Peanut Butter Buttered Peanuts': {
        'cost':1.79,
        'quantity':1
      },
      'Berry Bites': {
        'cost':7.89,
        'quantity':0
      },
      'Caramel Twists': {
        'cost':.50,
        'quantity':0
      },
      'Banana Bunches': {
        'cost':4.53,
        'quantity':1
      }
    }
  },
  {
    'date':'2015-01-10',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost': 4.29,
        'quantity':2
      },
      'Mint Wafers': {
        'cost': 1.09,
        'quantity':1
      },
      'Peppermint Poppers': {
        'cost': 2.38,
        'quantity':0
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.79,
        'quantity':2
      },
      'Berry Bites': {
        'cost': 7.89,
        'quantity':5
      },
      'Caramel Twists': {
        'cost': .50,
        'quantity':7
      },
      'Banana Bunches': {
        'cost': 4.53,
        'quantity':2
      }
    }
  }
]

var store4 = {
      'Dark Chocolate Crunchies': {
        'cost': 4.34,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-08', '2015-01-08']
      },
      'Mint Wafers': {
        'cost': 1.14,
        'sold on': ['2015-01-06', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-09']
      },
      'Peppermint Poppers': {
        'cost': 2.43,
        'sold on': ['2015-01-07', '2015-01-07', '2015-01-08', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-10', '2015-01-10']
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.84,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-08']
      },
      'Berry Bites': {
        'cost': 7.94,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-06', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10', '2015-01-10']
      },
      'Caramel Twists': {
        'cost': .55,
        'sold on': ['2015-01-07', '2015-01-08', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-10']
      },
      'Banana Bunches': {
        'cost': 4.58,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-10']
      }
}
/*var salesData = {
  candyName:{
    totalSales: 0,
    numberSold: 0
  },
  candy2Name: {
    totalSales: 0,
    numberSold: 0
  }
};
*/

var salesData = {};

function parseStore1(){
  for(var day in store1){ //store1 is an object its keys are dats
    //get the value for the date keys
    var dayValue = store1[day];
    //pass the value into a function to parse it
    parseStore1Day(dayValue);
  }
}
/*store1={
key:vales
}
we decaled the key to be day*/

//focus on the first parse
//every single day value is an array
//we need to loop through the array to get the items inside
function parseStore1Day(day){
  for(var i = 0;i < day.length; i++) {
    //all the items in a dayvalue are candy arrays
    var candy = day[i];
    parseStore1Candy(candy);
  }
}
//now we are analizing the array for the candy
//there are three items within store1 candyarray
// candy passed in as an arguement is an array
//the 0th index is the name of the candy
//the 1st index is the cost
//the 2nd index is the quantity

function parseStore1Candy(candy){
  var candyName =candy[0];
  var cost = parseFloat(candy[1],10);
  var quantity = candy[2];
  addCandyToSalesData(candyName, cost, quantity);
}

function addCandyToSalesData(candyName, cost, quantity){
  //create a key in the salesDada object with the name of the candy
  //the value is an object that hold the total sales and the number sold
  //if the candy does not exist we create the data
  var candy = salesData[candyName];
  //if the candy does exist we want to update it
  if(candy){
    candy.totalSales = candy.totalSales + cost * quantity;
    candy.numberSold += quantity;
    //note the two previous lines use the same action only phrased differently
  }
  isalesData[candyName] = {};
  totalSales: cost * quantity,
  numberSold: quantity
}


var salesData = {};
function parseStore2(){
  for(var day in store2){
    parseStore1Day(store2[day]);
  }
}
var salesData = {};
function parseStore3(){
  for(var day in store3){
    parseStore1Day(store3[day]);
  }
}
var salesData = {};
function parseStore4(){
  for(var day in store4){
    parseStore1Day(store4[day]);
  }
}

//write a program that combies all data, after combing make 2 new functinos to get inventory count sale and get gross profit

//stretch make program so its justed by just specific keys.

//want to fetch from many data types and put into a singular data type, then after put into one type it can be run through

//how to aggigate into a format

//lets decide what information we care about?

//when we look at the problem we care about 1. total items sold and 2. total dollar amount from sales. we will also need candy name

//our data type will need to store all three, so the data type will take 3 factors

//
