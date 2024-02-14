$(document).ready(function(){
    var envelope=$("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_reset1 = $("#reset1");
    var btn_reset2 = $("#reset2");
 

    btn_open.click(function(){
        open();
    });

    var delayInMilliseconds = 1000; //1 second

   
    function open(){
        playMusic();
        setTimeout(function() {
        var s = document.getElementById('target').style;
        var s2 = document.getElementById('target1').style;
        var s3 = document.getElementById('bienmat').style;
        var s4 =  document.getElementById('envelope').style;
        
        s.opacity = 1;
        s2.opacity = 1;
         s3.opacity = 0;
         s4.opacity=1;

         
         setTimeout(function() {
            s3.opacity = 0.1;
          }, 3000);
          setTimeout(function() {
            s3.opacity = 0.2;
          }, 3100);
          setTimeout(function() {
            s3.opacity = 0.3;
          }, 3200);
          setTimeout(function() {
            s3.opacity = 0.4;
          }, 3300);
          setTimeout(function() {
            s3.opacity = 0.5;
          }, 3400);
          setTimeout(function() {
            s3.opacity = 0.6;
          }, 3500);
          setTimeout(function() {
            s3.opacity = 0.7;
          }, 3600);
          setTimeout(function() {
            s3.opacity = 0.8;
          }, 3700);
          setTimeout(function() {
            s3.opacity = 0.9;
          }, 3800);
          setTimeout(function() {
            s3.opacity = 1.0;
          }, 3900);
          
          
        (function fade(){(s.opacity-=.05)<0?s.display="none":setTimeout(fade,100)})();
        (function fade(){(s2.opacity-=.05)<0?s2.display="none":setTimeout(fade,100)})();
          var i=0;
          setTimeout(function() {
            test();
          }, 3000);
       
        
        setTimeout(function() {
            envelope.addClass("open").removeClass("close");
          }, 2500);
          setTimeout(function() {
            (function fade(){(s4.opacity-=.05)<0?i=1:setTimeout(fade,10)})();
          }, 12500);

          setTimeout(function() {
            (function fade(){(s3.opacity-=.05)<0?i=1:setTimeout(fade,10)})();
          }, 12500);
       
        }, 4700);
    }
    var i=100;
    btn_reset.click(function(){
        close();
        btn_open.width(i);
        btn_open.height(i);
        i+=i;
    });

    btn_reset1.click(function(){
        close();
        btn_open.width(i);
        btn_open.height(i);
        i+=i;
    });

    btn_reset2.click(function(){
        close();
        btn_open.width(i);
        btn_open.height(i);
        i+=i;
    });

    function close(){
       
        envelope.addClass("close").removeClass("open");
        stopMusic();
    }

    var audio =new Audio("audio/sound.mp3");
    function playMusic(){
        audio.currentTime = 0.2;
        audio.play();
    }

    function stopMusic(){
        audio.pause()
    }
    

    function test() {
        $("img").each(function(index) {
            $(this).hide();
            $(this).delay(4000* index).fadeIn(3000);
        });
    }
    


})
