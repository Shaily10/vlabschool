// JavaScript Document
var trip;
var tripClickFlag=false;
$(document).ready(function() {
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
		if(zoomFlag==false){
			tripClickFlag=true;
			$(".content").scrollTop(0);		
			if(iconSelect==iconSelected[0])//Copper sulphate
			{
				if(count==0){
					trip = new Trip([
					{
						sel : $('#alumIcon'),
						position : 'e',
						content : helpMsg[0],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#SpatulaDiv'),
						position : 'n',
						content :helpMsg[1] ,
						expose : false,
						delay : 4000
					},
					{
						sel : $('#glassrod'),
						position : 'n',
						content :helpMsg[2] ,
						expose : false,
						delay : 4000
					},
					{
						sel : $('#cylinder'),
						position : 'w',
						content :helpMsg[3] ,
						expose : false,
						delay : 4000
					}]); 
				}else if(count==1){
					trip = new Trip([
					{
						sel : $('#beaker2'),
						position : 'n',
						content : helpMsg[4],
						expose : false,
						delay : 4000
					}]);
				}else if(count==2){
					trip = new Trip([
					{
						sel : $('#burner_btn'),
						position : 'w',
						content : helpMsg[5],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#sandunder'),
						position : 'w',
						content :helpMsg[2] ,
						expose : false,
						delay : 4000
					},
					{
						sel : $('#sandunder'),
						position : 'w',
						content :helpMsg[6] ,
						expose : false,
						delay : 4000
					},
					{
						sel : $('#dishDiv'),
						position : 'n',
						content :helpMsg[7] ,
						expose : false,
						delay : 4000
					},
					{
						sel : $('#dishDiv'),
						position : 'n',
						content :helpMsg[8] ,
						expose : false,
						delay : 4000
					}]);
				}else if(count==3){
					trip = new Trip([
					{
						sel : $('#waterBottle'),
						position : 'n',
						content : helpMsg[14],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#glassbowl7'),
						position : 'n',
						content :helpMsg[15] ,
						expose : false,
						delay : 4000
					}]);
				}else if(count==4){
					trip = new Trip([
					{
						sel : $('#glassPlate'),
						position : 'w',
						content : helpMsg[9],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#cork'),
						position : 'e',
						content :helpMsg[10] ,
						expose : false,
						delay : 4000
					},
					{
						sel : $('#testtube5Div'),
						position : 'n',
						content :helpMsg[11] ,
						expose : false,
						delay : 4000
					}]);
				}
			}
			else if(iconSelect==iconSelected[1]){//Alum
				if(count==0){
					trip = new Trip([
					{
						sel : $('#alumIcon'),
						position : 'e',
						content : helpMsg[0],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#SpatulaDiv'),
						position : 'n',
						content :helpMsg[1] ,
						expose : false,
						delay : 4000
					},
					{
						sel : $('#glassrod'),
						position : 'n',
						content :helpMsg[2] ,
						expose : false,
						delay : 4000
					}]);
				}else if(count==1){
					trip = new Trip([
					{
						sel : $('#beaker2'),
						position : 'n',
						content : helpMsg[4],
						expose : false,
						delay : 4000
					}]);
				}else if(count==2){
					trip = new Trip([
					{
						sel : $('#burner_btn'),
						position : 'w',
						content : helpMsg[5],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#sandunder'),
						position : 'w',
						content :helpMsg[2] ,
						expose : false,
						delay : 4000
					},
					{
						sel : $('#sandunder'),
						position : 'w',
						content :helpMsg[6] ,
						expose : false,
						delay : 4000
					},
					{
						sel : $('#dishDiv'),
						position : 'n',
						content :helpMsg[7] ,
						expose : false,
						delay : 4000
					},
					{
						sel : $('#dishDiv'),
						position : 'n',
						content :helpMsg[8] ,
						expose : false,
						delay : 4000
					}]);
				}else if(count==3){
					trip = new Trip([
					{
						sel : $('#waterBottle'),
						position : 'n',
						content : helpMsg[14],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#glassbowl7'),
						position : 'n',
						content :helpMsg[15] ,
						expose : false,
						delay : 4000
					}]);
				}else if(count==4){
					trip = new Trip([
					{
						sel : $('#glassPlate'),
						position : 'w',
						content : helpMsg[9],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#cork'),
						position : 'e',
						content :helpMsg[10] ,
						expose : false,
						delay : 4000
					},
					{
						sel : $('#testtube5Div'),
						position : 'n',
						content :helpMsg[11] ,
						expose : false,
						delay : 4000
					}]);
				}
			}
			else // Benzoic acid
			{
				if(count==0){
					
					trip = new Trip([
					{
						sel : $('#alumIcon'),
						position : 'e',
						content : helpMsg[0],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#SpatulaDiv'),
						position : 'n',
						content :helpMsg[1] ,
						expose : false,
						delay : 4000
					},
					{
						sel : $('#glassrod'),
						position : 'n',
						content :helpMsg[2] ,
						expose : false,
						delay : 4000
					}]);
				}else if(count==1){
					trip = new Trip([
					{
						sel : $('#beaker2'),
						position : 'n',
						content : helpMsg[16],
						expose : false,
						delay : 4000
					}]);
				}else if(count==2){
					trip = new Trip([
					{
						sel : $('#benoicAcidbeaker'),
						position : 'n',
						content : helpMsg[12],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#benoicAcidbeaker'),
						position : 'n',
						content :helpMsg[13] ,
						expose : false,
						delay : 4000
					}]);
				}else if(count==3){
					trip = new Trip([
					{
						sel : $('#beaker2'),
						position : 'n',
						content : helpMsg[16],
						expose : false,
						delay : 4000
					}]);
				}else if(count==4){
					trip = new Trip([
					{
						sel : $('#waterBottle'),
						position : 'n',
						content : helpMsg[14],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#glassbowl7'),
						position : 'n',
						content :helpMsg[15] ,
						expose : false,
						delay : 4000
					}]);
				}else if(count==5){
					trip = new Trip([
					{
						sel : $('#glassPlate'),
						position : 'w',
						content : helpMsg[9],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#cork'),
						position : 'e',
						content :helpMsg[10] ,
						expose : false,
						delay : 4000
					},
					{
						sel : $('#testtube5Div'),
						position : 'n',
						content :helpMsg[11] ,
						expose : false,
						delay : 4000
					}]);
				}
			}    
			trip.start(); 
			window.trip = trip;
		}
	});
	$('#inference').bind('click',function(){
		if(iconSelect!=iconSelected[2])//Copper sulphate and alum
		{								  
			if(count==1){
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : inferenceMsg[0],
					expose : false,
					delay : 4000
				}]); 
			}else if(count==2){
				if(crystalFlag==false){					
					trip = new Trip([
					{
						sel : $('#inference'),
						position : 'e',
						content : inferenceMsg[1],
						expose : false,
						delay : 4000
					}]);
				}else{
					trip = new Trip([
					{
						sel : $('#inference'),
						position : 'e',
						content : inferenceMsg[2],
						expose : false,
						delay : 4000
					}]);
				}
			}else if(count==4){
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : inferenceMsg[3],
					expose : false,
					delay : 4000
				}]);
			}else{
				if(iconSelect==iconSelected[0])//Copper sulphate 
				{
					trip = new Trip([
					{
						sel : $('#inference'),
						position : 'e',
						content : inferenceMsg[4],
						expose : false,
						delay : 4000
					}]);
				}else{// Alum
					trip = new Trip([
					{
						sel : $('#inference'),
						position : 'e',
						content : inferenceMsg[5],
						expose : false,
						delay : 4000
					}]);
				}
			}
		}else{	//Benzoic acid										  
			if(count==1){
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : inferenceMsg[0],
					expose : false,
					delay : 4000
				}]); 
			}else if(count==3){				
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : inferenceMsg[7],
					expose : false,
					delay : 4000
				}]); 
			}else if(count==5){
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : inferenceMsg[3],
					expose : false,
					delay : 4000
				}]);
			}else{
				trip = new Trip([
					{
						sel : $('#inference'),
						position : 'e',
						content : inferenceMsg[6],
						expose : false,
						delay : 4000
					}]);
			}
		}
		trip.start(); 
		window.trip = trip;
	});
});