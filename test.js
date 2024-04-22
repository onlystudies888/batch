function array(){

let data = document.getElementById("inputField").value

const sync_arr = data.split(" ").map(Number) 
    

 

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements at indices i and j
    }
    return arr;
}

let arr = shuffleArray(sync_arr);
// console.log(shuffledArr);


let total1 = arr.reduce((sum, num) => sum + num, 0);
let total = total1/2
let a = [];
let b = [];
let sum_a = 0;
let sum_b = 0;

for (let i = 0; i < arr.length; i++) {
    if (sum_a + arr[i] <= total) {
        a.push(arr[i]);
        sum_a += arr[i];
    } else {
        b.push(arr[i]);
        sum_b += arr[i];
    }
}

// Redistribute the remaining elements to balance sums as much as possible
let attempt = 0;
while (Math.abs(sum_a - sum_b) > 1 && attempt < 50000) {
    const diff = sum_a - sum_b;
    let transferElement;
    if (diff > 0) {
        // Move an element from a to b
        transferElement = a.pop();
        b.push(transferElement);
        sum_a -= transferElement;
        sum_b += transferElement;
    } else {
        // Move an element from b to a
        transferElement = b.pop();
        a.push(transferElement);
        sum_b -= transferElement;
        sum_a += transferElement;
    }
    attempt = attempt+1
}

total = sum_a; // Update total to the new sum of a

console.log("Total:", total1);
console.log('a:', a);
console.log('a:', a.length);
console.log('b:', b);
console.log('b:', b.length);
console.log("a_total:", sum_a);
console.log("b_total:", sum_b);
console.log("attempts: ",attempt)


document.getElementById("output").innerText ="Coder1: "+a+" =  "+a.length+"\n"+ "Coder2: "+b+" =  "+b.length+"\n"
document.getElementById("output_new").innerText = "Coder1 Claims = "+sum_a+"\n"+"Coder2 Claims = "+sum_b


}