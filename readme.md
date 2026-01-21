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
