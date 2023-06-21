var canvas = document.getElementById("stackArray");
var ctx = canvas.getContext("2d");
canvas.width = 1500;
canvas.height = 280;
class stack_array {
    constructor() {
        this.txtSize = 25;
        this.lineDist = 3;
        this.rectNo = 8;
        this.lineNo = this.rectNo - 1;
        this.rectWidth = 95;
        this.rectHeight = 80;
        this.rectStartx = 360;
        this.rectStarty = 50;
        this.indexPosx = this.rectStartx;
        this.indexPosy = this.rectStarty + this.rectHeight + 40;
        this.topOfStack = -1;
        this.topPosy = this.indexPosy + 200;
        this.arrowStartx = this.rectStartx + (this.rectWidth / 2);
        this.arrowStarty = this.indexPosy + 20;
        this.arrowEndx = this.arrowStartx;
        this.arrowEndy = this.arrowStarty + 40;
        this.arrowHeadOffsetx = 7;
        this.arrowHeadOffsety = 10;
        this.arrowTopx = 5;
        this.arrowTopy = 25;
        this.values = [];
    };
};
let stackarray_artefact = new stack_array();
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function drawArray() {
ctx.beginPath();
ctx.rect(stackarray_artefact.rectStartx, stackarray_artefact.rectStarty, stackarray_artefact.rectWidth*stackarray_artefact.rectNo + stackarray_artefact.lineNo*stackarray_artefact.lineDist, stackarray_artefact.rectHeight);
ctx.strokeStyle = "#288ec8";
ctx.stroke();

for(var i=1; i<stackarray_artefact.rectNo; i++) 
{
    ctx.rect(stackarray_artefact.rectStartx+(i*stackarray_artefact.rectWidth)+((i-1)*stackarray_artefact.lineDist), stackarray_artefact.rectStarty, stackarray_artefact.lineDist, stackarray_artefact.rectHeight);
    ctx.strokeStyle = "#288ec8";
    ctx.stroke();
}
handlers();
ctx.closePath(); 
ctx.beginPath();

for(var i=0; i<stackarray_artefact.rectNo; i++)
{
    ctx.font = "23px Arial";
    ctx.fillStyle = "black";
		    
    txtIndex = i.toString();
    txtWidthIndex = ctx.measureText(txtIndex).width;
		    
    txtXIndex = stackarray_artefact.indexPosx + (i*stackarray_artefact.rectWidth) + (stackarray_artefact.rectWidth-txtWidthIndex)/2 + (i*stackarray_artefact.lineDist);
    txtYIndex = stackarray_artefact.indexPosy;
		    
    ctx.fillText(txtIndex, txtXIndex, txtYIndex);
}
		
ctx.closePath();
ctx.beginPath();
		
var topPosx = stackarray_artefact.rectStartx + (stackarray_artefact.rectWidth*stackarray_artefact.rectNo + stackarray_artefact.lineNo*stackarray_artefact.lineDist)/2;
		
ctx.closePath();
}		
function writeNumbers() {
clearCanvas();
drawArray();
		
if(stackarray_artefact.topOfStack > -1)
{
    ctx.beginPath();
    ctx.fillStyle = "#a4c652";
    ctx.fillRect(stackarray_artefact.rectStartx + ((stackarray_artefact.values.length-1)*stackarray_artefact.rectWidth)+((stackarray_artefact.values.length-1)*stackarray_artefact.lineDist), stackarray_artefact.rectStarty, stackarray_artefact.rectWidth, stackarray_artefact.rectHeight);
    ctx.closePath();
}

ctx.beginPath();
for(var i=0; i<stackarray_artefact.values.length-1; i++)
{
    ctx.fillStyle = "#288ec8";
    ctx.fillRect(stackarray_artefact.rectStartx+(i*stackarray_artefact.rectWidth)+(i*stackarray_artefact.lineDist), stackarray_artefact.rectStarty, stackarray_artefact.rectWidth, stackarray_artefact.rectHeight);
}
ctx.closePath();
ctx.beginPath();
		
for(var i=0; i<stackarray_artefact.values.length; i++) 
{
    ctx.font = "25px Arial";
    ctx.fillStyle = "white";
		    
    txt = stackarray_artefact.values[i].toString();
    txtWidth = ctx.measureText(txt).width;
		    
    txtX = stackarray_artefact.rectStartx + (i*stackarray_artefact.rectWidth) + (stackarray_artefact.rectWidth-txtWidth)/2 + (i*stackarray_artefact.lineDist);
    txtY = stackarray_artefact.rectStarty + stackarray_artefact.rectHeight - ((stackarray_artefact.rectHeight-stackarray_artefact.txtSize)/2);
		    
    ctx.fillText(txt, txtX, txtY);  
}

ctx.closePath();
if(stackarray_artefact.topOfStack > -1) 
{
    var relativeArrowPos = stackarray_artefact.topOfStack*stackarray_artefact.rectWidth + (stackarray_artefact.values.length-1)*stackarray_artefact.lineDist;

    ctx.beginPath();
		    
    ctx.moveTo(stackarray_artefact.arrowStartx + relativeArrowPos, stackarray_artefact.arrowStarty);
    ctx.lineTo(stackarray_artefact.arrowEndx + relativeArrowPos, stackarray_artefact.arrowEndy);
    ctx.strokeStyle = "#a4c652";
    ctx.lineWidth=1.5;
    ctx.stroke();
		    
    ctx.moveTo(stackarray_artefact.arrowStartx + relativeArrowPos, stackarray_artefact.arrowStarty);
    ctx.lineTo(stackarray_artefact.arrowStartx + relativeArrowPos - stackarray_artefact.arrowHeadOffsetx, stackarray_artefact.arrowStarty + stackarray_artefact.arrowHeadOffsety);
    ctx.strokeStyle = "#a4c652";
    ctx.stroke();
		    
    ctx.moveTo(stackarray_artefact.arrowStartx + relativeArrowPos, stackarray_artefact.arrowStarty);
    ctx.lineTo(stackarray_artefact.arrowStartx + relativeArrowPos + stackarray_artefact.arrowHeadOffsetx, stackarray_artefact.arrowStarty + stackarray_artefact.arrowHeadOffsety);
    ctx.strokeStyle = "#a4c652";
    ctx.stroke();

    txt = "Top";
    ctx.font = "24px Arial";
    ctx.fillStyle = "black";
    txtWidth = ctx.measureText(txt).width;
    ctx.fillText(txt, stackarray_artefact.arrowEndx + relativeArrowPos - txtWidth/2, stackarray_artefact.arrowEndy + stackarray_artefact.arrowTopy);
		    
    ctx.closePath();
}	
}
function onpush(){
   var value = document.getElementById('numbers-stackarray').value;

    if(stackarray_artefact.values.length >= stackarray_artefact.rectNo) {
        document.getElementById("ins").innerHTML = "Stack overflow";
    }
    else if (value === "" || value === null) 
    {
        document.getElementById("ins").innerHTML = "Please enter an element in the textbox that you want to <b>PUSH</b> into the stack";
    }
    else
    {
	    stackarray_artefact.values.push(value);
        stackarray_artefact.topOfStack++;
	writeNumbers();
	document.getElementById("ins").innerHTML = value + " is pushed into the stack." + "<br>The index of the top of stack:" + stackarray_artefact.topOfStack;	    
    }
    document.getElementById('numbers-stackarray').value = "";
	
}  
function onpop(){
   if(stackarray_artefact.topOfStack === -1){
        document.getElementById("ins").innerHTML = "Stack underflow";
    }
    else
    {
        temp = stackarray_artefact.values.pop();
	    stackarray_artefact.topOfStack--;
		    
	writeNumbers();
	document.getElementById("ins").innerHTML = temp + " is popped from the stack." + "<br>The index of the top of stack:" + stackarray_artefact.topOfStack;	    
    }
}  
function onclear(){
    clearCanvas();
    stackarray_artefact.values = [];
    stackarray_artefact.topOfStack = -1;
    document.getElementById("ins").innerHTML = "Stack is cleared <br>  Index of the top of stack : -1";
    drawArray();
}  
function handlers()
{ 
 document.getElementById("push-button").onclick = function() { onpush(); };
 document.getElementById("pop-button").onclick = function() { onpop(); };
 document.getElementById("clear-button").onclick = function() { onclear(); };
};