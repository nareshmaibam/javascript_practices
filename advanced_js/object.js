let myInfo = {};
myInfo["firstName"] = "Naresh";
myInfo["fastName"] = "Singh";
myInfo["phoneNumber"] = 9988667788;
myInfo["address"] = "Manipur";
// console.log(myInfo);

let bioData = [];
const firstName = ["Sanjit", "Naresh", "Asish"];
const lastName = ["Lungeli", "Singh", "Sharma"];
const phoneNumber = ["9988776655", "4455667788", "7766554433"];
const address = ["Assam", "Manipur", "Meghalaya"];

firstName.forEach((item, index) => {
  bioData.push({ firstName: item, id: 100 + index + 1 + 9098 });
});
lastName.forEach((item, index) => {
  bioData[index] = { ...bioData[index], lastName: item };
});
phoneNumber.forEach((item, index) => {
  bioData[index] = { ...bioData[index], phoneNumber: item };
});
address.forEach((item, index) => {
  bioData[index] = { ...bioData[index], address: item };
});

console.log(bioData);
+