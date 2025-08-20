//1
const StringReverse = (text) => {
    let newText = []
    for (let i = text.length - 1; i > -1; i--) {
        newText.push(text[i])
    }
    return newText.join("")
}
// const reverseText = StringReverse("hello")
// console.log(reverseText)


//2
const vowelCouont = (text) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u" ||
            text[i] === "A" || text[i] === "E" || text[i] === "I" || text[i] === "O" || text[i] === "U"
        ) {
            count++
        }
    }
    return count
}
// const numVouwel = vowelCouont("programming")
// console.log(numVouwel)



//3
const checkPalindrom = (text) => {
    let newText = []
    for (let x = text.length - 1; x > -1; x--) {
        newText.push(text[x])
    }
    const reversedText = newText.join("")
    if (text === reversedText) {
        return true
    } else {
        return false
    }
}
// const palindromText = checkPalindrom("madam")
// console.log(palindromText)
// const palindromText2 = checkPalindrom("hello")
// console.log(palindromText2)



//4
const findLargets = (numbers) => {
    if (typeof numbers !== "object") {
        return "Invalid input"
    }
    let larger = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > larger) {
            larger = numbers[i]
        }
    }
    return larger;
}
// const larger = findLargets([5,1,9,3]);
// console.log(larger)


//5
const removeDuplicate = (numbers) => {
    const newArray = [numbers[0]]

    for (let x = 0; x < numbers.length; x++) {
        if (
            !newArray.includes(numbers[x])
        ) {
            newArray.push(numbers[x])
        }
    }
    return newArray
}
// const singleElementArray = removeDuplicate([1,2,2,3,4,4]);
// console.log(singleElementArray)


//6
const Sum = (numbers) =>{
    let sum = 0;
    for (let i = 0 ; i <numbers.length ; i++ ){
        sum = sum + numbers[i]
    }
   return sum
}
// const arrSum = Sum([1,2,3,4])
// console.log(arrSum)


//7
const getEven = (nums) =>{
    const evens = [];
    for( let i = 0; i<nums.length ; i++){
        if(nums[i]%2 === 0){
            evens.push(nums[i])
        }
    }
    return evens
 }
// const evenNumbers = getEven([1,2,3,4,5,6])
// console.log(evenNumbers)


//8
const captWord = (sentence) =>{
    const sentanceArray = sentence.split(" ");
   const upperArray=  sentanceArray.map( word=> word.charAt(0).toUpperCase() + word.slice(1))
    return upperArray.join(" ")
}
// const firstCapLetter = captWord("hello world");
// console.log(firstCapLetter)



//9
const numFact = (num)=>{
    if (num === 0){
        return "No Factorial Possible"
    }
    let factSUm = 1
    for (let x = num ; x>0; x--){
       index = x;
       factSUm = factSUm * x
    }
    return factSUm
}
// const factorial = numFact(5)
// console.log(factorial)



//10
const printPingPong = () =>{
    let number = 20;
    for (let num = 1 ; num <= number ; num ++){
        if ( num % 3 == 0){
            if (num % 5==0){
                console.log(num, "--Ping Pong")
            }else{
                console.log(num, "--Ping")
            }

        }else if (num % 5 == 0){
            if(num % 3 ==0){
                console.log(num, "--Ping Pong")
            }else{
                console.log(num, "--Pong")
            }
        }
        else{
            console.log(num)
        }
    }
}
printPingPong()