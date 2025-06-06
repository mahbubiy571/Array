// Array2. arr nomli massiv berilgan. Massiv elementlari orasidan juftlarini indekslari kamayish tartibidan hosil bo’lgan massivni qaytaruvchi getEvenReverse(arr) programma tuzilsin.
// Input: [4, 5, 7, 8, 6, 9]
// Output: [6, 8, 4]

// const arr = [4, 5, 7, 8, 6, 9];
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         newArr.unshift(arr[i]);
//     }
// }
// console.log(newArr);



// Array3. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.
// A[0], A[n-1], A[1], A[n-2], A[2], A[n-3],...
// Input:  [4, 5, 7, 8, 6, 9]
// Output: 4, 9, 5, 6, 7, 8, 8, 7, 6, 5, 9, 4

// let arr = [4, 5, 7, 8, 6, 9];
// let result = "";
// for (let i = 0; i < arr.length; i++) {
//     result += `${arr[i]}, ${arr[arr.length - (i+1) ]}, `;
// }
// console.log(result);


// Array4. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlari yig'indisini chiqaruvchi rangeSum(arr, K, L) programma tuzilsin.
// Input: arr = [1, 6, 9, 5, 8, 10, 15];
// Ouput: rangeSum(arr, 2, 5) => 32

// let arr = [1, 6, 9, 5, 8, 10, 15];
// function rangeSum(arr, K, L) {
//     let result = 0;
//     for (let i = K; i <= L; i++) {
//         result += arr[i];
//     }
//     return result;
// }
// console.log(rangeSum(arr, 2, 5));


// Array5. n ta elementdan tashkil topgan massiv berilgan. Massivda qatnashgan sonlardan faqat bittadan chiqaruvchi getSingleArr(arr) tuzilsin.
// Input: let arr =  [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7]
// Output: [7, 4, 2, 3, 1, 5]

// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// function getSingleArr(arr) {
// let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if(!newArr.includes(arr[i])) {
//         newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(getSingleArr(arr));


// Array6. n ta elementdan iborat massiv berilgan. Massivning eng kichik va eng katta elementlari topilsin va o'rni almashtirilsin.

// Input: [7, 4, 9, 2, 3, 1, 5]
// Output:
// Max: 9
// Min: 1
// [7, 4, 1, 2, 3, 9, 5]


//                                                  UYGA VAZIFA

