/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */

var adiutca=3;
if(adiutca==1)
{

$('#UTim').html("<img src=\"./images/UTc1.png\" alt=\" UT case 1 \"> <p id=\"p1\"></p> <p id=\"p2\"></p> <p id=\"p3\"></p> <p id=\"p4\"></p>");
const p1=document.getElementById('p1');
const p2=document.getElementById('p2');
const p3=document.getElementById('p3');
const p4=document.getElementById('p4');

$('#p1').css({ "position": 'relative',
    'z-index': '2',
"top":'2em',
"left":'-6.5em',
"height": '0px'});

$('#p2').css({"position": 'relative',
'z-index': '2',
"top":'30em',
"left":'-6.5em',
"height": '0px'});

$('#p3').css({ "position": 'relative',
    'z-index': '2',
"top":'1em',
"left":'-5.5em',
"height": '0px'});

$('#p4').css({"position": 'relative',
'z-index': '2',
"top":'30em',
"left":'-5.5em',
"height": '0px'});


var p12=new LeaderLine(
    p1,p2,{color: 'blue', size: 3,dash: {animation: true},startSocket: 'bottom', endSocket: 'top',path:'fluid',startPlug:'behind',endPlug:'arrow3'}
  );
  var p43=new LeaderLine(
    p4,p3,{color: 'blue', size: 3,dash: {animation: true},startSocket: 'top', endSocket: 'bottom',path:'fluid',startPlug:'behind',endPlug:'arrow3'}
  );
    
}
else if(adiutca==2)
{
    $('#UTim').html("<img src=\"./images/UTc2.png\" alt=\" UT case 2 \"> <p id=\"p1\"></p> <p id=\"p2\"></p> <p id=\"p3\"></p> <p id=\"p4\"></p>");
    const p1=document.getElementById('p1');
    const p2=document.getElementById('p2');
    const p3=document.getElementById('p3');
    const p4=document.getElementById('p4');
    
    $('#p1').css({ "position": 'relative',
        'z-index': '2',
    "top":'2em',
    "left":'-1.5em',
    "height": '0px'});
    
    $('#p2').css({"position": 'relative',
    'z-index': '2',
    "top":'15em',
    "left":'-1.5em',
    "height": '0px'});
    
    $('#p3').css({ "position": 'relative',
        'z-index': '2',
    "top":'1em',
    "left":'0.5em',
    "height": '0px'});
    
    $('#p4').css({"position": 'relative',
    'z-index': '2',
    "top":'15em',
    "left":'0.5em',
    "height": '0px'});
    
    
    var p12=new LeaderLine(
        p1,p2,{color: 'blue', size: 3,dash: {animation: true},startSocket: 'bottom', endSocket: 'top',path:'fluid',startPlug:'behind',endPlug:'arrow3'}
      );
      var p43=new LeaderLine(
        p4,p3,{color: 'blue', size: 3,dash: {animation: true},startSocket: 'top', endSocket: 'bottom',path:'fluid',startPlug:'behind',endPlug:'arrow3'}
      );
    
}
else if(adiutca==3)
{
    $('#UTim').html("<img src=\"./images/UTc3.png\" alt=\" UT case 3 \"> <p id=\"p1\"></p> <p id=\"p2\"></p> <p id=\"p3\"></p> <p id=\"p4\"></p> ");
    const p1=document.getElementById('p1');
    const p2=document.getElementById('p2');
    const p3=document.getElementById('p3');
    const p4=document.getElementById('p4');
    
    $('#p1').css({ "position": 'relative',
        'z-index': '2',
    "top":'2em',
    "left":'-1.5em',
    "height": '0px'});
    
    $('#p2').css({"position": 'relative',
    'z-index': '2',
    "top":'30em',
    "left":'-1.5em',
    "height": '0px'});
    
    $('#p3').css({ "position": 'relative',
        'z-index': '2',
    "top":'1em',
    "left":'0.5em',
    "height": '0px'});
    
    $('#p4').css({"position": 'relative',
    'z-index': '2',
    "top":'30em',
    "left":'0.5em',
    "height": '0px'});
    
    
    var p12=new LeaderLine(
        p1,p2,{color: 'blue', size: 3,dash: {animation: true},startSocket: 'bottom', endSocket: 'top',path:'fluid',startPlug:'behind',endPlug:'arrow3',hide:true}
      );
      var p43=new LeaderLine(
        p4,p3,{color: 'blue', size: 3,dash: {animation: true},startSocket: 'top', endSocket: 'bottom',path:'fluid',startPlug:'behind',endPlug:'arrow3',hide:true}
      );
      var p13=new LeaderLine(
        p1,p3,{color: 'blue', size: 3,dash: {animation: true},startSocket: 'top', endSocket: 'bottom',path:'fluid',startPlug:'behind',endPlug:'arrow3',hide:true,startSocketGravity: [0, 0], endSocketGravity: [-5, 1040]
          }
      );
      window.addEventListener('load', function() { // NOT `DOMContentLoaded`
        // Do something about HTML document
        //p12.show('draw',{duration: 3000, timing: 'linear'});
        //sleep(3000);
        //p43.show('draw',{duration: 3000, timing: 'linear'});
          p13.show('draw',{duration: 3000, timing: 'linear'});
      });
}
  
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }