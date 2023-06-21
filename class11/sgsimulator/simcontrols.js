//*--Ready function---------
var gt;
var controlLabel,bgTop,bgLeft,optPosLeft,optPosTop,displayArray,randomNumber,optionLabel;
var instructions,imgarr,smallImgpos,smallImgpos1,glasswidth,smallImgpos2,vscaletop,vscaletop1,	vscaletop2,zoomCsscale,zoomCsscale1,zoomCsscale2,zoomleftscale,zoomleftscale2,msr0,msr2,csr0,csr1,csr2,vscales,vscales1,vscales2,Zoomblock,ZoomCss,ZoomCss1,Zoomblock2,ZoomCss2,Lsr,Ssr,Ssr1,Lsr2,Ssr2;
var displayArray=['block','none'];
var cmn={
numchange:null,
test:null,
test1:null,
test3:null,
tes:null,
tes1:null,
tesk:null,
rightoffset:null,
num:null,
msr:null,
csr:null,
tsr:null,
Lc:0.01,
lc1:0.005,
zerocrr:null,
isClicked :null,
flag1:0,
randomNumbers:null,
roundoffval:null,
scaleToAdd:null,
correctedCsr:null
};
var dist;
var isClicked;
var ImageFlag=0;
var imgs=$("#smallimg img");
var plusclick;
var flag=true;	
var hasBeenClicked,flag2;
var dropFlag=false;
var gt=$;
window.onload = function() { 
	document.getElementById("expName").innerHTML=gt.gettext("Screw Guage");
	$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
	//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
	//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	optionLabel=[gt.gettext("Lead shot"),gt.gettext("Wire"),gt.gettext("Glass plate"),gt.gettext("Irregular lamina"),gt.gettext("Wire length = 5 cm"),gt.gettext("LC = 0.01 mm"),gt.gettext("LC = 0.005 mm"),gt.gettext("Result ")];
	controlLabel=[gt.gettext("Reset"),gt.gettext("Check"),gt.gettext("Remove Lamina"),gt.gettext("Find thickness")];
	instructions=[gt.gettext("Check for zero error."),gt.gettext("Click on the object to find its measurement and click it once more to remove it."),gt.gettext("Select screw guage : "),gt.gettext("Select an object : "),gt.gettext("Enter the reading(mm): "),gt.gettext("Area of Lamina(mm<sup>2</sup>): "),gt.gettext("Input Box is empty."),gt.gettext("Good! Answer is correct."),gt.gettext("Try Again!")];
	imgarr=["sphere.png","wire.png","blockicon.png","laminaicon.png","glassside_icon.png","laminaside_icon.png"];
	//width and height position 
	/*sphere*/
	optPosLeft=[75,77,82,78];
	optPosTop=[209,212,218,217];
	optWidth=[37,32,21,27];
	optHeight=[37,32,21,27];
	smallImgpos=[119,122,127,123];
	/*circular scale position*/
	vscaletop=[14.66,8.46,9.2,3.20];
	/*zoom part*/
	zoomleftscale=[139,123,91,118];
	zoomCsscale=[232,69,167,538];
	/*calculation*/
	msr0=[7,6,4,5];
	csr0=[23,48,33,76];
	//combo 2 -circular scale position
	vscales=[5.75,3.60,15.91,8.50];
	Zoomblock=[171,136,109,123];
	ZoomCss=[558,499,434,62];
	Lsr=[5,4,3,3.5];
	Ssr=[73,82,92,49];
	/*wire*/
	optWidth1=[3.8,4.2,4,3.5];
	optHeight1=[75,72,71,74];
	smallImgpos1=[96,101,100,98];
	vscaletop1=[14.09,11.90,12.80,5.26];	
	zoomCsscale1=[624,493,545,734];
	csr1=[63,83,75,46];
	vscales1=[14.35,11.45,13.05,5.80];
	ZoomCss1=[597,421,519,69];
	Ssr1=[67,94,79,48];
	/*Glass*/
	optPosLeft2=[59,54,53,48];
	optPosTop2=[214,214,211,207];
	optWidth2=[60,64,72,80];
	glasswidth=[6,12,11,16];
	smallImgpos2=[100,97,98,97];
	vscaletop2=[12.50,8.60,16.25,7.56];
	zoomleftscale2=[39,57,57,72];
	zoomCsscale2=[480,212,617,127];
	msr2=[1,2,2,3];
	csr2=[85,26,64,39];
	vscales2=[13.40,6.90,15.70,11.15];
	Zoomblock2=[52,67,67,83];
	ZoomCss2=[493,81,565,258];
	Lsr2=[1,1.5,1.5,2];
	Ssr2=[83,46,72,19];
	//random numbers 
	optNumber=[0,1,2,3];
	
	$(document).ready(function() { 
		$('#result').html(instructions[6]); 
		cmn.num= optionLabel[0];
		addLabel();
		shuffle();	
		bgTop=$('#mainDiv').position().top;
		bgLeft=$('#mainDiv').position().left;
		var disableFlag=0;
		if(disableFlag==0){
			$('#chkBtn' ).prop('disabled', true);
			$('#TextBox' ).prop('disabled', true);
			$('#read' ).css('opacity','0.5');
		}
		$("#default1,#default2,#default3").css({display:displayArray[1]});	
		//Function for changing combo1box value -least count change 
		function changeCombo1(chng){
			cmn.numchange=chng.value;
			$('#TextBox').val('');	
			$( '#zoompreview' ).css( 'display', displayArray[1] );	
			if(cmn.numchange==optionLabel[6]){//shuffle();	
				$('#textlc').html(optionLabel[6]);	
				$('#horiscale1').attr("src",simPath+"images/scale_horizontal2.png");
				$('#msr').css({top: bgTop+114.8+'px',left:bgLeft+197+'px'});
				$('#holder').css({left:bgLeft+272+'px'});
				$('#vscalebase').css({top: bgTop-80.5+'px'});
				$('#innerSCL').css({'left':bgLeft+121+'px'});	
				$('#scales').attr("src",simPath+"images/zoomscale_horizontal2.png");
				$('#zoomhorizontal').css({'top':bgTop-24+'px'});	
				$('#zoompreview').css({left:bgLeft+280+'px',width:'253px'});				
			}
			else
			{//shuffle();	
				$('#textlc').html(optionLabel[5]);	
				$('#horiscale1').attr("src",simPath+"images/scale_horizontal1.png");
				$('#msr').css({top: bgTop+115.8+'px',left:bgLeft+197+'px'});
				$('#holder').css({left:bgLeft+266+'px'});
				$('#vscalebase').css({top: bgTop-247.3+'px'});
				$('#innerSCL').css({'left':bgLeft+121+'px'});	
				$('#scales').attr("src",simPath+"images/zoomscale_ horizontal1.png");	
				$('#zoomhorizontal').css({'top':bgTop-22+'px'});	
				$('#zoompreview').css({left:bgLeft+309+'px',width:'217px'});
			}			
		}
		//Function for changing combo2 box value
		function changeCombo2(elemid) {//lead shot, Wire, Glass palate, Irregular Lamina
		$("#default0,#default1,#default2,#default3").css({display:displayArray[1]});	
		cmn.num = elemid.value;
		$("#mainimage").css({visibility: 'visible'});
		$('#ushapeguage').css({left:bgLeft+12+"px"});
		$('#TextBox').val('');
			switch(cmn.num){
				case optionLabel[0]://leadshot
				$("#default0").css({display:displayArray[0]});	
				$("#default0").attr('src',simPath+"images/"+imgarr[0]);
				$("#imgtext").html(optionLabel[0]);
				$("#images").css({width:optWidth[cmn.randomNumbers]+"px",height:optHeight[cmn.randomNumbers]+"px",top:optPosTop[cmn.randomNumbers ]+"px",left:optPosLeft[cmn.randomNumbers]+"px"});
				$("#imgtext").css({margin:'0px 0px 8px 50px',padding: '58px 0px 0px 18px'});
				$("#graphpage").css({display: displayArray[1]});	
				break;
				case optionLabel[1]://wire
				$("#default1").css({display:displayArray[0],position: 'absolute',top:'0px',left:'0px'});
				$("#default1").attr('src',simPath+"images/"+imgarr[1]);
				$("#imgtext").html(optionLabel[4]);
				$("#images").css({width:5+optWidth1[cmn.randomNumbers]+"px",height:5+optHeight1[cmn.randomNumbers]+"px",top:'210px',left:'86px'});
				$("#imgtext").css({margin:'-3px 0px 8px 25px',padding: '97px 0px 0px 18px'});
				$("#graphpage").css({display: displayArray[1]});
				break;
				case optionLabel[2]://Glass plate
				$("#default2").css({display:displayArray[0],position: 'absolute'});
				$("#default2").attr('src',simPath+"images/"+imgarr[2]);
				$("#imgtext").html(optionLabel[2]);
				$("#images").css({width:optWidth2[cmn.randomNumbers]+"px",height:"80px",top:optPosTop2[cmn.randomNumbers]+"px",left:optPosLeft2[cmn.randomNumbers]+"px"});
				$("#imgtext").css({margin:'-3px 0px 8px 40px',padding: '109px 0px 0px 18px'});
				$("#graphpage").css({display: displayArray[1]});
				break;
				case optionLabel[3]://Irregular Lamina 
				$('#ushapeguage').css({left:bgLeft+14+"px"});
				$("#default3").css({display:displayArray[0],position: 'absolute',top:'0px',left:'0px'});
				$("#images").css({width:"117px",height:"65px",top:'204px',left:'40px'});
				$("#default3").attr('src',simPath+"images/"+imgarr[3]);
				$("#imgtext").html(optionLabel[3]);
				$("#images").css({width:'117px',height:'65px'});
				$("#imgtext").css({margin:'-3px 0px 8px 26px',padding: '86px 0px 0px 18px'});
				$("#graphpage").css({display: displayArray[0]});
				$("#mainimage").css({visibility: 'hidden'});
				flag=true;
				$("#plussign").css({position:'absolute',left:bgLeft+470+'px',top:bgTop+308+'px'});
				$("#minussign").css({position:'absolute',left:bgLeft+526+'px',top:bgTop+307+'px'});
				$('#read').html(instructions[5]);
				break;
			}
		}	
		//on change function 
		$("#theinput").change(function(){
			changeCombo2(this);
		});
		$("#theinputs").change(function(){
			changeCombo1(this);
		});
		// Function to set random width and height for the materials 
		function shuffle(){ 
			cmn.randomNumbers = optNumber[Math.floor(Math.random()*optNumber.length)];
			//leadshot
			$("#default0").css({width:optWidth[cmn.randomNumbers]+"px",height:optHeight[cmn.randomNumbers]+"px",top:"0px",left:"0px"});
			//Wire
			$("#default1").css({width:optWidth1[cmn.randomNumbers]+"px",height:optHeight1[cmn.randomNumbers]+"px"});
			//Glass plate
			$("#default2").css({width:optWidth2[cmn.randomNumbers]+"px",height:"80px",top:"0px",left:"0px"});
			$("#images").css({width:optWidth[cmn.randomNumbers]+"px",height:optHeight[cmn.randomNumbers]+"px",top:optPosTop[cmn.randomNumbers ]+"px",left:optPosLeft[cmn.randomNumbers]+"px"});
			$("#imgtext").css({margin:'0px 0px 8px 50px',padding: '58px 0px 0px 18px'});
		};			
		// checking answer function 
		function  answer_check(){
			//textbox
			var textval=$("#TextBox").val();
			$('#result' ).css('visibility','visible');	
			if (textval == "") {
				$('#result').html(instructions[6]);
			}
			else if(((Math.round((textval)* 100 )/100 )).toFixed(3)==cmn.tsr&&cmn.flag1==1||textval>=760&&textval<=770&&cmn.flag1==0){
				$('#result').html(instructions[7]);
			}
			else{
				$('#result').html(instructions[8]);
			}
		}
		//check button click function
		$("#chkBtn").click(function(){	
		answer_check();});
		//validation to enter only numbers		   
		$("#TextBox").keydown(function(e){
			var key = e.which;// backspace,  delete, numpad decimal pt, period, enter
			if (key != 8 &&  key != 110 && key != 190 && key != 13&& key != 46 ){
				if (key < 48||key > 57 && key < 96||key > 105){
					e.preventDefault();}}
		});	
		//function for dropdownenabled			   
		function isclikedfunc(){
			if(cmn.numchange==optionLabel[6]){
				$('#holder').css({left:bgLeft+272+'px'});
				$('#vscalebase').css({top: bgTop-80.5+'px'});
				$('#innerSCL').css({'left':bgLeft+121+'px'});	
			}
			else{
				$('#innerSCL').css({'left':bgLeft+121+'px'});
				$('#holder').css({'left':bgLeft+266+'px'});
				$('#vscalebase').css({'top':bgTop-247.3+'px'});		
			}
			//to check image is clicked or not
			$('#TextBox').val('');
			$('.picker').data('clicked', 'yes');
			cmn.isClicked = $('.picker').data('clicked');
			$( '#zoompreview' ).css( 'display', displayArray[1] );//drop down enable
			if( cmn.isClicked == 'yes'&&$('.dropBox').prop("disabled") == true) {			
				$(".dropBox").prop("disabled", false);
				$('#chkBtn' ).prop('disabled', true);
				$('#TextBox' ).prop('disabled', true);
				$('#read' ).css('opacity','0.5');
				$('#result' ).css('visibility','hidden');	
			}
			else if(cmn.isClicked== 'yes' && $('.dropBox').prop("disabled") == false) {//drop down disable
				$(".dropBox").prop("disabled", true);
			}
		}
		//function for combo 1 val 
		function combo1(){//up arrow function for combo 1 value
			if(hasBeenClicked ===true){//image not visible
				if(!$("#smallimg").is(':visible')){	
					if(cmn.test >cmn.test1){
						$('#innerSCL' ).css( 'left','-='+bgLeft+5.2+'px' );
						$('#holder' ).css( 'left', '-='+bgLeft+4.2+'px' );		
						$('#vscalebase' ).css( 'top', '-='+bgTop+10.6+'px' );					
					}
					cmn.roundoffval=(cmn.test-5.2).toFixed(1);
					if(cmn.roundoffval<=cmn.test1){//zoom portion
						$( '#msblck1' ).css('left', bgLeft+34+'px');
						$( '#css' ).css('top', bgTop-395+'px');
						$( '#zoompreview' ).css( 'display', displayArray[0] );	
					}	
					else if(cmn.roundoffval > cmn.test1)
					{	
						$( '#zoompreview' ).css( 'display', displayArray[1]  );		
					}
				}	
				if($("#smallimg").is(':visible')){//image  visible
					if(cmn.test >=cmn.test3){//up arrow function
					$( '#innerSCL' ).css( 'left','-='+bgLeft+5.2+'px' );
					$('#holder' ).css( 'left', '-='+bgLeft+4.2+'px' );		
						if($('#dup').attr('src') == simPath+"images/"+imgarr[0]){//leadshot
							$('#vscalebase' ).css( 'top', "-="+bgTop+vscaletop[cmn.randomNumbers]+"px" );
							//calculation part
							cmn.msr=msr0[cmn.randomNumbers];
							cmn.csr=csr0[cmn.randomNumbers];
							cmn.zerocrr=2;
							correctedCsr=cmn.csr+cmn.zerocrr;						
							cmn.tsr=(cmn.msr+(correctedCsr*cmn.Lc)).toFixed(3);
							$('#msblck1').css({left:bgLeft+zoomleftscale[cmn.randomNumbers]+"px"});
							$('#css').css({top:bgTop-zoomCsscale[cmn.randomNumbers]+"px"});					
						}
						else if($('#dup').attr('src') == simPath+"images/"+imgarr[1]){//wire
							$('#vscalebase' ).css( 'top', "-="+bgTop+vscaletop1[cmn.randomNumbers]+"px" );
							//calculation part
							cmn.msr=0;
							cmn.csr=csr1[cmn.randomNumbers];
							cmn.zerocrr=2;
							correctedCsr=cmn.csr+cmn.zerocrr;						
							cmn.tsr=(cmn.msr+(correctedCsr*cmn.Lc)).toFixed(3);
							$('#msblck1').css({left:bgLeft+33+"px"});
							$('#css').css({top:bgTop-zoomCsscale1[cmn.randomNumbers]+"px"});	;
						}
						else if($('#dup').attr('src') == simPath+"images/"+imgarr[4]){//glass plate
							$('#vscalebase' ).css( 'top', "-="+bgTop+vscaletop2[cmn.randomNumbers]+"px" );							
							//calculation part
							cmn.msr=msr2[cmn.randomNumbers];
							cmn.csr=csr2[cmn.randomNumbers];
							cmn.zerocrr=2;
							correctedCsr=cmn.csr+cmn.zerocrr;						
							cmn.tsr=(cmn.msr+(correctedCsr*cmn.Lc)).toFixed(3);
							$('#msblck1').css({left:bgLeft+zoomleftscale2[cmn.randomNumbers]+"px"});
							$('#css').css({top:bgTop-zoomCsscale2[cmn.randomNumbers]+"px"});	
						}
						else if($('#dup').attr('src') == simPath+"images/"+imgarr[5]){//irregular lamina
							$('#vscalebase' ).css( 'top', '+='+bgTop+19.25+'px' );
							//calculation part
							cmn.msr=2;
							cmn.csr=56;
							cmn.zerocrr=2;
							correctedCsr=cmn.csr+cmn.zerocrr;						
							cmn.tsr=(cmn.msr+(correctedCsr*cmn.Lc)).toFixed(3);
							$( '#msblck1' ).css('left', bgLeft+57+'px');
							$( '#css' ).css('top', bgTop-669+'px');
						}		
					}						
				}
			}
			//down arrow function
			else if(hasBeenClicked ===false){
				$('#zoompreview').css('display', displayArray[1] );	
				if(!$("#smallimg").is(':visible')){	 //image not visible
					if(cmn.rightoffset<cmn.tes){
						$( '#innerSCL' ).css( 'left', '+='+bgLeft+5.2+'px' );
						$('#holder' ).css( 'left', '+='+bgLeft+4.2+'px' );
						$('#vscalebase' ).css( 'top', '+='+10.6+bgTop+'px' );
					}
				}
				if($("#smallimg").is(':visible')){	//image  visible
					if(cmn.rightoffset<cmn.tes){
						$( '#innerSCL' ).css( 'left', '+='+bgLeft+5.2+'px' );
						$('#holder' ).css( 'left', '+='+bgLeft+4.2+'px' );
						if($('#dup').attr('src') == simPath+"images/"+imgarr[0]){
							$('#vscalebase' ).css( 'top', "+="+bgTop+vscaletop[cmn.randomNumbers]+"px" );								
						}
						else if($('#dup').attr('src') == simPath+"images/"+imgarr[1]){
							$('#vscalebase' ).css( 'top', "+="+bgTop+vscaletop1[cmn.randomNumbers]+"px" );
						}
						else if($('#dup').attr('src') == simPath+"images/"+imgarr[4]){
							$('#vscalebase' ).css( 'top', "+="+bgTop+vscaletop2[cmn.randomNumbers]+"px" );
						}
						else  if($('#dup').attr('src') == simPath+"images/"+imgarr[5]){
							$('#vscalebase' ).css( 'top', '-='+bgTop+19.25+'px' );
						}	
					}
				} 
			}
		}
		//function for combo 2 val 
		function combo2val(){//up arrow function for combo 2 value
			if(flag2===true){//image not visible	
				if(!$("#smallimg").is(':visible')){//up arrow 
					if(cmn.test >cmn.test1){
						$( '#innerSCL' ).css( 'left', '-='+bgLeft+5.2+'px' );
						$('#holder' ).css( 'left', '-='+bgLeft+4.50+'px' );		
						$('#vscalebase' ).css( 'top', '-='+bgTop+10.50+'px' );
					}
					if(cmn.test-5.7<=cmn.test1){	//zoom portion
						$( '#msblck1' ).css('left', bgLeft+34+'px');
						$( '#css' ).css('top', bgTop-362+'px');
						$( '#zoompreview' ).css( 'display',displayArray[0]);								
					}	
					else if(cmn.test-5.7 >cmn.test1)
					{
						$( '#zoompreview' ).css( 'display', displayArray[1] );			
					}
				}
				//image  visible
				if($("#smallimg").is(':visible')){//up arrow 
					if(cmn.test >=cmn.test3){
						$( '#innerSCL' ).css( 'left', '-='+bgLeft+5.2+'px' );
						$('#holder' ).css( 'left', '-='+bgLeft+4.50+'px' );		
						if($('#dup').attr('src') == simPath+"images/"+imgarr[0]){//LeadShot
							$('#vscalebase' ).css( 'top', '-='+bgTop+vscales[cmn.randomNumbers]+'px' );					
							//calculation part
							cmn.msr=Lsr[cmn.randomNumbers];
							cmn.csr=Ssr[cmn.randomNumbers];
							cmn.zerocrr=3;
							correctedCsr=cmn.csr-cmn.zerocrr;						
							cmn.tsr=(Math.round((cmn.msr+(correctedCsr*cmn.lc1))* 100 )/100 ).toFixed(3);
							$('#msblck1').css({left:bgLeft+Zoomblock[cmn.randomNumbers]+"px"});
							$('#css').css({top:bgTop-ZoomCss[cmn.randomNumbers]+"px"});	
						}
						else if($('#dup').attr('src') == simPath+"images/"+imgarr[1]){//Wire
							$('#vscalebase' ).css( 'top', '-='+bgTop+vscales1[cmn.randomNumbers]+'px' );							
							//calculation part
							cmn.msr=0;
							cmn.csr=Ssr1[cmn.randomNumbers];
							cmn.zerocrr=3;
							correctedCsr=cmn.csr-cmn.zerocrr;						
							cmn.tsr=(Math.round((cmn.msr+(correctedCsr*cmn.lc1))* 100 )/100 ).toFixed(3);
							$('#msblck1').css({left:bgLeft+34+"px"});
							$('#css').css({top:bgTop-ZoomCss1[cmn.randomNumbers]+"px"});	
						}	
						else if(($('#dup').attr('src') == simPath+"images/"+imgarr[4])){//glass plate
							$('#vscalebase' ).css( 'top', '-='+bgTop+vscales2[cmn.randomNumbers]+'px' );						
							//calculation part
							cmn.msr=Lsr2[cmn.randomNumbers];;
							cmn.csr=Ssr2[cmn.randomNumbers];
							cmn.zerocrr=3;
							correctedCsr=cmn.csr-cmn.zerocrr;						
							cmn.tsr=(Math.round((cmn.msr+(correctedCsr*cmn.lc1))* 100 )/100 ).toFixed(3);
							$('#msblck1').css({left:bgLeft+Zoomblock2[cmn.randomNumbers]+"px"});
							$('#css').css({top:bgTop-ZoomCss2[cmn.randomNumbers]+"px"});	
						}
						else if(($('#dup').attr('src') == simPath+"images/"+imgarr[5])){//irregular lamina
							$('#vscalebase' ).css( 'top', '-='+bgTop+14.50+'px' );				
							//calculation part
							cmn.msr=1.5;
							cmn.csr=83;
							cmn.zerocrr=3;
							correctedCsr=cmn.csr-cmn.zerocrr;						
							cmn.tsr=(Math.round((cmn.msr+(correctedCsr*cmn.lc1))* 100 )/100 ).toFixed(3);
							$( '#msblck1' ).css('left', bgLeft+67+'px');
							$( '#css' ).css('top', bgTop-493+'px');	
						}		
					}
				}
			}
			//down arrow function of combo box value 2
			else if(flag2===false)
			{
				$( '#zoompreview' ).css( 'display', displayArray[1] );	
				//image not visible
				if(!$("#smallimg").is(':visible')){	
					if(cmn.rightoffset<=cmn.tes){
						$( '#innerSCL' ).css( 'left', '+=5.2px' );
						$('#holder' ).css( 'left', '+=4.5px' );	
						$('#vscalebase' ).css( 'top', '+=10.50px' );
					}
				}
				//image  visible
				if($("#smallimg").is(':visible')){	 
					if(cmn.rightoffset<cmn.tes){//DOWN ARROW
						$( '#innerSCL' ).css( 'left', '+=5.2px' );
						$('#holder' ).css( 'left', '+=4.5px' );	
						if($('#dup').attr('src') == simPath+"images/"+imgarr[0]){
							$('#vscalebase' ).css( 'top', '+='+bgTop+vscales[cmn.randomNumbers]+'px' );		
						}
						else if($('#dup').attr('src') == simPath+"images/"+imgarr[2]){
							$('#vscalebase' ).css( 'top', '+='+bgTop+vscales1[cmn.randomNumbers]+'px' );
						}
						else if($('#dup').attr('src') == simPath+"images/"+imgarr[4]){
							$('#vscalebase' ).css( 'top', '+='+bgTop+vscales2[cmn.randomNumbers]+'px' );
						}
						else if($('#dup').attr('src') == simPath+"images/"+imgarr[5]){
							$('#vscalebase' ).css( 'top', '+='+bgTop+14.50+'px' );
						}
					}
				}
			}
		}
		$('#arrows').click(function(){//up arrow click function	
			cmn.test=$('#innerSCL').offset().left;
			cmn.test1=$('#targets').offset().left;
			cmn.test3=$('#smallimg').offset().left+$('#smallimg').outerWidth();
			cmn.tesk=$('#smallimg').offset().left+$('#smallimg').outerWidth()+5;
			if(cmn.test<=cmn.tesk){
				disableFlag++;
				$('#chkBtn' ).prop('disabled', false);
				$('#TextBox' ).prop('disabled', false);
				$('#read' ).css('opacity','1');
				$( '#zoompreview' ).css( 'display',displayArray[0]);		
				cmn.flag1=1;
			}
			else
			{
				$( '#zoompreview' ).css( 'display',displayArray[1]);
			}
			if(cmn.numchange==optionLabel[6]){	
				flag2=true;
				combo2val();
			}
			else
			{
				hasBeenClicked =true;
				combo1();
			}		
		});	
		$('#arrows1').click(function(){//down arrow click function
			$('#TextBox').val('');
			$('#result' ).css('visibility','hidden');
			$('#chkBtn' ).prop('disabled', true);
			$('#TextBox' ).prop('disabled', true);
			$('#read' ).css('opacity','0.5');
			cmn.rightoffset=$('#innerSCL').offset().left+ $("#innerSCL").outerWidth();			
			cmn.tes=$('#msr').offset().left+$('#msr').outerWidth()-95;	
			if(cmn.numchange===optionLabel[6]){
				flag2=false;
				combo2val();
			}
			else
			{
				hasBeenClicked =false;
				combo1();
			}
		});
		//Image selector
		$('.picker').on("click",function()
		{
			isclikedfunc();
			//lead shot positioning 
			if(cmn.num ==optionLabel[0])
			{
				$("#dup").attr('src',simPath+"images/"+imgarr[0]);
				$('#dup').css({width:optWidth[cmn.randomNumbers]+"px",height:optHeight[cmn.randomNumbers]+"px"});
				$('#smallimg').css({"left":bgLeft+43+"px","top":bgTop+smallImgpos[cmn.randomNumbers]+"px"});
				$('#smallimg').toggle();
			}
			//wire positioning 
			else if(cmn.num ==optionLabel[1])
			{	
				$("#dup").attr('src',simPath+"images/"+imgarr[1]);
				$('#dup').css({width:optWidth1[cmn.randomNumbers]+"px",height:optHeight1[cmn.randomNumbers]+"px"});
				$('#smallimg').css({"left":bgLeft+43+"px","top":bgTop+smallImgpos1[cmn.randomNumbers]+"px"});	
				$('#smallimg').toggle();
			}
			//glass plate positioning 
			else if(cmn.num ==optionLabel[2])	
			{
				$("#dup").attr('src',simPath+"images/"+imgarr[4]);
				$('#dup').css({width:glasswidth[cmn.randomNumbers]+"px",height:"79px"});
				$('#smallimg').css({"left":bgLeft+43+"px","top":bgTop+smallImgpos2[cmn.randomNumbers]+"px"});	
				$('#smallimg').toggle();
			}
			//lamina  
			else if(cmn.num ==optionLabel[3]){
					
				if ($('#graphpage').css("display") == displayArray[0]){//display of graph
					if(flag){	
						$("#irregularbig").css( 'display', displayArray[0]);
						$("#l1").css( 'display', displayArray[0] );
						flag =false;
					}
					else{//disabling dropdown and image slector		
						$(".picker").attr('disabled', true);					
						$(".dropBox").prop("disabled", true);
					}		
					$("#l1").click(function() {//remove lamina button 
						//		
						$("#irregularbig").css('display',displayArray[1]);
						$("#linegraph").css('display', displayArray[0]);
						$("#l1").css('display',displayArray[1]);
						$("#l2").css('display',displayArray[0]);
						$('#chkBtn' ).prop('disabled', false);
						$('#TextBox' ).prop('disabled', false);	
						$('#read' ).css('opacity','1');											
						cmn.flag1=0;
														
					});
					$("#l2").click(function(){//find thickness button 
						$("#l1").css('display',displayArray[1]);
						$("#l2").css('display',displayArray[1]);
						$("#linegraph").css('display', displayArray[1]);
						$('#chkBtn' ).prop('disabled', true);
						$('#TextBox' ).prop('disabled', true);
						$('#read' ).css('opacity','0.5');	
						$('#mainimage' ).css('visibility','visible');		
						$('#graphpage').css('display',displayArray[1]);
						$('#result' ).css('visibility','hidden');
						$('#TextBox').val('');
						$('#read').html(instructions[4]);	
					});										
				}
				if ($('#mainimage').css("visibility") == "visible") {//main screw guage page
					
				
						$("#dup").attr('src', simPath+'images/'+imgarr[5]);	
						$('#dup').css({width:"18px",height:"117px"});
						$('#smallimg').css({position:"absolute",left:bgLeft+40+"px",top:bgTop+62+"px"});								
						$('#smallimg').toggle();
						$(".dropBox").prop("disabled", true);	
						if($('#smallimg').css("display") == displayArray[1]){isclikedfunc();}
				}	
			}	
		});
		//graph page 
		//plus icon in the graph page
		$('#plussign').click(function(){
			if($(this).css('opacity') == 1||$('#minussign').css('opacity') == 0.5){
				$(this).css({opacity: 0.5});
				$('#minussign').css({opacity: 1});
				$(this).data('clicked', true);
				$('#minussign').data('clicked', false);
			} else{
				$(this).css({opacity: 1});
			}
		});
		//minus  icon in the graph page
		$('#minussign').click(function(){
			$(this).data('clicked', true);	
			$('#plussign').data('clicked', false);
			if($(this).css('opacity') == 1 || $('#plussign').css('opacity') == 0.5){
				$(this).css({opacity: 0.5});
				$('#plussign').css({opacity: 1});
			}
			else{
				$(this).css({opacity: 1});
			}
		});
		//zooming graph function 
		$('#mainimage2').smartZoom({'containerClass':'mainimage2'});
		function zoomButtonClickHandler(e){
			cmn.scaleToAdd = 0.3;
			if ($('#minussign').data('clicked') == true)
			cmn.scaleToAdd = -cmn.scaleToAdd;
			$('#mainimage2').smartZoom('zoom', cmn.scaleToAdd);
		}
		//graph click function
		$('#mainimage2').click(function() {	
			if($('#minussign').css('opacity') == 1&& $('#plussign').css('opacity') == 1)	{
				$("#mainimage2").attr('disabled', 'true');	
				$('#minussign').data('clicked', false);
				$('#plussign').data('clicked', false);
			}						
			if($('#plussign').data('clicked') == true) {
				zoomButtonClickHandler();	
			}
			else if ($('#minussign').data('clicked') == true) {
				zoomButtonClickHandler();
			}
			else
			{
				$('#mainimage2').css( 'cursor', 'default' );
			}	
		});	
				
		//cursorimage in mouse pointer function 
		$("#outerdiv").mouseenter(function(){
		$("#outerdiv").mousemove(function(){					 
			if ($('#minussign').data('clicked') == true && $('#minussign').css('opacity') == 0.5){
				$('#mainimage2').css('cursor','zoom-out');
				$('#mainimage2').css( 'cursor','-moz-zoom-out');
				$('#mainimage2').css('cursor', '-webkit-zoom-out');
			}
			else if($('#plussign').data('clicked') == true && $('#plussign').css('opacity') == 0.5) {
				$('#mainimage2').css('cursor','zoom-in');
				$('#mainimage2').css( 'cursor','-moz-zoom-in');
				$('#mainimage2').css('cursor', '-webkit-zoom-in');
			}
			else
			{
				$('#mainimage2').css( 'cursor', 'default' )};  
		});});		
		$("#outerdiv").mouseleave(function(){
			$('.cusrsors').css( 'display', displayArray[1] );	
		});	
		//*--Function for adding label for all controls---	
		function addLabel(){
			$('#reset').attr('value',controlLabel[0]);
			$('#chkBtn').attr('value',controlLabel[1]);
			$('#RemoveLamina').attr('value',controlLabel[2]);
			$('#Findthickness').attr('value',controlLabel[3]);
			$('#instruction').html(instructions[0]);
			$('#instruction1').html(instructions[1]);
			$('#instruction2').html(instructions[2]);
			$('#instruction3').html(instructions[3]);
			$('#least1').html(optionLabel[5]);
			$('#least2').html(optionLabel[6]);
			$('#material1').html(optionLabel[0]);	
			$('#material2').html(optionLabel[1]);	
			$('#material3').html(optionLabel[2]);	
			$('#material4').html(optionLabel[3]);
			$('#read').html(instructions[4]);
			$('#imgtext').html(optionLabel[0]);
			$('#textlc').html(optionLabel[5]);
			$('#Ins2').html(optionLabel[7]);			
		}		
		//*--Function to click reset button to reset all events---
		$("#reset").click(function(){
			window.location.reload();	   
		});	
	});		
};

		