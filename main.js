export function returnResult(){
    return 'result';
}

export function capitalize(arg){
    return arg.toUpperCase();
}

export function reverseString(arg){
    return arg.split('').reverse().join('');
}

export const calculator = {
    add: function (a, b) {
        return a + b;
    },
    substract: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    multiply: function (a, b) {
        return a * b;
    },
}

export function caesarCipher(text, shift) {  
    let result = '';  

    // Traverse the text  
    for (let i = 0; i < text.length; i++) {  
        let char = text[i];  

        // Encrypt uppercase letters  
        if (char >= 'A' && char <= 'Z') {  
            result += String.fromCharCode((char.charCodeAt(0) + shift - 65) % 26 + 65);  
        }  
        // Encrypt lowercase letters  
        else if (char >= 'a' && char <= 'z') {  
            result += String.fromCharCode((char.charCodeAt(0) + shift - 97) % 26 + 97);  
        } else {  
            result += char; // Non-alphabetical characters remain unchanged  
        }  
    }  

    return result;  
}  

export function analyzeArray(arr){
    const avg = function(){
        // Check if the array is empty  
        if (arr.length === 0) {  
            return 0; // Return 0 or handle it as you prefer if no arr are provided  
        }  

        // Sum all the arr in the array  
        let sum = 0;  
        for (let i = 0; i < arr.length; i++) {  
            sum += arr[i];  
        }  

        // Calculate the average  
        const average = sum / arr.length;  
        return average;  
    }

    const min = function(){
        // Check if the array is empty  
        if (arr.length === 0) {  
            return null; // Return null or handle it based on your preference  
        }  

        // Initialize min with the first element of the array  
        let min = arr[0];  

        // Iterate through the array to find the minimum value  
        for (let i = 1; i < arr.length; i++) {  
            if (arr[i] < min) {  
                min = arr[i]; // Update min if a smaller value is found  
            }  
        }  

        return min;  
    }

    const max = function(){
        // Check if the array is empty  
        if (arr.length === 0) {  
            return null; // Return null or handle it based on your preference  
        }  

        // Initialize max with the first element of the array  
        let max = arr[0];  

        // Iterate through the array to find the maximum value  
        for (let i = 1; i < arr.length; i++) {  
            if (arr[i] > max) {  
                max = arr[i]; // Update max if a larger value is found  
            }  
        }  

        return max;
    }

    const length = function(){
        // Check if the array is empty  
        if (arr.length === 0) {  
            return null; // Return null or handle it based on your preference  
        }  

        // Initialize max with the first element of the array  
        let length = 0;  

        // Iterate through the array to find the maximum value  
        for (let i = 0; i < arr.length; i++) {  
            length += 1;  
        }  

        return length;
    }

    return {
        average: avg(),
        min: min(),
        max: max(),
        length: length(),
    }
}