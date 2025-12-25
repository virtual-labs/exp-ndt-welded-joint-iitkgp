/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */

function rng(s,e,st){
    var adi=[];
    for(i=0;i<=st;i++){
        adi[i]=(s+i*(e-s)/st);
    }
    return adi;
};

function adimap(xA,yA,xm){
 var res=[];
 for(k=0;k<xm.length;k++){
  for(j=0;j<xA.length;j++){
      if(xm[k]==xA[j]){
        res[k]=yA[j];
        break;
      }else{
        res[k]=0;
      }
  }
 }
 return res;
};
var adit=0, cs=0, UTca=0, DTsq=0, MTsq=0, MTc1=0,MTc2=0,p12;

function adindt(a){
  if(a==0){
    $("#UT").hide();
    $("#DT").hide();
    $("#MT").hide();
    $("#RT").hide();
    $("#adinxt").hide();
    $("#UTnxt").hide();
    DTsq=0;
    MTsq=0;
    adit=0;
  }
  else if(a==1){
    DTsq=0; 
    MTsq=0;
    RTsq=0;
    adit=1;
    $("#UT").show();
    $("#DT").hide();
    $("#MT").hide();
    $("#RT").hide();
    $("#adinxt").hide();

      MTc1=0;
      MTc2=0;
      if(UTca==0){
        UTca=1;
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

          p12=new LeaderLine(
            p1,p2,{color: 'blue', size: 3,dash: {animation: true},startSocket: 'top', endSocket: 'bottom',path:'fluid',startPlug:'behind',endPlug:'arrow3',hide:true,startSocketGravity: [0, 0], endSocketGravity: [0, 1040]
              }
          );
          
          p12.show('draw',{duration: 4000, timing: 'linear'});
          $("#UTnxt").html("<div class=\"border border-3  btn btn-success  rounded-pill\" onclick=\"adindt(1);\"> <span class=\"h6\">&nbsp; Next &nbsp;</span></div>");
        $("#UTnxt").show();
        adi(1,p12);
    }
    else if(UTca==1){
      UTca=2;
      p12.hide('none',{duration:0});
      $("#UTnxt").hide();
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
    
        p12=new LeaderLine(
          p1,p2,{color: 'blue', size: 3,dash: {animation: true},startSocket: 'top', endSocket: 'bottom',path:'fluid',startPlug:'behind',endPlug:'arrow3',hide:true,startSocketGravity: [0, 0], endSocketGravity: [0, 520]
            }
        );
            p12.show('draw',{duration: 4000, timing: 'linear'});
      $("#UTnxt").html("<div class=\" border border-3  btn btn-success  rounded-pill\" onclick=\"adindt(1);\"> <span class=\"h6\">&nbsp; Next &nbsp;</span></div>");
      $("#UTnxt").show();
      adi(2);
    }
    else if(UTca==2){
      UTca=0;
      $("#UTnxt").hide();
      p12.hide('none',{duration:0});
      $('#UTim').html("<img src=\"./images/UTc3.png\" alt=\" UT case 3 \"> <p id=\"p1\"></p> <p id=\"p2\"></p><p id=\"p3\"></p> <p id=\"p4\"></p> ");
    const p1=document.getElementById('p1');
    const p2=document.getElementById('p2');
    const p3=document.getElementById('p3');
    const p4=document.getElementById('p4');
    

    $('#p1').css({ "position": 'relative',
    'z-index': '1',
"top":'2em',
"left":'2.5em',
"height": '0px'});

$('#p2').css({ "position": 'relative',
    'z-index': '1',
"top":'1em',
"left":'3.0em',
"height": '0px'});
    
    $('#p3').css({ "position": 'relative',
        'z-index': '2',
    "top":'1em',
    "left":'3.6em',
    "height": '0px'});
    
    $('#p4').css({ "position": 'relative',
        'z-index': '2',
    "top":'1em',
    "left":'4.3em',
    "height": '0px'});   

    p12=new LeaderLine(
      p1,p2,{color: 'blue', size: 3,dash: {animation: true},startSocket: 'top', endSocket: 'bottom',path:'fluid',startPlug:'behind',endPlug:'arrow3',hide:true,startSocketGravity: [0, 0], endSocketGravity: [0, 520]
        }
    );
      p34=new LeaderLine(
        p3,p4,{color: 'blue', size: 3,dash: {animation: true},startSocket: 'top', endSocket: 'bottom',path:'fluid',startPlug:'behind',endPlug:'arrow3',hide:true,startSocketGravity: [0, 0], endSocketGravity: [0, 1040]
          }
      );
      p12.show('draw',{duration: 2000, timing: 'linear'});
      p34.show('draw',{duration: 4000, timing: 'linear'});
      
      $("#UTnxt").html("<div class=\" border border-3  btn btn-success  rounded-pill\" onclick=\"p12.hide('none',{duration:0});p34.hide('none',{duration:0});adindt(1);\"> <span class=\"h6\">&nbsp; Restart &nbsp;</span></div>");
      $("#UTnxt").show();
      adi(3);
    }
    
  }

  else if(a==2){
    if(adit==1){
      p12.hide('none',{duration:0});
      p34.hide('none',{duration:0});
      DTsq=0;
      RTsq=0;
    MTsq=0;
    UTca=0;
    }
    if(DTsq==0){
      $("#UT").hide();
    $("#MT").hide();
    $("#DT").show();
    $("#RT").hide();
    DTsq=1;
    $("#adinxt").hide();
      $("#adime").html("<div> <img class=\"img img-fluid\" src=\"./images/wrkp.png\" alt=\"Initial Setup\"> <br> <span class=\"h4\"> Welded Workpiece </span></div>");
      $("#adinxt").html("<div class=\" border border-3  btn btn-success  rounded-pill\" onclick=\"adindt(2);\"> <span class=\"h6\">&nbsp; Next &nbsp;</span></div>");
      $("#adinxt").show();
    }
    else if(DTsq==1){
      DTsq=2;
      $("#adinxt").hide();
      $("#adime").html("<div> <img class=\"img img-fluid\" src=\"./images/wrkp.png\" alt=\"Initial Setup\"> <br> <br> <span class=\"h4\"> Welded Workpiece </span></div>");
      $("#adinxt").html("<div class=\" img img-fluid\" onclick=\"adindt(2);\"><img src=\"./images/DTpb.png\" alt=\"DT Penetrant\"></div>");
      $("#adinxt").show();
    }else if(DTsq==2){
      DTsq=3;
      $("#adinxt").hide();
      $("#adime").html("<div> <video id=\"adivid\" autoplay>  <source src=\"./images/DTapv.mp4\" type=\"video/mp4\"> </video></div>");
      $("#adivid").width('100%');
      $("#adivid").on("ended",function(){
          $("#adime").html("<div> <img class=\"img img-fluid\" src=\"./images/DT1f.png\" alt=\"Initial Setup\"></div>");
          $("#adinxt").html("<div class=\" img img-fluid\" onclick=\"adindt(2);\"><img src=\"./images/DTcb.png\" alt=\"DT Cleaner\"></div>");
          $("#adinxt").show();
      });
    }else if(DTsq==3){
      DTsq=4;
      $("#adinxt").hide();
      $("#adime").html("<div> <video id=\"adivid\" autoplay>  <source src=\"./images/DTacv.mp4\" type=\"video/mp4\"> </video></div>");
      $("#adivid").width('100%');
      $("#adivid").on("ended",function(){
          $("#adime").html("<div> <img class=\"img img-fluid\" src=\"./images/DT2f.png\" alt=\"Initial Setup\"></div>");
          $("#adinxt").html("<div class=\" img img-fluid\" onclick=\"adindt(2);\"><img src=\"./images/DTdb.png\" alt=\"DT Cleaner\"></div>");
          $("#adinxt").show();
      });
    }
    else if(DTsq==4){
      DTsq=0;
      $("#adinxt").hide();
      $("#adime").html("<div> <video id=\"adivid\" autoplay>  <source src=\"./images/DTadv.mp4\" type=\"video/mp4\"> </video></div>");
      $("#adivid").width('100%');
      $("#adivid").on("ended",function(){
          $("#adime").html("<div> <img class=\"img img-fluid\" src=\"./images/DT3f.png\" alt=\"Initial Setup\"></div>");
          $("#adinxt").html("<div class=\" border border-3  btn btn-success  rounded-pill\" onclick=\"adindt(2);\"> <span class=\"h6\">&nbsp; Restart &nbsp;</span></div>");
          $("#adinxt").show();
      });
    }
    
  }
  else if(a==3){
    if(adit==1){
      p12.hide('none',{duration:0});
      p34.hide('none',{duration:0});
      DTsq=0;
      MTsq=0;
      UTca=0;
    }
    $("#UT").hide();
    $("#DT").hide();
    $("#MT").show();
    $("#RT").hide();
    if(MTsq==1){
      MTc2=0;
      $("#MTim").html("<br>ADITYA 1<br>");
      if(MTc1==0){
        MTc1=1;
        $("#MTim").html("<div> <img class=\"img img-fluid\" src=\"./images/MPTc1IM.png\" alt=\"Initial Setup\"></div>");
        $("#MTnxt").html("<div class=\" border border-3  btn btn-success  rounded-pill\" onclick=\"adindt(3);\"> <span class=\"h6\">&nbsp; Next &nbsp;</span></div>");
    }
    else if(MTc1==1){
      MTc1=0;
      $("#MTnxt").hide();
      $("#MTim").html("<div> <video id=\"adivid\" autoplay>  <source src=\"./images/MPTc1v.mp4\" type=\"video/mp4\"> </video></div>");
      $("#adivid").width('100%');
      $("#adivid").on("ended",function(){
          $("#MTim").html("<div> <img class=\"img img-fluid\" src=\"./images/MPTc1FM.png\" alt=\"Initial Setup\"></div>");
          $("#MTnxt").html("<div class=\" border border-3  btn btn-success  rounded-pill\" onclick=\"adindt(3);\"> <span class=\"h6\">&nbsp; Restart &nbsp;</span></div>");
          $("#MTnxt").show();
      });
    }
  }
  else if(MTsq==2){
    MTc1=0;
    $("#MTim").html("<br>ADITYA 2<br>");
    if(MTc2==0){
      MTc2=1;
      $("#MTim").html("<div> <img class=\"img img-fluid\" src=\"./images/MPTc2IM.png\" alt=\"Initial Setup\"></div>");
      $("#MTnxt").html("<div class=\" border border-3 btn btn-success  rounded-pill\" onclick=\"adindt(3);\"> <span class=\"h6\">&nbsp; Next &nbsp;</span></div>");
  }
  else if(MTc2==1){
    MTc2=0;
    $("#MTnxt").hide();
    $("#MTim").html("<div> <video id=\"adivid\" autoplay>  <source src=\"./images/MPTc2v.mp4\" type=\"video/mp4\"> </video></div>");
    $("#adivid").width('100%');
    $("#adivid").on("ended",function(){
        $("#MTim").html("<div> <img class=\"img img-fluid\" src=\"./images/MPTc2FM.png\" alt=\"Initial Setup\"></div>");
        $("#MTnxt").html("<div class=\" border border-3  btn btn-success rounded-pill\" onclick=\"adindt(3);\"> <span class=\"h6\">&nbsp; Restart &nbsp;</span></div>");
        $("#MTnxt").show();
    });
  }
  }
  }
  else if(a==4){
    if(adit==1){
      p12.hide('none',{duration:0});
      p34.hide('none',{duration:0});
      DTsq=0;
      MTsq=0;
      UTca=0;
      RTsq=0;
    }
    $("#UT").hide();
    $("#DT").hide();
    $("#MT").hide();
    $("#RT").show();
    if(RTsq==1){
      $("#RTim").html("<div> <video id=\"adivid\" autoplay>  <source src=\"./images/XRWld.mp4\" type=\"video/mp4\"> </video></div>");
      $("#adivid").width('100%');
      $("#adivid").on("ended",function(){
          $("#MTim").html("");
      });
    }
    else if(RTsq==2){
      $("#RTim").html("<div> <video id=\"adivid\" autoplay>  <source src=\"./images/XRWrk.mp4\" type=\"video/mp4\"> </video></div>");
      $("#adivid").width('100%');
      $("#adivid").on("ended",function(){
          $("#MTim").html("");
      });
    }
  }
};


function adi(cs){
  const xc = [1,5,9];
    const yc1 = [3,0,2];
    const yc2 = [3,1,0];
    const yc3 = [3,1,2];
    var nsam=300;
    const xr= rng(0,15,nsam);
    const yr1= adimap(xc,yc1,xr);
    const yr2= adimap(xc,yc2,xr);
    const yr3= adimap(xc,yc3,xr);
    let x=[];
    let y=[];
    let i=0;
    var adid;
    var dat1= {
      x: [1,9],
      y: [3,2],
      mode: 'markers+text',
      type: 'scatter',
      text: ['Transmission pulse', 'Backwall echo'],
      textposition:'top right'
    };

    var dat2= {
      x: [1,5],
      y: [3,1],
      mode: 'markers+text',
      type: 'scatter',
      text: ['Transmission pulse', 'Defect echo'],
      textposition:'top right'
    };

    var dat3= {
      x: [1,5,9],
      y: [3,1,2],
      mode: 'markers+text',
      type: 'scatter',
      text: ['Transmission pulse', 'Defect echo' , 'Backwall echo'],
      textposition:'top right'
    };

    const da = {
      x: x,
      y: y,
      mode:'lines',
      type: 'scatter'
      
    };

    const la = {
      xaxis: {range: [x.min,x.max], title: "Time (s)", showgrid: true},
      yaxis: {range: [y.min,y.max], title: "Intensity", showgrid: true},
      title: "Ultrasonic Device Monitor",
      showlegend:false
    };
   
    function adi(xa,ya){
      x.push(xa);
      y.push(ya);
    }

    function update() {
      
      if(cs==1){
    adi(xr[i],yr1[i]);
    }
    else if(cs==2){
      adi(xr[i],yr2[i]);
    }
    else if(cs==3){
      adi(xr[i],yr3[i]);
    }
    i=i+1;
    if(i<nsam){
      Plotly.newPlot('my',[da],la);
      requestAnimationFrame(update);
    }
    else{
      if(cs==1){
        adid=[ da, dat1];
        }
        else if(cs==2){
          adid=[ da, dat2];
        }
        else if(cs==3){
          adid=[ da, dat3];
        }
      Plotly.newPlot('my',adid,la);
    }
  }
if(i<nsam){
  requestAnimationFrame(update);
}
}