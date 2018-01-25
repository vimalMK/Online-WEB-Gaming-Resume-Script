/* Author: VIMAL MOORTHY KRISHNAMOORTHY
	********GAMING RESUME SCRIPT*******
	
	*/


$(document).ready(function(){

	var count=0;
	var i=0;
	var j=0;
        var s1,s2,s3,s4,s5;
	$("#unicorn").pan({fps:30,speed:1.5,dir:'left'});
        $("#resume").hide();
	$("#thread").hide();
	$("#thread1").hide();
	$("#eduTT").hide();
	$("#eduT").hide();
	$("#eduTTT").hide();
	$("#scriptA").hide();
	$("#script1A").hide();
	$("#scriptB").hide();
	$("#script1B").hide();



	
	//what can i do
	

	$("#containerfour").click(function(){
		
		
		if($("#containertwo").hasClass('containClass'))
			{
		$("#containerone,#containertwo,#containerthree").removeClass('containClass');
			}
		
		else
{
			$("#containerone,#containertwo,#containerthree").addClass('containClass');
		}
	});
	//button slidef
	setInterval(function() { $("#one").slideUp(500);
	$("#two").slideDown(500);
	setTimeout(function(){$("#two").slideUp(500);
	$("#one").slideDown(500)
	},4000);
	}
	,8000);

	
	$(".continue").click(function(){
				
		$(".mirror").css('-webkit-filter','blur(0px');
			
	});
	//$("#launch").click(function(){
		
	       $("#stage").pan({fps:30,speed:1.5,dir:'left'});
		$("#background").pan({fps:60,speed:1.5,dir:'left'});
		$("#unicorn").pan({fps:30,speed:1.5,dir:'left'});
	   	$("#planets").pan({fps:30,speed:2,dir:'down'});
	   	$("#rain").pan({fps:50,speed:10,dir:'down'});
	  	$("#bench").pan({fps:60,speed:1.5,dir:'left'});
	   	$("#leaf").pan({fps:50,speed:2,dir:'down'});
	   	$("#grass").pan({fps:60,speed:2,dir:'left'});
	   	$("#ground").pan({fps:60,speed:2,dir:'left'});


		$("#resume").show();
		$("#room1").fadeOut(500);
		$("#room2").fadeOut(500);
		$("#room3").fadeOut(500);
		$("#containertwo,#containerfour").slideUp(500);
		$("#containerthree").addClass('containClass');
		$("#containerthree").css("left","1302px");
		setInterval(function() { $('#mob').attr('src', 'img/mob1.png')},1000);
		setInterval(function() {	 $("#mob").attr("src", "img/mob.png")},1500);

		setTimeout(function(){ 
		$(".speechspace").css('visibility','visible');
		$("#pilot").addClass('speech');
		$("#radioTrans").html("Nice weather outside!!");
		 setTimeout(function(){	$(".speechspace").fadeOut(3000)},10000);
		 
		 },10000);
	   	$("#resume").pan({fps:60,speed:2,dir:'left'});

		 $("#welcomeNote").fadeOut(500);
		 $("#para").addClass('para');
		 $("#para").css('visibility','visible');
		 setTimeout(function(){ $('#para').css('background-image','url(img/para.png)');
		 
		 $("#instruction").css('visibility','visible');
		 FlashInterval=setInterval(function() { $("#instruction").fadeOut(1000).fadeIn(1000)},
				 3000);
		 },3000);

		 //$("#grass").slideUp(3000);
		 //$("#background").slideUp(2000);
		 //setTimeout(function(){ $('#background').css('background-image','url(img/overflow.png)')},3500);
		 $("#background").slideDown(3000);
		 $("#interactiveresume").hide().css('visibility','visible').slideDown(1000);

		 //$("#bench").slideUp(2000);
	
		
	var pos=$("#interactiveresume");


		$("body").keydown(function(e) {
			
			
			
			var offset = pos.offset();

			
			 if(e.keyCode == 39) { // left
					 $("#instruction").css('visibility','hidden');

			 $("#go").html("Keep Pressing the key.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Go!Go!Go!");
			  $("#go").css('left','100px');

				  clearInterval(FlashInterval);
				  $('#para').css('background-image','url(img/para1.png)');
				  $('#gifPlane').css('background-image','url(img/planeimg.png)');

				  
				  if((count<500))
					  {
				  $("#grass").spChangeDir('left');
				  $("#ground").spChangeDir('left');

				  $("#unicorn").spChangeDir('left');
				  $("#background").spChangeDir('left');
				  $("#stage").spChangeDir('left');
				  $("#bench").spChangeDir('left');
				  $("#interactiveresume").css('left','-=32');

					  }
				  
				  
				  else if (count>=500)
					  {
					
						 		
					$("#stage").spChangeDir('left');
								 
						 		$("#unicorn").spChangeDir('down');
						 		$("#unicorn").css("background-repeat","repeat");
						 		$("#unicorn").css("height","1500px");
								$("#background").fadeOut(500)
								 $("#grass").fadeOut(500);
								$("#ground").fadeOut(500);
								 $("#bench").fadeOut(500);
						  $("#leaf").hide(3000);
						  $("#interactiveresume").css('top','+=32');

					 					  
					  }
				
				 
				  $('#grass').spSpeed(10);
				  $('#ground').spSpeed(10);

				  $('#leaf').spSpeed(5);
				  $("#unicorn").fps(60);
				  $("#stage").fps(80);
				  $("#background").spSpeed(5);
				  $("#bench").spSpeed(5);
	 				$("#bri").removeClass('bri1').addClass('bri');
	 				$("#smallstart").removeClass('bri1').addClass('bri');
				count++;
				if(count==54)
					{

					$("#thread").slideDown(500);
					$("#multi").addClass("multi");
					$("#tree1").addClass('tree1animation');
					$("#tree2").addClass('tree2animation');
					$("#tree3").addClass('tree3animation');
					$("#tree4").addClass('tree4animation');

					}
				
				if(count==110)
				{
				$("#para").animate({top: '900px'});
				$("#eduT").slideDown(500);
 				$("#eduTT").slideDown(500);
 				$("#eduTTT").slideDown(500);
 				$("#edu").addClass('edu');
 				$("#build").addClass('book');
 				$("#pile").addClass('book1');
 				$("#write").addClass('write');
 				setInterval(function() {
 				setTimeout(function(){ 
 					
 					$("#buildtext").css("background-color","#8E44AD");
 					$("#protext").text("HTML")},1000);
 				setTimeout(function(){ 
 					$("#buildtext").css("background-color","#2ECC71");
 					$("#protext").html("&nbsp;JSP")},1500);
 				setTimeout(function(){ 	
 					$("#buildtext").css("background-color","#F1C40F");
 					$("#protext").text("WEB")},2000);
 				setTimeout(function(){ 	
 					$("#buildtext").css("background-color","#E74C3C");

 					$("#protext").html("&nbsp;CSS")},2500);




 				
 				},1000);
				

				}

				if(count==156)
				{
	 				 $("#bri").animate({left: '300px'}, 3000, 'linear'); 			

					$("#leaf").fadeIn(3000);
					$("#live").addClass('live');

					$("#texas").addClass('texas');

				}
				if(count==300)
					{
					$("body").removeClass('day').addClass('sunset');
					
					}
				if(count==270)
				{
					
				$("#leaf").fadeOut(1000);
				
				}
						
if(count==320)
	{
	$("#scriptingLan1").addClass('scriptingLan1');
	$("#script1A").slideDown(500);
	$("#script1B").slideDown(500);

				while(j<4)
				{
				
			$("#java1").delay(200).queue(function (next) {
				
				  $("#java1").append("<img src='img/indi.png' style='height:400px;width:350px;'/>");
				    next();
				});
			j++;
				}
				while(j<8)
				{
				
			$("#html1").delay(200).queue(function (next) {
				
				  $("#html1").append("<img src='img/indi.png' style='height:400px;width:270px;'/>");
				    next();
				});
			j++;
				}
				while(j<11)
				{
				
			$("#css1").delay(200).queue(function (next) {
				
				  $("#css1").append("<img src='img/indi.png' style='height:400px;width:270px;'/>");
				    next();
				});
			j++;
				}
				while(j<14)
				{
				
			$("#jquery1").delay(200).queue(function (next) {
				
				  $("#jquery1").append("<img src='img/indi.png' style='height:400px;width:270px;'/>");
				    next();
				});
			j++;
				}
				while(j<17)
				{
				
			$("#android1").delay(200).queue(function (next) {
				
				  $("#android1").append("<img src='img/indi.png' style='height:400px;width:270px;'/>");
				    next();
				});
			j++;
				}
				
	}
				if(count==257)
					{
					
					$("#scriptB").slideDown(500);
					$("#scriptA").slideDown(500);
					$("#scriptingLan").addClass('scriptingLan');

					}
				if(count==250)
					{
				
						while(i<9)
							{
							
						$("#java").delay(200).queue(function (next) {
							
							  $("#java").append("<img src='img/leafp.png' style='height:150px;width:150px;'/>");
							    next();
							});
						i++;
							}
						
						while(i<18)
						{
						
					$("#html").delay(200).queue(function (next) {
						
						  $("#html").append("<img src='img/leafp.png' style='height:150px;width:150px;'/>");
						    next();
						});
					i++;
						}
						
						while(i<25)
						{
						
					$("#css").delay(200).queue(function (next) {
						
						  $("#css").append("<img src='img/leafp.png' style='height:150px;width:150px;'/>");
						    next();
						});
					i++;
						}
						
						while(i<32)
						{
						
					$("#jquery").delay(200).queue(function (next) {
						
						  $("#jquery").append("<img src='img/leafp.png' style='height:150px;width:150px;'/>");
						    next();
						});
					i++;
						}
						while(i<37)
						{
						
					$("#android").delay(200).queue(function (next) {
						
						  $("#android").append("<img src='img/leafp.png' style='height:150px;width:150px;'/>");
						    next();
						});
					i++;
						}
						
			
						  
					}
				
				
				if(count==300)
					{
					
					
			
						setTimeout(function(){
							$("#rain").fadeIn(8000);
							$("#rainLeftOver").fadeIn(20000);
							 setTimeout(function(){
						  
								 $('body').removeClass('lightning').addClass('day');
								 $("#thunder").slideDown(100).fadeOut(5000);
//								 var loud = new Audio("mp3/thundr04.mp3"); // buffers automatically when created
//								 s5=loud;
//									//loud.volume=0.1;
//									loud.play();
						   		}, 20000);
								
							Interval=setInterval(function() { 
							 setTimeout(function(){
								 $('body').removeClass('day').addClass('lightning');
						   		}, 10000);
							  setTimeout(function(){
									 $('body').removeClass('lightning').addClass('day');
							   		}, 10200);
							  setTimeout(function(){
									 $('body').removeClass('day').addClass('lightning');
							   		}, 10300);
								  setTimeout(function(){
										 $('body').removeClass('lightning').addClass('day');
								   		}, 10500);
					  
								 	} , 6000);	
						
							var snd2 = new Audio("mp3/rain_start.mp3"); // buffers automatically when created
							s1=snd2;
							snd2.volume=0.1;
							snd2.play();
							var snd3 = new Audio("mp3/thunder.mp3"); // buffers automatically when created
							snd3.volume = 0.1;
							s2=snd3;
							snd3.play();//							setInterval(function() { 
//							var snd4 = new Audio("mp3/rain_start.mp3"); // buffers automatically when created
//							snd4.volume=0.1;
//							s3=snd4;
//							snd4.play();},15000);
							var snd5 = new Audio("mp3/rain-07.mp3"); // buffers automatically when created
							s4=snd5;
							snd5.volume=1;
							snd5.play();
							}, 5000);
			
					}
				if(count==500)
				{
				$("#multi,#edu").css('color','##34495E');

				$("#background").hide(200);
			$("#grass").hide(200);

			$("#ground").hide(200);

				$("#bench").hide(200);
								  
								  


				
				}		
							
		
			  }
			  else if(e.keyCode == 37) { // right
				  $('#para').css('background-image','url(img/pararev1.png)');
				  $('#gifPlane').css('background-image','url(img/planeimg1.png)');
					if(count<500)
						{
						 
						$("#grass").spChangeDir('right');
						$("#ground").spChangeDir('right');

						$("#stage").spChangeDir('right');
						  $("#unicorn").spChangeDir('right');
						  $("#background").spChangeDir('right');
						  $("#bench").spChangeDir('right');
						  $("#interactiveresume").css('left','+=32');

						
						}
					if(count==270)
					{
						 s1.pause();
						 s2.pause();
						 s4.pause();
						 $("#thunder").hide();
						$("#rain").fadeOut(1000);
						$("#rainLeftOver").fadeOut(3000);					
					}
					if(count==500)
					  {

					  $("#background").fadeIn(500)
					  $("#grass").fadeIn(500);
					  $("#ground").fadeIn(500);
					  $("#bench").fadeIn(500);
					  $("#unicorn").fadeIn(500);
					 $("#unicorn").css("background-repeat","repeat-x");

					  $("#stage").spStart();
				 		$("#unicorn").css("height","600px");					  
					  }
					else if(count>=500)
						  {
						$("#stage").spChangeDir('right');

					  $("#interactiveresume").css('top','-=32');

					  $("#unicorn").spChangeDir('up');
				 		

					
				
						  }
					
					
				  
				 
				  $('#grass').spSpeed(10);
				  $('#ground').spSpeed(10);
				  $("#bri").removeClass('bri').addClass('bri1');
				  $("#smallstart").removeClass('bri').addClass('bri1');
				  $("#background").spSpeed(5);
					$("#bench").spSpeed(5);
					  $('#leaf').spSpeed(5);
					  $("#unicorn").fps(60);
					  $("#stage").fps(80);
					  if(offset.left>470)
						{
																
						}
					  else
			  {
			  }
					  count--;

				  }
			});
		
		$("body").keyup(function(e) {
			  if(e.keyCode == 39) { // left
				  $('#para').css('background-image','url(img/para.png)');
				  $('#grass').spSpeed(2);
				  $('#ground').spSpeed(2);
				  $("#background").spSpeed(1.5);
					$("#bench").spSpeed(1.5);
					  $("#unicorn").fps(30);
					  $('#leaf').spSpeed(2);

					  $("#stage").fps(30);



		  }
		
 else if(e.keyCode == 37) { // right
	 $("#stage").spStart();
				  $('#para').css('background-image','url(img/pararev.png)');
				  $('#grass').spSpeed(2);
				  $('#ground').spSpeed(2);
				  $("#background").spSpeed(1.5);
					$("#bench").spSpeed(1.5);
					  $("#unicorn").fps(30);
					  $("#stage").fps(30);
					  $('#leaf').spSpeed(2);
					  
					  
					  



				  }
			});
		
		
	
		
	//});
	


		

		
	//	$("#leaf").fadeIn(3000);
		

		/*
		   clearInterval(Interval);
		   //  $('body').removeClass('day').addClass('night');
			$("#rain").fadeOut(8000);
		

	      /* setTimeout(function(){
	   		$("#planets").fadeIn(5000);
	   		}, 10000);
	       setTimeout(function(){
		   		$("#planets").fadeOut(5000);
		   		}, 20000);
	      
	       setTimeout(function(){
		   		$("#rain").fadeIn(8000);
		   		}, 30000);
			 */
			   	//	$("#rainLeftOver").fadeOut(20000);
		

		
	
	
	
	$("#planets").hide();
	$("#thunder").hide();
	$("#rainLeftOver").hide();
	$("#rain").hide();
	$("#leaf").hide();
	
  	


});
