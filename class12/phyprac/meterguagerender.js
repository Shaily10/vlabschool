
(function(c){c.jqplot.MeterGaugeRenderer=function(){
    c.jqplot.LineRenderer.call(this)};
c.jqplot.MeterGaugeRenderer.prototype=new c.jqplot.LineRenderer();
c.jqplot.MeterGaugeRenderer.prototype.constructor=c.jqplot.MeterGaugeRenderer;
c.jqplot.MeterGaugeRenderer.prototype.init=function(e){
//        this.diameter=null;
//        this.padding=null;
//        this.shadowOffset=2;
//        this.shadowAlpha=0.07;
//        this.shadowDepth=2;
    this.background="white";//"#efefef"
//        this.ringColor="#BBC6D0";
   this.needleColor="#C3D3E5";
    this.tickColor="989898";
//        this.ringWidth=null;
    this.min;
    this.max;
    this.ticks=[];
    this.showTicks=true;
    this.showTickLabels=true;
    this.label=null;
    this.labelHeightAdjust=0;
    this.labelPosition="inside";
    this.intervals=[];
  //  this.intervalColors=["#4bb2c5","#EAA228","#c5b47f","#579575","#839557","#958c12","#953579","#4b5de4","#d8b83f","#ff5800","#0085cc","#c747a3","#cddf54","#FBD178","#26B4E3","#bd70c7"];
//        this.intervalInnerRadius=null;
//        this.intervalOuterRadius=null;
    this.tickRenderer=c.jqplot.MeterGaugeTickRenderer;
    this.tickPositions=[1,2,2.5,5,10];
    this.tickSpacing=30;
//        this.numberMinorTicks=null;
//        this.hubRadius=null;
//        this.tickPadding=null;
//        this.needleThickness=null;
    this.needlePad=6;
    this.pegNeedle=true;
    this._type="meterGauge";
    c.extend(true,this,e);
//        this.type=null;
//        this.numberTicks=null;
//        this.tickInterval=null;
    this.span=180;
    if(this.type=="circular")
    {
        this.semiCircular=false
    }
    else{
        if(this.type!="circular"){
            this.semiCircular=true
        }else{this.semiCircular=(this.span<=180)?true:false}
    }
    this._tickPoints=[];
    this._labelElem=null;
    this.startAngle=(90+(360-this.span)/2)*Math.PI/180;
    this.endAngle=(90-(360-this.span)/2)*Math.PI/180;
    this.setmin=!!(this.min==null);
    this.setmax=!!(this.max==null);
    if(this.intervals.length){
        if(this.intervals[0].length==null||this.intervals.length==1){
            for(var f=0;f<this.intervals.length;f++){
                this.intervals[f]=[this.intervals[f],
                    this.intervals[f],
                    this.intervalColors[f]]}
        }
        else{if(this.intervals[0].length==2){
                for(f=0;f<this.intervals.length;f++){
                    this.intervals[f]=[this.intervals[f][0],this.intervals[f][1],this.intervalColors[f]]}}}}
    if(this.ticks.length){
        if(this.ticks[0].length==null||this.ticks[0].length==1){
            for(var f=0;f<this.ticks.length;f++){
                this.ticks[f]=[this.ticks[f],this.ticks[f]]}}
        this.min=(this.min==null)?this.ticks[0][0]:this.min;
        this.max=(this.max==null)?this.ticks[this.ticks.length-1][0]:this.max;this.setmin=false;
        this.setmax=false;this.numberTicks=this.ticks.length;
        this.tickInterval=this.ticks[1][0]-this.ticks[0][0];
        this.tickFactor=Math.floor(parseFloat((Math.log(this.tickInterval)/Math.log(10)).toFixed(11)));
        this.numberMinorTicks=b(this.tickPositions,this.tickInterval,this.tickFactor);
        if(!this.numberMinorTicks){
            this.numberMinorTicks=b(this.tickPositions,this.tickInterval,this.tickFactor-1)}
        if(!this.numberMinorTicks){this.numberMinorTicks=1}}
    else{if(this.intervals.length){
            this.min=(this.min==null)?0:this.min;this.setmin=false;
            if(this.max==null){if(this.intervals[this.intervals.length-1][0]>=this.data[0][1]){
                    this.max=this.intervals[this.intervals.length-1][0];
                    this.setmax=false}}else{this.setmax=false}}
        else{this.min=(this.min==null)?0:this.min;this.setmin=false;
            if(this.max==null){
                this.max=this.data[0][1]*1.25;this.setmax=true}else{this.setmax=false}}}};
c.jqplot.MeterGaugeRenderer.prototype.setGridData=function(j){var f=[];
    var k=[];
    var e=this.startAngle;for(var h=0;h<this.data.length;h++){
        f.push(this.data[h][1]);k.push([this.data[h][0]]);
        if(h>0){f[h]+=f[h-1]}}var g=Math.PI*2/f[f.length-1];
    for(var h=0;h<f.length;h++){k[h][1]=f[h]*g}this.gridData=k};
c.jqplot.MeterGaugeRenderer.prototype.makeGridData=function(j,k){
    var f=[];var l=[];var e=this.startAngle;
    for(var h=0;h<j.length;h++){
        f.push(j[h][1]);l.push([j[h][0]]);
        if(h>0){f[h]+=f[h-1]}}
    var g=Math.PI*2/f[f.length-1];
    for(var h=0;h<f.length;h++){l[h][1]=f[h]*g}return l};
function b(j,f,g){var e;for(var h=j.length-1;h>=0;h--)
    {e=f/(j[h]*Math.pow(10,g));
        if(e==4||e==5){return e-1}}return null}
c.jqplot.MeterGaugeRenderer.prototype.draw=function(X,aC,ap){
    var aa;var aM=(ap!=undefined)?ap:{};
    var ai=0;var ah=0;var at=1;if(ap.legendInfo&&ap.legendInfo.placement=="inside"){
        var aI=ap.legendInfo;switch(aI.location){case"nw":ai=aI.width+aI.xoffset;break;
            case"w":ai=aI.width+aI.xoffset;
                    break;case"sw":ai=aI.width+aI.xoffset;break;
                    case"ne":ai=aI.width+aI.xoffset;at=-1;break;
                    case"e":ai=aI.width+aI.xoffset;at=-1;break;
                    case"se":ai=aI.width+aI.xoffset;at=-1;break;
                    case"n":ah=aI.height+aI.yoffset;break;
                    case"s":ah=aI.height+aI.yoffset;at=-1;break;
                    default:break}}
                if(this.label){this._labelElem=c('<div class="jqplot-meterGauge-label" style="position:absolute;">'+this.label+"</div>");
                    this.canvas._elem.after(this._labelElem)}
                var m=(aM.shadow!=undefined)?aM.shadow:this.shadow;
                var N=(aM.showLine!=undefined)?aM.showLine:this.showLine;
                var I=(aM.fill!=undefined)?aM.fill:this.fill;
                var K=X.canvas.width;
                var S=X.canvas.height;
                if(this.padding==null){
                    this.padding=Math.round(Math.min(K,S)/30)}
                var Q=K-ai-2*this.padding;
                var ab=S-ah-2*this.padding;
                if(this.labelPosition=="bottom"&&this.label){
                    ab-=this._labelElem.outerHeight(true)}
                var L=Math.min(Q,ab);
                var ad=L;
                if(!this.diameter){
                    if(this.semiCircular){if(Q>=2*ab){
                            if(!this.ringWidth){
                                this.ringWidth=2*ab/35}
                            this.needleThickness=this.needleThickness||2+Math.pow(this.ringWidth,0.8);
                            this.innerPad=this.ringWidth/2+this.needleThickness/2+this.needlePad;
                            this.diameter=2*(ab-2*this.innerPad)}else{if(!this.ringWidth){
                                this.ringWidth=Q/35}
                            this.needleThickness=this.needleThickness||2+Math.pow(this.ringWidth,0.8);
                            this.innerPad=this.ringWidth/2+this.needleThickness/2+this.needlePad;
                            this.diameter=Q-2*this.innerPad-this.ringWidth-this.padding}
                        this._center=[(K-at*ai)/2+at*ai,(S+at*ah-this.padding-this.ringWidth-this.innerPad)]}
                    else{if(!this.ringWidth){this.ringWidth=ad/35}this.needleThickness=this.needleThickness||2+Math.pow(this.ringWidth,0.8);
                        this.innerPad=0;this.diameter=ad-this.ringWidth;this._center=[(K-at*ai)/2+at*ai,(S-at*ah)/2+at*ah]}}
                if(this._labelElem&&this.labelPosition=="bottom"){this._center[1]-=this._labelElem.outerHeight(true)}
                this._radius=this.diameter/2;this.tickSpacing=6000/this.diameter;
                if(!this.hubRadius){this.hubRadius=this.diameter/18}this.shadowOffset=0.5+this.ringWidth/9;this.shadowWidth=this.ringWidth*1;
                this.tickPadding=3+Math.pow(this.diameter/20,0.7);this.tickOuterRadius=this._radius-this.ringWidth/2-this.tickPadding;
                this.tickLength=(this.showTicks)?this._radius/13:0;if(this.ticks.length==0){
                    var A=this.max,aL=this.min,q=this.setmax,aG=this.setmin,au=(A-aL)*this.tickSpacing/this.span;
                    var aw=Math.floor(parseFloat((Math.log(au)/Math.log(10)).toFixed(11)));var an=(au/Math.pow(10,aw));
                    (an>2&&an<=2.5)?an=2.5:an=Math.ceil(an);var T=this.tickPositions;var aA,ak;
                    for(aa=0;aa<T.length;aa++){
                        if(an==T[aa]||aa&&T[aa-1]<an&&an<T[aa]){au=T[aa]*Math.pow(10,aw);aA=aa}}
                    for(aa=0;aa<T.length;aa++){if(an==T[aa]||aa&&T[aa-1]<an&&an<T[aa]){au=T[aa]*Math.pow(10,aw);ak=Math.ceil((A-aL)/au)}}
                    if(q&&aG){var aP=(aL>0)?aL-aL%au:aL-aL%au-au;if(!this.forceZero){var D=Math.min(aL-aP,0.8*au);var o=Math.floor(D/T[aA]);
                            if(o>1){aP=aP+T[aA]*(o-1);if(parseInt(aP,10)!=aP&&parseInt(aP-T[aA],10)==aP-T[aA]){aP=aP-T[aA]}}}if(aL==aP){aL-=au}
                        else{if(aL-aP>0.23*au){aL=aP}else{aL=aP-au;ak+=1}}ak+=1;var E=aL+(ak-1)*au;if(A>=E){E+=au;ak+=1}if(E-A<0.23*au){E+=au;ak+=1}
                        this.max=A=E;this.min=aL;this.tickInterval=au;this.numberTicks=ak;var O;
                        for(aa=0;aa<ak;aa++){O=parseFloat((aL+aa*au).toFixed(11));
                            this.ticks.push([O,O])}this.max=this.ticks[ak-1][1];
                        this.tickFactor=aw;this.numberMinorTicks=b(this.tickPositions,this.tickInterval,this.tickFactor);
                        if(!this.numberMinorTicks){this.numberMinorTicks=b(this.tickPositions,this.tickInterval,this.tickFactor-1)}}
                    else{if(q){var E=aL+(ak-1)*au;if(A>=E){A=E+au;ak+=1}else{A=E}this.tickInterval=this.tickInterval||au;
                            this.numberTicks=this.numberTicks||ak;
                            var O;
                            for(aa=0;aa<this.numberTicks;aa++){O=parseFloat((aL+aa*this.tickInterval).toFixed(11));this.ticks.push([O,O])}this.max=this.ticks[this.numberTicks-1][1];this.tickFactor=aw;this.numberMinorTicks=b(this.tickPositions,this.tickInterval,this.tickFactor);if(!this.numberMinorTicks){this.numberMinorTicks=b(this.tickPositions,this.tickInterval,this.tickFactor-1)}}}if(!q&&!aG){var P=this.max-this.min;aw=Math.floor(parseFloat((Math.log(P)/Math.log(10)).toFixed(11)))-1;var aN=[5,6,4,7,3,8,9,10,2],V,C,av=0,M;if(P>1){var aJ=String(P);if(aJ.search(/\./)==-1){var aF=aJ.search(/0+$/);av=(aF>0)?aJ.length-aF-1:0}}M=P/Math.pow(10,av);for(aa=0;aa<aN.length;aa++){V=M/(aN[aa]-1);if(V==parseInt(V,10)){this.numberTicks=aN[aa];this.tickInterval=P/(this.numberTicks-1);this.tickFactor=aw+1;break}}var O;for(aa=0;aa<this.numberTicks;aa++){O=parseFloat((this.min+aa*this.tickInterval).toFixed(11));this.ticks.push([O,O])}this.numberMinorTicks=b(this.tickPositions,this.tickInterval,this.tickFactor);if(!this.numberMinorTicks){this.numberMinorTicks=b(this.tickPositions,this.tickInterval,this.tickFactor-1)}if(!this.numberMinorTicks){this.numberMinorTicks=1;var aH=[4,5,3,6,2];for(aa=0;aa<5;aa++){var ao=this.tickInterval/aH[aa];if(ao==parseInt(ao,10)){this.numberMinorTicks=aH[aa]-1;break}}}}}var U=this._radius,aE=this.startAngle,k=this.endAngle,H=Math.PI,e=Math.PI/2;if(this.semiCircular){var z=Math.atan(this.innerPad/U),ac=this.outerStartAngle=aE-z,aB=this.outerEndAngle=k+z,B=this.hubStartAngle=aE-Math.atan(this.innerPad/this.hubRadius*2),af=this.hubEndAngle=k+Math.atan(this.innerPad/this.hubRadius*2);X.save();X.translate(this._center[0],this._center[1]);X.lineJoin="round";X.lineCap="round";X.save();X.beginPath();X.fillStyle=this.background;X.arc(0,0,U,ac,aB,false);X.closePath();X.fill();X.restore();var aj="rgba(0,0,0,"+this.shadowAlpha+")";X.save();for(var aa=0;aa<this.shadowDepth;aa++){X.translate(this.shadowOffset*Math.cos(this.shadowAngle/180*Math.PI),this.shadowOffset*Math.sin(this.shadowAngle/180*Math.PI));X.beginPath();X.strokeStyle=aj;X.lineWidth=this.shadowWidth;X.arc(0,0,U,ac,aB,false);X.closePath();X.stroke()}X.restore();X.save();var az=parseInt((this.shadowDepth+1)/2,10);for(var aa=0;aa<az;aa++){X.translate(this.shadowOffset*Math.cos(this.shadowAngle/180*Math.PI),this.shadowOffset*Math.sin(this.shadowAngle/180*Math.PI));X.beginPath();X.fillStyle=aj;X.arc(0,0,this.hubRadius,B,af,false);X.closePath();X.fill()}X.restore();X.save();X.beginPath();X.strokeStyle=this.ringColor;X.lineWidth=this.ringWidth;X.arc(0,0,U,ac,aB,false);X.closePath();X.stroke();X.restore();X.save();X.beginPath();X.fillStyle=this.ringColor;X.arc(0,0,this.hubRadius,B,af,false);X.closePath();X.fill();X.restore();if(this.showTicks){X.save();var f=this.tickOuterRadius,aq=this.tickLength,v=aq/2,F=this.numberMinorTicks,am=this.span*Math.PI/180/(this.ticks.length-1),p=am/(F+1);for(aa=0;aa<this.ticks.length;aa++){X.beginPath();X.lineWidth=1.5+this.diameter/360;X.strokeStyle=this.ringColor;var ae=am*aa+aE;X.moveTo(-f*Math.cos(am*aa+aE),f*Math.sin(am*aa+aE));X.lineTo(-(f-aq)*Math.cos(am*aa+aE),(f-aq)*Math.sin(am*aa+aE));this._tickPoints.push([(f-aq)*Math.cos(am*aa+aE)+this._center[0]+this.canvas._offsets.left,(f-aq)*Math.sin(am*aa+aE)+this._center[1]+this.canvas._offsets.top,am*aa+aE]);X.stroke();X.lineWidth=1+this.diameter/440;if(aa<this.ticks.length-1){for(var Y=1;Y<=F;Y++){X.beginPath();X.moveTo(-f*Math.cos(am*aa+p*Y+aE),f*Math.sin(am*aa+p*Y+aE));X.lineTo(-(f-v)*Math.cos(am*aa+p*Y+aE),(f-v)*Math.sin(am*aa+p*Y+aE));X.stroke()}}}X.restore()}if(this.showTickLabels){var J,W,T,aO,g,G,n=0;var an=this.tickPadding*(1-1/(this.diameter/80+1));for(aa=0;aa<this.ticks.length;aa++){J=c('<div class="jqplot-meterGauge-tick" style="position:absolute;">'+this.ticks[aa][1]+"</div>");this.canvas._elem.after(J);aO=J.outerWidth(true);g=J.outerHeight(true);W=this._tickPoints[aa][0]-aO*(this._tickPoints[aa][2]-Math.PI)/Math.PI-an*Math.cos(this._tickPoints[aa][2]);T=this._tickPoints[aa][1]-g/2+g/2*Math.pow(Math.abs((Math.sin(this._tickPoints[aa][2]))),0.5)+an/3*Math.pow(Math.abs((Math.sin(this._tickPoints[aa][2]))),0.5);J.css({left:W,top:T});G=aO*Math.cos(this._tickPoints[aa][2])+g*Math.sin(Math.PI/2+this._tickPoints[aa][2]/2);n=(G>n)?G:n}}if(this.label&&this.labelPosition=="inside"){var W=this._center[0]+this.canvas._offsets.left;var an=this.tickPadding*(1-1/(this.diameter/80+1));var T=0.5*(this._center[1]+this.canvas._offsets.top-this.hubRadius)+0.5*(this._center[1]+this.canvas._offsets.top-this.tickOuterRadius+this.tickLength+an)+this.labelHeightAdjust;W-=this._labelElem.outerWidth(true)/2;T-=this._labelElem.outerHeight(true)/2;this._labelElem.css({left:W,top:T})}else{if(this.label&&this.labelPosition=="bottom"){var W=this._center[0]+this.canvas._offsets.left-this._labelElem.outerWidth(true)/2;var T=this._center[1]+this.canvas._offsets.top+this.innerPad+ +this.ringWidth+this.padding+this.labelHeightAdjust;this._labelElem.css({left:W,top:T})}}X.save();var ax=this.intervalInnerRadius||this.hubRadius*1.5;if(this.intervalOuterRadius==null){if(this.showTickLabels){var ag=(this.tickOuterRadius-this.tickLength-this.tickPadding-this.diameter/8)}else{var ag=(this.tickOuterRadius-this.tickLength-this.diameter/16)}}else{var ag=this.intervalOuterRadius}var P=this.max-this.min;var aD=this.intervals[this.intervals.length-1]-this.min;var y,Z,u=this.span*Math.PI/180;for(aa=0;aa<this.intervals.length;aa++){y=(aa==0)?aE:aE+(this.intervals[aa-1][0]-this.min)*u/P;if(y<0){y=0}Z=aE+(this.intervals[aa][0]-this.min)*u/P;if(Z<0){Z=0}X.beginPath();X.fillStyle=this.intervals[aa][2];X.arc(0,0,ax,y,Z,false);X.lineTo(ag*Math.cos(Z),ag*Math.sin(Z));X.arc(0,0,ag,Z,y,true);X.lineTo(ax*Math.cos(y),ax*Math.sin(y));X.closePath();X.fill()}X.restore();var ay=this.data[0][1];var R=this.max-this.min;if(this.pegNeedle){if(this.data[0][1]>this.max+R*3/this.span){ay=this.max+R*3/this.span}if(this.data[0][1]<this.min-R*3/this.span){ay=this.min-R*3/this.span}}var al=(ay-this.min)/R*this.span*Math.PI/180+this.startAngle;X.save();X.beginPath();X.fillStyle=this.ringColor;X.strokeStyle=this.ringColor;this.needleLength=(this.tickOuterRadius-this.tickLength)*0.85;this.needleThickness=(this.needleThickness<2)?2:this.needleThickness;var aK=this.needleThickness*0.4;var x=this.needleLength/10;var s=(this.needleThickness-aK)/10;var ar;for(var aa=0;aa<10;aa++){ar=this.needleThickness-aa*s;X.moveTo(x*aa*Math.cos(al),x*aa*Math.sin(al));X.lineWidth=ar;X.lineTo(x*(aa+1)*Math.cos(al),x*(aa+1)*Math.sin(al));X.stroke()}X.restore()}else{this._center=[(K-at*ai)/2+at*ai,(S-at*ah)/2+at*ah]}};c.jqplot.MeterGaugeAxisRenderer=function(){c.jqplot.LinearAxisRenderer.call(this)};c.jqplot.MeterGaugeAxisRenderer.prototype=new c.jqplot.LinearAxisRenderer();c.jqplot.MeterGaugeAxisRenderer.prototype.constructor=c.jqplot.MeterGaugeAxisRenderer;c.jqplot.MeterGaugeAxisRenderer.prototype.init=function(e){this.tickRenderer=c.jqplot.MeterGaugeTickRenderer;c.extend(true,this,e);this._dataBounds={min:0,max:100};this.min=0;this.max=100;this.showTicks=false;this.ticks=[];this.showMark=false;this.show=false};c.jqplot.MeterGaugeLegendRenderer=function(){c.jqplot.TableLegendRenderer.call(this)};c.jqplot.MeterGaugeLegendRenderer.prototype=new c.jqplot.TableLegendRenderer();c.jqplot.MeterGaugeLegendRenderer.prototype.constructor=c.jqplot.MeterGaugeLegendRenderer;c.jqplot.MeterGaugeLegendRenderer.prototype.init=function(e){this.numberRows=null;this.numberColumns=null;c.extend(true,this,e)};c.jqplot.MeterGaugeLegendRenderer.prototype.draw=function(){if(this.show){var p=this._series;var x="position:absolute;";x+=(this.background)?"background:"+this.background+";":"";x+=(this.border)?"border:"+this.border+";":"";x+=(this.fontSize)?"font-size:"+this.fontSize+";":"";x+=(this.fontFamily)?"font-family:"+this.fontFamily+";":"";x+=(this.textColor)?"color:"+this.textColor+";":"";x+=(this.marginTop!=null)?"margin-top:"+this.marginTop+";":"";x+=(this.marginBottom!=null)?"margin-bottom:"+this.marginBottom+";":"";x+=(this.marginLeft!=null)?"margin-left:"+this.marginLeft+";":"";x+=(this.marginRight!=null)?"margin-right:"+this.marginRight+";":"";this._elem=c('<table class="jqplot-table-legend" style="'+x+'"></table>');var f=false,q=false,u,o;var w=p[0];if(w.show){var t=w.data;if(this.numberRows){u=this.numberRows;if(!this.numberColumns){o=Math.ceil(t.length/u)}else{o=this.numberColumns}}else{if(this.numberColumns){o=this.numberColumns;u=Math.ceil(t.length/this.numberColumns)}else{u=t.length;o=1}}var n,m,r,g,e,l,k,h;var v=0;for(n=0;n<u;n++){if(q){r=c('<tr class="jqplot-table-legend"></tr>').prependTo(this._elem)}else{r=c('<tr class="jqplot-table-legend"></tr>').appendTo(this._elem)}for(m=0;m<o;m++){if(v<t.length){l=this.labels[v]||t[v][0].toString();h=w.color;if(!q){if(n>0){f=true}else{f=false}}else{if(n==u-1){f=false}else{f=true}}k=(f)?this.rowSpacing:"0";g=c('<td class="jqplot-table-legend" style="text-align:center;padding-top:'+k+';"><div><div class="jqplot-table-legend-swatch" style="border-color:'+h+';"></div></div></td>');e=c('<td class="jqplot-table-legend" style="padding-top:'+k+';"></td>');if(this.escapeHtml){e.text(l)}else{e.html(l)}if(q){e.prependTo(r);g.prependTo(r)}else{g.appendTo(r);e.appendTo(r)}f=true}v++}}}}return this._elem};function a(j,h,f){f=f||{};f.axesDefaults=f.axesDefaults||{};f.legend=f.legend||{};f.seriesDefaults=f.seriesDefaults||{};f.grid=f.grid||{};var e=false;if(f.seriesDefaults.renderer==c.jqplot.MeterGaugeRenderer){e=true}else{if(f.series){for(var g=0;g<f.series.length;g++){if(f.series[g].renderer==c.jqplot.MeterGaugeRenderer){e=true}}}}if(e){f.axesDefaults.renderer=c.jqplot.MeterGaugeAxisRenderer;f.legend.renderer=c.jqplot.MeterGaugeLegendRenderer;f.legend.preDraw=true;f.grid.background=f.grid.background||"white";f.grid.drawGridlines=false;f.grid.borderWidth=(f.grid.borderWidth!=null)?f.grid.borderWidth:0;f.grid.shadow=(f.grid.shadow!=null)?f.grid.shadow:false}}function d(e){}c.jqplot.preInitHooks.push(a);c.jqplot.postParseOptionsHooks.push(d);c.jqplot.MeterGaugeTickRenderer=function(){c.jqplot.AxisTickRenderer.call(this)};c.jqplot.MeterGaugeTickRenderer.prototype=new c.jqplot.AxisTickRenderer();c.jqplot.MeterGaugeTickRenderer.prototype.constructor=c.jqplot.MeterGaugeTickRenderer})(jQuery);

