Draw the Execution Context Diagram for following code and share as explained below.
Create the GEC and FEC with CP and EP flow
Create the Stack and Heap Flow
Create the Stack Diagram
Create a Readme file with all the above diagram and share on Discord

const message = "I can do it";

fucntion sum(a, b) {
const result = a + b;
return result;
}

function mul(a, b) {
const result = a \* b;
return result;
}

function calc(a, b) {
return (sum(a, b) + mul(a,b))/2;
}

function getResult(a, b) {
return calc(a, b);
}

getResult(8, 5);

//Creation Phase  
 message
sum() in memory
mul() in memory
calc() in memory
getResult() in mmemory

//Execution Phase
message = "I can do it."
getResult: Execute
creation phase for getResult
a = 8
b = 5
execution phase for getResult
calls Calc(a,b)
Calc: Execute
creation phase for calc
a = 8
b = 5
Execution phase for calc
calls sum(a,b)
Creation Phase for sum
result
a = 8
b = 5
Execution phase for sum
result = 8+5 = 13
returns result
now calls mul(a,b)
Creation Phase for sum
result
a = 8
b = 5
Execution phase for sum
result = 8\*5 = 40
returns result

        Now calc  return (13+40/2)

        Now get result gets  it value
