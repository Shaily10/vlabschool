//*--Ready function---------
var controlStr,canvasStr,mixtureUsed,imageContent,stirEvt,stirEvt2,clockEvt,mixEvt,mixEvt2,selectItem,gt,mainTop,mainLeft,iconSelect;
var degree = -14,degree2 = -14;
var rotCount=0,rotCount2=0,count=0,clockAngle=0;
var flag1=new Boolean(true),flag2=new Boolean(true),clockFlag=false,zoomFlag=false,crystalFlag=false;
var displayArray,iconSelected,selectDragItem,inferenceMsg,helpMsg=new Array();
var timer1,timer2,timer3,timer31,timer4,timer5,timer6,timer7,timer8,timer9,timer10;
var gt=$;
window.onload = function() { 
	document.getElementById("expName").innerHTML=gt.gettext("Purification of Impure Samples by Crystallization");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
	//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	$(document).ready(function() {							   
		selectDragItem=['SpatulaDiv','cylinder','beaker2','dishTodrag','bowlToDrag','benoicAcidbeaker','filterpaper','cork','waterBottle','bowl'];		
		iconSelected=['copperClick','alumClick','benClick'];
		imageContent=['beakerhotwater.png','whitesolvent.png','filter.png','watchglass.png','blueSpatula.png','crudeCopper.png','rod.png','whiteInfunnel2.png','burner.png','label1.png','ben.png','burner_off.png','burner_on.png','nextbtn.png','paperwhitesolvent5.png','beakerwitparticle.png','bluesolventinTube.png','zommBlue.png','watchglass5.png','filterpaper.png','label2.png','label3.png','alum.png','whiteInfunnel1.png','dropsWhite.png','whiteSpatula.png','zommWhite.png','waterinbeaker.png','blueWater.png','bluePowderInBeaker.png','whitePowderInBeaker.png','bowlParticleBlue.png','blueInfunnel2.png','beaker4.png','potcontent.png','potcontent2.png','beaker5.png','basinpourline1.png','dishwhitewater3.png','dishbluewater3.png','bowlToDragWaterBlue.png','bowlToDragWaterWhite.png','bowlToDragSolidWhite.png','bowlToDragSolidBlue.png','basinpourline2.png','bottlepourwater1.png','paperbluesolventdrag.png','bottlepourwater2.png','drops.png','dishpourblueline1.png','dishpourblueline2.png','dishpourwhiteline1.png','dishpourwhiteline2.png','bluesolventpour.png','whitesolventpour.png','blueInfunnel1.png','bowlParticleWhite.png'];
		controlStr=[gt.gettext("Select the sample"),gt.gettext("Reset")];
		canvasStr=[gt.gettext("Crude copper sulphate"),gt.gettext("Distilled Water"),gt.gettext("Dil. H<sub>2</sub>SO<sub>4</sub>"),gt.gettext("Crude potash alum"),gt.gettext("Crude benzoic acid"),gt.gettext("Next"),gt.gettext("Hot Water"),gt.gettext("30 Min"),gt.gettext("Ethyl alcohol with cold water"),gt.gettext("Mixture of alcohol  & water "),gt.gettext("Cold water")]
		mixtureUsed=[gt.gettext("Copper sulphate"),gt.gettext("Potash alum"),gt.gettext("Benzoic acid")];
		inferenceMsg=[gt.gettext("The insoluble impurities are left on the filter paper."),gt.gettext("The appearance of a crust or tiny crystals on the side of the <br> china dish shows that the crystallisation point has reached."),gt.gettext("Crystals of the sample is formed."),gt.gettext("The watch glass contains dried crystals."),gt.gettext("The crystals of copper sulphate are <br> triclinic, transparent and blue."),gt.gettext("The crystals of potash alum are <br> colourless, transparent and octahedral."),gt.gettext("The crystals of benzoic acid are <br> opaque and white."),gt.gettext("Crystals of benzoic acid is left <br> behind on the filter paper.")];
		helpMsg=[gt.gettext("Click on the sample icon <br> to choose the sample."),gt.gettext( "Drag the spatula and add <br> sample into the beaker."),gt.gettext( "Click on the glass rod <br> to stir the solution."),gt.gettext( "Drag the measuring cylinder and <br> add H<sub>2</sub>SO<sub>4</sub> into the beaker."),gt.gettext( "Drag the beaker and pour<br> the solution into the china dish <br> through the funnel and glass rod."),gt.gettext("Click on the burner knob <br>  to turn on the burner."),gt.gettext("Drag the china dish to <br> transfer the hot saturated solution <br> into the crystallising dish."),gt.gettext("Drag the crystallisation dish <br> and place it into the  trough."),gt.gettext("Drag the crystallisation dish <br> and place it back."),gt.gettext("Drag the filter paper and put <br> the crystals into the test tube."),gt.gettext("Drag the cork and close the test tube."),gt.gettext("Click on the test tube to see<br>  the zoomed view of the sample."),gt.gettext("Drag the beaker and <br> place it into the trough."),gt.gettext("Drag the beaker and <br> place it back."),gt.gettext("Drag the bottle and add <br> solution into the crystallisation dish."),gt.gettext("Drag the crystallisation dish and decant <br> the upper solution to the trough."),gt.gettext("Drag the beaker and pour<br> the solution into the beaker <br> through the funnel and glass rod.")];
		displayArray=['block','none'];
		mainTop=$('#mainDiv').position().top;
		mainLeft=$('#mainDiv').position().left;
		iconSelect=iconSelected[0];
		/*-----------------Function calls-------------------------*/	
		//*--Apply selectable false--------
		preventSelection();
		//*--Add label for all controls----	
		addLabel();	
		//*--Loading option values in drop down----
		addintoDropDown($('#mixture'),mixtureUsed);
		//*--Draw image in Canvas---------		
		drawCanvasAll();
		//*--Drag spatula ---------	 
		dragItem('SpatulaDiv',mainTop-44,mainTop+234,mainLeft+0,mainLeft+160);
		/*----------------------Functions-----------------------------*/
		//*--Function to click icons---	
		$('#copperClick,#alumClick,#benClick').click(function() {															 
			iconSelect=this.id;
			$('#waterString').html(canvasStr[1]);
			$("#waterInbeaker2").attr('src',simPath+"images/"+imageContent[27]);			
			$("#powderInBeaker").attr('src',simPath+"images/"+imageContent[30]);
			$("#dishbluewater3").attr('src',simPath+"images/"+imageContent[38]);
			$("#bowlToDrag").attr('src',simPath+"images/"+imageContent[41]);
			$("#filterpaper").attr('src',simPath+"images/"+imageContent[14]);			
			$("#ImgInSpatula").attr('src',simPath+"images/"+imageContent[25]);
			$("#dishpourline1").attr('src',simPath+"images/"+imageContent[51]);	
			$(".Drops").attr('src',simPath+"images/"+imageContent[24]);
			$(".solventpour").attr('src',simPath+"images/"+imageContent[54]);
			$("#funnelsoln").attr('src',simPath+"images/"+imageContent[23]);
			$("#bowlParticle").attr('src',simPath+"images/"+imageContent[56]);
			$("#beaker2waterImg").css('background-color','#FFF');
			$("#beaker2waterImg").css("opacity","0.3");
			$("#beaker2waterDivAll").css('top',mainTop+79+'px');
			$("#beaker2waterDiv").css({height:31+'px'});
			$("#standBg").css({display:displayArray[0]});
			$("#cylinder,#acidLabel,#acidString").css({display:displayArray[1]});
			$("#acidwithWaterStr").css('top',mainTop+285+'px');
			if(iconSelect==iconSelected[0]){//Copper sulphate
				$("#standBg").css({display:displayArray[1]});
				$("#cylinder,#acidLabel,#acidString").css({display:displayArray[0]});
				$("#beaker2waterImg").css('background-color','#61aada');
				$("#beaker2waterImg").css("opacity","0.5");
				$("#copperIcon").css("opacity","0.3");
				$("#alumIcon").css("opacity","1");
				$("#benzoicIcon").css("opacity","1");
				$("#beaker2waterDivAll").css('top',mainTop+75+'px');
				$("#beaker2waterDiv").css({height:35+'px'});
				$('#copperClick').css({display:displayArray[1]});
				$("#alumClick").css({display:displayArray[0]});
				$("#benClick").css({display:displayArray[0]});
				$("#sampleString").html(canvasStr[0]);	
				$("#acidwithWaterStr").html(canvasStr[8]);			
				$("#waterInbeaker2").attr('src',simPath+"images/"+imageContent[28]);
				$("#powderInBeaker").attr('src',simPath+"images/"+imageContent[29]);
				$("#dishbluewater3").attr('src',simPath+"images/"+imageContent[39]);
				$("#bowlToDrag").attr('src',simPath+"images/"+imageContent[40]);
				$("#filterpaper").attr('src',simPath+"images/"+imageContent[19]);
				$("#ImgInSpatula").attr('src',simPath+"images/"+imageContent[4]);
				$("#dishpourline1").attr('src',simPath+"images/"+imageContent[49]);	
				$(".Drops").attr('src',simPath+"images/"+imageContent[48]);
				$(".solventpour").attr('src',simPath+"images/"+imageContent[53]);
				$("#funnelsoln").attr('src',simPath+"images/"+imageContent[55]);
				$("#bowlParticle").attr('src',simPath+"images/"+imageContent[31]);
				drawCanvas(document.getElementById("crudeCopper"),118,36,imageContent[5],mainLeft,mainTop);//crudeCopper
			}else if(iconSelect==iconSelected[1]){//Alum
				$("#copperIcon").css("opacity","1");
				$("#alumIcon").css("opacity","0.3");
				$("#benzoicIcon").css("opacity","1");
				$('#copperClick').css({display:displayArray[0]});
				$("#alumClick").css({display:displayArray[1]});
				$("#benClick").css({display:displayArray[0]});
				$("#sampleString").html(canvasStr[3]);
				$("#acidwithWaterStr").html(canvasStr[9]);
				drawCanvas(document.getElementById("crudeCopper"),118,36,imageContent[10],mainLeft,mainTop);//alum				
			}else if(iconSelect==iconSelected[2]){//Benzoic acid 
				$("#copperIcon").css("opacity","1");
				$("#alumIcon").css("opacity","1");
				$("#benzoicIcon").css("opacity","0.3");
				$('#copperClick').css({display:displayArray[0]});
				$("#alumClick").css({display:displayArray[0]});
				$("#benClick").css({display:displayArray[1]});
				$("#sampleString").html(canvasStr[4]);
				$('#waterString').html(canvasStr[6]);
				$("#acidwithWaterStr").html(canvasStr[10]);
				$("#acidwithWaterStr").css('top',mainTop+295+'px');
				drawCanvas(document.getElementById("crudeCopper"),118,36,imageContent[22],mainLeft,mainTop);//benzoic acid
			}			
			resetAllEvents();// Reset events all
		})	
		//*--Function to start drag events---------
		function dragItem(sampleid,minTop,maxTop,minLeft,maxLeft){
			selectItem=sampleid;
			//*-----Start drag event ----------------
			$('#'+sampleid).draggable({//stop the drag event
				start: function(event, ui) {
					if(sampleid==selectDragItem[2]){// Beaker 
						$("#beaker5Shadow").css({display:displayArray[1]});
					}else if(sampleid==selectDragItem[5]){// Start drag beaker benzoic acid
						$('#steelbasin').css({zIndex:''});
						$("#benoicAcidbeakershadow").css({display:displayArray[1]});
						$('#steelbasinwater').css({top:mainTop+225+'px'});
					}else if(sampleid==selectDragItem[7]){//Start drag Cork				
						$("#corkshadow").css({display:displayArray[1]});
					}else if(sampleid==selectDragItem[4]){// Start drag glass bowl	
						$("#glassbowlShadow3").css({display:displayArray[1]});
					}else if(sampleid==selectDragItem[3]){//Start drag china dish 
						 $("#inference").css({display:displayArray[1]});
					}else if(sampleid==selectDragItem[6]){// filter paper
						$("#filterpaper").attr('src',simPath+"images/"+imageContent[46]);
						if(iconSelect==iconSelected[0]){//Copper sulphate
							$("#testtubesolvent").attr('src',simPath+"images/"+imageContent[16]);
						}else{//Alum or Benzoic acid
							$("#testtubesolvent").attr('src',simPath+"images/"+imageContent[1]);
						}
					}else if(sampleid==selectDragItem[9]){// glass bowl for cleaning
						$("#bowlshadow7").css({display:displayArray[1]});
					}
					
				},
				stop : function(event, ui) {
					if (((((this.offsetTop>=minTop)&& (this.offsetLeft>=minLeft)) && ((this.offsetTop<=maxTop)&&(this.offsetLeft<=maxLeft))) )){	
						$(this).css({display:displayArray[0]});	
						$(this).draggable({disabled:true});												
						if(sampleid==selectDragItem[0]){// Drag spatula
							this.style.left=mainLeft+100+"px";							
							this.style.top=mainTop+40+"px";
							$('#glassrod').css({'cursor':'pointer'});
							$("#drops1").css({display:displayArray[0]});// poweder drops 
							$("#drops2,#drops3,#drops4,#drops5,#drops6,#drops7,#drops8,#drops9,#drops10").css({display:displayArray[0]});
							
							$('#drops2,#drops3,#drops4,#drops5,#drops6,#drops7,#drops8,#drops9,#drops10').animate({top:mainTop+280+'px'});
							$('#splash1').css({display:displayArray[0]});	 
							$('#splash2').css({display:displayArray[0]}); 
							$('#drops1').animate({top:mainTop+280+'px'},500,function(){	
								
							$('#drops1,#drops2,#drops3,#drops4,#drops5,#drops6,#drops7,#drops8,#drops9,#drops10').css({display:displayArray[1]});});
							$('#ImgInSpatula').animate({opacity:'0'},100,function(){// powder in spatula	
								$('#ImgInSpatula').css({display:displayArray[1]})
								$('#splash1').css({display:displayArray[1]});	 
								$('#splash2').css({display:displayArray[1]});
							});
							$(this).delay(500).animate({top:mainTop+220+"px",left:mainLeft+280+"px"});
							$('#powderInBeaker').css({display:displayArray[0]});// powder in beaker
							$('#powderInBeaker').animate({width:'23px',left:mainLeft+47+'px'});	
							$('#SpatulaDiv').css({'cursor':'default'});
							timer1=setTimeout(function(){								
								glassrodClick(mainTop+85,mainLeft+75);// Click on glass rod												
							},600);
							
						}else if(sampleid==selectDragItem[1]){// Drag cylinder	
							this.style.left=mainLeft+170+"px";							
							this.style.top=mainTop+10+"px";
							rotation(document.getElementById("cylinder"),-90);// rotate cylinder
							$('#cylinderwaterDiv').css({height:160+'px',top:mainTop+0+'px'});
							$('#cylinderwaterImg').css({left:mainLeft-190+'px',top:mainTop-35+'px'});
							rotation(document.getElementById("cylinderwaterImg"),-5);// rotate cylinder
							$("#solnPourStart,#pourline1").css('display',displayArray[0]);
							$("#solnPourStart").css('opacity','0.4');
							$('#cylinderwaterDivAll').animate({'opacity':'0'},function(){
								$("#cylinderwaterDivAll").css('display',displayArray[1]);
							});
							$('#bkrWaterDivBg').animate({top:mainTop+87+'px'});
							$('#bkrWaterDiv2').animate({height:'58px',top:mainTop+88+'px'});
							$('#bkrWaterDiv').animate({height:'58px',top:mainTop+87+'px'},500,function(){
								$("#pourline2").css('display','block');
								$("#solnPourStart,#pourline1,#pourline2").animate({
									opacity:'0'						
								},500,function(){		
									$("#solnPourStart,#pourline1,#pourline2").css('display',displayArray[1]);
									rotation(document.getElementById("cylinder"),0);// rotate cylinder										
									$('#cylinder').css({'cursor':'default'});
									$("#cylinder").animate({ top:mainTop+115+'px',left:mainLeft+455+'px'},100,function(){
										$("#cylinder").css({top:mainTop+115+'px',left:mainLeft+455+'px'});
									});
								});						
							});
							timer2=setTimeout(function(){								
								$('#nextClick').css({display:displayArray[0]});												
							},1000);
							
						}else if(sampleid==selectDragItem[2]){//Drag beaker	
							this.style.left=mainLeft+224+"px";							
							this.style.top=mainTop-30+"px";							
							rotation(document.getElementById("beaker2"),-90);// rotate beaker
							$("#paticle2").css({display:displayArray[1]});
							$('#beaker2waterDiv').css({height:110+'px',top:mainTop-69+'px'});
							$('#beaker2waterImg').css({left:mainLeft-190+'px',top:mainTop-35+'px'});
							rotation(document.getElementById("beaker2waterImg"),-10);// rotate beaker
							$("#beaker2waterDivAll").css('opacity','0');
							$('#beaker2waterDivAll').animate({'opacity':'0'},function(){
								$("#beaker2waterDivAll").css('display',displayArray[1]);
								$("#beaker2waterDiv").css({height:31+'px'});
							});
							$("#funnelsoln").css({display:displayArray[0]});	
							$("#funnelsoln").delay(500).animate(function(){
								if(iconSelect==iconSelected[0]){//Copper sulphate
									$("#funnelsoln").attr('src',simPath+"images/"+imageContent[32]);	
								}else{
									$("#funnelsoln").attr('src',simPath+"images/"+imageContent[7]);
								}
							});
							timer3=setTimeout(function(){								
								$('#beaker3ContentDiv').animate({top:mainTop+253+'px',height:'35px'})
								$('#beaker3ContentDivBg').animate({top:mainTop+253+'px'})
								$('#beaker3Content,#beaker3ContentBg').animate({top:mainTop-58+'px'})
								if(iconSelect==iconSelected[2]){// Benzoic acid
									$("#beaker3ContentDiv,#beaker3ContentDivBg").css({display:displayArray[0]});
								}else{//Alum or Copper sulphate
									$("#potcontent").css({display:displayArray[0]});
								}								
								$("#funnelsoln").css({display:displayArray[1]});
							},100);
							timer31=setTimeout(function(){
								rotation(document.getElementById("beaker2"),0);// rotate beaker
								$("#beaker2").css({'cursor':'default'});
								$("#beaker2").animate({top:mainTop+190+'px',left:mainLeft+350+'px'},function(){
									$('#nextClick,#beaker5Shadow,#inference').css({display:displayArray[0]});
								});	
							},1000);	
						}
						else if(sampleid==selectDragItem[3]){//Drag china dish 
							this.style.left=mainLeft+300+"px";							
							this.style.top=mainTop+195+"px";
							rotation(this,-45);// rotate china dish
							$("#dishpourline1").css({display:displayArray[0]});	
							$("#dishpourline1").delay(500).animate(function(){
								if(iconSelect==iconSelected[0]){//Copper sulphate
									$("#dishpourline1").attr('src',simPath+"images/"+imageContent[50]);	
								}else{
									$("#dishpourline1").attr('src',simPath+"images/"+imageContent[52]);
								}
							});
							timer4=setTimeout(function(){								
								$("#glassbowlContents,#dishpourline1").css({display:displayArray[1]});	
								$("#bowlToDrag").css({display:displayArray[0]});
								$('#bowlToDrag').css({ top:mainTop+248+'px',left:mainLeft+250+'px'});												
							},100);
							timer5=setTimeout(function(){								
								rotation(document.getElementById("dishTodrag"),0);// rotate cylinder				
								$("#dishTodrag").animate({left:mainLeft+570+'px'});	
								dragItem('bowlToDrag',mainTop+44,mainTop+254,mainLeft,mainLeft+180);
							},500);				
						}else if(sampleid==selectDragItem[4]){// Drag glass bowl
							if(clockFlag==true){
								this.style.left=mainLeft+250+"px";							
								this.style.top=mainTop+248+"px";
								$('#glassbasin,#bowlToDrag').css({'cursor':'default'});
								$('#nextClick,#glassbowlShadow3,#inference').css({display:displayArray[0]});
								crystalFlag=true;
							}else{									
								this.style.left=mainLeft+100+"px";							
								this.style.top=mainTop+252+"px";
								$('#clockDiv').css({display:displayArray[0]});
								clockEvt=setInterval(clockRotate,10);
							}
						}else if(sampleid==selectDragItem[5]){// Drag benzoic acid beaker
							if(clockFlag==true){								
								this.style.left=mainLeft+387+"px";							
								this.style.top=mainTop+148+"px";
								$('#steelbasin').css({zIndex:''});
								$('#steelbasin').css({'cursor':'default'});							
								$("#benoicAcidbeakershadow,#nextClick").css({display:displayArray[0]});					
							}else{
								$('#steelbasinwater').animate({top:mainTop+217+'px'});										
								this.style.left=mainLeft+118+"px";							
								this.style.top=mainTop+150+"px";								
								$('#steelbasin').css({zIndex:'2'});
								$('#clockDiv').css({display:displayArray[0]});
								clockEvt=setInterval(clockRotate,10);
							}						
						}
						else if(sampleid==selectDragItem[6]){// filter paper						
							this.style.left=mainLeft+193+"px";							
							this.style.top=mainTop+60+"px";
							$("#inference").css({display:displayArray[1]});							
							rotation(this,-45);// rotate filter paper
							$("#solventpour1,#solventpour2,#solventpour3,#solventpour4").css({display:displayArray[0]});
							$("#solventpour5,#solventpour6,#solventpour7").css({display:displayArray[0]});
							$("#solventpour8,#solventpour9,#solventpour10").css({display:displayArray[0]});
							$('#solventpour2,#solventpour3,#solventpour4,#solventpour5,#solventpour6,#solventpour7,#solventpour8,#solventpour9,#drops10').animate({top:mainTop+270+'px'});
							$('#solventpour1').animate({top:mainTop+270+'px'},500,function(){	
								
							$('#solventpour1,#solventpour2,#solventpour3,#solventpour4,#solventpour5,#solventpour6,#solventpour7,#solventpour8,#solventpour9,#solventpour10').css({display:displayArray[1]});
							timer6=setTimeout(function(){rotation(document.getElementById("filterpaper"),0);});
							});	
							$(this).delay(500).animate({left:mainLeft+570+"px"});
							$("#testtubesolvent").css({display:displayArray[0]});
							$('#filterpaper').css({'cursor':'default'});
							$('#cork').css({'cursor':'pointer'});
							$("#cork").draggable({disabled:false});
							
							dragItem('cork',mainTop,mainTop+130,mainLeft+160,mainLeft+230);		
						}else if(sampleid==selectDragItem[7]){// Drag cork
							$('#cork').css({'cursor':'default'});							
							this.style.left=mainLeft+198+"px";							
							this.style.top=mainTop+112+"px";
							$('#testtube5,#testtube5Div,#testtubestand5').css({zIndex:'2'});
							$('#testtube5Div').css({'cursor':'pointer'});
							$("#corkshadow").css({display:displayArray[1]});
							testtubeZoomView();
						}else if(sampleid==selectDragItem[8]){// water bottle
							this.style.left=mainLeft+126+"px";							
							this.style.top=mainTop+116+"px";
							$("#bottlepourwater").css({display:displayArray[0]});
							timer9=setTimeout(function(){								
								if ($("#bottlepourwater").attr('src')== simPath+"images/"+imageContent[45]){							
									$("#bottlepourwater").attr('src',simPath+"images/"+imageContent[47]);
								}
								$("#bowlWaterDiv").animate({height:25+'px',top:mainTop+35+'px'});
								$("#bowlWater").animate({top:mainTop-17+'px'});
							},100);
							timer10=setTimeout(function(){
								$("#bottlepourwater").css({display:displayArray[1]});
								$("#waterBottle").animate({left:mainLeft+54+'px',top:mainTop+108+'px'},function (){	
									$('#waterBottle').css({'cursor':'default'});
									$("#bowl").draggable({disabled:false});
									dragItem('bowl',mainTop,mainTop+254,mainLeft+206,mainLeft+539);
									$('#bowl').css({'cursor':'pointer'});	
								});
							},500);	
						}else if(sampleid==selectDragItem[9]){// glass bowl for cleaning
							this.style.left=mainLeft+307+"px";							
							this.style.top=mainTop+77+"px";
							rotation(this,45);// rotate glass bowl for cleaning
							$("#bowlWater").animate({opacity:0});
							$("#basinpourline").css({display:displayArray[0]});															
							timer7=setTimeout(function(){								
								if ($("#basinpourline").attr('src')== simPath+"images/"+imageContent[37]){							
									$("#basinpourline").attr('src',simPath+"images/"+imageContent[44]);
								}											
							},100);
							timer8=setTimeout(function(){
								$("#basinpourline").css({display:displayArray[1]});					   
								rotation(document.getElementById("bowl"),0);// glass bowl for cleaning			
								$("#bowl").animate({left:mainLeft+185+'px',top:mainTop+230+'px'},function(){
									$("#bowlshadow7").css({display:displayArray[1]});
									$('#bowl').css({'cursor':'default'});
									$("#nextClick").css({display:displayArray[0]});	
								});
							},500);	
						}
					 }else{	
					 	if(sampleid==selectDragItem[0]){// Spatula
							this.style.left=mainLeft+280+"px";							
							this.style.top=mainTop+220+"px";
						}else if(sampleid==selectDragItem[1]){	// Cylinder							
							this.style.left=mainLeft+450+"px";							
							this.style.top=mainTop+115+"px";
						}else if(sampleid==selectDragItem[2]){//Beaker	
							$("#beaker5Shadow").css({display:displayArray[0]});
							this.style.left=mainLeft+350+"px";							
							this.style.top=mainTop+190+"px";
						}else if(sampleid==selectDragItem[3]){// Dish 						
							this.style.left=mainLeft+410+"px";							
							this.style.top=mainTop+96+"px";
						}else if(sampleid==selectDragItem[4]){// Glass bowl	
							if(clockFlag==true){
								this.style.left=mainLeft+100+"px";							
								this.style.top=mainTop+252+"px";								
							}else{
								this.style.left=mainLeft+250+"px";							
								this.style.top=mainTop+248+"px";
								$("#glassbowlShadow3").css({display:displayArray[0]});
							}
						}else if(sampleid==selectDragItem[5]){// Beaker benzoic acid						
							if(clockFlag==true){
								$(this).draggable({disabled:true});	
								this.style.left=mainLeft+387+"px";							
								this.style.top=mainTop+148+"px";
								$('#steelbasin').css({'cursor':'default'});							
								$("#benoicAcidbeakershadow,#nextClick").css({display:displayArray[0]});	
							}else{
								$("#benoicAcidbeakershadow").css({display:displayArray[0]});
								this.style.left=mainLeft+387+"px";							
								this.style.top=mainTop+148+"px";														
								$('#steelbasin').css({zIndex:''});
							}							
						}else if(sampleid==selectDragItem[6]){// filter paper
							if(iconSelect==iconSelected[0]){//Copper sulphate
								$("#filterpaper").attr('src',simPath+"images/"+imageContent[19]);
							}else{
								$("#filterpaper").attr('src',simPath+"images/"+imageContent[14]);
							}
							this.style.left=mainLeft+405+"px";							
							this.style.top=mainTop+272+"px";			
						}else if(sampleid==selectDragItem[7]){// cork						
							$("#corkshadow").css({display:displayArray[0]});
							this.style.left=mainLeft+30+"px";							
							this.style.top=mainTop+273+"px";			
						}else if(sampleid==selectDragItem[8]){// water bottle
							this.style.left=mainLeft+54+"px";							
							this.style.top=mainTop+108+"px";	
						}else if(sampleid==selectDragItem[9]){//glass bowl for cleaning
							$("#bowlshadow7").css({display:displayArray[0]});
							this.style.left=mainLeft+185+"px";							
							this.style.top=mainTop+230+"px";							
						}
					 }
				}						 
			});			
		}				
		//*--Function to click the glass rod ---
		function glassrodClick(topPos,leftPos){
			//$('#powderInBeaker').stop(true);
			degree = -14;
			rotCount=0;
			flag1=new Boolean(true);
			$("#glassrod").click(function(){										  
				$('#glassrod').css({'cursor':'default'});
				$("#glassrod").unbind('click');										  
				$('#glassrod').animate({
					 top:topPos+'px',
					 left:leftPos+'px'
				 },1,function(){			 		
					  stirEvt=setInterval(stirringFn,1);					  
					  $("#mixture").css({display:displayArray[0]});	
					  mixEvt =setInterval(mixFN,1);
					  mixEvt2 =setInterval(mixFN2,1);
				 })
							
			});
		}
		//*--Function to start stir the glass rod ---
		function stirringFn(){			
			rotCount++;		
			if(flag1==true){
				if(degree<=0){
					degree++;
					if(degree==0){
						flag1=false;
					}
				}
			}else{
				degree--;
				if(degree==-30){
					flag1=true;
				}
			}
			rotation(document.getElementById("glassrod"),degree);			
			if(rotCount>=130){				
				clearInterval(stirEvt);
				clearInterval(mixEvt);
				clearInterval(mixEvt2);
				rotation(document.getElementById("glassrod"),0);				
				$("#mixture").css({display:displayArray[1]});	
				$('#glassrod').animate({
					 top:mainTop+92+'px',
					 left:mainLeft+111+'px'
				 })
				if(iconSelect==iconSelected[0]){//Copper sulphate
					$('#cylinder').css({'cursor':'pointer'});
					$("#cylinder").css({ top:mainTop+115+'px',left:mainLeft+455+'px'});	
					$("#cylinder").draggable({disabled:false});	
					dragItem('cylinder',mainTop-150,mainTop+250,mainLeft,mainLeft+280);
				}else{//Alum or Benzoic acid 	
					$('#nextClick').css({display:displayArray[0]});	
				}
			}
		}
		function rotation(rotateId,degree){
			rotateId.style.webkitTransformOrigin='50% 50%';
			rotateId.style.webkitTransform = 'rotate(' + degree+ 'deg)';
			rotateId.style.MozTransformOrigin='50% 50%';
			rotateId.style.MozTransform ='rotate('+ degree +'deg)';
		}
		//*--Function to start mix the sample ---
		function mixFN(){
			if($('.mix1').css('display') == displayArray[0]){          
				$('.mix1,.mix3,.mix4,.mix5').hide();
				$('.mix2').show();
				$("#waterInbeaker").css({'opacity':'0.8'});
				$("#waterInbeaker2").css({'opacity':'0'});
			}else if($('.mix2').css('display') == displayArray[0]){          
				$('.mix1,.mix2,.mix4,.mix5').hide();
				$('.mix3').show(); 
				$("#waterInbeaker").css({'opacity':'0.6'});
				$("#waterInbeaker2").css({'opacity':'0.1'});
			}else if($('.mix3').css('display') == displayArray[0]){          
				$('.mix1,.mix2,.mix3,.mix5').hide();
				$('.mix4').show();   
				$("#waterInbeaker").css({'opacity':'0.4'});
				$("#waterInbeaker2").css({'opacity':'0.2'});
			}else if($('.mix4').css('display') == displayArray[0]){
				$('.mix2,.mix3,.mix4,.mix1').hide();
				$('.mix5').show();
				$("#waterInbeaker").css({'opacity':'0.2'});
				$("#waterInbeaker2").css({'opacity':'0.5'});
			}else{
				$('.mix2,.mix3,.mix4,.mix5').hide();
				$('.mix1').show();
				$("#waterInbeaker").css({'opacity':'0'});
				$("#waterInbeaker2").css({'opacity':'0.6'});
			}
			$("#waterInbeaker2").css({'opacity':'0.6'});
			if(iconSelect==iconSelected[0]){//Copper sulphate
				$('#bkrWaterDivBg').css({top:mainTop+89+'px'});
			}
			$("#bkrWaterDiv2").css({display:displayArray[0]});
		}
		//*--Function to animate sample mixing---
		function mixFN2(){
			$('#powderInBeaker').animate({width:'60px',left:mainLeft+30+'px',top:mainTop+120+'px',opacity:'0'});
		}
		//*--Function to click the next button ---
		$("#nextClick").click(function(){										   
			$('#nextClick,#inference,#bgCanvas2').css({display:displayArray[1]})			
			$("#bgCanvas1").css({display:displayArray[0]});
			if(count==0){// First next click
				$("#sampleDiv,#bgCanvas1").css({display:displayArray[1]});					
				$("#filterDiv,#bgCanvas2").css({display:displayArray[0]});
				$("#dishunder,#dishtop,#beaker3,#beaker3ContentDiv,#beaker3ContentDivBg,#potcontent").css({display:displayArray[1]});				
				if(iconSelect==iconSelected[2]){//Benzoic acid 
					$("#beaker3,#beaker3Shadow").css({display:displayArray[0]});									
				}else if(iconSelect==iconSelected[1]){// Alum 
					$("#dishunder,#dishtop").css({display:displayArray[0]});					
					$("#potcontent").attr('src',simPath+"images/"+imageContent[35]);
				}else{//Copper sulphate 
					$("#dishunder,#dishtop").css({display:displayArray[0]});					
					$("#potcontent").attr('src',simPath+"images/"+imageContent[34]);
				}							
				$("#filter,#beaker2,#beaker5Shadow").css({display:displayArray[0]});
				dragItem('beaker2',mainTop,mainTop+113,mainLeft+40,mainLeft+310);
			}else if(count==1){// Second next click
				$("#filterDiv").css({display:displayArray[1]});					
				if(iconSelect==iconSelected[2]){//Benzoic acid 							
					$("#thirdPart2,#paticle2").css({display:displayArray[0]});					
					dragItem('benoicAcidbeaker',mainTop,mainTop+170,mainLeft+0,mainLeft+250);					
				}else{//Alum or Copper sulphate
					$("#thirdPart1").css({display:displayArray[0]});
				}
			}else if(count==2){// Third next click
				$("#thirdPart1,#thirdPart2").css({display:displayArray[1]});
				if(iconSelect==iconSelected[2]){//Benzoic acid 
					$('#beaker2waterDiv').css({top:mainTop+0+'px'});
					$('#beaker2waterImg').css({left:mainLeft-102+'px',top:mainTop-100+'px'});
					$("#beaker2waterDivAll").css('opacity','1');
					$("#beaker2waterDivAll").css({display:displayArray[0]});
					$("#beaker2").css({'cursor':'pointer'});
					$("#bgCanvas1").css({display:displayArray[1]});			
					$("#bgCanvas2").css({display:displayArray[0]});
					$("#filterDiv").css({display:displayArray[0]});
					$("#beaker3,#beaker3Shadow").css({display:displayArray[0]});
					$("#beaker2").attr('src',simPath+"images/"+imageContent[33]);
					$('#beaker3ContentDiv').css({top:mainTop+280+'px',height:'5px'});
					$('#beaker3ContentDivBg').css({top:mainTop+280+'px'});
					$('#beaker3Content,#beaker3ContentBg').css({top:mainTop-90+'px'});
					$("#beaker2").draggable({disabled:false});					
					$("#beaker2").css({ top:mainTop+190+'px',left:mainLeft+350+'px'});
					dragItem('beaker2',mainTop,mainTop+113,mainLeft+40,mainLeft+310);					
				}else{//Copper sulphate or Alum	
					cleaningWithWater();
				}
			}else if(count==3){// Fourth next click
				if(iconSelect==iconSelected[2]){//Benzoic acid 
					$("#filterDiv").css({display:displayArray[1]});
					$("#beaker3,#beaker3Shadow").css({display:displayArray[1]});
					cleaningWithWater();
				}else{//Copper sulphate or Alum	
					addTesttubeStage();
				}
			}else if(count==4){								
				addTesttubeStage();
			}			
			count++;
			removeTrip();	
		});
		//*--Function to show stage items of crystals add into the testtube ---
		function cleaningWithWater(){
			$("#crystalCleaningPart").css({display:displayArray[0]});
			$('#waterBottle').css({'cursor':'pointer'});
			dragItem('waterBottle',mainTop,mainTop+256,mainLeft+93,mainLeft+281);			
		}	
		//*--Function to show stage items of crystals add into the testtube ---
		function addTesttubeStage(){
			$("#crystalCleaningPart").css({display:displayArray[1]});
			$('#inference').css({display:displayArray[0]});			
			$("#fourthPart").css({display:displayArray[0]});
			dragItem('filterpaper',mainTop,mainTop+105,mainLeft+100,mainLeft+235);			
		}		
		//*--Function to click the on burner button to start the flame ---
		$("#burnerOnOff").click(function(){			 							 
			var currentimg=$("#burner_btn").attr("src");
			$("#burnerOnOff").css({display:displayArray[1]});			
			if(currentimg==simPath+"images/"+imageContent[11]){	//burner on
				stirrer3Click();		
				$("#burner_btn").attr('src',simPath+"images/"+imageContent[12]);
				$("#flame").css({display:displayArray[0]});	
				$(this).css({display:displayArray[1]});	
				flaming = setInterval(flames, 50);	
				flameFlag=true;				
			}
			$('#stirrer3').css({'cursor':'pointer'});
		});
		//*--Function to click the glass rod in stage 3 ---
		function stirrer3Click(){			
			rotCount2=0;
			flag2==new Boolean(true);
			degree2=-14;
			$("#stirrer3").click(function(){										  
				$('#stirrer3').css({'cursor':'default'});
				$("#stirrer3").unbind('click');
				$('#stirrer3').animate({ top:mainTop+20+'px',left:mainLeft+440+'px'},1,function(){			 		
					  stirEvt2=setInterval(stirringFn2,1);
				})							
			});
		}
		//*--Function to start stir the glass rod ---
		function stirringFn2(){			
			rotCount2++;			
			if(flag2==true){
				if(degree2<=0){
					degree2++;
					if(degree2==0){
						flag2=false;
					}
				}
			}else{
				degree2--;
				if(degree2==-30){
					flag2=true;
				}
			}	
			rotation(document.getElementById("stirrer3"),degree2);
			if(rotCount2>50){
				$('#dishbluewater3').animate({top:mainTop+104+'px'})
			}
			if(rotCount2>150){							
				clearInterval(stirEvt2);				
				$('#stirrer3').animate({top:mainTop+5+'px'					 
				 	},1,function(){
					 $('#stirrer3').animate({left:mainLeft+600+'px'},1000,function(){
						 $("#flame,#dishContents").css({display:displayArray[1]});
						 $("#dishTodrag").css({ top:mainTop+96+'px',left:mainLeft+410+'px'});
						 $("#dishTodrag").css({display:displayArray[0]});				
						 $("#burner_btn").attr('src',simPath+"images/"+imageContent[11]);				
						 dragItem('dishTodrag',mainTop+150,mainTop+255,mainLeft+175,mainLeft+340);
					 })
				 })	
				$('#inference').css({display:displayArray[0]});			
			}
		}
		//*--Function to show the flame ---------
		function flames(){
			if($('.flame1').css('display') == displayArray[0]){          
				$('.flame1,.flame3,.flame4,.flame5').hide();
				$('.flame2').show();         
			}else if($('.flame2').css('display') == displayArray[0]){          
				$('.flame1,.flame2,.flame4,.flame5').hide();
				$('.flame3').show();         
			}else if($('.flame3').css('display') == displayArray[0]){          
				$('.flame1,.flame3,.flame2,,.flame5').hide();
				$('.flame4').show();         
			}else if($('.flame4').css('display') == displayArray[0]){          
				$('.flame1,.flame3,.flame2,.flame4').hide();
				$('.flame5').show();         
			}else{
				$('.flame2,.flame3,.flame4,.flame5').hide();
				$('.flame1').show();
			}
		} 
		//*--Function to clock rotation----
		function clockRotate(){	
			clockAngle++;
			document.getElementById("needle").style.webkitTransformOrigin='5px 35px';
			document.getElementById("needle").style.webkitTransform = 'rotate(' + clockAngle + 'deg)';
			document.getElementById("needle").style.MozTransformOrigin='5px 35px';
			document.getElementById("needle").style.MozTransform ='rotate('+ clockAngle +'deg)';
			if(clockAngle>180){
				clearInterval(clockEvt);
				$('#clockDiv').css({display:displayArray[1]});
				$("#bowlToDrag,#benoicAcidbeaker").draggable({disabled:false});		
				if(iconSelect==iconSelected[0]){//Copper sulpphate
					$("#bowlToDrag").attr('src',simPath+"images/"+imageContent[43]);
				}else{// Alum or Benzoic acid
					$("#bowlToDrag").attr('src',simPath+"images/"+imageContent[42]);
					$("#benoicAcidbeaker").attr('src',simPath+"images/"+imageContent[15]);
				}
				clockFlag=true;
				$('#glassbasin,#steelbasin').css({'cursor':'pointer'});
				dragItem('bowlToDrag',mainTop+120,mainTop+290,mainLeft+200,mainLeft+330);
				dragItem('benoicAcidbeaker',mainTop+50,mainTop+187,mainLeft+315,mainLeft+437);			
				$("#bowlToDrag").css({zIndex:'2'});
			}
		}
		//*--Function to click reset button to reset all events---
		$("#reset").click(function(){
		   window.location.reload();	   
		});
		//*--Function to  zoomed view of testtube---
		function testtubeZoomView(){
			$("#testtube5Div").click(function(){
				count++;							  
				$("#fourthPart,#bgCanvas1,#bgCanvas2").css({display:displayArray[1]});
				if(iconSelect==iconSelected[0]){
					drawCanvas(document.getElementById("testubeZoom"),62,307,imageContent[17],mainLeft,mainTop);
				}else{
					drawCanvas(document.getElementById("testubeZoom"),62,307,imageContent[26],mainLeft,mainTop);
				}
				$("#bgCanvas3,#testubeZoom").css({display:displayArray[0]});	
				zoomFlag=true;
				removeTrip();
				$('#inference').css({display:displayArray[0]});	
			});
		}
		//*--Function to add values into the drop down---					   
		function addintoDropDown(getId,valueSet){		
			var selected = getId;
			$.each(valueSet, function(val, text) {selected.append($('<option></option>').val(val).html(text))});				
		}
		//*--Function for adding label for all controls---	
		function addLabel(){		
			$('#sampleCombo').html(controlStr[0]);
			$('#coppercntrl').html(mixtureUsed[0]);
			$('#alumcntrl').html(mixtureUsed[1]);
			$('#bencntrl').html(mixtureUsed[2]);
			$('#nextBtnString').html(canvasStr[5]);
			$('#sampleString').html(canvasStr[0]);
			$('#waterString').html(canvasStr[1]);
			$('#acidString').html(canvasStr[2]);
			$('#timeString').html(canvasStr[7]);
			$("#acidwithWaterStr").html(canvasStr[8]);
			$('#reset').attr('value',controlStr[1]);			
		}
		//*--Function to draw image in canvas-----	
		function drawCanvasAll(){
			drawCanvas(document.getElementById("filter"),270,286,imageContent[2],mainLeft,mainTop);
			drawCanvas(document.getElementById("watchglass"),160,31,imageContent[3],mainLeft,mainTop);//Watch Glass			
			drawCanvas(document.getElementById("crudeCopper"),118,36,imageContent[5],mainLeft,mainTop);//crudeCopper
			drawCanvas(document.getElementById("glassrod"),73,203,imageContent[6],mainLeft,mainTop);//glassrod
			drawCanvas(document.getElementById("burner"),293,178,imageContent[8],mainLeft,mainTop);//burner
			drawCanvas(document.getElementById("sampleLabel"),118,42,imageContent[20],mainLeft,mainTop);// sampleLabel
			drawCanvas(document.getElementById("waterLabel"),118,36,imageContent[9],mainLeft,mainTop);//waterLabel
			drawCanvas(document.getElementById("acidLabel"),118,36,imageContent[21],mainLeft,mainTop);//acidLabel
			drawCanvas(document.getElementById("nextBtn"),96,34,imageContent[13],mainLeft,mainTop);	//Next button		
			drawCanvas(document.getElementById("glassPlate"),125,30,imageContent[18],mainLeft,mainTop); // Glass plate
		}
		//*--Function to draw canvas---
		function drawCanvas(Canvas,imageWidth,imageHeight,drawImage,leftPos,topPos){		
			Canvas.width = imageWidth;
			Canvas.height = imageHeight;
			var bgCtx = Canvas.getContext('2d');
			var bgImg = new Image;
			bgImg.onload = function(){ bgCtx.drawImage(bgImg,topPos,leftPos);};
			bgImg.src=simPath+'images/'+drawImage;	
		}
		//*--Function to prevent the selection canvas---
		function preventSelection(){			
			//*--Apply selectable false--------
			$('#mainDiv').mousedown(function(event){event.preventDefault();});	
		}
		//*--Function to remove help tooltip---
		function removeTrip(){
			if(tripClickFlag==true){
				trip.stop();
				tripClickFlag=false;
			}
		}
		//*--Function to clear all setIntervals ---
		function clearIntervalFn(){
			clearInterval(stirEvt);
			clearInterval(mixEvt);
			clearInterval(mixEvt2);	
			clearInterval(stirEvt2);
			clearInterval(clockEvt);
			clearTimeout(timer1);
			clearTimeout(timer2);
			clearTimeout(timer3);
			clearTimeout(timer31);
			clearTimeout(timer31);
			clearTimeout(timer4);
			clearTimeout(timer5);
			clearTimeout(timer6);
			clearTimeout(timer7);
			clearTimeout(timer8);
			clearTimeout(timer9);
			clearTimeout(timer10);
		}
		//*--Function to reset all rotation---
		function resetRotateFn(){
			rotation(document.getElementById("cylinder"),0);
			rotation(document.getElementById("glassrod"),0);
			rotation(document.getElementById("stirrer3"),0);
			rotation(document.getElementById("filterpaper"),0);
			rotation(document.getElementById("beaker2"),0);
			rotation(document.getElementById("dishTodrag"),0);
			rotation(document.getElementById("cylinderwaterImg"),0);
			rotation(document.getElementById("bowl"),0);// glass bowl for cleaning
		}
		//*--Function to reset the all experiment---
		function resetAllEvents(){	
			removeTrip();
			dragItem('SpatulaDiv',mainTop-44,mainTop+234,mainLeft+0,mainLeft+160);// Drag spatula 
			$("#flame").css({display:displayArray[1]});		
			$("#burner_btn").attr('src',simPath+"images/"+imageContent[11]);		
			$("#filterpaper").css({top:mainTop+272+'px',left:mainLeft+405+'px'});
			$("#cork").css({top:mainTop+273+'px',left:mainLeft+30+'px'});
			$('#filterpaper,#SpatulaDiv,#beaker2,#bowlToDrag').css({'cursor':'pointer'});
			$('#cork,#cylinder,#testtube5Div,#bowl').css({'cursor':'default'});
			$('#ImgInSpatula,#pourline1,#pourline2').css({opacity:'1'});
			$("#beaker2").attr('src',simPath+"images/"+imageContent[36]);	
			$("#bottlepourwater").attr('src',simPath+"images/"+imageContent[45]);
			$("#benoicAcidbeaker").attr('src',simPath+"images/"+imageContent[0]);		
			clearIntervalFn();
			resetRotateFn();
			$('#cylinderwaterDiv').css({height:32+'px',top:mainTop+125+'px'});
			$('#cylinderwaterImg').css({left:mainLeft-102+'px',top:mainTop-100+'px'});
			$('#beaker2waterDiv').css({top:mainTop+0+'px'});
			$('#beaker2waterImg').css({left:mainLeft-102+'px',top:mainTop-100+'px'});
			$("#solnPourStart").css('opacity','0.7');
			$("#cylinderwaterDivAll,#beaker2waterDivAll").css('opacity','1');
			$('#beaker3ContentDiv,#beaker3Content,#dishbluewater3,#beaker3ContentDivBg,#beaker3ContentBg').stop(true);
			$('#stirrer3,#powderInBeaker,#glassrod,#bkrWaterDiv,#bkrWaterDiv2,#bkrWaterDivBg,#SpatulaDiv').stop(true);
			$('#solnPourStart,#pourline1,#pourline2,#cylinder,#dishTodrag,#beaker2,#cylinderwaterDivAll').stop(true);
			$('#steelbasinwater,#bowlWaterDiv,#bowlWater,#waterBottle,#bowl').stop(true);
			count=clockAngle=0;
			clockFlag=zoomFlag=crystalFlag=false;
			$('#bkrWaterDivBg').css({top:mainTop+90+'px'});
			$('#steelbasin,#testtube5,#testtube5Div,#testtubestand5').css({zIndex:''});
			$("#powderInBeaker").css({ top:mainTop+122+'px',left:mainLeft+50+'px',width:'1px',opacity:'1'});
			$("#bkrDiv").css({ top:mainTop+160+'px',left:mainLeft+50+'px'});
			$("#glassrod").css({ top:mainTop+92+'px',left:mainLeft+111+'px'});
			$("#stirrer3").css({ top:mainTop+30+'px',left:mainLeft+450+'px'});
			$("#cylinder").css({ top:mainTop+115+'px',left:mainLeft+455+'px'});	
			$('#bkrWaterDiv,#bkrWaterDiv2').css({height:'40px',top:mainTop+90+'px'});
			$("#SpatulaDiv").css({ top:mainTop+220+'px',left:mainLeft+280+'px'});
			$("#beaker2").css({ top:mainTop+190+'px',left:mainLeft+350+'px'});
			$("#benoicAcidbeaker").css({ top:mainTop+148+'px',left:mainLeft+387+'px'});
			$("#bowlWaterDiv").css({height:1+'px',top:mainTop+61+'px'});
			$("#bowlWater").css({top:mainTop-39+'px'});
			$('#drops1').css({top:mainTop+90+'px'});
			$('#drops2').css({top:mainTop+100+'px'});
			$('#drops3').css({top:mainTop+120+'px'});
			$('#drops4').css({top:mainTop+140+'px'});
			$('#drops5').css({top:mainTop+160+'px'});
			$('#drops6').css({top:mainTop+180+'px'});
			$('#drops7').css({top:mainTop+200+'px'});
			$('#drops8').css({top:mainTop+220+'px'});
			$('#drops9').css({top:mainTop+230+'px'});
			$('#drops10').css({top:mainTop+240+'px'});
			$('#solventpour1').css({top:mainTop+112+'px'});
			$('#solventpour2').css({top:mainTop+120+'px'});
			$('#solventpour3').css({top:mainTop+128+'px'});
			$('#solventpour4').css({top:mainTop+136+'px'});
			$('#solventpour5').css({top:mainTop+144+'px'});
			$('#solventpour6').css({top:mainTop+192+'px'});
			$('#solventpour7').css({top:mainTop+200+'px'});
			$('#solventpour8').css({top:mainTop+208+'px'});
			$('#solventpour9').css({top:mainTop+216+'px'});
			$('#solventpour10').css({top:mainTop+224+'px'});
			$("#filterDiv,#thirdPart1,#thirdPart2,#dishunder,#solnPourStart").css({display:displayArray[1]});
			$("#dishAnimArea,#dishTodrag,#inference,#fourthPart,#paticle2,#bottlepourwater").css({display:displayArray[1]});
			$("#basinpourline,#crystalCleaningPart").css({display:displayArray[1]});			
			$("#testtubesolvent,#nextClick,#powderInBeaker,#mixture,#bkrWaterDiv2").css({display:displayArray[1]});
			$("#bowlToDrag,#clockDiv,#testubeZoom,#filterAnimArea,#splash1,#splash2").css({display:displayArray[1]});
			$("#dishpourline1,#nextClick,.Drops,.solventpour,#pourline1,#pourline2").css({display:displayArray[1]});
			$("#sampleDiv,#glassrod,#bkrDiv,#SpatulaDiv,.mix1,#ImgInSpatula").css({display:displayArray[0]});
			$("#burnerOnOff,#dishContents,#glassbowlContents,#benoicAcidbeakershadow").css({display:displayArray[0]});
			$("#beaker5Shadow,#corkshadow,#filterpaper,#glassbowlShadow3").css({display:displayArray[0]});
			$("#beaker2waterDivAll,#cylinderwaterDivAll").css({display:displayArray[0]});
			$("#glassrod,#stirrer3,#testtube5Div").unbind('click');				
			$("#SpatulaDiv,#beaker2,#dishTodrag,#bowlToDrag,#benoicAcidbeaker,#filterpaper").draggable({disabled:false});
			$("#waterBottle").draggable({disabled:false});
			$("#cylinder,#cork").draggable({disabled:true});			
			$("#waterInbeaker,#waterInbeaker2,#bowlWater").css({'opacity':'1'});
			$('#dishbluewater3').css({top:mainTop+99+'px'});
			$('#beaker3ContentDiv').css({top:mainTop+280+'px',height:'5px'});
			$('#beaker3ContentDivBg').css({top:mainTop+280+'px'});
			$('#steelbasinwater').css({top:mainTop+225+'px'});
			$('#beaker3Content,#beaker3ContentBg').css({top:mainTop-90+'px'});
			$("#bgCanvas1").css({display:displayArray[0]});					
			$("#bgCanvas2").css({display:displayArray[1]});
		}	
		/*-----------------------------------------------------------------*/		
	});	
};	