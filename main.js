// ? 1. a, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin.







// * 2. a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.
// let a = 5;
// let aBolunen=[];
// for (let i = 0; i < 1000; i++) {
//   if (i % a === 0) {
//     aBolunen.push(i);
//   }
// }
// console.log(" a bolunen ededler : " +aBolunen);

// ! 3-7 saylı tapşırıqlar bu array üzərindən işləniləcək:

// * 3. Bu massivin minimum elementini tapın:

// const arr = [2, 4, 5, 9, 1];

// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if( arr[i] < min){
//         min=arr[i];
//     }
// }
//  console.log("min qiymet : " + min);


// * 4. Bu massivin maksimum elementini tapın
// const arr = [2, 4, 5, 9, 1];

// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > max){
//         max=arr[i];
//     }
// }
// console.log("max qiymet :" , max);


// * 5. Bu massivin minimum elementinin indeksini tapın.
// const arr = [2, 4, 5, 9, 1];
// let min = arr[0];
// let indeks = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//     indeks = i;
//   }
// }
// console.log("min qiymet " + min);
// console.log("minimum  elementin  index : " + indeks);



// * 6. Bu massivin maksimum elementinin indeksini tapın.

// const arr = [2, 4, 5, 9, 1];
// let max = arr[0];
// let indeks = 0;
// for (let i = 0; i < arr.length; i++) {
//     if( arr[i] > max){
//         max=arr[i];
//         indeks=i;
//     }
// }
// console.log("max qiymet :" + max);
// console.log("maximum elementin index :" + indeks);



// * 7. Tək indeksli massiv elementlərinin cəmini hesablayın

// const arr = [2, 4, 5, 9, 1];
// let tekler=0;
// for (const x of arr) {
//    if(arr.indexOf(x) % 2 ===1){
//     tekler+=x;
//    }
// }
// console.log("tek indeks : "+ tekler);


// ? 8. Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.

// let metn = " Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin." ;
// let shortmetn = metn.toLowerCase();
// console.log(shortmetn);



// ? 9. Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "

//  let metn = "            Mən Code Academydə Programing tədrisi alıram            ";
//  let newmetn = metn.trim();
//  console.log(newmetn);



// ? 10. Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın

//  let metn = "Mən Code Academy Tələbəsiyəm. ";
//  let metnEnd = metn.split(" ");
//  console.log(metnEnd);


// ? 11.  "            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.

// let metn = "            Mən Code Academydə Programing tədrisi alıram            " ;
// let metnEnd = metn.trim().length;
// console.log(metnEnd);