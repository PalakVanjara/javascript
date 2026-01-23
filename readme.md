<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error:  Cannot access 'nm' before initialization</p>
<p>Why : we print before declare and initiallise</p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: undefined </p>
<p>Why : we print before declaration and initiallise </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: 2</p>
<p>Why : it print block scpoe value </p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: inside:20,outside:10</p>
<p>Why : it print global scope</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: user,error for person</p>
<p>Why : property of variable can change in const, but const variable can't reassign </p>
</div>
 <!-- day2 -->
 <h3>Example 1 :</h3>
<p>true + false </p>
<p>Answer or Error:1</p>
<p>Why :true means 1 +false means 0 ,so 1+0=1 </p>
</div>
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>Answer or Error:1</p>
<p>Why : it consider null 0 means empty</p>
</div>

<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>Answer or Error:'1212'</p>
<p>Why :it combines number type with string </p>
</div>

<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>Answer or Error:False</p>
<p>Why : when value not define then it calls undefined. then !undefine=true, so !true=false, so !! undefined=false</p>
</div>

<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>Answer or Error:11</p>
<p>Why :it perform subtraction whether its string</p>
</div>

<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>
<p>Answer or Error:hello5</p>
<p>Why :NaN is a failed number oprations that why that type is number </p>
</div> 

<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>let y = null;</p>
<p>console.log(y);</p>
<p>Answer or Error:1.undefined, 2.null</p>
<p>Why : < 1. it don't store value so it return undefined,2. it consist null value so it returns null/p>
</div>

<!-- day 3 -->

div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
<p>Answer or Error: "both are greater than"</p>
<p>Why : condition is true</p>
</div>

<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
<p>Answer or Error:acess granted </p>
<p>Why :OR needs only 1 True value </p>
</div>

<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
<p>Answer or Error:pleasent day </p>
<p>Why : condition is false</p>
</div>

<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
<p>Answer or Error:falsy value </p>
<p>Why : the value of zero is False</p>
</div>

<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Answer or Error: grade:c</p>
<p>Why : condition 3 is true</p>
</div>

<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Answer or Error: STATUS:GOLD </p>
<p>Why : 1st condition is true</p>
</div>

<div>
<h1>Example 7:</h1>
<p>let loggedIn1 = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn1 && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Answer or Error:access deny:"deny" </p>
<p>Why : because both condition must true but here only 1 con is true.</p>
</div>

<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>Answer or Error: 6</p>
<p>Why : beacuse it is post increment </p>
</div>

<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>Answer or Error:  9</p>
<p>Why : it is pre increment</p>
</div>

<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>Answer or Error:(5,4) </p>
<p>Why : its post increment that's why b is 5 and c is 4</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>Answer or Error: (5,5)</p>
<p>Why : it's pre increment and b value is 5 and c is also 5</p>
</div>

<div>
<h1>Example 12:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>Answer or Error:it print 10,9 </p>
<p>Why :beacuse  is is post decrement, so it 1st show original value then it decrese and then print 9.</p>
</div>

<div>
<h1>Example 13:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>Answer or Error: 12</p>
<p>Why :it addition the post increment and pre increment </p>
</div>

<div>
<h1>Example 14:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>Answer or Error: error,100</p>
<p>Why : </p>
</div>

<div>
<h1>Example 15:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p>Answer or Error: Matched</p>
<p>Why :it is post decrement that's why the value of count stay 5 so 5===5. ans is matched </p>
<p></p>
</div>

<!-- day 4 -->
<div>
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}</P>
<p>Answer or Error: "two" "three" </p>
<p>Why : it just priont the console.log message</p>
<div>


<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<p>Answer or Error: grade  B </p>
<p>Why : it print according to condition .</p>
<div>


<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<p>Answer or Error:  </p>
<p>Why : i.</p>
<div>