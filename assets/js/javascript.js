// var students =  [85, 'shakib', 50, [30,50,80], 'a', 98];

// var all = students[3];

// console.log(all);
// console.log(students[3][2]);


// var a = [1, 2, 3];
// var b = a;
// b[1] = 5;

// console.log(a);  // out put [1, 5, 3]
// console.log(b);  // out put [1, 5, 3]


//***************class 1 done************ */

// var a = {
//     key: 'value' //key value pair
// }

// var user1 = {
//     firstName: 'Mobarok',
//     lastName: 'hossain',
//     mobile: '01837875027'
// }
// var user2 = user1;


// user2.lastName = 'Shakib';

// var key = 'mobile';

// console.log(user1[key]) 

// console.log(user1);
// console.log(user2);
// console.log(user2.firstName); 
// console.log(user1['mobile']);


// ************* if else***********//
// var a = {
//     firstName: 'habib'
// }
// var b = {
//     firstName: 'habib'
// }

// if(a==b){
//     console.log('yes');
// }else{
//     console.log('no');   //out put no  because object reference difference 
// }

// console.log(typeof(a));


// ***********loop**********//
// var a = [1,2,3,4,5,6];

// way 1
// for(var i=0; i<a.length; i++){
//     console.log(a[i]);
// }

// way 2    value of list/array use in for loop
// for(var value of a){       //value use difference name as your wish
//     console.log(value);
// }

// way 3   index use in for loop
// for(var i in a){
//     // console.log(i);  //show index
//     // console.log(a[i]);  //show out all number
// }