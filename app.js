// Array1. n natural soni berilgan. Dastlabki n ta toq sondan tashkil topgan massiv qaytaruvchi getInitialOdds(n) nomli funksiya tuzing.
// Input: getInitialOdds(5)
// Output: [1, 3, 5, 7, 9]

// function getInitialOdds(n) {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//         result.push(i*2+1);
//     }
//     return result;
// }
// console.log(getInitialOdds(5));


// Array2. arr nomli massiv berilgan. Massiv elementlari orasidan juftlarini indekslari kamayish tartibidan hosil bo’lgan massivni qaytaruvchi getEvenReverse(arr) programma tuzilsin.
// Input: [4, 5, 7, 8, 6, 9]
// Output: [6, 8, 4]

// let arr = [4, 5, 7, 8, 6, 9];
// let newarr = [];

// function getEvenReverse(arr) {
//     for (let i = arr.length; i >= 0; i--) {
//         if(arr[i] % 2 == 0) {
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }
// console.log(getEvenReverse(arr));


// Array3. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.
// A[0], A[n-1], A[1], A[n-2], A[2], A[n-3],...
// Input:  [4, 5, 7, 8, 6, 9]
// Output: 4, 9, 5, 6, 7, 8, 8, 7, 6, 5, 9, 4

// let arr = [4, 5, 7, 8, 6, 9];
// let result = "";
// for(let i = 0; i < arr.length; i++){
//     result += ` ${arr[i]}, ${arr[arr.length - (i+1)]},`;
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

// let arr = [7, 4, 9, 2, 3, 1, 5];
// function swapMinMax() {
//     let max = arr[0];
//     let min = arr[1];
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > max) max = arr[i];
//     if(arr[i] < min) min = arr[i];
//   }
//   arr[arr.indexOf(min)] = max;
//   arr[arr.indexOf(max)] = min;
//   return arr;
// }
// console.log(swapMinMax())


// Array7. n ta elementdan tashkil topgan berilgan. Massiv elementlarini 1 ta o'rin ongga siklik siljituvchi programma tuzilsin. a[0] element qiymati a[1] ga o'tadi, a[1] esa a[2] ga, ..., a[n – 1] qiymati a[0] ga o'tadi.
// Input: [1, 5, 8, 9, 10]
// Output: [5, 8, 9, 10, 1]

// let arr = [1, 5, 8, 9, 10];
// function rotateRightByOne(arr) {
//     let first = arr.shift();
//     arr.push(first);
//     return arr;
// }
// console.log(rotateRightByOne(arr));

//                                                  UYGA VAZIFA

// Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
// Input: 5
// Output: [2, 4, 8, 16, 32]

// function getLevel2(n) {
// let arr = [];
// for(let i = 1; i <= 5; i++) {
//    arr.push(n**i)
//   }
//   return arr;
// }
// console.log(getLevel2(2));


// Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
// Input: n = 5, A = 2, B = 3
// Output: [2, 3, 5, 10, 20]

// function generateArray(n, A, B) {
//     let arr = [A, B];
//     let sum = A + B;
//     for (let i = 2; i < n; i++) {
//       arr.push(sum);
//       sum += arr[i];
//     }
//     return arr;
//   }
//   console.log(generateArray(5, 2, 3));


// Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.
// 1-usul

// let arr = [1, 4, 6, 8, 9, 2, 5];
// let reversed = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
// }
// console.log(reversed);

// 2-usul

// let arr = [1, 4, 6, 8, 9, 2, 5];
// let reversed = arr.slice().reverse();
// console.log(reversed);


// Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3

// let arr = [4, 5, 7, 8, 6, 9];
// let newarr = [];
// let newarrlength = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//         newarr.push(arr[i]);
//         newarrlength++;
//     }
// }
// console.log(newarr, `toqlar soni ${newarrlength} ta`);


// Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5

// let arr = [4, 5, 7, 8, 6, 9];
// let newarr = [];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         newarr.push(arr[i]);
//     }
// }
// for(let i = arr.length - 1; i >= 0; i--){
//     if(arr[i] % 2 == 1) {
//         newarr.push(arr[i]);
//     }
// }
// console.log(newarr);

// Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.

// let arr = [4, 5, 7, 8, 6, 9];
// let newarr = [];
// for (let i = 0; i < arr.length; i+=2) {
//   newarr.push(arr[i]);
// }
// console.log(newarr);


// Array7. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.

// let arr = [4, 5, 7, 8, 6, 9];
// let newarr = [];
// for (let i = arr.length - 2; i >= 0; i-=2) {
//   newarr.push(arr[i]);
// }
// console.log(newarr);


// Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
// A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin

// let arr = [4, 5, 7, 8, 6, 9];
// let newarr = [];
// for (let i = 0; i < arr.length; i+=2) {
//   newarr.push(arr[i]);
// }
// for (let i = 1; i < arr.length; i+=2) {
//     newarr.push(arr[i]);
//   }
// console.log(newarr);


// Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.

// let arr = [4, 5, 7, 8, 6, 9, 12];
// let newarr = [];
// for (let i = 1; i < arr.length; i+=2) {
//     newarr.push(arr[i]);
//   }
// for (let i = arr.length - 1; i >= 0; i-=2) {
//     newarr.push(arr[i]);
// }
// console.log(newarr);


// Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], ...

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let result = [];
// let left = 0;
// let right = arr.length - 1;
// while (left < right) {
//     result.push(arr[left++]);
//     result.push(arr[left++]);
//     result.push(arr[right--]);
//     result.push(arr[right--]);
// }
// console.log(result);


// Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.

// function  rangeOutSum(arr, K, L) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(i != K && i != L) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(rangeOutSum(arr, 2, 4));