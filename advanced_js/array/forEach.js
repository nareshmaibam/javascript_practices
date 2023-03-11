const fruits = ["Banana", "Apple", "Orange", "Guava"];
const vegetables = ["Brinjal", "Tomato", "Potato", "Cabbage"];
let veg = [];
let myDiet = [];

fruits.forEach((item, index) => {
  veg.push({ item: item, id: veg.length + 1 });
});
vegetables.forEach((item, index) => {
  veg.push({ item: item, id: veg.length + 1 });
});

if (Object.keys(veg).length) {
  // console.log("veg", veg);
  veg.forEach((item) => {
    if (item.item === "Tomato") {
      console.log(item);
      return;
    }
    if (item.item === "Orange") {
      console.log(item);
      return;
    }
  });
}
