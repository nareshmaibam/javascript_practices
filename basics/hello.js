console.log("hello world")

let num1 = 2999;
let num2 = 234343;
let num3 = num1 + num2;

//Array function
const sumFn = (num1, num2) => {
    return num1 + num2;
}
// console.log(sumFn(2343, 2343));
// console.log(sumFn(22343, 23343443));
const prodFn = (num1, num2) => num1 * num2
// console.log(prodFn(22343, 23343443));
function sum(name) {
    return "My Name is: " + name;
}

// console.log(sum("Naresh"))

let fname = "sanjit";
const address = "Assam";
var mbl = 9988776655;

//Array
let bioData = ["Naresh", "88994343", "sdfsdf"];
// console.log(bioData)
// console.log(bioData[0])
function addArr(mm) {
    bioData.push(mm);
    return bioData;
}

// Object
let personalInfo = {
    myName: fname,
    bio: bioData,
    mobileNum: mbl,
    add: address
}
// console.log(personalInfo);
// console.log(personalInfo.myName);
// console.log(personalInfo.bio);
let modifiedArr = addArr("assam");
// console.log(modifiedArr);
let paragraph = "my name is naresh. I am a good Boy! asdad sadf";
let para2 = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from?  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
function countLetter(parameter) {
    let countLenght = parameter.trim().length;
    return "There is: " + countLenght + " letter";
}
console.log(countLetter(paragraph))
function countWord(sentence) {
    let countedWord = sentence.split(" ");
    // console.log(countedWord);
    return "Total word count: " + countedWord.length;
}
console.log(countWord(paragraph))
console.log(countWord(para2))

//conditional operator -- if else 

const findGreatestNum = (num1, num2, num3) => {
    if (num1 > num2) {
        if (num1 > num3) {
            return num1;
        } else {
            return num3;
        }
    } else {
        if (num2 > num3) {
            return num2;
        } else {
            return num3;
        }
    }
}

let greatest_num_found = findGreatestNum(1200, 3004, 500);

let greatest_num_txt = "The greatest numbers is: ";

let result = `${greatest_num_txt} ${greatest_num_found}!`;

console.log(result);

//ternary operator
const findSmallestNum = (num1, num2) => {
    return num1 < num2 ? `The smallest number is: ${num1}!` : `The smallest number is: ${num2}!`;
}
console.log(findSmallestNum(100, 10));

//Mapping an array
let carCollection = ["lamborghini", "ferrari", "Ford", "Nano", "Rolls Royce", "Tesla", "Buggati"];

let showMyCars = carCollection.map((item) => {
    return item;
})

console.log(showMyCars);

//Filter method - to find the specific car
const searchedCar = (carCollection, car) => {
    let foundCar = carCollection.filter((item) => item.toLowerCase() === car.toLowerCase());

    if (foundCar.length !== 0) {
        return "The car found is: " + foundCar;
    } else {
        return "Your search did not found!";
    }
}
let customCar = searchedCar(carCollection, "lamborghini");
console.log(customCar);

//Object methods -- mapping

const studentInfo = [
    {
        firstName: "Naresh",
        lastName: "Singh",
        mobileNumber: 9988776644,
        address: {
            pin: 667788,
            street: "Kharar 787",
            landmark: "Near City Heart",
            city: "Mohali"
        }
    },
    {
        firstName: "Hoqab",
        lastName: "Singh",
        mobileNumber: 9988776644,
        address: {
            pin: 667788,
            street: "Kharar 787",
            landmark: "Near City Heart",
            city: "Arunanchal"
        }
    },
    {
        firstName: "Ashish",
        lastName: "Sharma",
        mobileNumber: 9988776644,
        address: {
            pin: 667788,
            street: "Kharar 787",
            landmark: "Near City Heart",
            city: "Shillong"
        }
    },
    {
        firstName: "sanjit",
        lastName: "Lungeli",
        mobileNumber: 9988776644,
        address: {
            pin: 667788,
            street: "Kharar 787",
            landmark: "Near City Heart",
            city: "Mohali"
        }
    }
]
console.log(studentInfo);
//Map method to show the nested objects
let studentList = studentInfo.map((item) => {
    return "First Name: " + item.firstName+", " + "Last Name: " + item.lastName + ", " + "City: " + item.address.city
});
console.log(studentList);







