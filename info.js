$(document).ready(function () {
  var count1 = 0;
  var count2 = 0;
  var secondLayer = 650;

  var count3 = 0;
  var count4 = 0;
  $('.parallax').scroll(function () {
      if($(this).scrollTop() < 4825){
        $('.continue.three').show();
        if((count1||count2) >= 0){
          count1 -= 5;
          count2 -= 5;
          $('#kangEx').css("opacity",count1/100);
          $('#kangName').css("opacity",count2/100);
        }
        if(secondLayer <= 650){
          secondLayer += 10;
          $('.degLayer2').css("top",secondLayer+"vh");
        }
      }

      //4826


      if($(this).scrollTop() >= 4825 && $(this).scrollTop() < 5725){
        //console.log(count1);
        console.log("count2 : " + count2);
        if(count1 <= 100)
          count1 += 2;
        $('.continue.three').hide();
        $('#kangEx').css("opacity",count1/100);
        if(count1 >= 100 && count2 <= 100){
            count2 += 3;
            $('#kangName').css("opacity",count2/100);
        }

        if((count1 >= 100 && count2 >= 100) && secondLayer >= 425){
          console.log("secondLayer : "+ secondLayer);
          secondLayer -= 5;
          $('.degLayer2').css("top",secondLayer+"vh");
        }
        if(!(secondLayer < 425))
          $(this).scrollTop(4825);//5725

          if((count3||count4) >= 0){
            count3 -= 5;
            count4 -= 5;
            $('#jungEx').css("opacity",count3/100);
            $('#jungName').css("opacity",count4/100);
          }

      }

      if($(this).scrollTop() >= 5725){
        if(count3 <= 100)
          count3 += 2;
        $('#jungEx').css("opacity",count3/100);
        if(count3 >= 100 && count4 <= 100){
            count4 += 3;
            $('#jungName').css("opacity",count4/100);
        }
          $(this).scrollTop(5725);
      }

      var curTop = $(this).scrollTop();
      console.log(curTop);


    });


});
