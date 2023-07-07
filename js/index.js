// creating the object
let user = {
  name: "jai",
  address: {
    street: "The Unnamed road",
    houseNo: 434,
  },
  phone: 123456789,
};

// first i have to select the phone field from the "user object
// secind i have to update field with new value

// if you have the change the value of the field your have to use "." and then field name
user.name = "sahil";

// TODO - Add a new field in the object named "isVerified" have a value false
user.randomValue = true;
user.sahil = true;

user["sahil"] = true;

// this will print the "user" object
console.log(user);

// ARRAY
let arr = ["jai", "Sector-20 A", 423432];

console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach(function () {
  console.log();
});
