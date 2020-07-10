let str = 'ahb acb aeb aeeb adcb axeb';

console.log(str.match(/a.b/g));//1

let str2 = 'aba aca aea abba adca abea';

console.log(str2.match(/\w{4}/g));//2

let str3 = 'aba aca aea abba adca abea';

console.log(str3.match(/ab.a/g));//3

let str4 = 'aa aba abba abbba abca abea';

console.log(str4.match(/abb*a/g));//4
console.log(str4.match(/ab*a/g));//5
console.log(str4.match(/ab?a/g));//6

let str5 = 'a.a aba aea';
console.log(str5.match(/\a\.\a/));//9

let str6 = '2+3 223 2223';

console.log(str6.match(/\d\+\d/));//10
