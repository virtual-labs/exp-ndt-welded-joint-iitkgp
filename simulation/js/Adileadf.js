/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */

var adiutca=1;
if(adiutca==1)
{
  $('#UTim').html("<img src=\"./images/UTc1.png\" alt=\" UT case 1 \"> <p id=\"p1\"></p> <p id=\"p2\"></p> ");
  const p1=document.getElementById('p1');
  const p2=document.getElementById('p2');

  $('#p1').css({ "position": 'relative',
      'z-index': '2',
  "top":'2em',
  "left":'-7.0em',
  "height": '0px'});
  
  $('#p2').css({ "position": 'relative',
      'z-index': '2',
  "top":'1em',
  "left":'-6.0em',
  "height": '0px'});   

    var p12=new LeaderLine(
      p1,p2,{color: 'blue', size: 3,dash: {animation: true},startSocket: 'top', endSocket: 'bottom',path:'fluid',startPlug:'behind',endPlug:'arrow3',hide:true,startSocketGravity: [0, 0], endSocketGravity: [0, 1040]
        }
    );
    window.addEventListener('load', function() { 
        p12.show('draw',{duration: 4000, timing: 'linear'});
    });
    
}
else if(adiutca==2)
{
    
  $('#UTim').html("<img src=\"./images/UTc2.png\" alt=\" UT case 2 \"> <p id=\"p1\"></p> <p id=\"p2\"></p> ");
  const p1=document.getElementById('p1');
  const p2=document.getElementById('p2');

  $('#p1').css({ "position": 'relative',
      'z-index': '2',
  "top":'2em',
  "left":'-1.0em',
  "height": '0px'});
  
  $('#p2').css({ "position": 'relative',
      'z-index': '2',
  "top":'1em',
  "left":'0.2em',
  "height": '0px'});   

    var p12=new LeaderLine(
      p1,p2,{color: 'blue', size: 3,dash: {animation: true},startSocket: 'top', endSocket: 'bottom',path:'fluid',startPlug:'behind',endPlug:'arrow3',hide:true,startSocketGravity: [0, 0], endSocketGravity: [0, 520]
        }
    );
    window.addEventListener('load', function() { 
        p12.show('draw',{duration: 4000, timing: 'linear'});
    });
}
else if(adiutca==3)
{
    $('#UTim').html("<img src=\"./images/UTc3.png\" alt=\" UT case 3 \"> <p id=\"p1\"></p> <p id=\"p2\"></p> ");
    const p1=document.getElementById('p1');
    const p2=document.getElementById('p2');

    $('#p1').css({ "position": 'relative',
        'z-index': '2',
    "top":'2em',
    "left":'-0.6em',
    "height": '0px'});
    
    $('#p2').css({ "position": 'relative',
        'z-index': '2',
    "top":'1em',
    "left":'0.5em',
    "height": '0px'});   

      var p12=new LeaderLine(
        p1,p2,{color: 'blue', size: 3,dash: {animation: true},startSocket: 'top', endSocket: 'bottom',path:'fluid',startPlug:'behind',endPlug:'arrow3',hide:true,startSocketGravity: [0, 0], endSocketGravity: [0, 1040]
          }
      );
      window.addEventListener('load', function() { 
          p12.show('draw',{duration: 4000, timing: 'linear'});
      });
}