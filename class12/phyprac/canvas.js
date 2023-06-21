/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 CanvasJS HTML5 & JavaScript Charts - v1.8.5 Beta 1 - http://canvasjs.com/ 
 Copyright 2013 fenopix
*/

(function () {
    function T(a, c) {
        a.prototype = Ja(c.prototype);
        a.prototype.constructor = a;
        a.base = c.prototype
    }
    function Ja(a) {
        function c() {
        }
        c.prototype = a;
        return new c
    }
    function za(a, c, b) {
        "millisecond" === b ? a.setMilliseconds(a.getMilliseconds() + 1 * c) : "second" === b ? a.setSeconds(a.getSeconds() + 1 * c) : "minute" === b ? a.setMinutes(a.getMinutes() + 1 * c) : "hour" === b ? a.setHours(a.getHours() + 1 * c) : "day" === b ? a.setDate(a.getDate() + 1 * c) : "week" === b ? a.setDate(a.getDate() + 7 * c) : "month" === b ? a.setMonth(a.getMonth() + 1 * c) : "year" === b && a.setFullYear(a.getFullYear() + 1 * c);
        return a
    }
    function Q(a, c) {
        var b = !1;
        0 > a && (b = !0, a *= -1);
        a = "" + a;
        for (c = c?c:1; a.length < c; )
            a = "0" + a;
        return b ? "-" + a : a
    }
    function ea(a) {
        if (!a)
            return a;
        a = a.replace(/^\s\s*/, "");
        for (var c = /\s/, b = a.length; c.test(a.charAt(--b)); )
            ;
        return a.slice(0, b + 1)
    }
    function Ka(a) {
        a.roundRect = function (a, b, d, e, f, g, h, q) {
            h && (this.fillStyle = h);
            q && (this.strokeStyle = q);
            "undefined" === typeof f && (f = 5);
            this.lineWidth = g;
            this.beginPath();
            this.moveTo(a + f, b);
            this.lineTo(a + d - f, b);
            this.quadraticCurveTo(a + d, b, a + d, b + f);
            this.lineTo(a + d, b + e - f);
            this.quadraticCurveTo(a + d, b + e, a + d - f, b + e);
            this.lineTo(a + f, b + e);
            this.quadraticCurveTo(a, b + e, a, b + e - f);
            this.lineTo(a, b + f);
            this.quadraticCurveTo(a, b, a + f, b);
            this.closePath();
            h && this.fill();
            q && 0 < g && this.stroke()
        }
    }
    function Aa(a, c) {
        return a - c
    }
    function Ba(a, c) {
        return a.x - c.x
    }
    function C(a) {
        var c = ((a & 16711680) >> 16).toString(16),
                b = ((a & 65280) >> 8).toString(16);
        a = ((a & 255) >> 0).toString(16);
        c = 2 > c.length ? "0" + c : c;
        b = 2 > b.length ? "0" + b : b;
        a = 2 > a.length ? "0" + a : a;
        return"#" + c + b + a
    }
    function La(a, c) {
        var b = this.length >>> 0, d = Number(c) ||
                0, d = 0 > d ? Math.ceil(d) : Math.floor(d);
        for (0 > d && (d += b); d < b; d++)
            if (d in this && this[d] === a)
                return d;
        return-1
    }
    function x(a) {
        return null === a || "undefined" === typeof a
    }
    function Ca(a, c, b) {
        b = b || "normal";
        var d = a + "_" + c + "_" + b, e = Da[d];
        if (isNaN(e)) {
            try {
                a = "position:absolute; left:0px; top:-20000px; padding:0px;\n\
margin:0px;border:none;white-space:pre;line-height:normal;font-family:" + a + "; \n\
font-size:" + c + "px; font-weight:" + b + ";";
                if (!Z) {
                    var
                            f = document.body;
                    Z = document.createElement("span");
                    Z.innerHTML = "";
                    var g = document.createTextNode("Mpgyi");
                    Z.appendChild(g);
                    f.appendChild(Z)
                }
                Z.style.display = "";
                Z.setAttribute("style", a);
                e = Math.round(Z.offsetHeight);
                Z.style.display = "none"
            } catch (h) {
                e = Math.ceil(1.1 * c)
            }
            e = Math.max(e, c);
            Da[d] = e
        }
        return e
    }
    function D(a, c) {
        var b = [];
        if (b = {solid: [],
            shortDash: [3, 1],
            shortDot: [1, 1],
            shortDashDot: [3, 1, 1, 1],
            shortDashDotDot: [3, 1, 1, 1, 1, 1], dot: [1, 2],
            dash: [4, 2],
            dashDot: [4, 2, 1, 2], longDash: [8, 2],
            longDashDot: [8, 2, 1, 2],
            longDashDotDot: [8, 2, 1, 2, 1, 2]}[a || "solid"])
            for (var d = 0; d < b.length; d++)
                b[d] *= c;
        else
            b = [];
        return b
    }
    function J(a,
            c, b, d) {
        if (a.addEventListener)
            a.addEventListener(c, b, d || !1);
        else if (a.attachEvent)
            a.attachEvent("on" + c, function (c) {
                c = c || window.event;
                c.preventDefault = c.preventDefault || function () {
                    c.returnValue = !1
                };
                c.stopPropagation = c.stopPropagation || function () {
                    c.cancelBubble = !0
                };
                b.call(a, c)
            });
        else
            return!1
    }
    function Ea(a, c, b) {
        a *= N;
        c *= N;
        a = b.getImageData(a, c, 2, 2).data;
        c = !0;
        for (b = 0; 4 > b; b++)
            if (a[b] !== a[b + 4] | a[b] !== a[b + 8] | a[b] !== a[b + 12]) {
                c = !1;
                break
            }
        return c ? a[0] << 16 | a[1] << 8 | a[2] : 0
    }
    function R(a, c, b) {
        return a in c ? c[a] : b[a]
    }
    function ja(a, c, b) {
        if (u && Fa) {
            var d = a.getContext("2d");
            ka = d.webkitBackingStorePixelRatio || d.mozBackingStorePixelRatio || d.msBackingStorePixelRatio || d.oBackingStorePixelRatio || d.backingStorePixelRatio || 1;
            N = ta / ka;
            a.width = c * N;
            a.height = b * N;
            ta !== ka && (a.style.width = c + "px", a.style.height = b + "px", d.scale(N, N))
        }
        else
            a.width = c, a.height = b
    }
    function $(a, c) {
        var b = document.createElement("canvas");
        b.setAttribute("class", "canvasjs-chart-canvas");
        ja(b, a, c);
        u || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(b);
        return b
    }
    function Ga(a, c, b) {
        if (a && c && b) {
            b = b + "." + c;
            var d = "image/" + c;
            a = a.toDataURL(d);
            var e = !1, f = document.createElement("a");
            f.download = b;
            f.href = a;
            f.target = "_blank";
            if ("undefined" !== typeof Blob && new Blob) {
                for (var g = a.replace(/^data:[a-z/]*;base64,/, ""), g = atob(g), h = new ArrayBuffer(g.length), h = new Uint8Array(h), q = 0; q < g.length; q++)
                    h[q] = g.charCodeAt(q);
                c = new Blob([h.buffer], {type: "image/" + c});
                try {
                    window.navigator.msSaveBlob(c, b), e = !0
                } catch (k) {
                    f.dataset.downloadurl = [d, f.download, f.href].join(":"), f.href =
                            window.URL.createObjectURL(c)
                }
            }
            if (!e)
                try {
                    event = document.createEvent("MouseEvents"), event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), f.dispatchEvent ? f.dispatchEvent(event) : f.fireEvent && f.fireEvent("onclick")
                } catch (n) {
                    c = window.open(), c.document.write("<img src='" + a + "'></img><div>Please right click on the image and save it to your device</div>"), c.document.close()
                }
        }
    }
    function U(a, c, b) {
        c.getAttribute("state") !== b && (c.setAttribute("state", b), c.setAttribute("type", "button"), c.style.position =
                "relative", c.style.margin = "0px 0px 0px 0px", c.style.padding = "3px 4px 0px 4px", c.style.cssFloat = "left", c.setAttribute("title", a._cultureInfo[b + "Text"]), c.innerHTML = "<img style='height:16px;' src='" + Ma[b].image + "' alt='" + a._cultureInfo[b + "Text"] + "' />")
    }
    function la() {
        for (var a = null, c = 0; c < arguments.length; c++)
            a = arguments[c], a.style && (a.style.display = "inline")
    }
    function X() {
        for (var a = null, c = 0; c < arguments.length; c++)
            (a = arguments[c]) && a.style && (a.style.display = "none")
    }
    function L(a, c, b, d) {
        this._defaultsKey =
                a;
        this.parent = d;
        this._eventListeners = [];
        d = {};
        b && (ca[b] && ca[b][a]) && (d = ca[b][a]);
        this._options = c ? c : {};
        this.setOptions(this._options, d)
    }
    function v(a, c, b) {
        this._publicChartReference = b;
        c = c || {};
        v.base.constructor.call(this, "Chart", c, c.theme ? c.theme : "theme1");
        var d = this;
        this._containerId = a;
        this._objectsInitialized = !1;
        this.overlaidCanvasCtx = this.ctx = null;
        this._indexLabels = [];
        this._panTimerId = 0;
        this._lastTouchEventType = "";
        this._lastTouchData = null;
        this.isAnimating = !1;
        this.renderCount = 0;
        this.panEnabled = this.disableToolTip =
                this.animatedRender = !1;
        this._defaultCursor = "default";
        this.plotArea = {canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0};
        this._dataInRenderedOrder = [];
        (this._container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this._container.innerHTML = "", c = a = 0, a = this._options.width ? this.width : 0 < this._container.clientWidth ? this._container.clientWidth : this.width, c = this._options.height ? this.height : 0 < this._container.clientHeight ? this._container.clientHeight :
                this.height, this.width = a, this.height = c, this.x1 = this.y1 = 0, 
        this.x2 = this.width, this.y2 = this.height, this._selectedColorSet = "undefined" !== typeof aa[this.colorSet] ? aa[this.colorSet] : aa.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", u || (this._canvasJSContainer.style.height = "0px"),
                this._container.appendChild(this._canvasJSContainer), this.canvas = $(a, c),
                this.canvas.style.position = "absolute", this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), 
                this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ka(this.ctx),
                u ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = $(a, c), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx =
                this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = $(a, c), 
        this.overlaidCanvas.style.position = "absolute", this._canvasJSContainer.appendChild(this.overlaidCanvas), 
        this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", this._eventManager = new fa(this), J(window, "resize", function () {
            d._updateSize() && d.render()
        }), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), 
        this._toolBar.style.cssText = "position: absolute; right: 1px; top: 1px;",
                this._canvasJSContainer.appendChild(this._toolBar),
                this.bounds = {x1: 0, y1: 0, x2: this.width, y2: this.height},
                J(this.overlaidCanvas, "click", function (a) {
            d._mouseEventHandler(a)
        }), J(this.overlaidCanvas, "mousemove", function (a) {
            d._mouseEventHandler(a)
        }), J(this.overlaidCanvas, "mouseup", function (a) {
            d._mouseEventHandler(a)
        }), J(this.overlaidCanvas, "mousedown", function (a) {
            d._mouseEventHandler(a);
            X(d._dropdownMenu)
        }), J(this.overlaidCanvas, "mouseout", function (a) {
            d._mouseEventHandler(a)
        }), J(this.overlaidCanvas, window.navigator.msPointerEnabled ?
                "MSPointerDown" : "touchstart", function (a) {
                    d._touchEventHandler(a)
                }), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function (a) {
            d._touchEventHandler(a)
        }), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function (a) {
            d._touchEventHandler(a)
        }), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function (a) {
            d._touchEventHandler(a)
        }), this._creditLink || (this._creditLink = document.createElement("a"), this._creditLink.setAttribute("class",
                "canvasjs-chart-credit"), this._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:3px;top:" + (this.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"), this._creditLink.setAttribute("tabIndex", -1), this._creditLink.setAttribute("target", "_blank")), this._toolTip = new V(this, this._options.toolTip, this.theme), this.axisY2 = this.axisY = this.axisX = this.data = null, this.sessionVariables = {axisX: {}, axisY: {},
            axisY2: {}})) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
    }
    function ma(a, c) {
        for (var b = [], d, e = 0; e < a.length; e++)
            if (0 == e)
                b.push(a[0]);
            else {
                var f, g, h;
                h = e - 1;
                f = 0 === h ? 0 : h - 1;
                g = h === a.length - 1 ? h : h + 1;
                d = Math.abs((a[g].x - a[f].x) / (0 === a[g].x - a[h].x ? 0.01 : a[g].x - a[h].x)) * (c - 1) / 2 + 1;
                var q = (a[g].x - a[f].x) / d;
                d = (a[g].y - a[f].y) / d;
                b[b.length] = a[h].x > a[f].x && 0 < q || a[h].x < a[f].x && 0 > q ? {x: a[h].x + q / 3, y: a[h].y + d / 3} : {x: a[h].x, y: a[h].y + d / 9};
                h = e;
                f = 0 === h ? 0 : h - 1;
                g = h === a.length - 1 ? h : h + 1;
                d = Math.abs((a[g].x - a[f].x) / (0 === a[h].x - a[f].x ? 0.01 : a[h].x - a[f].x)) * (c - 1) / 2 + 1;
                q = (a[g].x - a[f].x) / d;
                d = (a[g].y - a[f].y) / d;
                b[b.length] = a[h].x > a[f].x && 0 < q || a[h].x < a[f].x && 0 > q ? {x: a[h].x - q / 3, y: a[h].y - d / 3} : {x: a[h].x, y: a[h].y - d / 9};
                b[b.length] = a[e]
            }
        return b
    }
    function Ha(a, c) {
        if (null === a || "undefined" === typeof a)
            return c;
        var b = parseFloat(a.toString()) * (0 <= a.toString().indexOf("%") ? c / 100 : 1);
        return!isNaN(b) && b <= c && 0 <= b ? b : c
    }
    function da(a, c, b, d, e) {
        "undefined" === typeof e && (e = 0);
        this._padding = e;
        this._x1 = a;
        this._y1 = c;
        this._x2 = b;
        this._y2 = d;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    }
    function O(a, c) {
        O.base.constructor.call(this, "TextBlock", c);
        this.ctx = a;
        this._isDirty = !0;
        this._wrappedText = null;
        this._lineHeight = Ca(this.fontFamily, this.fontSize, this.fontWeight)
    }
    function ga(a, c) {
        ga.base.constructor.call(this, "Title", c, a.theme);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        if (x(this._options.margin) && a._options.subtitles)
            for (var b = a._options.subtitles,
                    d = 0; d < b.length; d++)
                if ((x(b[d].horizontalAlign) && "center" === this.horizontalAlign || b[d].horizontalAlign === this.horizontalAlign) && (x(b[d].verticalAlign) && "top" === this.verticalAlign || b[d].verticalAlign === this.verticalAlign) && !b[d].dockInsidePlotArea === !this.dockInsidePlotArea) {
                    this.margin = 0;
                    break
                }
        "undefined" === typeof this._options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {x1: null, y1: null, x2: null, y2: null}
    }
    function na(a, c) {
        na.base.constructor.call(this,
                "Subtitle", c, a.theme);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        "undefined" === typeof this._options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {x1: null, y1: null, x2: null, y2: null}
    }
    function oa(a, c, b) {
        oa.base.constructor.call(this, "Legend", c, b);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.ghostCtx = this.chart._eventManager.ghostCtx;
        this.items = [];
        this.height = this.width = 0;
        this.orientation = null;
        this.dataSeries =
        [];
        this.bounds = {x1: null, y1: null, x2: null, y2: null};
        "undefined" === typeof this._options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.lineHeight = Ca(this.fontFamily, this.fontSize, this.fontWeight);
        this.horizontalSpacing = this.fontSize
    }
    function ua(a, c) {
        ua.base.constructor.call(this, c);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx
    }
    function Y(a, c, b, d, e) {
        Y.base.constructor.call(this, "DataSeries", c, b);
        this.chart = a;
        this.canvas = a.canvas;
        this._ctx = a.canvas.ctx;
        this.index = d;
        this.noDataPointsInPlotArea = 0;
        this.id = e;
        this.chart._eventManager.objectMap[e] = {id: e, objectType: "dataSeries", dataSeriesIndex: d};
        this.dataPointIds = [];
        this.plotUnit = [];
        
        this.axisY = this.axisX = null;
        null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
        this.axisPlacement = this.getDefaultAxisPlacement();
        "undefined" === typeof this._options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
    }
    function F(a, c, b, d) {
        F.base.constructor.call(this,
                "Axis", c, a.theme);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = a.ctx;
        this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
        this.labels = [];
        this._stripLineLabels = this._labels = null;
        this.dataInfo = {min: Infinity, max: -Infinity, viewPortMin: Infinity, viewPortMax: -Infinity, minDiff: Infinity};
        "axisX" === b ? (this.sessionVariables = this.chart.sessionVariables[b], this._options.interval || (this.intervalType = null), "theme2" === this.chart.theme && x(this._options.lineThickness) && (this.lineThickness = 2)) : this.sessionVariables =
                "left" === d || "top" === d ? this.chart.sessionVariables.axisY : this.chart.sessionVariables.axisY2;
        "undefined" === typeof this._options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
        "undefined" === typeof this._options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
        this.type = b;
        "axisX" !== b || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
        this._position = d;
        this.lineCoordinates = {x1: null, y1: null, x2: null, y2: null, width: null};
        this.labelAngle =
                (this.labelAngle % 360 + 360) % 360;
        90 < this.labelAngle && 270 >= this.labelAngle ? this.labelAngle -= 180 : 270 < this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
        if (this._options.stripLines && 0 < this._options.stripLines.length)
            for (this.stripLines = [], c = 0; c < this._options.stripLines.length; c++)
                this.stripLines.push(new pa(this.chart, this._options.stripLines[c], a.theme, ++this.chart._eventManager.lastObjectId, this));
        this._titleTextBlock = null;
        this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum &&
                (this._options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
        this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
        this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this._options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
        this.hasOptionChanged("viewportMaximum") ||
                isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
        null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
        null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
        this.trackChanges("viewportMinimum");
        this.trackChanges("viewportMaximum")
    }
    function pa(a, c, b, d, e) {
        pa.base.constructor.call(this, "StripLine", c, b, e);
        this.id = d;
        this.chart = a;
        this.ctx = this.chart.ctx;
        this.label = this.label;
        this._thicknessType = "pixel";
        null !== this.startValue && null !== this.endValue && (this.value = ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this.thickness = Math.max(this.endValue - this.startValue), this._thicknessType = "value")
    }
    function V(a, c, b) {
        V.base.constructor.call(this, "ToolTip",
                c, b);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.currentDataPointIndex = this.currentSeriesIndex = -1;
        this._timerId = 0;
        this._prevY = this._prevX = NaN;
        this._initialize()
    }
    function fa(a) {
        this.chart = a;
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.ghostCanvas = $(this.chart.width, this.chart.height);
        this.ghostCtx = this.ghostCanvas.getContext("2d");
        this.mouseoveredObjectMaps = []
    }
    function ha(a) {
        var c;
        a && ia[a] && (c = ia[a]);
        ha.base.constructor.call(this, "CultureInfo", c)
    }
    function va(a) {
        this.chart = a;
        this.ctx = this.chart.plotArea.ctx;
        this.animations = [];
        this.animationRequestId = null
    }
    var u = !!document.createElement("canvas").getContext, 
    qa = {Chart: {width: 500, height: 400, zoomEnabled: !1, zoomType: "x", backgroundColor: "white", theme: "theme1", animationEnabled: !1, animationDuration: 1200, dataPointWidth: null, dataPointMinWidth: null, dataPointMaxWidth: null, colorSet: "colorSet1", culture: "en", creditText: "CanvasJS.com", interactivityEnabled: !0, exportEnabled: !1,
            exportFileName: "Chart", rangeChanging: null, rangeChanged: null}, 
        Title: {padding: 0, text: null, verticalAlign: "top", horizontalAlign: "center", fontSize: 20, fontFamily: "Calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: null, margin: 5, wrap: !0, maxWidth: null, dockInsidePlotArea: !1}, 
        Subtitle: {padding: 0, text: null, verticalAlign: "top", horizontalAlign: "center", fontSize: 14, fontFamily: "Calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal",
            borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: null, margin: 2, wrap: !0, maxWidth: null, dockInsidePlotArea: !1},
        Legend: {name: null, verticalAlign: "center", horizontalAlign: "right", fontSize: 14, fontFamily: "calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", cursor: null, itemmouseover: null, itemmouseout: null, itemmousemove: null, itemclick: null, dockInsidePlotArea: !1, reversed: !1, maxWidth: null, maxHeight: null, itemMaxWidth: null, itemWidth: null, itemWrap: !0, itemTextFormatter: null}, 
        ToolTip: {enabled: !0,shared: !1, animationEnabled: !0, content: null, contentFormatter: null, reversed: !1, backgroundColor: null, borderColor: null, borderThickness: 2, cornerRadius: 5, fontSize: 14, fontColor: null, fontFamily: "Calibri, Arial, Georgia, serif;", fontWeight: "normal", fontStyle: "italic"},
        Axis: {minimum: null, maximum: null, viewportMinimum: null, viewportMaximum: null, interval: null, intervalType: null, title: null, titleFontColor: "black", titleFontSize: 20, titleFontFamily: "arial", titleFontWeight: "normal", titleFontStyle: "normal", titleWrap: !0,
            titleMaxWidth: null, labelAngle: 0, labelFontFamily: "arial", labelFontColor: "black", labelFontSize: 12, labelFontWeight: "normal", labelFontStyle: "normal", labelAutoFit: !0, labelWrap: !0, labelMaxWidth: null, labelFormatter: null, prefix: "", suffix: "", includeZero: !0, tickLength: 5, tickColor: "black", tickThickness: 1, lineColor: "black", lineThickness: 1, lineDashType: "solid", gridColor: "A0A0A0", gridThickness: 0, gridDashType: "solid", interlacedColor: null, valueFormatString: null, margin: 2, stripLines: []},
        StripLine: {value: null, startValue: null,endValue: null, color: "orange", opacity: null, thickness: 2, lineDashType: "solid", label: "", labelPlacement: "inside", labelAlign: "far", labelWrap: !0, labelMaxWidth: null, labelBackgroundColor: "transparent", labelFontFamily: "arial", labelFontColor: "orange", labelFontSize: 12, labelFontWeight: "normal", labelFontStyle: "normal", labelFormatter: null, showOnTop: !1},
        DataSeries: {name: null, dataPoints: null, label: "", bevelEnabled: !1, highlightEnabled: !0, cursor: null, indexLabel: "", indexLabelPlacement: "auto", indexLabelOrientation: "horizontal",
            indexLabelFontColor: "black", indexLabelFontSize: 12, indexLabelFontStyle: "normal", indexLabelFontFamily: "Arial", indexLabelFontWeight: "normal", indexLabelBackgroundColor: null, indexLabelLineColor: null, indexLabelLineThickness: 1, indexLabelLineDashType: "solid", indexLabelMaxWidth: null, indexLabelWrap: !0, indexLabelFormatter: null, lineThickness: 2, lineDashType: "solid", connectNullData: !1, nullDataLineDashType: "dash", color: null, lineColor: null, risingColor: "white", fillOpacity: null, startAngle: 0, radius: null, innerRadius: null,
            type: "column", xValueType: "number", axisYType: "primary", xValueFormatString: null, yValueFormatString: null, zValueFormatString: null, percentFormatString: null, showInLegend: null, legendMarkerType: null, legendMarkerColor: null, legendText: null, legendMarkerBorderColor: null, legendMarkerBorderThickness: null, markerType: "circle", markerColor: null, markerSize: null, markerBorderColor: null, markerBorderThickness: null, mouseover: null, mouseout: null, mousemove: null, click: null, toolTipContent: null, visible: !0}, 
        TextBlock: {x: 0, y: 0, width: null, height: null, maxWidth: null, maxHeight: null, padding: 0, angle: 0, text: "", horizontalAlign: "center", fontSize: 12, fontFamily: "calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: null, textBaseline: "top"}, 
        CultureInfo: {decimalSeparator: ".", digitGroupSeparator: ",", zoomText: "Zoom", panText: "Pan", resetText: "Reset", menuText: "More Options", saveJPGText: "Save as JPEG", savePNGText: "Save as PNG", days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "), months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")}}, ia = {en: {}}, aa = {colorSet1: "#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "), colorSet2: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #33558B".split(" "), colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")},
    ca = {theme1: {Chart: {colorSet: "colorSet1"}, 
    Title: {fontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri", fontSize: 33, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "top", margin: 5},
    Subtitle: {fontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri", fontSize: 16, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "top", margin: 5}, Axis: {titleFontSize: 26, titleFontColor: "#666666", titleFontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                labelFontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri", labelFontSize: 18, labelFontColor: "grey", tickColor: "#BBBBBB", tickThickness: 2, gridThickness: 2, gridColor: "#BBBBBB", lineThickness: 2, lineColor: "#BBBBBB"}, Legend: {verticalAlign: "bottom", horizontalAlign: "center", fontFamily: u ? "monospace, sans-serif,arial black" : "calibri"}, DataSeries: {indexLabelFontColor: "grey", indexLabelFontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri", indexLabelFontSize: 18, indexLabelLineThickness: 1}},
        theme2: {Chart: {colorSet: "colorSet2"}, 
            Title: {fontFamily: "impact, charcoal, arial black, sans-serif", fontSize: 32, fontColor: "#333333", verticalAlign: "top", margin: 5}, 
            Subtitle: {fontFamily: "impact, charcoal, arial black, sans-serif", fontSize: 14, fontColor: "#333333", verticalAlign: "top", margin: 5}, 
            Axis: {titleFontSize: 22, titleFontColor: "rgb(98,98,98)", titleFontFamily: u ? "monospace, sans-serif,arial black" : "arial", titleFontWeight: "bold", labelFontFamily: u ? "monospace, Courier New, Courier" : "arial", labelFontSize: 16,
                labelFontColor: "grey", labelFontWeight: "bold", tickColor: "grey", tickThickness: 2, gridThickness: 2, gridColor: "grey", lineColor: "grey", lineThickness: 0},
            Legend: {verticalAlign: "bottom", horizontalAlign: "center", fontFamily: u ? "monospace, sans-serif,arial black" : "arial"}, 
            DataSeries: {indexLabelFontColor: "grey", indexLabelFontFamily: u ? "Courier New, Courier, monospace" : "arial", indexLabelFontWeight: "bold", indexLabelFontSize: 18, indexLabelLineThickness: 1}},
        theme3: {Chart: {colorSet: "colorSet1"},
            Title: {fontFamily: u ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" :"calibri", fontSize: 32, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "top", margin: 5}, 
            Subtitle: {fontFamily: u ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri", fontSize: 16, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "top", margin: 5}, 
            Axis: {titleFontSize: 22, titleFontColor: "rgb(98,98,98)", titleFontFamily: u ? "Verdana, Geneva, Calibri, sans-serif" : "calibri", labelFontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri", labelFontSize: 18,
                labelFontColor: "grey", tickColor: "grey", tickThickness: 2, gridThickness: 2, gridColor: "grey", lineThickness: 2, lineColor: "grey"}, 
            Legend: {verticalAlign: "bottom", horizontalAlign: "center", fontFamily: u ? "monospace, sans-serif,arial black" : "calibri"}, 
            DataSeries: {bevelEnabled: !0, indexLabelFontColor: "grey", indexLabelFontFamily: u ? "Candara, Optima, Calibri, Verdana, Geneva, sans-serif" : "calibri", indexLabelFontSize: 18, indexLabelLineColor: "lightgrey", indexLabelLineThickness: 2}}}, 
    E = {numberDuration: 1, yearDuration: 314496E5,
        monthDuration: 2592E6, weekDuration: 6048E5, dayDuration: 864E5, hourDuration: 36E5, minuteDuration: 6E4, secondDuration: 1E3, millisecondDuration: 1, dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")}, Da = {}, Z = null, wa = function () {
        var a = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g, c = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), b = "Sun Mon Tue Wed Thu Fri Sat".split(" "), d = "January February March April May June July August September October November December".split(" "),
                e = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), f = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, g = /[^-+\dA-Z]/g;
        return function (h, q, k) {
            var n = k ? k.days : c, m = k ? k.months : d, l = k ? k.shortDays : b, p = k ? k.shortMonths : e;
            k = "";
            var r = !1;
            h = h && h.getTime ? h : h ? new Date(h) : new Date;
            if (isNaN(h))
                throw SyntaxError("invalid date");
            "UTC:" === q.slice(0, 4) && (q = q.slice(4), r = !0);
            k = r ? "getUTC" : "get";
            var t = h[k + "Date"](), y = h[k + "Day"](),
                    s = h[k + "Month"](), z = h[k + "FullYear"](), w = h[k + "Hours"](), u = h[k + "Minutes"](), W = h[k + "Seconds"](), x = h[k + "Milliseconds"](), v = r ? 0 : h.getTimezoneOffset();
            return k = q.replace(a, function (a) {
                switch (a) {
                    case "D":
                        return t;
                    case "DD":
                        return Q(t, 2);
                    case "DDD":
                        return l[y];
                    case "DDDD":
                        return n[y];
                    case "M":
                        return s + 1;
                    case "MM":
                        return Q(s + 1, 2);
                    case "MMM":
                        return p[s];
                    case "MMMM":
                        return m[s];
                    case "Y":
                        return parseInt(String(z).slice(-2));
                    case "YY":
                        return Q(String(z).slice(-2), 2);
                    case "YYY":
                        return Q(String(z).slice(-3), 3);
                    case "YYYY":
                        return Q(z,
                                4);
                    case "h":
                        return w % 12 || 12;
                    case "hh":
                        return Q(w % 12 || 12, 2);
                    case "H":
                        return w;
                    case "HH":
                        return Q(w, 2);
                    case "m":
                        return u;
                    case "mm":
                        return Q(u, 2);
                    case "s":
                        return W;
                    case "ss":
                        return Q(W, 2);
                    case "f":
                        return String(x).slice(0, 1);
                    case "ff":
                        return Q(String(x).slice(0, 2), 2);
                    case "fff":
                        return Q(String(x).slice(0, 3), 3);
                    case "t":
                        return 12 > w ? "a" : "p";
                    case "tt":
                        return 12 > w ? "am" : "pm";
                    case "T":
                        return 12 > w ? "A" : "P";
                    case "TT":
                        return 12 > w ? "AM" : "PM";
                    case "K":
                        return r ? "UTC" : (String(h).match(f) || [""]).pop().replace(g, "");
                    case "z":
                        return(0 < v ? "-" : "+") + Math.floor(Math.abs(v) / 60);
                    case "zz":
                        return(0 < v ? "-" : "+") + Q(Math.floor(Math.abs(v) / 60), 2);
                    case "zzz":
                        return(0 < v ? "-" : "+") + Q(Math.floor(Math.abs(v) / 60), 2) + Q(Math.abs(v) % 60, 2);
                    default:
                        return a.slice(1, a.length - 1)
                    }
            })
        }
    }(), ba = function (a, c, b) {
        if (null === a)
            return"";
        a = Number(a);
        var d = 0 > a ? !0 : !1;
        d && (a *= -1);
        var e = b ? b.decimalSeparator : ".", f = b ? b.digitGroupSeparator : ",", g = "";
        c = String(c);
        var g = 1, h = b = "", q = -1, k = [], n = [], m = 0, l = 0, p = 0, r = !1, t = 0, h = c.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
        c = null;
        for (var y = 0; h && y < h.length; y++)
            if (c = h[y], "." === c && 0 > q)
                q = y;
            else {
                if ("%" === c)
                    g *= 100;
                else if ("\u2030" === c) {
                    g *= 1E3;
                    continue
                } else if ("," === c[0] && "." === c[c.length - 1]) {
                    g /= Math.pow(1E3, c.length - 1);
                    q = y + c.length - 1;
                    continue
                } else
                    "E" !== c[0] && "e" !== c[0] || "0" !== c[c.length - 1] || (r = !0);
                0 > q ? (k.push(c), "#" === c || "0" === c ? m++ : "," === c && p++) : (n.push(c), "#" !== c && "0" !== c || l++)
            }
        r && (c = Math.floor(a), t = (0 === c ? "" : String(c)).length - m, g /= Math.pow(10, t));
        0 > q && (q = y);
        g = (a * g).toFixed(l);
        c = g.split(".");
        g = (c[0] + "").split("");
        a = (c[1] +
                "").split("");
        g && "0" === g[0] && g.shift();
        for (y = r = h = l = q = 0; 0 < k.length; )
            if (c = k.pop(), "#" === c || "0" === c)
                if (q++, q === m) {
                    var s = g, g = [];
                    if ("0" === c)
                        for (c = m - l - (s?s.length:0); 0 < c; )
                            s.unshift("0"), c--;
                    for (; 0 < s.length; )
                        b = s.pop() + b, y++, 0 === y % r && (h === p && 0 < s.length) && (b = f + b);
                    d && (b = "-" + b)
                } else
                    0 < g.length ? (b = g.pop() + b, l++, y++) : "0" === c && (b = "0" + b, l++, y++), 0 === y % r && (h === p && 0 < g.length) && (b = f + b);
            else
                "E" !== c[0] && "e" !== c[0] || "0" !== c[c.length - 1] || !/[eE][+-]*[0]+/.test(c) ? "," === c ? (h++, r = y, y = 0, 0 < g.length && (b = f + b)) : b = 1 < c.length &&
                        ('"' === c[0] && '"' === c[c.length - 1] || "'" === c[0] && "'" === c[c.length - 1]) ? c.slice(1, c.length - 1) + b : c + b : (c = 0 > t ? c.replace("+", "").replace("-", "") : c.replace("-", ""), b += c.replace(/[0]+/, function (a) {
                    return Q(t, a.length)
                }));
        d = "";
        for (f = !1; 0 < n.length; )
            c = n.shift(), "#" === c || "0" === c ? 0 < a.length && 0 !== Number(a.join("")) ? (d += a.shift(), f = !0) : "0" === c && (d += "0", f = !0) : 1 < c.length && ('"' === c[0] && '"' === c[c.length - 1] || "'" === c[0] && "'" === c[c.length - 1]) ? d += c.slice(1, c.length - 1) : "E" !== c[0] && "e" !== c[0] || "0" !== c[c.length - 1] || !/[eE][+-]*[0]+/.test(c) ?
                    d += c : (c = 0 > t ? c.replace("+", "").replace("-", "") : c.replace("-", ""), d += c.replace(/[0]+/, function (a) {
                        return Q(t, a.length)
                    }));
        return b + ((f ? e : "") + d)
    }, ra = function (a) {
        var c = 0, b = 0;
        a = a || window.event;
        a.offsetX || 0 === a.offsetX ? (c = a.offsetX, b = a.offsetY) : a.layerX || 0 == a.layerX ? (c = a.layerX, b = a.layerY) : (c = a.pageX - a.target.offsetLeft, b = a.pageY - a.target.offsetTop);
        return{x: c, y: b}
    }, Fa = !0, ta = window.devicePixelRatio || 1, ka = 1, N = Fa ? ta / ka : 1, Ma = {reset: {image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII="},
        pan: {image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII="},
        zoom: {image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII="},
        menu: {image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC"}};
    L.prototype.setOptions = function (a, c) {
        if (qa[this._defaultsKey]) {
            var b = qa[this._defaultsKey], d;
            for (d in b)
                b.hasOwnProperty(d) && (this[d] = a && d in a ? a[d] : c && d in
                        c ? c[d] : b[d])
        }
    };
    L.prototype.updateOption = function (a) {
        var c = qa[this._defaultsKey], b = this._options.theme ? this._options.theme : this.chart && this.chart._options.theme ? this.chart._options.theme : "theme1", d = {}, e = this[a];
        b && (ca[b] && ca[b][this._defaultsKey]) && (d = ca[b][this._defaultsKey]);
        a in c && (e = a in this._options ? this._options[a] : d && a in d ? d[a] : c[a]);
        if (e === this[a])
            return!1;
        this[a] = e;
        return!0
    };
    L.prototype.trackChanges = function (a) {
        if (!this.sessionVariables)
            throw"Session Variable Store not set";
        this.sessionVariables[a] =
                this._options[a]
    };
    L.prototype.isBeingTracked = function (a) {
        this._options._oldOptions || (this._options._oldOptions = {});
        return this._options._oldOptions[a] ? !0 : !1
    };
    L.prototype.hasOptionChanged = function (a) {
        if (!this.sessionVariables)
            throw"Session Variable Store not set";
        return this.sessionVariables[a] !== this._options[a]
    };
    L.prototype.addEventListener = function (a, c, b) {
        a && c && (this._eventListeners[a] = this._eventListeners[a] || [], this._eventListeners[a].push({context: b || this, eventHandler: c}))
    };
    L.prototype.removeEventListener =
            function (a, c) {
                if (a && c && this._eventListeners[a])
                    for (var b = this._eventListeners[a], d = 0; d < b.length; d++)
                        if (b[d].eventHandler === c) {
                            b[d].splice(d, 1);
                            break
                        }
            };
    L.prototype.removeAllEventListeners = function () {
        this._eventListeners = []
    };
    L.prototype.dispatchEvent = function (a, c, b) {
        if (a && this._eventListeners[a]) {
            c = c || {};
            for (var d = this._eventListeners[a], e = 0; e < d.length; e++)
                d[e].eventHandler.call(d[e].context, c)
        }
        "function" === typeof this[a] && this[a].call(b || this.chart._publicChartReference, c)
    };
    T(v, L);
    v.prototype._updateOptions =
            function () {
                var a = this;
                this.updateOption("width");
                this.updateOption("height");
                this.updateOption("dataPointWidth");
                this.updateOption("dataPointMinWidth");
                this.updateOption("dataPointMaxWidth");
                this.updateOption("interactivityEnabled");
                this.updateOption("theme");
                this.updateOption("colorSet") && (this._selectedColorSet = "undefined" !== typeof aa[this.colorSet] ? aa[this.colorSet] : aa.colorSet1);
                this.updateOption("backgroundColor");
                this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
                this.updateOption("culture");
                this._cultureInfo = new ha(this._options.culture);
                this.updateOption("animationEnabled");
                this.animationEnabled = this.animationEnabled && u;
                this.updateOption("animationDuration");
                this.updateOption("rangeChanging");
                this.updateOption("rangeChanged");
                this.updateOption("exportEnabled");
                this.updateOption("exportFileName");
                this.updateOption("zoomType");
                this._options.zoomEnabled ? (this._zoomButton || (X(this._zoomButton = document.createElement("button")), U(this, this._zoomButton, "pan"), this._toolBar.appendChild(this._zoomButton),
                        J(this._zoomButton, "click", function () {
                            a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, U(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, U(a, a._zoomButton, "pan"));
                            a.render()
                        })), this._resetButton || (X(this._resetButton = document.createElement("button")), U(this, this._resetButton, "reset"), this._toolBar.appendChild(this._resetButton), J(this._resetButton, "click", function () {
                    a._toolTip.hide();
                    a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, U(a, a._zoomButton, "pan"), a._defaultCursor =
                            "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, a.panEnabled = !1);
                    a.sessionVariables.axisX && (a.sessionVariables.axisX.newViewportMinimum = null, a.sessionVariables.axisX.newViewportMaximum = null);
                    a.sessionVariables.axisY && (a.sessionVariables.axisY.newViewportMinimum = null, a.sessionVariables.axisY.newViewportMaximum = null);
                    a.sessionVariables.axisY2 && (a.sessionVariables.axisY2.newViewportMinimum = null, a.sessionVariables.axisY2.newViewportMaximum = null);
                    a.resetOverlayedCanvas();
                    X(a._zoomButton,
                            a._resetButton);
                    a._dispatchRangeEvent("rangeChanging", "reset");
                    a.render();
                    a._dispatchRangeEvent("rangeChanged", "reset")
                }), this.overlaidCanvas.style.cursor = a._defaultCursor), this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), la(a._zoomButton, a._resetButton)) : (this.zoomEnabled = !0, this.panEnabled = !1))) : this.panEnabled = this.zoomEnabled = !1;
                this._menuButton ?
                        this.exportEnabled ? la(this._menuButton) : X(this._menuButton) : this.exportEnabled && u && (this._menuButton = document.createElement("button"), U(this, this._menuButton, "menu"), this._toolBar.appendChild(this._menuButton), J(this._menuButton, "click", function () {
                    "none" !== a._dropdownMenu.style.display || a._dropDownCloseTime && 500 >= (new Date).getTime() - a._dropDownCloseTime.getTime() || (a._dropdownMenu.style.display = "block", a._menuButton.blur(), a._dropdownMenu.focus())
                }, !0));
                if (!this._dropdownMenu && this.exportEnabled &&
                        u) {
                    this._dropdownMenu = document.createElement("div");
                    this._dropdownMenu.setAttribute("tabindex", -1);
                    this._dropdownMenu.style.cssText = "position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #fff;line-height: 20px;box-shadow: 2px 2px 10px #888888;";
                    a._dropdownMenu.style.display = "none";
                    this._toolBar.appendChild(this._dropdownMenu);
                    J(this._dropdownMenu, "blur", function () {
                        X(a._dropdownMenu);
                        a._dropDownCloseTime = new Date
                    }, !0);
                    var c = document.createElement("div");
                    c.style.cssText = "padding: 2px 15px 2px 10px";
                    c.innerHTML = this._cultureInfo.saveJPGText;
                    this._dropdownMenu.appendChild(c);
                    J(c, "mouseover", function () {
                        this.style.backgroundColor = "#EEEEEE"
                    }, !0);
                    J(c, "mouseout", function () {
                        this.style.backgroundColor = "transparent"
                    }, !0);
                    J(c, "click", function () {
                        Ga(a.canvas,
                                "jpeg", a.exportFileName);
                        X(a._dropdownMenu)
                    }, !0);
                    c = document.createElement("div");
                    c.style.cssText = "padding: 2px 15px 2px 10px";
                    c.innerHTML = this._cultureInfo.savePNGText;
                    this._dropdownMenu.appendChild(c);
                    J(c, "mouseover", function () {
                        this.style.backgroundColor = "#EEEEEE"
                    }, !0);
                    J(c, "mouseout", function () {
                        this.style.backgroundColor = "transparent"
                    }, !0);
                    J(c, "click", function () {
                        Ga(a.canvas, "png", a.exportFileName);
                        X(a._dropdownMenu)
                    }, !0)
                }
                "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? U(a,
                        a._zoomButton, "zoom") : U(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && U(a, a._resetButton, "reset"));
                if ("undefined" === typeof qa.Chart.creditHref)
                    this.creditHref = "http://canvasjs.com/", this.creditText = "CanvasJS.com";
                else
                    var b = this.updateOption("creditText"), d = this.updateOption("creditHref");
                if (0 === this.renderCount || b || d)
                    this._creditLink.setAttribute("href", this.creditHref), this._creditLink.innerHTML = this.creditText;
                this.creditHref && this.creditText ? this._creditLink.parentElement ||
                        this._canvasJSContainer.appendChild(this._creditLink) : this._creditLink.parentElement && this._canvasJSContainer.removeChild(this._creditLink);
                this._options.toolTip && this._toolTip._options !== this._options.toolTip && (this._toolTip._options = this._options.toolTip);
                for (var e in this._toolTip._options)
                    this._toolTip._options.hasOwnProperty(e) && this._toolTip.updateOption(e)
            };
    v.prototype._updateSize = function () {
        var a = 0, c = 0;
        this._options.width ? a = this.width : this.width = a = 0 < this._container.clientWidth ? this._container.clientWidth :
                this.width;
        this._options.height ? c = this.height : this.height = c = 0 < this._container.clientHeight ? this._container.clientHeight : this.height;
        return this.canvas.width !== a * N || this.canvas.height !== c * N ? (ja(this.canvas, a, c), ja(this.overlaidCanvas, a, c), ja(this._eventManager.ghostCanvas, a, c), !0) : !1
    };
    v.prototype._initialize = function () {
        this._animator ? this._animator.cancelAllAnimations() : this._animator = new va(this);
        this.removeAllEventListeners();
        this.disableToolTip = !1;
        this._axes = [];
        this.pieDoughnutClickHandler = null;
        this.animationRequestId && this.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this._updateOptions();
        this.animatedRender = u && this.animationEnabled && 0 === this.renderCount;
        this._updateSize();
        this.clearCanvas();
        this.ctx.beginPath();
        this.axisY2 = this.axisY = this.axisX = null;
        this._indexLabels = [];
        this._dataInRenderedOrder = [];
        this._events = [];
        this._eventManager && this._eventManager.reset();
        this.plotInfo = {axisPlacement: null, axisXValueType: null, plotTypes: []};
        this.layoutManager = new da(0, 0, this.width, this.height,
                2);
        this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
        this.data = [];
        var a = 0;
        if (this._options.data)
            for (var c = 0; c < this._options.data.length; c++)
                if (a++, !this._options.data[c].type || 0 <= v._supportedChartTypes.indexOf(this._options.data[c].type)) {
                    var b = new Y(this, this._options.data[c], this.theme, a - 1, ++this._eventManager.lastObjectId);
                    null === b.name && (b.name = "DataSeries " + a);
                    null === b.color ? 1 < this._options.data.length ? (b._colorSet = [this._selectedColorSet[b.index % this._selectedColorSet.length]],
                            b.color = this._selectedColorSet[b.index % this._selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type ? [this._selectedColorSet[0]] : this._selectedColorSet : b._colorSet = [b.color];
                    null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) &&
                            b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
                    "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function (a) {
                        return a.x
                    }) && b.dataPoints.sort(Ba) : b.dataPoints.sort(Ba));
                    this.data.push(b);
                    var d = b.axisPlacement, e;
                    "normal" === d ? "xySwapped" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement &&
                            (this.plotInfo.axisPlacement = "normal") : "xySwapped" === d ? "normal" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" == d && ("normal" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? e =
                            'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none"));
                    if (e && window.console) {
                        window.console.log(e);
                        return
                    }
                }
        this._objectsInitialized = !0
    };
    v._supportedChartTypes = function (a) {
        a.indexOf || (a.indexOf = La);
        return a
    }("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc rangeColumn rangeBar rangeArea rangeSplineArea pie doughnut funnel".split(" "));
    v.prototype.render = function (a) {
        a && (this._options = a);
        this._initialize();
        var c = [];
        for (a = 0; a < this.data.length; a++)
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement)
                this.data[a].axisYType && "primary" !== this.data[a].axisYType ? "secondary" === this.data[a].axisYType && (this.axisY2 || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2 = new F(this, this._options.axisY2, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2 = new F(this,
                        this._options.axisY2, "axisY", "top"))), this.data[a].axisY = this.axisY2) : (this.axisY || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY = new F(this, this._options.axisY, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY = new F(this, this._options.axisY, "axisY", "bottom"))), this.data[a].axisY = this.axisY), this.axisX || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX = new F(this, this._options.axisX, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement &&
                        this._axes.push(this.axisX = new F(this, this._options.axisX, "axisX", "left"))), this.data[a].axisX = this.axisX;
        this.axisY && this.axisY2 && (0 < this.axisY.gridThickness && "undefined" === typeof this.axisY2._options.gridThickness ? this.axisY2.gridThickness = 0 : 0 < this.axisY2.gridThickness && "undefined" === typeof this.axisY._options.gridThickness && (this.axisY.gridThickness = 0));
        var b = !1;
        if (0 < this._axes.length && (this.zoomEnabled || this.panEnabled))
            for (a = 0; a < this._axes.length; a++)
                if (null !== this._axes[a].viewportMinimum ||
                        null !== this._axes[a].viewportMaximum) {
                    b = !0;
                    break
                }
        b ? la(this._zoomButton, this._resetButton) : (X(this._zoomButton, this._resetButton), this._options.zoomEnabled && (this.zoomEnabled = !0, this.panEnabled = !1));
        this._processData();
        this._options.title && (this._title = new ga(this, this._options.title), this._title.dockInsidePlotArea ? c.push(this._title) : this._title.render());
        if (this._options.subtitles)
            for (a = 0; a < this._options.subtitles.length; a++)
                this.subtitles = [], b = new na(this, this._options.subtitles[a]), this.subtitles.push(b),
                        b.dockInsidePlotArea ? c.push(b) : b.render();
        this.legend = new oa(this, this._options.legend, this.theme);
        for (a = 0; a < this.data.length; a++)
            (this.data[a].showInLegend || "pie" === this.data[a].type || "doughnut" === this.data[a].type) && this.legend.dataSeries.push(this.data[a]);
        this.legend.dockInsidePlotArea ? c.push(this.legend) : this.legend.render();
        if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement)
            F.setLayoutAndRender(this.axisX, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        else if ("none" === this.plotInfo.axisPlacement)
            this.preparePlotArea();
        else
            return;
        for (a = 0; a < c.length; a++)
            c[a].render();
        var d = [];
        if (this.animatedRender) {
            var e = $(this.width, this.height);
            e.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
        }
        for (a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (c = this.plotInfo.plotTypes[a], b = 0; b < c.plotUnits.length; b++) {
                var f = c.plotUnits[b], g = null;
                f.targetCanvas = null;
                this.animatedRender && (f.targetCanvas = $(this.width, this.height), f.targetCanvasCtx = f.targetCanvas.getContext("2d"));
                "line" === f.type ? g = this.renderLine(f) : "stepLine" === f.type ? g = this.renderStepLine(f) : "spline" === f.type ? g = this.renderSpline(f) : "column" === f.type ? g = this.renderColumn(f) : "bar" === f.type ? g = this.renderBar(f) : "area" === f.type ? g = this.renderArea(f) : "stepArea" === f.type ? g = this.renderStepArea(f) : "splineArea" === f.type ? g = this.renderSplineArea(f) : "stackedColumn" === f.type ? g = this.renderStackedColumn(f) : "stackedColumn100" === f.type ? g = this.renderStackedColumn100(f) : "stackedBar" === f.type ? g = this.renderStackedBar(f) : "stackedBar100" ===
                        f.type ? g = this.renderStackedBar100(f) : "stackedArea" === f.type ? g = this.renderStackedArea(f) : "stackedArea100" === f.type ? g = this.renderStackedArea100(f) : "bubble" === f.type ? g = g = this.renderBubble(f) : "scatter" === f.type ? g = this.renderScatter(f) : "pie" === f.type ? this.renderPie(f) : "doughnut" === f.type ? this.renderPie(f) : "candlestick" === f.type ? g = this.renderCandlestick(f) : "ohlc" === f.type ? g = this.renderCandlestick(f) : "rangeColumn" === f.type ? g = this.renderRangeColumn(f) : "rangeBar" === f.type ? g = this.renderRangeBar(f) : "rangeArea" ===
                        f.type ? g = this.renderRangeArea(f) : "rangeSplineArea" === f.type && (g = this.renderRangeSplineArea(f));
                for (var h = 0; h < f.dataSeriesIndexes.length; h++)
                    this._dataInRenderedOrder.push(this.data[f.dataSeriesIndexes[h]]);
                this.animatedRender && g && d.push(g)
            }
        this.animatedRender && 0 < this._indexLabels.length && (a = $(this.width, this.height).getContext("2d"), d.push(this.renderIndexLabels(a)));
        var q = this;
        0 < d.length ? (q.disableToolTip = !0, q._animator.animate(200, q.animationDuration, function (a) {
            q.ctx.clearRect(0, 0, q.width, q.height);
            q.ctx.drawImage(e, 0, 0, Math.floor(q.width * N), Math.floor(q.height * N), 0, 0, q.width, q.height);
            for (var b = 0; b < d.length; b++)
                g = d[b], 1 > a && "undefined" !== typeof g.startTimePercent ? a >= g.startTimePercent && g.animationCallback(g.easingFunction(a - g.startTimePercent, 0, 1, 1 - g.startTimePercent), g) : g.animationCallback(g.easingFunction(a, 0, 1, 1), g);
            q.dispatchEvent("dataAnimationIterationEnd", {chart: q})
        }, function () {
            d = [];
            for (var a = 0; a < q.plotInfo.plotTypes.length; a++)
                for (var b = q.plotInfo.plotTypes[a], c = 0; c < b.plotUnits.length; c++)
                    b.plotUnits[c].targetCanvas =
                            null;
            e = null;
            q.disableToolTip = !1
        })) : (0 < q._indexLabels.length && q.renderIndexLabels(), q.dispatchEvent("dataAnimationIterationEnd", {chart: q}));
        this.attachPlotAreaEventHandlers();
        this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || X(this._zoomButton, this._resetButton);
        this._toolTip._updateToolTip();
        this.renderCount++
    };
    v.prototype.attachPlotAreaEventHandlers = function () {
        this.attachEvent({context: this, chart: this, mousedown: this._plotAreaMouseDown, mouseup: this._plotAreaMouseUp,
            mousemove: this._plotAreaMouseMove, cursor: this.zoomEnabled ? "col-resize" : "move", cursor:this.panEnabled ? "move" : "default", capture: !0, bounds: this.plotArea})
    };
    v.prototype.categoriseDataSeries = function () {
        for (var a = "", c = 0; c < this.data.length; c++)
            if (a = this.data[c], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= v._supportedChartTypes.indexOf(a.type)) {
                for (var b = null, d = !1, e = null, f = !1, g = 0; g < this.plotInfo.plotTypes.length; g++)
                    if (this.plotInfo.plotTypes[g].type === a.type) {
                        d = !0;
                        b = this.plotInfo.plotTypes[g];
                        break
                    }
                d || (b = {type: a.type, totalDataSeries: 0, plotUnits: []}, this.plotInfo.plotTypes.push(b));
                for (g = 0; g < b.plotUnits.length; g++)
                    if (b.plotUnits[g].axisYType === a.axisYType) {
                        f = !0;
                        e = b.plotUnits[g];
                        break
                    }
                f || (e = {type: a.type, previousDataSeriesCount: 0, index: b.plotUnits.length, plotType: b, axisYType: a.axisYType, axisY: "primary" === a.axisYType ? this.axisY : this.axisY2, axisX: this.axisX, dataSeriesIndexes: [], yTotals: []}, b.plotUnits.push(e));
                b.totalDataSeries++;
                e.dataSeriesIndexes.push(c);
                a.plotUnit = e
            }
        for (c = 0; c < this.plotInfo.plotTypes.length; c++)
            for (b =
                    this.plotInfo.plotTypes[c], g = a = 0; g < b.plotUnits.length; g++)
                b.plotUnits[g].previousDataSeriesCount = a, a += b.plotUnits[g].dataSeriesIndexes.length
    };
    v.prototype.assignIdToDataPoints = function () {
        for (var a = 0; a < this.data.length; a++) {
            var c = this.data[a];
            if (c.dataPoints)
                for (var b = c.dataPoints.length, d = 0; d < b; d++)
                    c.dataPointIds[d] = ++this._eventManager.lastObjectId
        }
    };
    v.prototype._processData = function () {
        this.assignIdToDataPoints();
        this.categoriseDataSeries();
        for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (var c =
                    this.plotInfo.plotTypes[a], b = 0; b < c.plotUnits.length; b++) {
                var d = c.plotUnits[b];
                "line" === d.type || "stepLine" === d.type || "spline" === d.type || "column" === d.type || "area" === d.type || "stepArea" === d.type || "splineArea" === d.type || "bar" === d.type || "bubble" === d.type || "scatter" === d.type ? this._processMultiseriesPlotUnit(d) : "stackedColumn" === d.type || "stackedBar" === d.type || "stackedArea" === d.type ? this._processStackedPlotUnit(d) : "stackedColumn100" === d.type || "stackedBar100" === d.type || "stackedArea100" === d.type ? this._processStacked100PlotUnit(d) :
                        "candlestick" !== d.type && "ohlc" !== d.type && "rangeColumn" !== d.type && "rangeBar" !== d.type && "rangeArea" !== d.type && "rangeSplineArea" !== d.type || this._processMultiYPlotUnit(d)
            }
    };
    v.prototype._processMultiseriesPlotUnit = function (a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var c = a.axisY.dataInfo, b = a.axisX.dataInfo, d, e, f = !1, g = 0; g < a.dataSeriesIndexes.length; g++) {
                var h = this.data[a.dataSeriesIndexes[g]], q = 0, k = !1, n = !1, m;
                if ("normal" === h.axisPlacement || "xySwapped" === h.axisPlacement)
                    var l = this.sessionVariables.axisX.newViewportMinimum ?
                            this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ? this._options.axisX.viewportMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity, p = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this._options.axisX && this._options.axisX.viewportMaximum ? this._options.axisX.viewportMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (h.dataPoints[q].x && h.dataPoints[q].x.getTime || "dateTime" === h.xValueType)
                    f = !0;
                for (q = 0; q < h.dataPoints.length; q++) {
                    "undefined" === typeof h.dataPoints[q].x && (h.dataPoints[q].x = q);
                    h.dataPoints[q].x.getTime ? (f = !0, d = h.dataPoints[q].x.getTime()) : d = h.dataPoints[q].x;
                    e = h.dataPoints[q].y;
                    d < b.min && (b.min = d);
                    d > b.max && (b.max = d);
                    e < c.min && (c.min = e);
                    e > c.max && (c.max = e);
                    if (0 < q) {
                        var r = d - h.dataPoints[q - 1].x;
                        0 > r && (r *= -1);
                        b.minDiff > r && 0 !== r && (b.minDiff = r);
                        null !== e && null !== h.dataPoints[q - 1].y && (r = e - h.dataPoints[q - 1].y,
                                0 > r && (r *= -1), c.minDiff > r && 0 !== r && (c.minDiff = r))
                    }
                    if (d < l && !k)
                        null !== e && (m = d);
                    else {
                        if (!k && (k = !0, 0 < q)) {
                            q -= 2;
                            continue
                        }
                        if (d > p && !n)
                            n = !0;
                        else if (d > p && n)
                            continue;
                        h.dataPoints[q].label && (a.axisX.labels[d] = h.dataPoints[q].label);
                        d < b.viewPortMin && (b.viewPortMin = d);
                        d > b.viewPortMax && (b.viewPortMax = d);
                        null === e ? b.viewPortMin === d && m < d && (b.viewPortMin = m) : (e < c.viewPortMin && (c.viewPortMin = e), e > c.viewPortMax && (c.viewPortMax = e))
                    }
                }
                this.plotInfo.axisXValueType = h.xValueType = f ? "dateTime" : "number"
            }
    };
    v.prototype._processStackedPlotUnit =
            function (a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                    for (var c = a.axisY.dataInfo, b = a.axisX.dataInfo, d, e, f = !1, g = [], h = [], q = Infinity, k = 0; k < a.dataSeriesIndexes.length; k++) {
                        var n = this.data[a.dataSeriesIndexes[k]], m = 0, l = !1, p = !1, r;
                        if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement)
                            var t = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ? this._options.axisX.viewportMinimum : this._options.axisX &&
                                    this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity, y = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this._options.axisX && this._options.axisX.viewportMaximum ? this._options.axisX.viewportMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                        if (n.dataPoints[m].x && n.dataPoints[m].x.getTime || "dateTime" === n.xValueType)
                            f = !0;
                        for (m = 0; m < n.dataPoints.length; m++) {
                            "undefined" === typeof n.dataPoints[m].x && (n.dataPoints[m].x =
                                    m);
                            n.dataPoints[m].x.getTime ? (f = !0, d = n.dataPoints[m].x.getTime()) : d = n.dataPoints[m].x;
                            x(n.dataPoints[m].y) ? e = 0 : (e = n.dataPoints[m].y, 0 === k && (q = Math.min(e, q)));
                            d < b.min && (b.min = d);
                            d > b.max && (b.max = d);
                            if (0 < m) {
                                var s = d - n.dataPoints[m - 1].x;
                                0 > s && (s *= -1);
                                b.minDiff > s && 0 !== s && (b.minDiff = s);
                                null !== e && null !== n.dataPoints[m - 1].y && (s = e - n.dataPoints[m - 1].y, 0 > s && (s *= -1), c.minDiff > s && 0 !== s && (c.minDiff = s))
                            }
                            if (d < t && !l)
                                null !== n.dataPoints[m].y && (r = d);
                            else {
                                if (!l && (l = !0, 0 < m)) {
                                    m -= 2;
                                    continue
                                }
                                if (d > y && !p)
                                    p = !0;
                                else if (d > y && p)
                                    continue;
                                n.dataPoints[m].label && (a.axisX.labels[d] = n.dataPoints[m].label);
                                d < b.viewPortMin && (b.viewPortMin = d);
                                d > b.viewPortMax && (b.viewPortMax = d);
                                null === n.dataPoints[m].y ? b.viewPortMin === d && r < d && (b.viewPortMin = r) : (a.yTotals[d] = (a.yTotals[d] ? a.yTotals[d] : 0) + Math.abs(e), 0 <= e ? g[d] = g[d] ? g[d] + e : e : h[d] = h[d] ? h[d] + e : e)
                            }
                        }
                        this.plotInfo.axisXValueType = n.xValueType = f ? "dateTime" : "number"
                    }
                    for (m in g)
                        g.hasOwnProperty(m) && !isNaN(m) && (a = g[m], a < c.min && (c.min = Math.min(a, q)), a > c.max && (c.max = a), m < b.viewPortMin || m > b.viewPortMax ||
                                (a < c.viewPortMin && (c.viewPortMin = Math.min(a, q)), a > c.viewPortMax && (c.viewPortMax = a)));
                    for (m in h)
                        h.hasOwnProperty(m) && !isNaN(m) && (a = h[m], a < c.min && (c.min = Math.min(a, q)), a > c.max && (c.max = a), m < b.viewPortMin || m > b.viewPortMax || (a < c.viewPortMin && (c.viewPortMin = Math.min(a, q)), a > c.viewPortMax && (c.viewPortMax = a)))
                }
            };
    v.prototype._processStacked100PlotUnit = function (a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var c = a.axisY.dataInfo, b = a.axisX.dataInfo, d, e, f = !1, g = !1, h = !1, q = [], k = 0; k < a.dataSeriesIndexes.length; k++) {
                var n =
                        this.data[a.dataSeriesIndexes[k]], m = 0, l = !1, p = !1, r;
                if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement)
                    var t = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ? this._options.axisX.viewportMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity, y = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this._options.axisX &&
                        this._options.axisX.viewportMaximum ? this._options.axisX.viewportMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (n.dataPoints[m].x && n.dataPoints[m].x.getTime || "dateTime" === n.xValueType)
                    f = !0;
                for (m = 0; m < n.dataPoints.length; m++) {
                    "undefined" === typeof n.dataPoints[m].x && (n.dataPoints[m].x = m);
                    n.dataPoints[m].x.getTime ? (f = !0, d = n.dataPoints[m].x.getTime()) : d = n.dataPoints[m].x;
                    e = x(n.dataPoints[m].y) ? null : n.dataPoints[m].y;
                    d < b.min && (b.min = d);
                    d > b.max && (b.max = d);
                    if (0 < m) {
                        var s = d - n.dataPoints[m - 1].x;
                        0 > s && (s *= -1);
                        b.minDiff > s && 0 !== s && (b.minDiff = s);
                        x(e) || null === n.dataPoints[m - 1].y || (s = e - n.dataPoints[m - 1].y, 0 > s && (s *= -1), c.minDiff > s && 0 !== s && (c.minDiff = s))
                    }
                    if (d < t && !l)
                        null !== e && (r = d);
                    else {
                        if (!l && (l = !0, 0 < m)) {
                            m -= 2;
                            continue
                        }
                        if (d > y && !p)
                            p = !0;
                        else if (d > y && p)
                            continue;
                        n.dataPoints[m].label && (a.axisX.labels[d] = n.dataPoints[m].label);
                        d < b.viewPortMin && (b.viewPortMin = d);
                        d > b.viewPortMax && (b.viewPortMax = d);
                        null === e ? b.viewPortMin === d && r < d && (b.viewPortMin = r) : (a.yTotals[d] = (a.yTotals[d] ?
                                a.yTotals[d] : 0) + Math.abs(e), 0 <= e ? g = !0 : 0 > e && (h = !0), q[d] = q[d] ? q[d] + Math.abs(e) : Math.abs(e))
                    }
                }
                this.plotInfo.axisXValueType = n.xValueType = f ? "dateTime" : "number"
            }
            g && !h ? (c.max = x(c.viewPortMax) ? 99 : Math.max(c.viewPortMax, 99), c.min = x(c.viewPortMin) ? 1 : Math.min(c.viewPortMin, 1)) : g && h ? (c.max = x(c.viewPortMax) ? 99 : Math.max(c.viewPortMax, 99), c.min = x(c.viewPortMin) ? -99 : Math.min(c.viewPortMin, -99)) : !g && h && (c.max = x(c.viewPortMax) ? -1 : Math.max(c.viewPortMax, -1), c.min = x(c.viewPortMin) ? -99 : Math.min(c.viewPortMin, -99));
            c.viewPortMin =
                    c.min;
            c.viewPortMax = c.max;
            a.dataPointYSums = q
        }
    };
    v.prototype._processMultiYPlotUnit = function (a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var c = a.axisY.dataInfo, b = a.axisX.dataInfo, d, e, f, g, h = !1, q = 0; q < a.dataSeriesIndexes.length; q++) {
                var k = this.data[a.dataSeriesIndexes[q]], n = 0, m = !1, l = !1, p, r, t;
                if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement)
                    var y = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ?
                            this._options.axisX.viewportMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity, s = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this._options.axisX && this._options.axisX.viewportMaximum ? this._options.axisX.viewportMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (k.dataPoints[n].x && k.dataPoints[n].x.getTime || "dateTime" === k.xValueType)
                    h = !0;
                for (n = 0; n < k.dataPoints.length; n++) {
                    "undefined" ===
                            typeof k.dataPoints[n].x && (k.dataPoints[n].x = n);
                    k.dataPoints[n].x.getTime ? (h = !0, d = k.dataPoints[n].x.getTime()) : d = k.dataPoints[n].x;
                    if ((e = k.dataPoints[n].y) && e.length) {
                        f = Math.min.apply(null, e);
                        g = Math.max.apply(null, e);
                        r = !0;
                        for (var z = 0; z < e.length; z++)
                            null === e.k && (r = !1);
                        r && (m || (t = p), p = d)
                    }
                    d < b.min && (b.min = d);
                    d > b.max && (b.max = d);
                    f < c.min && (c.min = f);
                    g > c.max && (c.max = g);
                    0 < n && (r = d - k.dataPoints[n - 1].x, 0 > r && (r *= -1), b.minDiff > r && 0 !== r && (b.minDiff = r), e && (null !== e[0] && k.dataPoints[n - 1].y && null !== k.dataPoints[n - 1].y[0]) &&
                            (r = e[0] - k.dataPoints[n - 1].y[0], 0 > r && (r *= -1), c.minDiff > r && 0 !== r && (c.minDiff = r)));
                    if (!(d < y) || m) {
                        if (!m && (m = !0, 0 < n)) {
                            n -= 2;
                            p = t;
                            continue
                        }
                        if (d > s && !l)
                            l = !0;
                        else if (d > s && l)
                            continue;
                        k.dataPoints[n].label && (a.axisX.labels[d] = k.dataPoints[n].label);
                        d < b.viewPortMin && (b.viewPortMin = d);
                        d > b.viewPortMax && (b.viewPortMax = d);
                        if (b.viewPortMin === d && e)
                            for (z = 0; z < e.length; z++)
                                if (null === e[z] && p < d) {
                                    b.viewPortMin = p;
                                    break
                                }
                        null === e ? b.viewPortMin === d && p < d && (b.viewPortMin = p) : (f < c.viewPortMin && (c.viewPortMin = f), g > c.viewPortMax && (c.viewPortMax =
                                g))
                    }
                }
                this.plotInfo.axisXValueType = k.xValueType = h ? "dateTime" : "number"
            }
    };
    v.prototype.getDataPointAtXY = function (a, c, b) {
        b = b || !1;
        for (var d = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
            var f = null;
            (f = this._dataInRenderedOrder[e].getDataPointAtXY(a, c, b)) && d.push(f)
        }
        a = null;
        c = !1;
        for (b = 0; b < d.length; b++)
            if ("line" === d[b].dataSeries.type || "stepLine" === d[b].dataSeries.type || "area" === d[b].dataSeries.type || "stepArea" === d[b].dataSeries.type)
                if (e = R("markerSize", d[b].dataPoint, d[b].dataSeries) || 8, d[b].distance <=
                        e / 2) {
                    c = !0;
                    break
                }
        for (b = 0; b < d.length; b++)
            c && "line" !== d[b].dataSeries.type && "stepLine" !== d[b].dataSeries.type && "area" !== d[b].dataSeries.type && "stepArea" !== d[b].dataSeries.type || (a ? d[b].distance <= a.distance && (a = d[b]) : a = d[b]);
        return a
    };
    v.prototype.getObjectAtXY = function (a, c, b) {
        var d = null;
        if (b = this.getDataPointAtXY(a, c, b || !1))
            d = b.dataSeries.dataPointIds[b.dataPointIndex];
        else if (u)
            d = Ea(a, c, this._eventManager.ghostCtx);
        else
            for (b = 0; b < this.legend.items.length; b++) {
                var e = this.legend.items[b];
                a >= e.x1 && (a <=
                        e.x2 && c >= e.y1 && c <= e.y2) && (d = e.id)
            }
        return d
    };
    v.prototype.getAutoFontSize = function (a, c, b) {
        a /= 400;
        return Math.round(Math.min(this.width, this.height) * a)
    };
    v.prototype.resetOverlayedCanvas = function () {
        this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
    };
    v.prototype.clearCanvas = function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height))
    };
    v.prototype.attachEvent = function (a) {
        this._events.push(a)
    };
    v.prototype._touchEventHandler = function (a) {
        if (a.changedTouches && this.interactivityEnabled) {
            var c = [], b = a.changedTouches, d = b ? b[0] : a, e = null;
            switch (a.type) {
                case "touchstart":
                case "MSPointerDown":
                    c = ["mousemove", "mousedown"];
                    this._lastTouchData = ra(d);
                    this._lastTouchData.time = new Date;
                    break;
                case "touchmove":
                case "MSPointerMove":
                    c = ["mousemove"];
                    break;
                case "touchend":
                case "MSPointerUp":
                    c = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType ? ["mouseup", "click"] : ["mouseup"];
                    break;
                default:
                    return
            }
            if (!(b && 1 < b.length)) {
                e = ra(d);
                e.time = new Date;
                try {
                    var f = e.y - this._lastTouchData.y, g = e.time - this._lastTouchData.time;
                    if (15 < Math.abs(f) && (this._lastTouchData.scroll || 200 > g)) {
                        this._lastTouchData.scroll = !0;
                        var h = window.parent || window;
                        h && h.scrollBy && h.scrollBy(0, -f)
                    }
                } catch (q) {
                }
                this._lastTouchEventType = a.type;
                if (this._lastTouchData.scroll && this.zoomEnabled)
                    this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
                else
                    for (b = 0; b < c.length; b++)
                        e = c[b], f = document.createEvent("MouseEvent"), f.initMouseEvent(e,
                                !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), d.target.dispatchEvent(f), a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault()
            }
        }
    };
    v.prototype._dispatchRangeEvent = function (a, c) {
        var b = {};
        b.chart = this._publicChartReference;
        b.type = a;
        b.trigger = c;
        var d = [];
        this.axisX && d.push("axisX");
        this.axisY && d.push("axisY");
        this.axisY2 && d.push("axisY2");
        for (var e = 0; e < d.length; e++)
            b[d[e]] = {viewportMinimum: this[d[e]].sessionVariables.newViewportMinimum, viewportMaximum: this[d[e]].sessionVariables.newViewportMaximum};
        this.dispatchEvent(a, b, this._publicChartReference)
    };
    v.prototype._mouseEventHandler = function (a) {
        if (this.interactivityEnabled)
            if (this._ignoreNextEvent)
                this._ignoreNextEvent = !1;
            else {
                a.preventManipulation && a.preventManipulation();
                a.preventDefault && a.preventDefault();
                "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
                var c = ra(a), b = a.type, d, e;
                a.which ? e = 3 == a.which : a.button && (e = 2 == a.button);
                if (!e) {
                    if (v.capturedEventParam)
                        d = v.capturedEventParam, "mouseup" === b && (v.capturedEventParam = null, d.chart.overlaidCanvas.releaseCapture ?
                                d.chart.overlaidCanvas.releaseCapture() : document.body.removeEventListener("mouseup", d.chart._mouseEventHandler, !1)), d.hasOwnProperty(b) && d[b].call(d.context, c.x, c.y);
                    else if (this._events) {
                        for (e = 0; e < this._events.length; e++)
                            if (this._events[e].hasOwnProperty(b)) {
                                d = this._events[e];
                                var f = d.bounds;
                                if (c.x >= f.x1 && c.x <= f.x2 && c.y >= f.y1 && c.y <= f.y2) {
                                    d[b].call(d.context, c.x, c.y);
                                    "mousedown" === b && !0 === d.capture ? (v.capturedEventParam = d, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.body.addEventListener("mouseup",
                                            this._mouseEventHandler, !1)) : "mouseup" === b && (d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.body.removeEventListener("mouseup", this._mouseEventHandler, !1));
                                    break
                                } else
                                    d = null
                            }
                        a.target.style.cursor = d && d.cursor ? d.cursor : this._defaultCursor
                    }
                    this._toolTip && this._toolTip.enabled && (b = this.plotArea, (c.x < b.x1 || c.x > b.x2 || c.y < b.y1 || c.y > b.y2) && this._toolTip.hide());
                    this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
                }
            }
    };
    v.prototype._plotAreaMouseDown =
            function (a, c) {
                this.isDrag = !0;
                this.dragStartPoint = {x: a, y: c}
            };
    v.prototype._plotAreaMouseUp = function (a, c) {
        if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
            var b = c - this.dragStartPoint.y, d = a - this.dragStartPoint.x, e = 0 <= this.zoomType.indexOf("x"), f = 0 <= this.zoomType.indexOf("y"), g = !1;
            this.resetOverlayedCanvas();
            if ("xySwapped" === this.plotInfo.axisPlacement)
                var h = f, f = e, e = h;
            if (this.panEnabled || this.zoomEnabled) {
                if (this.panEnabled)
                    for (e = f = 0; e < this._axes.length; e++)
                        b =
                                this._axes[e], b.viewportMinimum < b.minimum ? (f = b.minimum - b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum + f, b.sessionVariables.newViewportMaximum = b.viewportMaximum + f, g = !0) : b.viewportMaximum > b.maximum && (f = b.viewportMaximum - b.maximum, b.sessionVariables.newViewportMinimum = b.viewportMinimum - f, b.sessionVariables.newViewportMaximum = b.viewportMaximum - f, g = !0);
                else if ((!e || 2 < Math.abs(d)) && (!f || 2 < Math.abs(b)) && this.zoomEnabled) {
                    if (!this.dragStartPoint)
                        return;
                    b = e ? this.dragStartPoint.x :
                            this.plotArea.x1;
                    d = f ? this.dragStartPoint.y : this.plotArea.y1;
                    e = e ? a : this.plotArea.x2;
                    f = f ? c : this.plotArea.y2;
                    2 < Math.abs(b - e) && 2 < Math.abs(d - f) && this._zoomPanToSelectedRegion(b, d, e, f) && (g = !0)
                }
                g && (this._ignoreNextEvent = !0, this._dispatchRangeEvent("rangeChanging", "zoom"), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), g && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (la(this._zoomButton, this._resetButton), U(this, this._zoomButton, "pan"), U(this, this._resetButton, "reset")))
            }
        }
        this.isDrag =
                !1
    };
    v.prototype._plotAreaMouseMove = function (a, c) {
        if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var b = 0, d = 0, e = b = null, e = 0 <= this.zoomType.indexOf("x"), f = 0 <= this.zoomType.indexOf("y");
            "xySwapped" === this.plotInfo.axisPlacement && (b = f, f = e, e = b);
            b = this.dragStartPoint.x - a;
            d = this.dragStartPoint.y - c;
            2 < Math.abs(b) && 8 > Math.abs(b) && (this.panEnabled || this.zoomEnabled) ? this._toolTip.hide() : this.panEnabled || this.zoomEnabled || this._toolTip.mouseMoveHandler(a, c);
            if ((!e || 2 < Math.abs(b) || !f || 2 < Math.abs(d)) && (this.panEnabled ||
                    this.zoomEnabled))
                if (this.panEnabled)
                    e = {x1: e ? this.plotArea.x1 + b : this.plotArea.x1, y1: f ? this.plotArea.y1 + d : this.plotArea.y1, x2: e ? this.plotArea.x2 + b : this.plotArea.x2, y2: f ? this.plotArea.y2 + d : this.plotArea.y2}, this._zoomPanToSelectedRegion(e.x1, e.y1, e.x2, e.y2, !0) && (this._dispatchRangeEvent("rangeChanging", "pan"), this.render(), this._dispatchRangeEvent("rangeChanged", "pan"), this.dragStartPoint.x = a, this.dragStartPoint.y = c);
                else if (this.zoomEnabled) {
                    this.resetOverlayedCanvas();
                    b = this.overlaidCanvasCtx.globalAlpha;
                    this.overlaidCanvasCtx.fillStyle = "#A89896";
                    var d = e ? this.dragStartPoint.x : this.plotArea.x1, g = f ? this.dragStartPoint.y : this.plotArea.y1, h = e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1, q = f ? c - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                    this.validateRegion(d, g, e ? a : this.plotArea.x2 - this.plotArea.x1, f ? c : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                    this.overlaidCanvasCtx.globalAlpha = 0.7;
                    this.overlaidCanvasCtx.fillRect(d,
                            g, h, q);
                    this.overlaidCanvasCtx.globalAlpha = b
                }
        } else
            this._toolTip.mouseMoveHandler(a, c)
    };
    v.prototype._zoomPanToSelectedRegion = function (a, c, b, d, e) {
        a = this.validateRegion(a, c, b, d, e);
        c = a.axesWithValidRange;
        b = a.axesRanges;
        if (a.isValid)
            for (d = 0; d < c.length; d++)
                e = b[d], c[d].setViewPortRange(e.val1, e.val2);
        return a.isValid
    };
    v.prototype.validateRegion = function (a, c, b, d, e) {
        e = e || !1;
        var f = 0 <= this.zoomType.indexOf("x"), g = 0 <= this.zoomType.indexOf("y"), h = !1, q = [], k = [], n = [];
        this.axisX && f && k.push(this.axisX);
        this.axisY &&
                g && k.push(this.axisY);
        this.axisY2 && g && k.push(this.axisY2);
        for (f = 0; f < k.length; f++) {
            var g = k[f], m = g.convertPixelToValue({x: a, y: c}), l = g.convertPixelToValue({x: b, y: d});
            if (m > l)
                var p = l, l = m, m = p;
            if (isFinite(g.dataInfo.minDiff))
                if (!(Math.abs(l - m) < 3 * Math.abs(g.dataInfo.minDiff) || m < g.minimum || l > g.maximum))
                    q.push(g), n.push({val1: m, val2: l}), h = !0;
                else if (!e) {
                    h = !1;
                    break
                }
        }
        return{isValid: h, axesWithValidRange: q, axesRanges: n}
    };
    v.prototype.preparePlotArea = function () {
        var a = this.plotArea, c = this.axisY ? this.axisY : this.axisY2;
        !u && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
        this.axisX && c ? (a.x1 = this.axisX.lineCoordinates.x1 < this.axisX.lineCoordinates.x2 ? this.axisX.lineCoordinates.x1 : c.lineCoordinates.x1, a.y1 = this.axisX.lineCoordinates.y1 < c.lineCoordinates.y1 ? this.axisX.lineCoordinates.y1 : c.lineCoordinates.y1, a.x2 = this.axisX.lineCoordinates.x2 > c.lineCoordinates.x2 ? this.axisX.lineCoordinates.x2 : c.lineCoordinates.x2, a.y2 = this.axisX.lineCoordinates.y2 > this.axisX.lineCoordinates.y1 ? this.axisX.lineCoordinates.y2 : c.lineCoordinates.y2,
                a.width = a.x2 - a.x1, a.height = a.y2 - a.y1) : (c = this.layoutManager.getFreeSpace(), a.x1 = c.x1, a.x2 = c.x2, a.y1 = c.y1, a.y2 = c.y2, a.width = c.width, a.height = c.height);
        u || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
        a.layoutManager = new da(a.x1, a.y1, a.x2, a.y2, 2)
    };
    v.prototype.getPixelCoordinatesOnPlotArea = function (a, c) {
        return{x: this.axisX.getPixelCoordinatesOnAxis(a).x, y: this.axisY.getPixelCoordinatesOnAxis(c).y}
    };
    v.prototype.renderIndexLabels = function (a) {
        a = a || this.plotArea.ctx;
        for (var c = this.plotArea, b = 0, d = 0, e = 0, f = 0, g = b = f = d = e = 0, h = 0, q = 0; q < this._indexLabels.length; q++) {
            var k = this._indexLabels[q], n = k.chartType.toLowerCase(), m, l, p = R("indexLabelFontColor", k.dataPoint, k.dataSeries), g = R("indexLabelFontSize", k.dataPoint, k.dataSeries), h = R("indexLabelFontFamily", k.dataPoint, k.dataSeries);
            m = R("indexLabelFontStyle", k.dataPoint, k.dataSeries);
            l = R("indexLabelFontWeight", k.dataPoint, k.dataSeries);
            var f = R("indexLabelBackgroundColor",
                    k.dataPoint, k.dataSeries), d = R("indexLabelMaxWidth", k.dataPoint, k.dataSeries), e = R("indexLabelWrap", k.dataPoint, k.dataSeries), r = R("indexLabelLineDashType", k.dataPoint, k.dataSeries), t = R("indexLabelLineColor", k.dataPoint, k.dataSeries), y = x(k.dataPoint.indexLabelLineThickness) ? x(k.dataSeries._options.indexLabelLineThickness) ? 0 : k.dataSeries._options.indexLabelLineThickness : k.dataPoint.indexLabelLineThickness, b = 0 < y ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) <<
                    0) : 0, s = {percent: null, total: null}, z = null;
            if (0 <= k.dataSeries.type.indexOf("stacked") || "pie" === k.dataSeries.type || "doughnut" === k.dataSeries.type)
                s = this.getPercentAndTotal(k.dataSeries, k.dataPoint);
            if (k.dataSeries.indexLabelFormatter || k.dataPoint.indexLabelFormatter)
                z = {chart: this._publicChartReference, dataSeries: k.dataSeries, dataPoint: k.dataPoint, index: k.indexKeyword, total: s.total, percent: s.percent};
            var w = k.dataPoint.indexLabelFormatter ? k.dataPoint.indexLabelFormatter(z) : k.dataPoint.indexLabel ? this.replaceKeywordsWithValue(k.dataPoint.indexLabel,
                    k.dataPoint, k.dataSeries, null, k.indexKeyword) : k.dataSeries.indexLabelFormatter ? k.dataSeries.indexLabelFormatter(z) : k.dataSeries.indexLabel ? this.replaceKeywordsWithValue(k.dataSeries.indexLabel, k.dataPoint, k.dataSeries, null, k.indexKeyword) : null;
            if (null !== w && "" !== w) {
                var s = R("indexLabelPlacement", k.dataPoint, k.dataSeries), z = R("indexLabelOrientation", k.dataPoint, k.dataSeries), u = k.direction, W = k.dataSeries.axisX, A = k.dataSeries.axisY, v = !1, p = new O(a, {x: 0, y: 0, maxWidth: d ? d : 0.5 * this.width, maxHeight: e ? 5 * g : 1.5 *
                    g, angle: "horizontal" === z ? 0 : -90, text: w, padding: 0, backgroundColor: f, horizontalAlign: "left", fontSize: g, fontFamily: h, fontWeight: l, fontColor: p, fontStyle: m, textBaseline: "top"});
                p.measureText();
                if (0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("bubble") || 0 <= n.indexOf("scatter")) {
                    if (k.dataPoint.x < W.viewportMinimum || k.dataPoint.x > W.viewportMaximum || k.dataPoint.y < A.viewportMinimum || k.dataPoint.y > A.viewportMaximum)
                        continue
                } else if (0 <= n.indexOf("column")) {
                    if (k.dataPoint.x < W.viewportMinimum || k.dataPoint.x >
                            W.viewportMaximum || k.bounds.y1 > c.y2 || k.bounds.y2 < c.y1)
                        continue
                } else if (0 <= n.indexOf("bar")) {
                    if (k.dataPoint.x < W.viewportMinimum || k.dataPoint.x > W.viewportMaximum || k.bounds.x1 > c.x2 || k.bounds.x2 < c.x1)
                        continue
                } else if (k.dataPoint.x < W.viewportMinimum || k.dataPoint.x > W.viewportMaximum)
                    continue;
                d = f = 2;
                "horizontal" === z ? (g = p.width, h = p.height) : (h = p.width, g = p.height);
                if ("normal" === this.plotInfo.axisPlacement) {
                    if (0 <= n.indexOf("line") || 0 <= n.indexOf("area"))
                        s = "auto", f = 4;
                    else if (0 <= n.indexOf("stacked"))
                        "auto" === s &&
                                (s = "inside");
                    else if ("bubble" === n || "scatter" === n)
                        s = "inside";
                    m = k.point.x - g / 2;
                    "inside" !== s ? (d = c.y1, e = c.y2, 0 < u ? (l = k.point.y - h - f - b, l < d && (l = "auto" === s ? Math.max(k.point.y, d) + f + b : d + f + b, v = l + h > k.point.y)) : (l = k.point.y + f + b, l > e - h - f - b && (l = "auto" === s ? Math.min(k.point.y, e) - h - f - b : e - h - f - b, v = l < k.point.y))) : (d = Math.max(k.bounds.y1, c.y1), e = Math.min(k.bounds.y2, c.y2), b = 0 <= n.indexOf("range") ? 0 < u ? Math.max(k.bounds.y1, c.y1) + h / 2 + f : Math.min(k.bounds.y2, c.y2) - h / 2 - f : (Math.max(k.bounds.y1, c.y1) + Math.min(k.bounds.y2, c.y2)) / 2,
                            0 < u ? (l = Math.max(k.point.y, b) - h / 2, l < d && ("bubble" === n || "scatter" === n) && (l = Math.max(k.point.y - h - f, c.y1 + f))) : (l = Math.min(k.point.y, b) - h / 2, l > e - h - f && ("bubble" === n || "scatter" === n) && (l = Math.min(k.point.y + f, c.y2 - h - f))), l = Math.min(l, e - h))
                } else
                    0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("scatter") ? (s = "auto", d = 4) : 0 <= n.indexOf("stacked") ? "auto" === s && (s = "inside") : "bubble" === n && (s = "inside"), l = k.point.y - h / 2, "inside" !== s ? (f = c.x1, e = c.x2, 0 > u ? (m = k.point.x - g - d - b, m < f && (m = "auto" === s ? Math.max(k.point.x, f) +
                            d + b : f + d + b, v = m + g > k.point.x)) : (m = k.point.x + d + b, m > e - g - d - b && (m = "auto" === s ? Math.min(k.point.x, e) - g - d - b : e - g - d - b, v = m < k.point.x))) : (f = Math.max(k.bounds.x1, c.x1), Math.min(k.bounds.x2, c.x2), b = 0 <= n.indexOf("range") ? 0 > u ? Math.max(k.bounds.x1, c.x1) + g / 2 + d : Math.min(k.bounds.x2, c.x2) - g / 2 - d : (Math.max(k.bounds.x1, c.x1) + Math.min(k.bounds.x2, c.x2)) / 2, m = 0 > u ? Math.max(k.point.x, b) - g / 2 : Math.min(k.point.x, b) - g / 2, m = Math.max(m, f));
                "vertical" === z && (l += h);
                p.x = m;
                p.y = l;
                p.render(!0);
                y && ("inside" !== s && (0 > n.indexOf("bar") && k.point.x >
                        c.x1 && k.point.x < c.x2 || !v) && (0 > n.indexOf("column") && k.point.y > c.y1 && k.point.y < c.y2 || !v)) && (a.lineWidth = y, a.strokeStyle = t ? t : "gray", a.setLineDash && a.setLineDash(D(r, y)), a.beginPath(), a.moveTo(k.point.x, k.point.y), 0 <= n.indexOf("bar") ? a.lineTo(m + (0 < k.direction ? 0 : g), l + ("horizontal" === z ? h : -h) / 2) : 0 <= n.indexOf("column") ? a.lineTo(m + g / 2, l + ((0 < k.direction ? h : -h) + ("horizontal" === z ? h : -h)) / 2) : a.lineTo(m + g / 2, l + ((l < k.point.y ? h : -h) + ("horizontal" === z ? h : -h)) / 2), a.stroke())
            }
        }
        return{source: a, dest: this.plotArea.ctx, animationCallback: B.fadeInAnimation,
            easingFunction: B.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7}
    };
    v.prototype.renderLine = function (a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var d = this.plotArea;
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            for (var d = [], e = 0; e < a.dataSeriesIndexes.length; e++) {
                var f = a.dataSeriesIndexes[e], g = this.data[f];
                c.lineWidth = g.lineThickness;
                var h = g.dataPoints, q = "solid";
                if (c.setLineDash) {
                    var k = D(g.nullDataLineDashType,
                            g.lineThickness), q = g.lineDashType, n = D(q, g.lineThickness);
                    c.setLineDash(n)
                }
                var m = g.id;
                this._eventManager.objectMap[m] = {objectType: "dataSeries", dataSeriesIndex: f};
                m = C(m);
                b.strokeStyle = m;
                b.lineWidth = 0 < g.lineThickness ? Math.max(g.lineThickness, 4) : 0;
                var m = g._colorSet, l = m = g._options.lineColor ? g._options.lineColor : m[0];
                c.strokeStyle = m;
                var p = !0, r = 0, t, y;
                c.beginPath();
                if (0 < h.length) {
                    for (var s = !1, r = 0; r < h.length; r++)
                        if (t = h[r].x.getTime ? h[r].x.getTime() : h[r].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax &&
                                (!g.connectNullData || !s)))
                            if ("number" !== typeof h[r].y)
                                0 < r && !(g.connectNullData || s || p) && (c.stroke(), u && b.stroke()), s = !0;
                            else {
                                t = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (t - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                y = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (h[r].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var z = g.dataPointIds[r];
                                this._eventManager.objectMap[z] = {id: z, objectType: "dataPoint", dataSeriesIndex: f, dataPointIndex: r,
                                    x1: t, y1: y};
                                p || s ? (!p && g.connectNullData ? (c.setLineDash && (g._options.nullDataLineDashType || q === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (c.stroke(), q = g.nullDataLineDashType, c.setLineDash(k)), c.lineTo(t, y), u && b.lineTo(t, y)) : (c.beginPath(), c.moveTo(t, y), u && (b.beginPath(), b.moveTo(t, y))), s = p = !1) : (c.lineTo(t, y), u && b.lineTo(t, y), 0 == r % 500 && (c.stroke(), c.beginPath(), c.moveTo(t, y), u && (b.stroke(), b.beginPath(), b.moveTo(t, y))));
                                r < h.length - 1 && (l !== (h[r].lineColor || m) || q !== (h[r].lineDashType ||
                                        g.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(t, y), l = h[r].lineColor || m, c.strokeStyle = l, c.setLineDash && (h[r].lineDashType ? (q = h[r].lineDashType, c.setLineDash(D(q, g.lineThickness))) : (q = g.lineDashType, c.setLineDash(n))));
                                if (0 < h[r].markerSize || 0 < g.markerSize) {
                                    var w = g.getMarkerProperties(r, t, y, c);
                                    d.push(w);
                                    z = C(z);
                                    u && d.push({x: t, y: y, ctx: b, type: w.type, size: w.size, color: z, borderColor: z, borderThickness: w.borderThickness})
                                }
                                (h[r].indexLabel || g.indexLabel || h[r].indexLabelFormatter || g.indexLabelFormatter) &&
                                        this._indexLabels.push({chartType: "line", dataPoint: h[r], dataSeries: g, point: {x: t, y: y}, direction: 0 <= h[r].y ? 1 : -1, color: m})
                            }
                    c.stroke();
                    u && b.stroke()
                }
            }
            P.drawMarkers(d);
            c.restore();
            c.beginPath();
            u && b.beginPath();
            return{source: c, dest: this.plotArea.ctx, animationCallback: B.xClipAnimation, easingFunction: B.easing.linear, animationBase: 0}
        }
    };
    v.prototype.renderStepLine = function (a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var d = this.plotArea;
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            for (var d = [], e = 0; e < a.dataSeriesIndexes.length; e++) {
                var f = a.dataSeriesIndexes[e], g = this.data[f];
                c.lineWidth = g.lineThickness;
                var h = g.dataPoints, q = "solid";
                if (c.setLineDash) {
                    var k = D(g.nullDataLineDashType, g.lineThickness), q = g.lineDashType, n = D(q, g.lineThickness);
                    c.setLineDash(n)
                }
                var m = g.id;
                this._eventManager.objectMap[m] = {objectType: "dataSeries", dataSeriesIndex: f};
                m = C(m);
                b.strokeStyle = m;
                b.lineWidth = 0 < g.lineThickness ? Math.max(g.lineThickness, 4) :
                        0;
                var m = g._colorSet, l = m = g._options.lineColor ? g._options.lineColor : m[0];
                c.strokeStyle = m;
                var p = !0, r = 0, t, y;
                c.beginPath();
                if (0 < h.length) {
                    for (var s = !1, r = 0; r < h.length; r++)
                        if (t = h[r].getTime ? h[r].x.getTime() : h[r].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !s)))
                            if ("number" !== typeof h[r].y)
                                0 < r && !(g.connectNullData || s || p) && (c.stroke(), u && b.stroke()), s = !0;
                            else {
                                var z = y;
                                t = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (t - a.axisX.conversionParameters.minimum) +
                                        0.5 << 0;
                                y = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (h[r].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var w = g.dataPointIds[r];
                                this._eventManager.objectMap[w] = {id: w, objectType: "dataPoint", dataSeriesIndex: f, dataPointIndex: r, x1: t, y1: y};
                                p || s ? (!p && g.connectNullData ? (c.setLineDash && (g._options.nullDataLineDashType || q === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (c.stroke(), q = g.nullDataLineDashType, c.setLineDash(k)), c.lineTo(t, z), c.lineTo(t, y), u && (b.lineTo(t,
                                        z), b.lineTo(t, y))) : (c.beginPath(), c.moveTo(t, y), u && (b.beginPath(), b.moveTo(t, y))), s = p = !1) : (c.lineTo(t, z), u && b.lineTo(t, z), c.lineTo(t, y), u && b.lineTo(t, y), 0 == r % 500 && (c.stroke(), c.beginPath(), c.moveTo(t, y), u && (b.stroke(), b.beginPath(), b.moveTo(t, y))));
                                r < h.length - 1 && (l !== (h[r].lineColor || m) || q !== (h[r].lineDashType || g.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(t, y), l = h[r].lineColor || m, c.strokeStyle = l, c.setLineDash && (h[r].lineDashType ? (q = h[r].lineDashType, c.setLineDash(D(q, g.lineThickness))) : (q =
                                        g.lineDashType, c.setLineDash(n))));
                                if (0 < h[r].markerSize || 0 < g.markerSize)
                                    z = g.getMarkerProperties(r, t, y, c), d.push(z), w = C(w), u && d.push({x: t, y: y, ctx: b, type: z.type, size: z.size, color: w, borderColor: w, borderThickness: z.borderThickness});
                                (h[r].indexLabel || g.indexLabel || h[r].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({chartType: "stepLine", dataPoint: h[r], dataSeries: g, point: {x: t, y: y}, direction: 0 <= h[r].y ? 1 : -1, color: m})
                            }
                    c.stroke();
                    u && b.stroke()
                }
            }
            P.drawMarkers(d);
            c.restore();
            c.beginPath();
            u && b.beginPath();
            return{source: c, dest: this.plotArea.ctx, animationCallback: B.xClipAnimation, easingFunction: B.easing.linear, animationBase: 0}
        }
    };
    v.prototype.renderSpline = function (a) {
        function c(a) {
            a = ma(a, 2);
            if (0 < a.length) {
                b.beginPath();
                u && d.beginPath();
                b.moveTo(a[0].x, a[0].y);
                a[0].newStrokeStyle && (b.strokeStyle = a[0].newStrokeStyle);
                a[0].newLineDashArray && b.setLineDash(a[0].newLineDashArray);
                u && d.moveTo(a[0].x, a[0].y);
                for (var c = 0; c < a.length - 3; c += 3)
                    if (b.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y,
                            a[c + 3].x, a[c + 3].y), u && d.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y), 0 < c && 0 === c % 3E3 || a[c + 3].newStrokeStyle || a[c + 3].newLineDashArray)
                        b.stroke(), b.beginPath(), b.moveTo(a[c + 3].x, a[c + 3].y), a[c + 3].newStrokeStyle && (b.strokeStyle = a[c + 3].newStrokeStyle), a[c + 3].newLineDashArray && b.setLineDash(a[c + 3].newLineDashArray), u && (d.stroke(), d.beginPath(), d.moveTo(a[c + 3].x, a[c + 3].y));
                b.stroke();
                u && d.stroke()
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d =
                    this._eventManager.ghostCtx;
            b.save();
            var e = this.plotArea;
            b.beginPath();
            b.rect(e.x1, e.y1, e.width, e.height);
            b.clip();
            for (var e = [], f = 0; f < a.dataSeriesIndexes.length; f++) {
                var g = a.dataSeriesIndexes[f], h = this.data[g];
                b.lineWidth = h.lineThickness;
                var q = h.dataPoints, k = "solid";
                if (b.setLineDash) {
                    var n = D(h.nullDataLineDashType, h.lineThickness), k = h.lineDashType, m = D(k, h.lineThickness);
                    b.setLineDash(m)
                }
                var l = h.id;
                this._eventManager.objectMap[l] = {objectType: "dataSeries", dataSeriesIndex: g};
                l = C(l);
                d.strokeStyle = l;
                d.lineWidth =
                        0 < h.lineThickness ? Math.max(h.lineThickness, 4) : 0;
                var l = h._colorSet, p = l = h._options.lineColor ? h._options.lineColor : l[0];
                b.strokeStyle = l;
                var r = 0, t, y, s = [];
                b.beginPath();
                if (0 < q.length)
                    for (y = !1, r = 0; r < q.length; r++)
                        if (t = q[r].getTime ? q[r].x.getTime() : q[r].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !y)))
                            if ("number" !== typeof q[r].y)
                                0 < r && !y && (h.connectNullData ? b.setLineDash && (0 < s.length && (h._options.nullDataLineDashType || !q[r - 1].lineDashType)) && (s[s.length - 1].newLineDashArray =
                                        n, k = h.nullDataLineDashType) : (c(s), s = [])), y = !0;
                            else {
                                t = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (t - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                y = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (q[r].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var z = h.dataPointIds[r];
                                this._eventManager.objectMap[z] = {id: z, objectType: "dataPoint", dataSeriesIndex: g, dataPointIndex: r, x1: t, y1: y};
                                s[s.length] = {x: t, y: y};
                                r < q.length - 1 && (p !== (q[r].lineColor ||
                                        l) || k !== (q[r].lineDashType || h.lineDashType)) && (p = q[r].lineColor || l, s[s.length - 1].newStrokeStyle = p, b.setLineDash && (q[r].lineDashType ? (k = q[r].lineDashType, s[s.length - 1].newLineDashArray = D(k, h.lineThickness)) : (k = h.lineDashType, s[s.length - 1].newLineDashArray = m)));
                                if (0 < q[r].markerSize || 0 < h.markerSize) {
                                    var w = h.getMarkerProperties(r, t, y, b);
                                    e.push(w);
                                    z = C(z);
                                    u && e.push({x: t, y: y, ctx: d, type: w.type, size: w.size, color: z, borderColor: z, borderThickness: w.borderThickness})
                                }
                                (q[r].indexLabel || h.indexLabel || q[r].indexLabelFormatter ||
                                        h.indexLabelFormatter) && this._indexLabels.push({chartType: "spline", dataPoint: q[r], dataSeries: h, point: {x: t, y: y}, direction: 0 <= q[r].y ? 1 : -1, color: l});
                                y = !1
                            }
                c(s)
            }
            P.drawMarkers(e);
            b.restore();
            b.beginPath();
            u && d.beginPath();
            return{source: b, dest: this.plotArea.ctx, animationCallback: B.xClipAnimation, easingFunction: B.easing.linear, animationBase: 0}
        }
    };
    var M = function (a, c, b, d, e, f, g, h, q, k, n, m, l) {
        "undefined" === typeof l && (l = 1);
        g = g || 0;
        h = h || "black";
        var p = 15 < d - c && 15 < e - b ? 8 : 0.35 * Math.min(d - c, e - b);
        a.beginPath();
        a.moveTo(c,
                b);
        a.save();
        a.fillStyle = f;
        a.globalAlpha = l;
        a.fillRect(c, b, d - c, e - b);
        a.globalAlpha = 1;
        0 < g && (l = 0 === g % 2 ? 0 : 0.5, a.beginPath(), a.lineWidth = g, a.strokeStyle = h, a.moveTo(c, b), a.rect(c - l, b - l, d - c + 2 * l, e - b + 2 * l), a.stroke());
        a.restore();
        !0 === q && (a.save(), a.beginPath(), a.moveTo(c, b), a.lineTo(c + p, b + p), a.lineTo(d - p, b + p), a.lineTo(d, b), a.closePath(), g = a.createLinearGradient((d + c) / 2, b + p, (d + c) / 2, b), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = g, a.fill(), a.restore());
        !0 === k && (a.save(), a.beginPath(),
                a.moveTo(c, e), a.lineTo(c + p, e - p), a.lineTo(d - p, e - p), a.lineTo(d, e), a.closePath(), g = a.createLinearGradient((d + c) / 2, e - p, (d + c) / 2, e), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = g, a.fill(), a.restore());
        !0 === n && (a.save(), a.beginPath(), a.moveTo(c, b), a.lineTo(c + p, b + p), a.lineTo(c + p, e - p), a.lineTo(c, e), a.closePath(), g = a.createLinearGradient(c + p, (e + b) / 2, c, (e + b) / 2), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = g, a.fill(), a.restore());
        !0 === m && (a.save(),
                a.beginPath(), a.moveTo(d, b), a.lineTo(d - p, b + p), a.lineTo(d - p, e - p), a.lineTo(d, e), g = a.createLinearGradient(d - p, (e + b) / 2, d, (e + b) / 2), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = g, g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = g, a.fill(), a.closePath(), a.restore())
    };
    v.prototype.renderColumn = function (a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, e = 0, f, g, h, q = a.axisY.conversionParameters.reference +
                    a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0, e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1, k = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0, n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
            n = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width /
                    Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(n) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && e > k && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, k));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && k < e) && (k = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            n < e && (n = e);
            n > k && (n = k);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height),
                    this._eventManager.ghostCtx.clip());
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var k = a.dataSeriesIndexes[d], m = this.data[k], l = m.dataPoints;
                if (0 < l.length)
                    for (var p = 5 < n && m.bevelEnabled ? !0 : !1, e = 0; e < l.length; e++)
                        if (l[e].getTime ? h = l[e].x.getTime() : h = l[e].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof l[e].y) {
                            f = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (h - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisY.conversionParameters.reference +
                                    a.axisY.conversionParameters.pixelPerUnit * (l[e].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            f = f - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + d) * n << 0;
                            var r = f + n << 0, t;
                            0 <= l[e].y ? t = q : (t = g, g = q);
                            g > t && (t = g = t);
                            b = l[e].color ? l[e].color : m._colorSet[e % m._colorSet.length];
                            M(c, f, g, r, t, b, 0, null, p && 0 <= l[e].y, 0 > l[e].y && p, !1, !1, m.fillOpacity);
                            b = m.dataPointIds[e];
                            this._eventManager.objectMap[b] = {id: b, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: e, x1: f, y1: g, x2: r, y2: t};
                            b = C(b);
                            u && M(this._eventManager.ghostCtx,
                                    f, g, r, t, b, 0, null, !1, !1, !1, !1);
                            (l[e].indexLabel || m.indexLabel || l[e].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({chartType: "column", dataPoint: l[e], dataSeries: m, point: {x: f + (r - f) / 2, y: 0 <= l[e].y ? g : t}, direction: 0 <= l[e].y ? 1 : -1, bounds: {x1: f, y1: Math.min(g, t), x2: r, y2: Math.max(g, t)}, color: b})
                        }
            }
            c.restore();
            u && this._eventManager.ghostCtx.restore();
            a = Math.min(q, a.axisY.boundingRect.y2);
            return{source: c, dest: this.plotArea.ctx, animationCallback: B.yScaleAnimation, easingFunction: B.easing.easeOutQuart,
                animationBase: a}
        }
    };
    v.prototype.renderStackedColumn = function (a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, e = [], f = [], g = 0, h, q = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0, g = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1, k = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.width <<
                    0, n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
            n = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(n) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && g > k && (g = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, k));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && k < g) && (k = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, g));
            n < g && (n = g);
            n > k && (n = k);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                var m = a.dataSeriesIndexes[k], l = this.data[m], p = l.dataPoints;
                if (0 < p.length) {
                    var r = 5 < n && l.bevelEnabled ? !0 : !1;
                    c.strokeStyle = "#4572A7 ";
                    for (g = 0; g < p.length; g++)
                        if (b = p[g].x.getTime ? p[g].x.getTime() : p[g].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) &&
                                "number" === typeof p[g].y) {
                            d = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (b - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            h = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (p[g].y - a.axisY.conversionParameters.minimum);
                            var t = d - a.plotType.plotUnits.length * n / 2 + a.index * n << 0, y = t + n << 0, s;
                            if (0 <= p[g].y) {
                                var z = e[b] ? e[b] : 0;
                                h -= z;
                                s = q - z;
                                e[b] = z + (s - h)
                            } else
                                z = f[b] ? f[b] : 0, s = h + z, h = q + z, f[b] = z + (s - h);
                            b = p[g].color ? p[g].color : l._colorSet[g % l._colorSet.length];
                            M(c, t, h, y, s, b, 0, null, r && 0 <= p[g].y, 0 > p[g].y && r, !1, !1, l.fillOpacity);
                            b = l.dataPointIds[g];
                            this._eventManager.objectMap[b] = {id: b, objectType: "dataPoint", dataSeriesIndex: m, dataPointIndex: g, x1: t, y1: h, x2: y, y2: s};
                            b = C(b);
                            u && M(this._eventManager.ghostCtx, t, h, y, s, b, 0, null, !1, !1, !1, !1);
                            (p[g].indexLabel || l.indexLabel || p[g].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({chartType: "stackedColumn", dataPoint: p[g], dataSeries: l, point: {x: d, y: 0 <= p[g].y ? h : s}, direction: 0 <= p[g].y ? 1 : -1, bounds: {x1: t, y1: Math.min(h,
                                            s), x2: y, y2: Math.max(h, s)}, color: b})
                        }
                }
            }
            c.restore();
            u && this._eventManager.ghostCtx.restore();
            a = Math.min(q, a.axisY.boundingRect.y2);
            return{source: c, dest: this.plotArea.ctx, animationCallback: B.yScaleAnimation, easingFunction: B.easing.easeOutQuart, animationBase: a}
        }
    };
    v.prototype.renderStackedColumn100 = function (a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, e = [], f = [], g = 0, h, q = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit *
                    (0 - a.axisY.conversionParameters.minimum) << 0, g = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1, k = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
            n = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(n) / a.plotType.plotUnits.length) <<
                    0;
            this.dataPointMaxWidth && g > k && (g = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, k));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && k < g) && (k = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, g));
            n < g && (n = g);
            n > k && (n = k);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                var m = a.dataSeriesIndexes[k],
                        l = this.data[m], p = l.dataPoints;
                if (0 < p.length)
                    for (var r = 5 < n && l.bevelEnabled ? !0 : !1, g = 0; g < p.length; g++)
                        if (b = p[g].x.getTime ? p[g].x.getTime() : p[g].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof p[g].y) {
                            d = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (b - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            h = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * ((0 !== a.dataPointYSums[b] ? 100 * (p[g].y / a.dataPointYSums[b]) :
                                    0) - a.axisY.conversionParameters.minimum);
                            var t = d - a.plotType.plotUnits.length * n / 2 + a.index * n << 0, y = t + n << 0, s;
                            if (0 <= p[g].y) {
                                var z = e[b] ? e[b] : 0;
                                h -= z;
                                s = q - z;
                                e[b] = z + (s - h)
                            } else
                                z = f[b] ? f[b] : 0, s = h + z, h = q + z, f[b] = z + (s - h);
                            b = p[g].color ? p[g].color : l._colorSet[g % l._colorSet.length];
                            M(c, t, h, y, s, b, 0, null, r && 0 <= p[g].y, 0 > p[g].y && r, !1, !1, l.fillOpacity);
                            b = l.dataPointIds[g];
                            this._eventManager.objectMap[b] = {id: b, objectType: "dataPoint", dataSeriesIndex: m, dataPointIndex: g, x1: t, y1: h, x2: y, y2: s};
                            b = C(b);
                            u && M(this._eventManager.ghostCtx,
                                    t, h, y, s, b, 0, null, !1, !1, !1, !1);
                            (p[g].indexLabel || l.indexLabel || p[g].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({chartType: "stackedColumn100", dataPoint: p[g], dataSeries: l, point: {x: d, y: 0 <= p[g].y ? h : s}, direction: 0 <= p[g].y ? 1 : -1, bounds: {x1: t, y1: Math.min(h, s), x2: y, y2: Math.max(h, s)}, color: b})
                        }
            }
            c.restore();
            u && this._eventManager.ghostCtx.restore();
            a = Math.min(q, a.axisY.boundingRect.y2);
            return{source: c, dest: this.plotArea.ctx, animationCallback: B.yScaleAnimation, easingFunction: B.easing.easeOutQuart,
                animationBase: a}
        }
    };
    v.prototype.renderBar = function (a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, e = 0, f, g, h, q = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0, e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1, k = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height,
                    0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0, n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
            n = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(n) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && e > k && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, k));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && k < e) && (k = Math.max(this.dataPointWidth ?
                    this.dataPointWidth : -Infinity, e));
            n < e && (n = e);
            n > k && (n = k);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var k = a.dataSeriesIndexes[d], m = this.data[k], l = m.dataPoints;
                if (0 < l.length) {
                    var p = 5 < n && m.bevelEnabled ? !0 : !1;
                    c.strokeStyle = "#4572A7 ";
                    for (e = 0; e < l.length; e++)
                        if (l[e].getTime ? h = l[e].x.getTime() : h = l[e].x,
                                !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof l[e].y) {
                            g = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (h - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            f = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (l[e].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            g = g - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + d) * n << 0;
                            var r = g + n << 0, t;
                            0 <= l[e].y ? t = q : (t = f, f = q);
                            b = l[e].color ? l[e].color : m._colorSet[e %
                                    m._colorSet.length];
                            M(c, t, g, f, r, b, 0, null, p, !1, !1, !1, m.fillOpacity);
                            b = m.dataPointIds[e];
                            this._eventManager.objectMap[b] = {id: b, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: e, x1: t, y1: g, x2: f, y2: r};
                            b = C(b);
                            u && M(this._eventManager.ghostCtx, t, g, f, r, b, 0, null, !1, !1, !1, !1);
                            (l[e].indexLabel || m.indexLabel || l[e].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({chartType: "bar", dataPoint: l[e], dataSeries: m, point: {x: 0 <= l[e].y ? f : t, y: g + (r - g) / 2}, direction: 0 <= l[e].y ? 1 : -1, bounds: {x1: Math.min(t,
                                            f), y1: g, x2: Math.max(t, f), y2: r}, color: b})
                        }
                }
            }
            c.restore();
            u && this._eventManager.ghostCtx.restore();
            a = Math.max(q, a.axisX.boundingRect.x2);
            return{source: c, dest: this.plotArea.ctx, animationCallback: B.xScaleAnimation, easingFunction: B.easing.easeOutQuart, animationBase: a}
        }
    };
    v.prototype.renderStackedBar = function (a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, e = [], f = [], g = 0, h, q = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit *
                    (0 - a.axisY.conversionParameters.minimum) << 0, g = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1, k = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
            n = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(n) / a.plotType.plotUnits.length) <<
                    0;
            this.dataPointMaxWidth && g > k && (g = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, k));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && k < g) && (k = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, g));
            n < g && (n = g);
            n > k && (n = k);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                var m = a.dataSeriesIndexes[k],
                        l = this.data[m], p = l.dataPoints;
                if (0 < p.length) {
                    var r = 5 < n && l.bevelEnabled ? !0 : !1;
                    c.strokeStyle = "#4572A7 ";
                    for (g = 0; g < p.length; g++)
                        if (b = p[g].x.getTime ? p[g].x.getTime() : p[g].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof p[g].y) {
                            d = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (b - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            h = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (p[g].y - a.axisY.conversionParameters.minimum);
                            var t = d - a.plotType.plotUnits.length * n / 2 + a.index * n << 0, y = t + n << 0, s;
                            if (0 <= p[g].y) {
                                var z = e[b] ? e[b] : 0;
                                s = q + z;
                                h += z;
                                e[b] = z + (h - s)
                            } else
                                z = f[b] ? f[b] : 0, s = h - z, h = q - z, f[b] = z + (h - s);
                            b = p[g].color ? p[g].color : l._colorSet[g % l._colorSet.length];
                            M(c, s, t, h, y, b, 0, null, r, !1, !1, !1, l.fillOpacity);
                            b = l.dataPointIds[g];
                            this._eventManager.objectMap[b] = {id: b, objectType: "dataPoint", dataSeriesIndex: m, dataPointIndex: g, x1: s, y1: t, x2: h, y2: y};
                            b = C(b);
                            u && M(this._eventManager.ghostCtx, s, t, h, y, b, 0, null, !1, !1, !1, !1);
                            (p[g].indexLabel || l.indexLabel ||
                                    p[g].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({chartType: "stackedBar", dataPoint: p[g], dataSeries: l, point: {x: 0 <= p[g].y ? h : s, y: d}, direction: 0 <= p[g].y ? 1 : -1, bounds: {x1: Math.min(s, h), y1: t, x2: Math.max(s, h), y2: y}, color: b})
                        }
                }
            }
            c.restore();
            u && this._eventManager.ghostCtx.restore();
            a = Math.max(q, a.axisX.boundingRect.x2);
            return{source: c, dest: this.plotArea.ctx, animationCallback: B.xScaleAnimation, easingFunction: B.easing.easeOutQuart, animationBase: a}
        }
    };
    v.prototype.renderStackedBar100 = function (a) {
        var c =
                a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, e = [], f = [], g = 0, h, q = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0, g = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1, k = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.viewportMaximum -
                    a.axisX.viewportMinimum));
            n = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(n) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && g > k && (g = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, k));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && k < g) && (k = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, g));
            n < g && (n = g);
            n > k && (n = k);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width,
                    d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                var m = a.dataSeriesIndexes[k], l = this.data[m], p = l.dataPoints;
                if (0 < p.length) {
                    var r = 5 < n && l.bevelEnabled ? !0 : !1;
                    c.strokeStyle = "#4572A7 ";
                    for (g = 0; g < p.length; g++)
                        if (b = p[g].x.getTime ? p[g].x.getTime() : p[g].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof p[g].y) {
                            d = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit *
                                    (b - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            h = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * ((0 !== a.dataPointYSums[b] ? 100 * (p[g].y / a.dataPointYSums[b]) : 0) - a.axisY.conversionParameters.minimum);
                            var t = d - a.plotType.plotUnits.length * n / 2 + a.index * n << 0, y = t + n << 0, s;
                            if (0 <= p[g].y) {
                                var z = e[b] ? e[b] : 0;
                                s = q + z;
                                h += z;
                                e[b] = z + (h - s)
                            } else
                                z = f[b] ? f[b] : 0, s = h - z, h = q - z, f[b] = z + (h - s);
                            b = p[g].color ? p[g].color : l._colorSet[g % l._colorSet.length];
                            M(c, s, t, h, y, b, 0, null, r, !1, !1, !1, l.fillOpacity);
                            b =
                                    l.dataPointIds[g];
                            this._eventManager.objectMap[b] = {id: b, objectType: "dataPoint", dataSeriesIndex: m, dataPointIndex: g, x1: s, y1: t, x2: h, y2: y};
                            b = C(b);
                            u && M(this._eventManager.ghostCtx, s, t, h, y, b, 0, null, !1, !1, !1, !1);
                            (p[g].indexLabel || l.indexLabel || p[g].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({chartType: "stackedBar100", dataPoint: p[g], dataSeries: l, point: {x: 0 <= p[g].y ? h : s, y: d}, direction: 0 <= p[g].y ? 1 : -1, bounds: {x1: Math.min(s, h), y1: t, x2: Math.max(s, h), y2: y}, color: b})
                        }
                }
            }
            c.restore();
            u && this._eventManager.ghostCtx.restore();
            a = Math.max(q, a.axisX.boundingRect.x2);
            return{source: c, dest: this.plotArea.ctx, animationCallback: B.xScaleAnimation, easingFunction: B.easing.easeOutQuart, animationBase: a}
        }
    };
    v.prototype.renderArea = function (a) {
        function c() {
            z && (0 < k.lineThickness && b.stroke(), 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? s = y : 0 > a.axisY.viewportMaximum ? s = f.y1 : 0 < a.axisY.viewportMinimum && (s = e.y2), b.lineTo(p, s), b.lineTo(z.x, s), b.closePath(), b.globalAlpha = k.fillOpacity, b.fill(), b.globalAlpha = 1, u && (d.lineTo(p, s), d.lineTo(z.x,
                    s), d.closePath(), d.fill()), b.beginPath(), b.moveTo(p, r), d.beginPath(), d.moveTo(p, r), z = {x: p, y: r})
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx, e = a.axisX.lineCoordinates, f = a.axisY.lineCoordinates, g = [], h = this.plotArea;
            b.save();
            u && d.save();
            b.beginPath();
            b.rect(h.x1, h.y1, h.width, h.height);
            b.clip();
            u && (d.beginPath(), d.rect(h.x1, h.y1, h.width, h.height), d.clip());
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                var q = a.dataSeriesIndexes[h], k = this.data[q],
                        n = k.dataPoints, g = k.id;
                this._eventManager.objectMap[g] = {objectType: "dataSeries", dataSeriesIndex: q};
                g = C(g);
                d.fillStyle = g;
                var g = [], m = !0, l = 0, p, r, t, y = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) + 0.5 << 0, s, z = null;
                if (0 < n.length) {
                    var w = k._colorSet[l % k._colorSet.length], x = k._options.lineColor || w, v = x;
                    b.fillStyle = w;
                    b.strokeStyle = x;
                    b.lineWidth = k.lineThickness;
                    var A = "solid";
                    if (b.setLineDash) {
                        var H = D(k.nullDataLineDashType, k.lineThickness),
                                A = k.lineDashType, K = D(A, k.lineThickness);
                        b.setLineDash(K)
                    }
                    for (var I = !0; l < n.length; l++)
                        if (t = n[l].x.getTime ? n[l].x.getTime() : n[l].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !I)))
                            if ("number" !== typeof n[l].y)
                                k.connectNullData || (I || m) || c(), I = !0;
                            else {
                                p = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (t - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                r = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit *
                                        (n[l].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                m || I ? (!m && k.connectNullData ? (b.setLineDash && (k._options.nullDataLineDashType || A === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (b.stroke(), A = k.nullDataLineDashType, b.setLineDash(H)), b.lineTo(p, r), u && d.lineTo(p, r)) : (b.beginPath(), b.moveTo(p, r), u && (d.beginPath(), d.moveTo(p, r)), z = {x: p, y: r}), I = m = !1) : (b.lineTo(p, r), u && d.lineTo(p, r), 0 == l % 250 && c());
                                l < n.length - 1 && (v !== (n[l].lineColor || x) || A !== (n[l].lineDashType || k.lineDashType)) && (c(), v = n[l].lineColor ||
                                        x, b.strokeStyle = v, b.setLineDash && (n[l].lineDashType ? (A = n[l].lineDashType, b.setLineDash(D(A, k.lineThickness))) : (A = k.lineDashType, b.setLineDash(K))));
                                var G = k.dataPointIds[l];
                                this._eventManager.objectMap[G] = {id: G, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: l, x1: p, y1: r};
                                0 !== n[l].markerSize && (0 < n[l].markerSize || 0 < k.markerSize) && (t = k.getMarkerProperties(l, p, r, b), g.push(t), G = C(G), u && g.push({x: p, y: r, ctx: d, type: t.type, size: t.size, color: G, borderColor: G, borderThickness: t.borderThickness}));
                                (n[l].indexLabel ||
                                        k.indexLabel || n[l].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({chartType: "area", dataPoint: n[l], dataSeries: k, point: {x: p, y: r}, direction: 0 <= n[l].y ? 1 : -1, color: w})
                            }
                    c();
                    P.drawMarkers(g)
                }
            }
            b.restore();
            u && this._eventManager.ghostCtx.restore();
            return{source: b, dest: this.plotArea.ctx, animationCallback: B.xClipAnimation, easingFunction: B.easing.linear, animationBase: 0}
        }
    };
    v.prototype.renderSplineArea = function (a) {
        function c() {
            var c = ma(s, 2);
            if (0 < c.length) {
                if (0 < k.lineThickness) {
                    b.beginPath();
                    b.moveTo(c[0].x, c[0].y);
                    c[0].newStrokeStyle && (b.strokeStyle = c[0].newStrokeStyle);
                    c[0].newLineDashArray && b.setLineDash(c[0].newLineDashArray);
                    for (var g = 0; g < c.length - 3; g += 3)
                        if (b.bezierCurveTo(c[g + 1].x, c[g + 1].y, c[g + 2].x, c[g + 2].y, c[g + 3].x, c[g + 3].y), u && d.bezierCurveTo(c[g + 1].x, c[g + 1].y, c[g + 2].x, c[g + 2].y, c[g + 3].x, c[g + 3].y), c[g + 3].newStrokeStyle || c[g + 3].newLineDashArray)
                            b.stroke(), b.beginPath(), b.moveTo(c[g + 3].x, c[g + 3].y), c[g + 3].newStrokeStyle && (b.strokeStyle = c[g + 3].newStrokeStyle), c[g + 3].newLineDashArray &&
                                    b.setLineDash(c[g + 3].newLineDashArray);
                    b.stroke()
                }
                b.beginPath();
                b.moveTo(c[0].x, c[0].y);
                u && (d.beginPath(), d.moveTo(c[0].x, c[0].y));
                for (g = 0; g < c.length - 3; g += 3)
                    b.bezierCurveTo(c[g + 1].x, c[g + 1].y, c[g + 2].x, c[g + 2].y, c[g + 3].x, c[g + 3].y), u && d.bezierCurveTo(c[g + 1].x, c[g + 1].y, c[g + 2].x, c[g + 2].y, c[g + 3].x, c[g + 3].y);
                0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? t = r : 0 > a.axisY.viewportMaximum ? t = f.y1 : 0 < a.axisY.viewportMinimum && (t = e.y2);
                y = {x: c[0].x, y: c[0].y};
                b.lineTo(c[c.length - 1].x, t);
                b.lineTo(y.x, t);
                b.closePath();
                b.globalAlpha = k.fillOpacity;
                b.fill();
                b.globalAlpha = 1;
                u && (d.lineTo(c[c.length - 1].x, t), d.lineTo(y.x, t), d.closePath(), d.fill())
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx, e = a.axisX.lineCoordinates, f = a.axisY.lineCoordinates, g = [], h = this.plotArea;
            b.save();
            u && d.save();
            b.beginPath();
            b.rect(h.x1, h.y1, h.width, h.height);
            b.clip();
            u && (d.beginPath(), d.rect(h.x1, h.y1, h.width, h.height), d.clip());
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                var q =
                        a.dataSeriesIndexes[h], k = this.data[q], n = k.dataPoints, g = k.id;
                this._eventManager.objectMap[g] = {objectType: "dataSeries", dataSeriesIndex: q};
                g = C(g);
                d.fillStyle = g;
                var g = [], m = 0, l, p, r = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) + 0.5 << 0, t, y = null, s = [];
                if (0 < n.length) {
                    var z = k._colorSet[m % k._colorSet.length], w = k._options.lineColor || z, x = w;
                    b.fillStyle = z;
                    b.strokeStyle = w;
                    b.lineWidth = k.lineThickness;
                    var v = "solid";
                    if (b.setLineDash) {
                        var A = D(k.nullDataLineDashType,
                                k.lineThickness), v = k.lineDashType, H = D(v, k.lineThickness);
                        b.setLineDash(H)
                    }
                    for (p = !1; m < n.length; m++)
                        if (l = n[m].x.getTime ? n[m].x.getTime() : n[m].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !p)))
                            if ("number" !== typeof n[m].y)
                                0 < m && !p && (k.connectNullData ? b.setLineDash && (0 < s.length && (k._options.nullDataLineDashType || !n[m - 1].lineDashType)) && (s[s.length - 1].newLineDashArray = A, v = k.nullDataLineDashType) : (c(), s = [])), p = !0;
                            else {
                                l = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit *
                                        (l - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (n[m].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var K = k.dataPointIds[m];
                                this._eventManager.objectMap[K] = {id: K, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: m, x1: l, y1: p};
                                s[s.length] = {x: l, y: p};
                                m < n.length - 1 && (x !== (n[m].lineColor || w) || v !== (n[m].lineDashType || k.lineDashType)) && (x = n[m].lineColor || w, s[s.length - 1].newStrokeStyle = x, b.setLineDash && (n[m].lineDashType ?
                                        (v = n[m].lineDashType, s[s.length - 1].newLineDashArray = D(v, k.lineThickness)) : (v = k.lineDashType, s[s.length - 1].newLineDashArray = H)));
                                if (0 !== n[m].markerSize && (0 < n[m].markerSize || 0 < k.markerSize)) {
                                    var I = k.getMarkerProperties(m, l, p, b);
                                    g.push(I);
                                    K = C(K);
                                    u && g.push({x: l, y: p, ctx: d, type: I.type, size: I.size, color: K, borderColor: K, borderThickness: I.borderThickness})
                                }
                                (n[m].indexLabel || k.indexLabel || n[m].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({chartType: "splineArea", dataPoint: n[m], dataSeries: k,
                                    point: {x: l, y: p}, direction: 0 <= n[m].y ? 1 : -1, color: z});
                                p = !1
                            }
                    c();
                    P.drawMarkers(g)
                }
            }
            b.restore();
            u && this._eventManager.ghostCtx.restore();
            return{source: b, dest: this.plotArea.ctx, animationCallback: B.xClipAnimation, easingFunction: B.easing.linear, animationBase: 0}
        }
    };
    v.prototype.renderStepArea = function (a) {
        function c() {
            z && (0 < k.lineThickness && b.stroke(), 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? s = y : 0 > a.axisY.viewportMaximum ? s = f.y1 : 0 < a.axisY.viewportMinimum && (s = e.y2), b.lineTo(p, s), b.lineTo(z.x, s), b.closePath(),
                    b.globalAlpha = k.fillOpacity, b.fill(), b.globalAlpha = 1, u && (d.lineTo(p, s), d.lineTo(z.x, s), d.closePath(), d.fill()), b.beginPath(), b.moveTo(p, r), d.beginPath(), d.moveTo(p, r), z = {x: p, y: r})
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx, e = a.axisX.lineCoordinates, f = a.axisY.lineCoordinates, g = [], h = this.plotArea;
            b.save();
            u && d.save();
            b.beginPath();
            b.rect(h.x1, h.y1, h.width, h.height);
            b.clip();
            u && (d.beginPath(), d.rect(h.x1, h.y1, h.width, h.height), d.clip());
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                var q = a.dataSeriesIndexes[h], k = this.data[q], n = k.dataPoints, g = k.id;
                this._eventManager.objectMap[g] = {objectType: "dataSeries", dataSeriesIndex: q};
                g = C(g);
                d.fillStyle = g;
                var g = [], m = !0, l = 0, p, r, t, y = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) + 0.5 << 0, s, z = null, w = !1;
                if (0 < n.length) {
                    var x = k._colorSet[l % k._colorSet.length], v = k._options.lineColor || x, A = v;
                    b.fillStyle = x;
                    b.strokeStyle = v;
                    b.lineWidth =
                            k.lineThickness;
                    var H = "solid";
                    if (b.setLineDash) {
                        var K = D(k.nullDataLineDashType, k.lineThickness), H = k.lineDashType, I = D(H, k.lineThickness);
                        b.setLineDash(I)
                    }
                    for (; l < n.length; l++)
                        if (t = n[l].x.getTime ? n[l].x.getTime() : n[l].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !w))) {
                            var G = r;
                            "number" !== typeof n[l].y ? (k.connectNullData || (w || m) || c(), w = !0) : (p = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (t - a.axisX.conversionParameters.minimum) +
                                    0.5 << 0, r = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (n[l].y - a.axisY.conversionParameters.minimum) + 0.5 << 0, m || w ? (!m && k.connectNullData ? (b.setLineDash && (k._options.nullDataLineDashType || H === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (b.stroke(), H = k.nullDataLineDashType, b.setLineDash(K)), b.lineTo(p, G), b.lineTo(p, r), u && (d.lineTo(p, G), d.lineTo(p, r))) : (b.beginPath(), b.moveTo(p, r), u && (d.beginPath(), d.moveTo(p, r)), z = {x: p, y: r}), w = m = !1) : (b.lineTo(p, G), u &&
                                    d.lineTo(p, G), b.lineTo(p, r), u && d.lineTo(p, r), 0 == l % 250 && c()), l < n.length - 1 && (A !== (n[l].lineColor || v) || H !== (n[l].lineDashType || k.lineDashType)) && (c(), A = n[l].lineColor || v, b.strokeStyle = A, b.setLineDash && (n[l].lineDashType ? (H = n[l].lineDashType, b.setLineDash(D(H, k.lineThickness))) : (H = k.lineDashType, b.setLineDash(I)))), G = k.dataPointIds[l], this._eventManager.objectMap[G] = {id: G, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: l, x1: p, y1: r}, 0 !== n[l].markerSize && (0 < n[l].markerSize || 0 < k.markerSize) && (t =
                                    k.getMarkerProperties(l, p, r, b), g.push(t), G = C(G), u && g.push({x: p, y: r, ctx: d, type: t.type, size: t.size, color: G, borderColor: G, borderThickness: t.borderThickness})), (n[l].indexLabel || k.indexLabel || n[l].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({chartType: "stepArea", dataPoint: n[l], dataSeries: k, point: {x: p, y: r}, direction: 0 <= n[l].y ? 1 : -1, color: x}))
                        }
                    c();
                    P.drawMarkers(g)
                }
            }
            b.restore();
            u && this._eventManager.ghostCtx.restore();
            return{source: b, dest: this.plotArea.ctx, animationCallback: B.xClipAnimation,
                easingFunction: B.easing.linear, animationBase: 0}
        }
    };
    v.prototype.renderStackedArea = function (a) {
        function c() {
            if (!(1 > h.length)) {
                for (0 < s.lineThickness && b.stroke(); 0 < h.length; ) {
                    var a = h.pop();
                    b.lineTo(a.x, a.y);
                    u && r.lineTo(a.x, a.y)
                }
                b.closePath();
                b.globalAlpha = s.fillOpacity;
                b.fill();
                b.globalAlpha = 1;
                b.beginPath();
                u && (r.closePath(), r.fill(), r.beginPath());
                h = []
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null, e = [], f = this.plotArea, g = [], h = [], q = [], k = 0, n, m, l, p = a.axisY.conversionParameters.reference +
                    a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0, r = this._eventManager.ghostCtx;
            u && r.beginPath();
            b.save();
            u && r.save();
            b.beginPath();
            b.rect(f.x1, f.y1, f.width, f.height);
            b.clip();
            u && (r.beginPath(), r.rect(f.x1, f.y1, f.width, f.height), r.clip());
            for (var t = [], f = 0; f < a.dataSeriesIndexes.length; f++) {
                var y = a.dataSeriesIndexes[f], s = this.data[y], z = s.dataPoints;
                s.dataPointIndexes = [];
                for (k = 0; k < z.length; k++)
                    y = z[k].x.getTime ? z[k].x.getTime() : z[k].x, s.dataPointIndexes[y] = k, t[y] ||
                            (q.push(y), t[y] = !0);
                q.sort(Aa)
            }
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                y = a.dataSeriesIndexes[f];
                s = this.data[y];
                z = s.dataPoints;
                t = !0;
                h = [];
                k = s.id;
                this._eventManager.objectMap[k] = {objectType: "dataSeries", dataSeriesIndex: y};
                k = C(k);
                r.fillStyle = k;
                if (0 < q.length) {
                    var d = s._colorSet[0], w = s._options.lineColor || d, x = w;
                    b.fillStyle = d;
                    b.strokeStyle = w;
                    b.lineWidth = s.lineThickness;
                    var v = "solid";
                    if (b.setLineDash) {
                        var A = D(s.nullDataLineDashType, s.lineThickness), v = s.lineDashType, H = D(v, s.lineThickness);
                        b.setLineDash(H)
                    }
                    for (var K =
                            !0, k = 0; k < q.length; k++) {
                        l = q[k];
                        var I = null, I = 0 <= s.dataPointIndexes[l] ? z[s.dataPointIndexes[l]] : {x: l, y: null};
                        if (!(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax && (!s.connectNullData || !K)))
                            if ("number" !== typeof I.y)
                                s.connectNullData || (K || t) || c(), K = !0;
                            else {
                                n = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (l - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                m = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (I.y - a.axisY.conversionParameters.minimum);
                                var G = g[l] ? g[l] : 0;
                                m -= G;
                                h.push({x: n, y: p - G});
                                g[l] = p - m;
                                t || K ? (!t && s.connectNullData ? (b.setLineDash && (s._options.nullDataLineDashType || v === s.lineDashType && s.lineDashType !== s.nullDataLineDashType) && (b.stroke(), v = s.nullDataLineDashType, b.setLineDash(A)), b.lineTo(n, m), u && r.lineTo(n, m)) : (b.beginPath(), b.moveTo(n, m), u && (r.beginPath(), r.moveTo(n, m))), K = t = !1) : (b.lineTo(n, m), u && r.lineTo(n, m), 0 == k % 250 && (c(), b.moveTo(n, m), u && r.moveTo(n, m), h.push({x: n, y: p - G})));
                                k < z.length - 1 && (x !== (z[k].lineColor || w) || v !== (z[k].lineDashType ||
                                        s.lineDashType)) && (c(), b.beginPath(), b.moveTo(n, m), h.push({x: n, y: p - G}), x = z[k].lineColor || w, b.strokeStyle = x, b.setLineDash && (z[k].lineDashType ? (v = z[k].lineDashType, b.setLineDash(D(v, s.lineThickness))) : (v = s.lineDashType, b.setLineDash(H))));
                                if (0 <= s.dataPointIndexes[l]) {
                                    var S = s.dataPointIds[s.dataPointIndexes[l]];
                                    this._eventManager.objectMap[S] = {id: S, objectType: "dataPoint", dataSeriesIndex: y, dataPointIndex: s.dataPointIndexes[l], x1: n, y1: m}
                                }
                                0 <= s.dataPointIndexes[l] && 0 !== I.markerSize && (0 < I.markerSize || 0 < s.markerSize) &&
                                        (l = s.getMarkerProperties(k, n, m, b), e.push(l), markerColor = C(S), u && e.push({x: n, y: m, ctx: r, type: l.type, size: l.size, color: markerColor, borderColor: markerColor, borderThickness: l.borderThickness}));
                                (I.indexLabel || s.indexLabel || I.indexLabelFormatter || s.indexLabelFormatter) && this._indexLabels.push({chartType: "stackedArea", dataPoint: I, dataSeries: s, point: {x: n, y: m}, direction: 0 <= z[k].y ? 1 : -1, color: d})
                            }
                    }
                    c();
                    b.moveTo(n, m);
                    u && r.moveTo(n, m)
                }
                delete s.dataPointIndexes
            }
            P.drawMarkers(e);
            b.restore();
            u && r.restore();
            return{source: b,
                dest: this.plotArea.ctx, animationCallback: B.xClipAnimation, easingFunction: B.easing.linear, animationBase: 0}
        }
    };
    v.prototype.renderStackedArea100 = function (a) {
        function c() {
            for (0 < w.lineThickness && b.stroke(); 0 < h.length; ) {
                var a = h.pop();
                b.lineTo(a.x, a.y);
                u && y.lineTo(a.x, a.y)
            }
            b.closePath();
            b.globalAlpha = w.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            b.beginPath();
            u && (y.closePath(), y.fill(), y.beginPath());
            h = []
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null, e = this.plotArea,
                    f = [], g = [], h = [], q = [], k = 0, n, m, l, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0, r = this.dataPointMaxWidth ? this.dataPointMaxWidth : 0.15 * this.width << 0, t = a.axisX.dataInfo.minDiff, t = 0.9 * e.width / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(t) << 0, y = this._eventManager.ghostCtx;
            b.save();
            u && y.save();
            b.beginPath();
            b.rect(e.x1, e.y1, e.width, e.height);
            b.clip();
            u && (y.beginPath(), y.rect(e.x1, e.y1, e.width, e.height), y.clip());
            for (var s = [], e = 0; e < a.dataSeriesIndexes.length; e++) {
                var z = a.dataSeriesIndexes[e], w = this.data[z], x = w.dataPoints;
                w.dataPointIndexes = [];
                for (k = 0; k < x.length; k++)
                    z = x[k].x.getTime ? x[k].x.getTime() : x[k].x, w.dataPointIndexes[z] = k, s[z] || (q.push(z), s[z] = !0);
                q.sort(Aa)
            }
            for (e = 0; e < a.dataSeriesIndexes.length; e++) {
                z = a.dataSeriesIndexes[e];
                w = this.data[z];
                x = w.dataPoints;
                s = !0;
                d = w.id;
                this._eventManager.objectMap[d] = {objectType: "dataSeries", dataSeriesIndex: z};
                d = C(d);
                y.fillStyle = d;
                1 == x.length && (t = r);
                1 > t ? t = 1 : t > r && (t = r);
                h = [];
                if (0 < q.length) {
                    var d = w._colorSet[k % w._colorSet.length], v = w._options.lineColor || d, A = v;
                    b.fillStyle = d;
                    b.strokeStyle = v;
                    b.lineWidth = w.lineThickness;
                    var H = "solid";
                    if (b.setLineDash) {
                        var K = D(w.nullDataLineDashType, w.lineThickness), H = w.lineDashType, I = D(H, w.lineThickness);
                        b.setLineDash(I)
                    }
                    for (var G = !0, k = 0; k < q.length; k++) {
                        l = q[k];
                        var S = null, S = 0 <= w.dataPointIndexes[l] ? x[w.dataPointIndexes[l]] : {x: l, y: null};
                        if (!(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax && (!w.connectNullData || !G)))
                            if ("number" !==
                                    typeof S.y)
                                w.connectNullData || (G || s) || c(), G = !0;
                            else {
                                m = 0 !== a.dataPointYSums[l] ? 100 * (S.y / a.dataPointYSums[l]) : 0;
                                n = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (l - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                m = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (m - a.axisY.conversionParameters.minimum);
                                var sa = g[l] ? g[l] : 0;
                                m -= sa;
                                h.push({x: n, y: p - sa});
                                g[l] = p - m;
                                s || G ? (!s && w.connectNullData ? (b.setLineDash && (w._options.nullDataLineDashType || H ===
                                        w.lineDashType && w.lineDashType !== w.nullDataLineDashType) && (b.stroke(), H = w.nullDataLineDashType, b.setLineDash(K)), b.lineTo(n, m), u && y.lineTo(n, m)) : (b.beginPath(), b.moveTo(n, m), u && (y.beginPath(), y.moveTo(n, m))), G = s = !1) : (b.lineTo(n, m), u && y.lineTo(n, m), 0 == k % 250 && (c(), b.moveTo(n, m), u && y.moveTo(n, m), h.push({x: n, y: p - sa})));
                                k < x.length - 1 && (A !== (x[k].lineColor || v) || H !== (x[k].lineDashType || w.lineDashType)) && (c(), b.beginPath(), b.moveTo(n, m), h.push({x: n, y: p - sa}), A = x[k].lineColor || v, b.strokeStyle = A, b.setLineDash &&
                                        (x[k].lineDashType ? (H = x[k].lineDashType, b.setLineDash(D(H, w.lineThickness))) : (H = w.lineDashType, b.setLineDash(I))));
                                if (0 <= w.dataPointIndexes[l]) {
                                    var xa = w.dataPointIds[w.dataPointIndexes[l]];
                                    this._eventManager.objectMap[xa] = {id: xa, objectType: "dataPoint", dataSeriesIndex: z, dataPointIndex: w.dataPointIndexes[l], x1: n, y1: m}
                                }
                                0 <= w.dataPointIndexes[l] && 0 !== S.markerSize && (0 < S.markerSize || 0 < w.markerSize) && (l = w.getMarkerProperties(k, n, m, b), f.push(l), markerColor = C(xa), u && f.push({x: n, y: m, ctx: y, type: l.type, size: l.size,
                                    color: markerColor, borderColor: markerColor, borderThickness: l.borderThickness}));
                                (S.indexLabel || w.indexLabel || S.indexLabelFormatter || w.indexLabelFormatter) && this._indexLabels.push({chartType: "stackedArea100", dataPoint: S, dataSeries: w, point: {x: n, y: m}, direction: 0 <= x[k].y ? 1 : -1, color: d})
                            }
                    }
                    c();
                    b.moveTo(n, m);
                    u && y.moveTo(n, m)
                }
                delete w.dataPointIndexes
            }
            P.drawMarkers(f);
            b.restore();
            u && y.restore();
            return{source: b, dest: this.plotArea.ctx, animationCallback: B.xClipAnimation, easingFunction: B.easing.linear, animationBase: 0}
        }
    };
    v.prototype.renderBubble = function (a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx, b = a.dataSeriesIndexes.length;
        if (!(0 >= b)) {
            var d = this.plotArea, e = 0, f, g, h = this.dataPointMaxWidth ? this.dataPointMaxWidth : 0.15 * this.width << 0, e = a.axisX.dataInfo.minDiff, b = 0.9 * (d.width / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(e) / b) << 0;
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height),
                    this._eventManager.ghostCtx.clip());
            for (var q = -Infinity, k = Infinity, n = 0; n < a.dataSeriesIndexes.length; n++)
                for (var m = a.dataSeriesIndexes[n], l = this.data[m], p = l.dataPoints, r = 0, e = 0; e < p.length; e++)
                    f = p[e].getTime ? f = p[e].x.getTime() : f = p[e].x, f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax || "undefined" === typeof p[e].z || (r = p[e].z, r > q && (q = r), r < k && (k = r));
            for (var t = 25 * Math.PI, d = Math.max(Math.pow(0.25 * Math.min(d.height, d.width) / 2, 2) * Math.PI, t), n = 0; n < a.dataSeriesIndexes.length; n++)
                if (m = a.dataSeriesIndexes[n],
                        l = this.data[m], p = l.dataPoints, 1 == p.length && (b = h), 1 > b ? b = 1 : b > h && (b = h), 0 < p.length)
                    for (c.strokeStyle = "#4572A7 ", e = 0; e < p.length; e++)
                        if (f = p[e].getTime ? f = p[e].x.getTime() : f = p[e].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof p[e].y) {
                            f = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (f - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (p[e].y - a.axisY.conversionParameters.minimum) +
                                    0.5 << 0;
                            var r = p[e].z, y = 2 * Math.max(Math.sqrt((q === k ? d / 2 : t + (d - t) / (q - k) * (r - k)) / Math.PI) << 0, 1), r = l.getMarkerProperties(e, c);
                            r.size = y;
                            c.globalAlpha = l.fillOpacity;
                            P.drawMarker(f, g, c, r.type, r.size, r.color, r.borderColor, r.borderThickness);
                            c.globalAlpha = 1;
                            var s = l.dataPointIds[e];
                            this._eventManager.objectMap[s] = {id: s, objectType: "dataPoint", dataSeriesIndex: m, dataPointIndex: e, x1: f, y1: g, size: y};
                            y = C(s);
                            u && P.drawMarker(f, g, this._eventManager.ghostCtx, r.type, r.size, y, y, r.borderThickness);
                            (p[e].indexLabel || l.indexLabel ||
                                    p[e].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({chartType: "bubble", dataPoint: p[e], dataSeries: l, point: {x: f, y: g}, direction: 1, bounds: {x1: f - r.size / 2, y1: g - r.size / 2, x2: f + r.size / 2, y2: g + r.size / 2}, color: null})
                        }
            c.restore();
            u && this._eventManager.ghostCtx.restore();
            return{source: c, dest: this.plotArea.ctx, animationCallback: B.fadeInAnimation, easingFunction: B.easing.easeInQuad, animationBase: 0}
        }
    };
    v.prototype.renderScatter = function (a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx, b = a.dataSeriesIndexes.length;
        if (!(0 >= b)) {
            var d = this.plotArea, e = 0, f, g, h = this.dataPointMaxWidth ? this.dataPointMaxWidth : 0.15 * this.width << 0, e = a.axisX.dataInfo.minDiff, b = 0.9 * (d.width / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(e) / b) << 0;
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var q = 0; q < a.dataSeriesIndexes.length; q++) {
                var k = a.dataSeriesIndexes[q],
                        n = this.data[k], m = n.dataPoints;
                1 == m.length && (b = h);
                1 > b ? b = 1 : b > h && (b = h);
                if (0 < m.length) {
                    c.strokeStyle = "#4572A7 ";
                    Math.pow(0.3 * Math.min(d.height, d.width) / 2, 2);
                    for (var l = 0, p = 0, e = 0; e < m.length; e++)
                        if (f = m[e].getTime ? f = m[e].x.getTime() : f = m[e].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[e].y) {
                            f = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (f - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit *
                                    (m[e].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            var r = n.getMarkerProperties(e, f, g, c);
                            c.globalAlpha = n.fillOpacity;
                            P.drawMarker(r.x, r.y, r.ctx, r.type, r.size, r.color, r.borderColor, r.borderThickness);
                            c.globalAlpha = 1;
                            Math.sqrt((l - f) * (l - f) + (p - g) * (p - g)) < Math.min(r.size, 5) && m.length > Math.min(this.plotArea.width, this.plotArea.height) || (l = n.dataPointIds[e], this._eventManager.objectMap[l] = {id: l, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: e, x1: f, y1: g}, l = C(l), u && P.drawMarker(r.x, r.y, this._eventManager.ghostCtx,
                                    r.type, r.size, l, l, r.borderThickness), (m[e].indexLabel || n.indexLabel || m[e].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({chartType: "scatter", dataPoint: m[e], dataSeries: n, point: {x: f, y: g}, direction: 1, bounds: {x1: f - r.size / 2, y1: g - r.size / 2, x2: f + r.size / 2, y2: g + r.size / 2}, color: null}), l = f, p = g)
                        }
                }
            }
            c.restore();
            u && this._eventManager.ghostCtx.restore();
            return{source: c, dest: this.plotArea.ctx, animationCallback: B.fadeInAnimation, easingFunction: B.easing.easeInQuad, animationBase: 0}
        }
    };
    v.prototype.renderCandlestick =
            function (a) {
                var c = a.targetCanvasCtx || this.plotArea.ctx, b = this._eventManager.ghostCtx;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    var d = null, d = this.plotArea, e = 0, f, g, h, q, k, n, e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
                    f = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.015 * this.width;
                    var m = a.axisX.dataInfo.minDiff;
                    isFinite(m) || (m = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
                    m = this.dataPointWidth ? this.dataPointWidth :
                            0.7 * d.width / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(m) << 0;
                    this.dataPointMaxWidth && e > f && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, f));
                    !this.dataPointMaxWidth && (this.dataPointMinWidth && f < e) && (f = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                    m < e && (m = e);
                    m > f && (m = f);
                    c.save();
                    u && b.save();
                    c.beginPath();
                    c.rect(d.x1, d.y1, d.width, d.height);
                    c.clip();
                    u && (b.rect(d.x1, d.y1, d.width, d.height), b.clip());
                    for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                        var p =
                                a.dataSeriesIndexes[l], r = this.data[p], t = r.dataPoints;
                        if (0 < t.length)
                            for (var y = 5 < m && r.bevelEnabled ? !0 : !1, e = 0; e < t.length; e++)
                                if (t[e].getTime ? n = t[e].x.getTime() : n = t[e].x, !(n < a.axisX.dataInfo.viewPortMin || n > a.axisX.dataInfo.viewPortMax) && null !== t[e].y && t[e].y.length && "number" === typeof t[e].y[0] && "number" === typeof t[e].y[1] && "number" === typeof t[e].y[2] && "number" === typeof t[e].y[3]) {
                                    f = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (n - a.axisX.conversionParameters.minimum) +
                                            0.5 << 0;
                                    g = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (t[e].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                    h = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (t[e].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                    q = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (t[e].y[2] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                    k = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit *
                                            (t[e].y[3] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                    var s = f - m / 2 << 0, z = s + m << 0, d = t[e].color ? t[e].color : r._colorSet[0], w = Math.round(Math.max(1, 0.15 * m)), x = 0 === w % 2 ? 0 : 0.5, v = r.dataPointIds[e];
                                    this._eventManager.objectMap[v] = {id: v, objectType: "dataPoint", dataSeriesIndex: p, dataPointIndex: e, x1: s, y1: g, x2: z, y2: h, x3: f, y3: q, x4: f, y4: k, borderThickness: w, color: d};
                                    c.strokeStyle = d;
                                    c.beginPath();
                                    c.lineWidth = w;
                                    b.lineWidth = Math.max(w, 4);
                                    "candlestick" === r.type ? (c.moveTo(f - x, h), c.lineTo(f - x, Math.min(g, k)), c.stroke(), c.moveTo(f -
                                            x, Math.max(g, k)), c.lineTo(f - x, q), c.stroke(), M(c, s, Math.min(g, k), z, Math.max(g, k), t[e].y[0] <= t[e].y[3] ? r.risingColor : d, w, d, y, y, !1, !1, r.fillOpacity), u && (d = C(v), b.strokeStyle = d, b.moveTo(f - x, h), b.lineTo(f - x, Math.min(g, k)), b.stroke(), b.moveTo(f - x, Math.max(g, k)), b.lineTo(f - x, q), b.stroke(), M(b, s, Math.min(g, k), z, Math.max(g, k), d, 0, null, !1, !1, !1, !1))) : "ohlc" === r.type && (c.moveTo(f - x, h), c.lineTo(f - x, q), c.stroke(), c.beginPath(), c.moveTo(f, g), c.lineTo(s, g), c.stroke(), c.beginPath(), c.moveTo(f, k), c.lineTo(z, k), c.stroke(),
                                            u && (d = C(v), b.strokeStyle = d, b.moveTo(f - x, h), b.lineTo(f - x, q), b.stroke(), b.beginPath(), b.moveTo(f, g), b.lineTo(s, g), b.stroke(), b.beginPath(), b.moveTo(f, k), b.lineTo(z, k), b.stroke()));
                                    (t[e].indexLabel || r.indexLabel || t[e].indexLabelFormatter || r.indexLabelFormatter) && this._indexLabels.push({chartType: r.type, dataPoint: t[e], dataSeries: r, point: {x: s + (z - s) / 2, y: h}, direction: 1, bounds: {x1: s, y1: Math.min(h, q), x2: z, y2: Math.max(h, q)}, color: d})
                                }
                    }
                    c.restore();
                    u && b.restore();
                    return{source: c, dest: this.plotArea.ctx, animationCallback: B.fadeInAnimation,
                        easingFunction: B.easing.easeInQuad, animationBase: 0}
                }
            };
    v.prototype.renderRangeColumn = function (a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, e = 0, f, g, e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
            f = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
            var h = a.axisX.dataInfo.minDiff;
            isFinite(h) || (h = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
            h = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(h) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && e > f && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < e) && (f = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            h < e && (h = e);
            h > f && (h = f);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u &&
                    (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var q = 0; q < a.dataSeriesIndexes.length; q++) {
                var k = a.dataSeriesIndexes[q], n = this.data[k], m = n.dataPoints;
                if (0 < m.length)
                    for (var l = 5 < h && n.bevelEnabled ? !0 : !1, e = 0; e < m.length; e++)
                        if (m[e].getTime ? g = m[e].x.getTime() : g = m[e].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && null !== m[e].y && m[e].y.length && "number" === typeof m[e].y[0] && "number" === typeof m[e].y[1]) {
                            b = a.axisX.conversionParameters.reference +
                                    a.axisX.conversionParameters.pixelPerUnit * (g - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            d = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (m[e].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            f = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (m[e].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            var p = b - a.plotType.totalDataSeries * h / 2 + (a.previousDataSeriesCount + q) * h << 0, r = p + h << 0, b = m[e].color ? m[e].color : n._colorSet[e % n._colorSet.length];
                            if (d > f) {
                                var t = d, d = f;
                                f = t
                            }
                            t = n.dataPointIds[e];
                            this._eventManager.objectMap[t] = {id: t, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: e, x1: p, y1: d, x2: r, y2: f};
                            M(c, p, d, r, f, b, 0, b, l, l, !1, !1, n.fillOpacity);
                            b = C(t);
                            u && M(this._eventManager.ghostCtx, p, d, r, f, b, 0, null, !1, !1, !1, !1);
                            if (m[e].indexLabel || n.indexLabel || m[e].indexLabelFormatter || n.indexLabelFormatter)
                                this._indexLabels.push({chartType: "rangeColumn", dataPoint: m[e], dataSeries: n, indexKeyword: 0, point: {x: p + (r - p) / 2, y: m[e].y[1] >= m[e].y[0] ? f : d}, direction: m[e].y[1] >=
                                            m[e].y[0] ? -1 : 1, bounds: {x1: p, y1: Math.min(d, f), x2: r, y2: Math.max(d, f)}, color: b}), this._indexLabels.push({chartType: "rangeColumn", dataPoint: m[e], dataSeries: n, indexKeyword: 1, point: {x: p + (r - p) / 2, y: m[e].y[1] >= m[e].y[0] ? d : f}, direction: m[e].y[1] >= m[e].y[0] ? 1 : -1, bounds: {x1: p, y1: Math.min(d, f), x2: r, y2: Math.max(d, f)}, color: b})
                        }
            }
            c.restore();
            u && this._eventManager.ghostCtx.restore();
            return{source: c, dest: this.plotArea.ctx, animationCallback: B.fadeInAnimation, easingFunction: B.easing.easeInQuad, animationBase: 0}
        }
    };
    v.prototype.renderRangeBar =
            function (a) {
                var c = a.targetCanvasCtx || this.plotArea.ctx;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    var b = null, d = this.plotArea, e = 0, f, g, h, e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
                    f = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
                    var q = a.axisX.dataInfo.minDiff;
                    isFinite(q) || (q = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
                    q = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(q) / a.plotType.totalDataSeries) << 0;
                    this.dataPointMaxWidth && e > f && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, f));
                    !this.dataPointMaxWidth && (this.dataPointMinWidth && f < e) && (f = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                    q < e && (q = e);
                    q > f && (q = f);
                    c.save();
                    u && this._eventManager.ghostCtx.save();
                    c.beginPath();
                    c.rect(d.x1, d.y1, d.width, d.height);
                    c.clip();
                    u &&
                            (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
                    for (var k = 0; k < a.dataSeriesIndexes.length; k++) {
                        var n = a.dataSeriesIndexes[k], m = this.data[n], l = m.dataPoints;
                        if (0 < l.length) {
                            var p = 5 < q && m.bevelEnabled ? !0 : !1;
                            c.strokeStyle = "#4572A7 ";
                            for (e = 0; e < l.length; e++)
                                if (l[e].getTime ? h = l[e].x.getTime() : h = l[e].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && null !== l[e].y && l[e].y.length && "number" === typeof l[e].y[0] && "number" === typeof l[e].y[1]) {
                                    d = a.axisY.conversionParameters.reference +
                                            a.axisY.conversionParameters.pixelPerUnit * (l[e].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                    f = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (l[e].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                    g = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (h - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                    g = g - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount + k) * q << 0;
                                    var r = g + q << 0;
                                    d > f && (b = d, d = f, f = b);
                                    b = l[e].color ? l[e].color : m._colorSet[e %
                                            m._colorSet.length];
                                    M(c, d, g, f, r, b, 0, null, p, !1, !1, !1, m.fillOpacity);
                                    b = m.dataPointIds[e];
                                    this._eventManager.objectMap[b] = {id: b, objectType: "dataPoint", dataSeriesIndex: n, dataPointIndex: e, x1: d, y1: g, x2: f, y2: r};
                                    b = C(b);
                                    u && M(this._eventManager.ghostCtx, d, g, f, r, b, 0, null, !1, !1, !1, !1);
                                    if (l[e].indexLabel || m.indexLabel || l[e].indexLabelFormatter || m.indexLabelFormatter)
                                        this._indexLabels.push({chartType: "rangeBar", dataPoint: l[e], dataSeries: m, indexKeyword: 0, point: {x: l[e].y[1] >= l[e].y[0] ? d : f, y: g + (r - g) / 2}, direction: l[e].y[1] >=
                                                    l[e].y[0] ? -1 : 1, bounds: {x1: Math.min(d, f), y1: g, x2: Math.max(d, f), y2: r}, color: b}), this._indexLabels.push({chartType: "rangeBar", dataPoint: l[e], dataSeries: m, indexKeyword: 1, point: {x: l[e].y[1] >= l[e].y[0] ? f : d, y: g + (r - g) / 2}, direction: l[e].y[1] >= l[e].y[0] ? 1 : -1, bounds: {x1: Math.min(d, f), y1: g, x2: Math.max(d, f), y2: r}, color: b})
                                }
                        }
                    }
                    c.restore();
                    u && this._eventManager.ghostCtx.restore();
                    return{source: c, dest: this.plotArea.ctx, animationCallback: B.fadeInAnimation, easingFunction: B.easing.easeInQuad, animationBase: 0}
                }
            };
    v.prototype.renderRangeArea =
            function (a) {
                function c() {
                    if (y) {
                        var a = null;
                        0 < q.lineThickness && b.stroke();
                        for (var c = g.length - 1; 0 <= c; c--)
                            a = g[c], b.lineTo(a.x, a.y), d.lineTo(a.x, a.y);
                        b.closePath();
                        b.globalAlpha = q.fillOpacity;
                        b.fill();
                        b.globalAlpha = 1;
                        d.fill();
                        if (0 < q.lineThickness) {
                            b.beginPath();
                            b.moveTo(a.x, a.y);
                            for (c = 0; c < g.length; c++)
                                a = g[c], b.lineTo(a.x, a.y);
                            b.stroke()
                        }
                        b.beginPath();
                        b.moveTo(l, p);
                        d.beginPath();
                        d.moveTo(l, p);
                        y = {x: l, y: p};
                        g = [];
                        g.push({x: l, y: r})
                    }
                }
                var b = a.targetCanvasCtx || this.plotArea.ctx;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    var d =
                            this._eventManager.ghostCtx, e = [], f = this.plotArea;
                    b.save();
                    u && d.save();
                    b.beginPath();
                    b.rect(f.x1, f.y1, f.width, f.height);
                    b.clip();
                    u && (d.beginPath(), d.rect(f.x1, f.y1, f.width, f.height), d.clip());
                    for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                        var g = [], h = a.dataSeriesIndexes[f], q = this.data[h], k = q.dataPoints, e = q.id;
                        this._eventManager.objectMap[e] = {objectType: "dataSeries", dataSeriesIndex: h};
                        e = C(e);
                        d.fillStyle = e;
                        var e = [], n = !0, m = 0, l, p, r, t, y = null;
                        if (0 < k.length) {
                            var s = q._colorSet[m % q._colorSet.length], z = q._options.lineColor ||
                                    s, w = z;
                            b.fillStyle = s;
                            b.strokeStyle = z;
                            b.lineWidth = q.lineThickness;
                            var x = "solid";
                            if (b.setLineDash) {
                                var v = D(q.nullDataLineDashType, q.lineThickness), x = q.lineDashType, A = D(x, q.lineThickness);
                                b.setLineDash(A)
                            }
                            for (var H = !0; m < k.length; m++)
                                if (t = k[m].x.getTime ? k[m].x.getTime() : k[m].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!q.connectNullData || !H)))
                                    if (null !== k[m].y && k[m].y.length && "number" === typeof k[m].y[0] && "number" === typeof k[m].y[1]) {
                                        l = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit *
                                                (t - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                        p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (k[m].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                        r = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (k[m].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                        n || H ? (q.connectNullData && !n ? (b.setLineDash && (q._options.nullDataLineDashType || x === q.lineDashType && q.lineDashType !== q.nullDataLineDashType) && (g[g.length - 1].newLineDashArray = A, x =
                                                q.nullDataLineDashType, b.setLineDash(v)), b.lineTo(l, p), u && d.lineTo(l, p), g.push({x: l, y: r})) : (b.beginPath(), b.moveTo(l, p), y = {x: l, y: p}, g = [], g.push({x: l, y: r}), u && (d.beginPath(), d.moveTo(l, p))), H = n = !1) : (b.lineTo(l, p), g.push({x: l, y: r}), u && d.lineTo(l, p), 0 == m % 250 && c());
                                        t = q.dataPointIds[m];
                                        this._eventManager.objectMap[t] = {id: t, objectType: "dataPoint", dataSeriesIndex: h, dataPointIndex: m, x1: l, y1: p, y2: r};
                                        m < k.length - 1 && (w !== (k[m].lineColor || z) || x !== (k[m].lineDashType || q.lineDashType)) && (c(), w = k[m].lineColor || z,
                                                g[g.length - 1].newStrokeStyle = w, b.strokeStyle = w, b.setLineDash && (k[m].lineDashType ? (x = k[m].lineDashType, g[g.length - 1].newLineDashArray = D(x, q.lineThickness), b.setLineDash(g[g.length - 1].newLineDashArray)) : (x = q.lineDashType, g[g.length - 1].newLineDashArray = A, b.setLineDash(A))));
                                        if (0 !== k[m].markerSize && (0 < k[m].markerSize || 0 < q.markerSize)) {
                                            var K = q.getMarkerProperties(m, l, r, b);
                                            e.push(K);
                                            var I = C(t);
                                            u && e.push({x: l, y: r, ctx: d, type: K.type, size: K.size, color: I, borderColor: I, borderThickness: K.borderThickness});
                                            K = q.getMarkerProperties(m,
                                                    l, p, b);
                                            e.push(K);
                                            I = C(t);
                                            u && e.push({x: l, y: p, ctx: d, type: K.type, size: K.size, color: I, borderColor: I, borderThickness: K.borderThickness})
                                        }
                                        if (k[m].indexLabel || q.indexLabel || k[m].indexLabelFormatter || q.indexLabelFormatter)
                                            this._indexLabels.push({chartType: "rangeArea", dataPoint: k[m], dataSeries: q, indexKeyword: 0, point: {x: l, y: p}, direction: k[m].y[0] <= k[m].y[1] ? -1 : 1, color: s}), this._indexLabels.push({chartType: "rangeArea", dataPoint: k[m], dataSeries: q, indexKeyword: 1, point: {x: l, y: r}, direction: k[m].y[0] <= k[m].y[1] ? 1 :
                                                        -1, color: s})
                                    } else
                                        H || n || c(), H = !0;
                            c();
                            P.drawMarkers(e)
                        }
                    }
                    b.restore();
                    u && this._eventManager.ghostCtx.restore();
                    return{source: b, dest: this.plotArea.ctx, animationCallback: B.xClipAnimation, easingFunction: B.easing.linear, animationBase: 0}
                }
            };
    v.prototype.renderRangeSplineArea = function (a) {
        function c(a, c) {
            var e = ma(p, 2);
            if (0 < e.length) {
                if (0 < h.lineThickness) {
                    b.strokeStyle = c;
                    b.setLineDash && b.setLineDash(a);
                    b.beginPath();
                    b.moveTo(e[0].x, e[0].y);
                    for (var f = 0; f < e.length - 3; f += 3) {
                        if (e[f].newStrokeStyle || e[f].newLineDashArray)
                            b.stroke(),
                                    b.beginPath(), b.moveTo(e[f].x, e[f].y), e[f].newStrokeStyle && (b.strokeStyle = e[f].newStrokeStyle), e[f].newLineDashArray && b.setLineDash(e[f].newLineDashArray);
                        b.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x, e[f + 3].y)
                    }
                    b.stroke()
                }
                b.beginPath();
                b.moveTo(e[0].x, e[0].y);
                u && (d.beginPath(), d.moveTo(e[0].x, e[0].y));
                for (f = 0; f < e.length - 3; f += 3)
                    b.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x, e[f + 3].y), u && d.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x, e[f + 3].y);
                e = ma(r, 2);
                b.lineTo(r[r.length -
                1].x, r[r.length - 1].y);
                for (f = e.length - 1; 2 < f; f -= 3)
                    b.bezierCurveTo(e[f - 1].x, e[f - 1].y, e[f - 2].x, e[f - 2].y, e[f - 3].x, e[f - 3].y), u && d.bezierCurveTo(e[f - 1].x, e[f - 1].y, e[f - 2].x, e[f - 2].y, e[f - 3].x, e[f - 3].y);
                b.closePath();
                b.globalAlpha = h.fillOpacity;
                b.fill();
                u && (d.closePath(), d.fill());
                b.globalAlpha = 1;
                if (0 < h.lineThickness) {
                    b.strokeStyle = c;
                    b.setLineDash && b.setLineDash(a);
                    b.beginPath();
                    b.moveTo(e[0].x, e[0].y);
                    for (var g = f = 0; f < e.length - 3; f += 3, g++) {
                        if (p[g].newStrokeStyle || p[g].newLineDashArray)
                            b.stroke(), b.beginPath(),
                                    b.moveTo(e[f].x, e[f].y), p[g].newStrokeStyle && (b.strokeStyle = p[g].newStrokeStyle), p[g].newLineDashArray && b.setLineDash(p[g].newLineDashArray);
                        b.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x, e[f + 3].y)
                    }
                    b.stroke()
                }
                b.beginPath()
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx, e = [], f = this.plotArea;
            b.save();
            u && d.save();
            b.beginPath();
            b.rect(f.x1, f.y1, f.width, f.height);
            b.clip();
            u && (d.beginPath(), d.rect(f.x1, f.y1, f.width, f.height),
                    d.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                var g = a.dataSeriesIndexes[f], h = this.data[g], q = h.dataPoints, e = h.id;
                this._eventManager.objectMap[e] = {objectType: "dataSeries", dataSeriesIndex: g};
                e = C(e);
                d.fillStyle = e;
                var e = [], k = 0, n, m, l, p = [], r = [];
                if (0 < q.length) {
                    var t = h._colorSet[k % h._colorSet.length], y = h._options.lineColor || t, s = y;
                    b.fillStyle = t;
                    b.lineWidth = h.lineThickness;
                    var z = "solid", w;
                    if (b.setLineDash) {
                        var x = D(h.nullDataLineDashType, h.lineThickness), z = h.lineDashType;
                        w = D(z, h.lineThickness)
                    }
                    for (m = !1; k <
                            q.length; k++)
                        if (n = q[k].x.getTime ? q[k].x.getTime() : q[k].x, !(n < a.axisX.dataInfo.viewPortMin || n > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !m)))
                            if (null !== q[k].y && q[k].y.length && "number" === typeof q[k].y[0] && "number" === typeof q[k].y[1]) {
                                n = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (n - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                m = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (q[k].y[0] - a.axisY.conversionParameters.minimum) +
                                        0.5 << 0;
                                l = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (q[k].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var v = h.dataPointIds[k];
                                this._eventManager.objectMap[v] = {id: v, objectType: "dataPoint", dataSeriesIndex: g, dataPointIndex: k, x1: n, y1: m, y2: l};
                                p[p.length] = {x: n, y: m};
                                r[r.length] = {x: n, y: l};
                                k < q.length - 1 && (s !== (q[k].lineColor || y) || z !== (q[k].lineDashType || h.lineDashType)) && (s = q[k].lineColor || y, p[p.length - 1].newStrokeStyle = s, b.setLineDash && (q[k].lineDashType ? (z = q[k].lineDashType,
                                        p[p.length - 1].newLineDashArray = D(z, h.lineThickness)) : (z = h.lineDashType, p[p.length - 1].newLineDashArray = w)));
                                if (0 !== q[k].markerSize && (0 < q[k].markerSize || 0 < h.markerSize)) {
                                    var A = h.getMarkerProperties(k, n, m, b);
                                    e.push(A);
                                    var H = C(v);
                                    u && e.push({x: n, y: m, ctx: d, type: A.type, size: A.size, color: H, borderColor: H, borderThickness: A.borderThickness});
                                    A = h.getMarkerProperties(k, n, l, b);
                                    e.push(A);
                                    H = C(v);
                                    u && e.push({x: n, y: l, ctx: d, type: A.type, size: A.size, color: H, borderColor: H, borderThickness: A.borderThickness})
                                }
                                if (q[k].indexLabel ||
                                        h.indexLabel || q[k].indexLabelFormatter || h.indexLabelFormatter)
                                    this._indexLabels.push({chartType: "splineArea", dataPoint: q[k], dataSeries: h, indexKeyword: 0, point: {x: n, y: m}, direction: q[k].y[0] <= q[k].y[1] ? -1 : 1, color: t}), this._indexLabels.push({chartType: "splineArea", dataPoint: q[k], dataSeries: h, indexKeyword: 1, point: {x: n, y: l}, direction: q[k].y[0] <= q[k].y[1] ? 1 : -1, color: t});
                                m = !1
                            } else
                                0 < k && !m && (h.connectNullData ? b.setLineDash && (0 < p.length && (h._options.nullDataLineDashType || !q[k - 1].lineDashType)) && (p[p.length -
                                1].newLineDashArray = x, z = h.nullDataLineDashType) : (c(w, y), p = [], r = [])), m = !0;
                    c(w, y);
                    P.drawMarkers(e)
                }
            }
            b.restore();
            u && this._eventManager.ghostCtx.restore();
            return{source: b, dest: this.plotArea.ctx, animationCallback: B.xClipAnimation, easingFunction: B.easing.linear, animationBase: 0}
        }
    };
    var ya = function (a, c, b, d, e, f, g, h, q) {
        if (!(0 > b)) {
            "undefined" === typeof h && (h = 1);
            if (!u) {
                var k = Number((g % (2 * Math.PI)).toFixed(8));
                Number((f % (2 * Math.PI)).toFixed(8)) === k && (g -= 1E-4)
            }
            a.save();
            a.globalAlpha = h;
            "pie" === e ? (a.beginPath(), a.moveTo(c.x,
                    c.y), a.arc(c.x, c.y, b, f, g, !1), a.fillStyle = d, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(c.x, c.y, b, f, g, !1), 0 <= q && a.arc(c.x, c.y, q * b, g, f, !0), a.closePath(), a.fillStyle = d, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
            a.globalAlpha = 1;
            a.restore()
        }
    };
    v.prototype.renderPie = function (a) {
        function c() {
            if (k && n) {
                for (var a = 0, b = 0, c = 0, d = 0, e = 0; e < n.length; e++) {
                    var f = n[e], g = k.dataPointIds[e], h = {id: g, objectType: "dataPoint", dataPointIndex: e, dataSeriesIndex: 0};
                    p.push(h);
                    var m = {percent: null, total: null}, r = null, m = q.getPercentAndTotal(k, f);
                    if (k.indexLabelFormatter || f.indexLabelFormatter)
                        r = {chart: q._options, dataSeries: k, dataPoint: f, total: m.total, percent: m.percent};
                    m = f.indexLabelFormatter ? f.indexLabelFormatter(r) : f.indexLabel ? q.replaceKeywordsWithValue(f.indexLabel, f, k, e) : k.indexLabelFormatter ? k.indexLabelFormatter(r) : k.indexLabel ? q.replaceKeywordsWithValue(k.indexLabel, f, k, e) : f.label ? f.label : "";
                    q._eventManager.objectMap[g] = h;
                    h.center = {x: w.x, y: w.y};
                    h.y = f.y;
                    h.radius = A;
                    h.percentInnerRadius = K;
                    h.indexLabelText = m;
                    h.indexLabelPlacement = k.indexLabelPlacement;
                    h.indexLabelLineColor = f.indexLabelLineColor ? f.indexLabelLineColor : k.indexLabelLineColor ? k.indexLabelLineColor : f.color ? f.color : k._colorSet[e % k._colorSet.length];
                    h.indexLabelLineThickness = x(f.indexLabelLineThickness) ? k.indexLabelLineThickness : f.indexLabelLineThickness;
                    h.indexLabelLineDashType = f.indexLabelLineDashType ? f.indexLabelLineDashType : k.indexLabelLineDashType;
                    h.indexLabelFontColor = f.indexLabelFontColor ? f.indexLabelFontColor :
                            k.indexLabelFontColor;
                    h.indexLabelFontStyle = f.indexLabelFontStyle ? f.indexLabelFontStyle : k.indexLabelFontStyle;
                    h.indexLabelFontWeight = f.indexLabelFontWeight ? f.indexLabelFontWeight : k.indexLabelFontWeight;
                    h.indexLabelFontSize = f.indexLabelFontSize ? f.indexLabelFontSize : k.indexLabelFontSize;
                    h.indexLabelFontFamily = f.indexLabelFontFamily ? f.indexLabelFontFamily : k.indexLabelFontFamily;
                    h.indexLabelBackgroundColor = f.indexLabelBackgroundColor ? f.indexLabelBackgroundColor : k.indexLabelBackgroundColor ? k.indexLabelBackgroundColor :
                            null;
                    h.indexLabelMaxWidth = f.indexLabelMaxWidth ? f.indexLabelMaxWidth : k.indexLabelMaxWidth ? k.indexLabelMaxWidth : 0.33 * l.width;
                    h.indexLabelWrap = "undefined" !== typeof f.indexLabelWrap ? f.indexLabelWrap : k.indexLabelWrap;
                    h.startAngle = 0 === e ? k.startAngle ? k.startAngle / 180 * Math.PI : 0 : p[e - 1].endAngle;
                    h.startAngle = (h.startAngle + 2 * Math.PI) % (2 * Math.PI);
                    h.endAngle = h.startAngle + 2 * Math.PI / v * Math.abs(f.y);
                    f = (h.endAngle + h.startAngle) / 2;
                    f = (f + 2 * Math.PI) % (2 * Math.PI);
                    h.midAngle = f;
                    if (h.midAngle > Math.PI / 2 - s && h.midAngle < Math.PI /
                            2 + s) {
                        if (0 === a || p[c].midAngle > h.midAngle)
                            c = e;
                        a++
                    } else if (h.midAngle > 3 * Math.PI / 2 - s && h.midAngle < 3 * Math.PI / 2 + s) {
                        if (0 === b || p[d].midAngle > h.midAngle)
                            d = e;
                        b++
                    }
                    h.hemisphere = f > Math.PI / 2 && f <= 3 * Math.PI / 2 ? "left" : "right";
                    h.indexLabelTextBlock = new O(q.plotArea.ctx, {fontSize: h.indexLabelFontSize, fontFamily: h.indexLabelFontFamily, fontColor: h.indexLabelFontColor, fontStyle: h.indexLabelFontStyle, fontWeight: h.indexLabelFontWeight, horizontalAlign: "left", backgroundColor: h.indexLabelBackgroundColor, maxWidth: h.indexLabelMaxWidth,
                        maxHeight: h.indexLabelWrap ? 5 * h.indexLabelFontSize : 1.5 * h.indexLabelFontSize, text: h.indexLabelText, padding: 0, textBaseline: "top"});
                    h.indexLabelTextBlock.measureText()
                }
                g = f = 0;
                m = !1;
                for (e = 0; e < n.length; e++)
                    h = p[(c + e) % n.length], 1 < a && (h.midAngle > Math.PI / 2 - s && h.midAngle < Math.PI / 2 + s) && (f <= a / 2 && !m ? (h.hemisphere = "right", f++) : (h.hemisphere = "left", m = !0));
                m = !1;
                for (e = 0; e < n.length; e++)
                    h = p[(d + e) % n.length], 1 < b && (h.midAngle > 3 * Math.PI / 2 - s && h.midAngle < 3 * Math.PI / 2 + s) && (g <= b / 2 && !m ? (h.hemisphere = "left", g++) : (h.hemisphere = "right",
                            m = !0))
            }
        }
        function b(a) {
            var b = q.plotArea.ctx;
            b.clearRect(l.x1, l.y1, l.width, l.height);
            b.fillStyle = q.backgroundColor;
            b.fillRect(l.x1, l.y1, l.width, l.height);
            for (b = 0; b < n.length; b++) {
                var c = p[b].startAngle, d = p[b].endAngle;
                if (d > c) {
                    var e = 0.07 * A * Math.cos(p[b].midAngle), f = 0.07 * A * Math.sin(p[b].midAngle), g = !1;
                    if (n[b].exploded) {
                        if (1E-9 < Math.abs(p[b].center.x - (w.x + e)) || 1E-9 < Math.abs(p[b].center.y - (w.y + f)))
                            p[b].center.x = w.x + e * a, p[b].center.y = w.y + f * a, g = !0
                    } else if (0 < Math.abs(p[b].center.x - w.x) || 0 < Math.abs(p[b].center.y -
                            w.y))
                        p[b].center.x = w.x + e * (1 - a), p[b].center.y = w.y + f * (1 - a), g = !0;
                    g && (e = {}, e.dataSeries = k, e.dataPoint = k.dataPoints[b], e.index = b, q._toolTip.highlightObjects([e]));
                    ya(q.plotArea.ctx, p[b].center, p[b].radius, n[b].color ? n[b].color : k._colorSet[b % k._colorSet.length], k.type, c, d, k.fillOpacity, p[b].percentInnerRadius)
                }
            }
            a = q.plotArea.ctx;
            a.save();
            a.fillStyle = "black";
            a.strokeStyle = "grey";
            a.textBaseline = "middle";
            a.lineJoin = "round";
            for (b = b = 0; b < n.length; b++)
                c = p[b], c.indexLabelText && (c.indexLabelTextBlock.y -= c.indexLabelTextBlock.height /
                        2, d = 0, d = "left" === c.hemisphere ? "inside" !== k.indexLabelPlacement ? -(c.indexLabelTextBlock.width + m) : -c.indexLabelTextBlock.width / 2 : "inside" !== k.indexLabelPlacement ? m : -c.indexLabelTextBlock.width / 2, c.indexLabelTextBlock.x += d, c.indexLabelTextBlock.render(!0), c.indexLabelTextBlock.x -= d, c.indexLabelTextBlock.y += c.indexLabelTextBlock.height / 2, "inside" !== c.indexLabelPlacement && 0 < c.indexLabelLineThickness && (d = c.center.x + A * Math.cos(c.midAngle), e = c.center.y + A * Math.sin(c.midAngle), a.strokeStyle = c.indexLabelLineColor,
                        a.lineWidth = c.indexLabelLineThickness, a.setLineDash && a.setLineDash(D(c.indexLabelLineDashType, c.indexLabelLineThickness)), a.beginPath(), a.moveTo(d, e), a.lineTo(c.indexLabelTextBlock.x, c.indexLabelTextBlock.y), a.lineTo(c.indexLabelTextBlock.x + ("left" === c.hemisphere ? -m : m), c.indexLabelTextBlock.y), a.stroke()), a.lineJoin = "miter");
            a.save()
        }
        function d(a, b) {
            var c = 0, c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2, d = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2, e = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height /
                    2, f = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
            return c = b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? e - d : c - f
        }
        function e(a) {
            for (var b = null, c = 1; c < n.length; c++)
                if (b = (a + c + p.length) % p.length, p[b].hemisphere !== p[a].hemisphere) {
                    b = null;
                    break
                } else if (p[b].indexLabelText && b !== a && (0 > d(p[b], p[a]) || ("right" === p[a].hemisphere ? p[b].indexLabelTextBlock.y >= p[a].indexLabelTextBlock.y : p[b].indexLabelTextBlock.y <= p[a].indexLabelTextBlock.y)))
                    break;
                else
                    b = null;
            return b
        }
        function f(a, b, c) {
            c = (c || 0) + 1;
            if (1E3 <
                    c)
                return 0;
            b = b || 0;
            var g = 0, k = w.y - 1 * t, h = w.y + 1 * t;
            if (0 <= a && a < n.length) {
                var l = p[a];
                if (0 > b && l.indexLabelTextBlock.y < k || 0 < b && l.indexLabelTextBlock.y > h)
                    return 0;
                var m = 0, q = 0, q = m = m = 0;
                0 > b ? l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 > k && l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 + b < k && (b = -(k - (l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 + b))) : l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2 < k && l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2 + b > h && (b = l.indexLabelTextBlock.y +
                        l.indexLabelTextBlock.height / 2 + b - h);
                b = l.indexLabelTextBlock.y + b;
                k = 0;
                k = "right" === l.hemisphere ? w.x + Math.sqrt(Math.pow(t, 2) - Math.pow(b - w.y, 2)) : w.x - Math.sqrt(Math.pow(t, 2) - Math.pow(b - w.y, 2));
                q = w.x + A * Math.cos(l.midAngle);
                m = w.y + A * Math.sin(l.midAngle);
                m = Math.sqrt(Math.pow(k - q, 2) + Math.pow(b - m, 2));
                q = Math.acos(A / t);
                m = Math.acos((t * t + A * A - m * m) / (2 * A * t));
                b = m < q ? b - l.indexLabelTextBlock.y : 0;
                k = null;
                for (h = 1; h < n.length; h++)
                    if (k = (a - h + p.length) % p.length, p[k].hemisphere !== p[a].hemisphere) {
                        k = null;
                        break
                    } else if (p[k].indexLabelText &&
                            p[k].hemisphere === p[a].hemisphere && k !== a && (0 > d(p[k], p[a]) || ("right" === p[a].hemisphere ? p[k].indexLabelTextBlock.y <= p[a].indexLabelTextBlock.y : p[k].indexLabelTextBlock.y >= p[a].indexLabelTextBlock.y)))
                        break;
                    else
                        k = null;
                q = k;
                m = e(a);
                h = k = 0;
                0 > b ? (h = "right" === l.hemisphere ? q : m, g = b, null !== h && (q = -b, b = l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 - (p[h].indexLabelTextBlock.y + p[h].indexLabelTextBlock.height / 2), b - q < r && (k = -q, h = f(h, k, c + 1), +h.toFixed(u) > +k.toFixed(u) && (g = b > r ? -(b - r) : -(q - (h - k)))))) : 0 < b && (h = "right" ===
                        l.hemisphere ? m : q, g = b, null !== h && (q = b, b = p[h].indexLabelTextBlock.y - p[h].indexLabelTextBlock.height / 2 - (l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2), b - q < r && (k = q, h = f(h, k, c + 1), +h.toFixed(u) < +k.toFixed(u) && (g = b > r ? b - r : q - (k - h)))));
                g && (c = l.indexLabelTextBlock.y + g, b = 0, b = "right" === l.hemisphere ? w.x + Math.sqrt(Math.pow(t, 2) - Math.pow(c - w.y, 2)) : w.x - Math.sqrt(Math.pow(t, 2) - Math.pow(c - w.y, 2)), l.midAngle > Math.PI / 2 - s && l.midAngle < Math.PI / 2 + s ? (k = (a - 1 + p.length) % p.length, k = p[k], a = p[(a + 1 + p.length) % p.length], "left" ===
                        l.hemisphere && "right" === k.hemisphere && b > k.indexLabelTextBlock.x ? b = k.indexLabelTextBlock.x - 15 : "right" === l.hemisphere && ("left" === a.hemisphere && b < a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x + 15)) : l.midAngle > 3 * Math.PI / 2 - s && l.midAngle < 3 * Math.PI / 2 + s && (k = (a - 1 + p.length) % p.length, k = p[k], a = p[(a + 1 + p.length) % p.length], "right" === l.hemisphere && "left" === k.hemisphere && b < k.indexLabelTextBlock.x ? b = k.indexLabelTextBlock.x + 15 : "left" === l.hemisphere && ("right" === a.hemisphere && b > a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x -
                        15)), l.indexLabelTextBlock.y = c, l.indexLabelTextBlock.x = b, l.indexLabelAngle = Math.atan2(l.indexLabelTextBlock.y - w.y, l.indexLabelTextBlock.x - w.x))
            }
            return g
        }
        function g() {
            var a = q.plotArea.ctx;
            a.fillStyle = "grey";
            a.strokeStyle = "grey";
            a.font = "16px Arial";
            a.textBaseline = "middle";
            for (var b = a = 0, c = 0, g = !0, b = 0; 10 > b && (1 > b || 0 < c); b++) {
                if (k.radius || !k.radius && "undefined" !== typeof k.innerRadius && null !== k.innerRadius && A - c <= H)
                    g = !1;
                g && (A -= c);
                c = 0;
                if ("inside" !== k.indexLabelPlacement) {
                    t = A * y;
                    for (a = 0; a < n.length; a++) {
                        var h =
                                p[a];
                        h.indexLabelTextBlock.x = w.x + t * Math.cos(h.midAngle);
                        h.indexLabelTextBlock.y = w.y + t * Math.sin(h.midAngle);
                        h.indexLabelAngle = h.midAngle;
                        h.radius = A;
                        h.percentInnerRadius = K
                    }
                    for (var s, x, a = 0; a < n.length; a++) {
                        var h = p[a], v = e(a);
                        if (null !== v) {
                            s = p[a];
                            x = p[v];
                            var B = 0, B = d(s, x) - r;
                            if (0 > B) {
                                for (var C = x = 0, D = 0; D < n.length; D++)
                                    D !== a && p[D].hemisphere === h.hemisphere && (p[D].indexLabelTextBlock.y < h.indexLabelTextBlock.y ? x++ : C++);
                                x = B / (x + C || 1) * C;
                                var C = -1 * (B - x), E = D = 0;
                                "right" === h.hemisphere ? (D = f(a, x), C = -1 * (B - D), E = f(v, C), +E.toFixed(u) <
                                        +C.toFixed(u) && +D.toFixed(u) <= +x.toFixed(u) && f(a, -(C - E))) : (D = f(v, x), C = -1 * (B - D), E = f(a, C), +E.toFixed(u) < +C.toFixed(u) && +D.toFixed(u) <= +x.toFixed(u) && f(v, -(C - E)))
                            }
                        }
                    }
                } else
                    for (a = 0; a < n.length; a++)
                        h = p[a], t = "pie" === k.type ? 0.7 * A : 0.8 * A, v = w.x + t * Math.cos(h.midAngle), x = w.y + t * Math.sin(h.midAngle), h.indexLabelTextBlock.x = v, h.indexLabelTextBlock.y = x;
                for (a = 0; a < n.length; a++)
                    if (h = p[a], v = h.indexLabelTextBlock.measureText(), 0 !== v.height && 0 !== v.width)
                        v = v = 0, "right" === h.hemisphere ? (v = l.x2 - (h.indexLabelTextBlock.x + h.indexLabelTextBlock.width +
                                m), v *= -1) : v = l.x1 - (h.indexLabelTextBlock.x - h.indexLabelTextBlock.width - m), 0 < v && (!g && h.indexLabelText && (x = "right" === h.hemisphere ? l.x2 - h.indexLabelTextBlock.x : h.indexLabelTextBlock.x - l.x1, 0.3 * h.indexLabelTextBlock.maxWidth > x ? h.indexLabelText = "" : h.indexLabelTextBlock.maxWidth = 0.85 * x, 0.3 * h.indexLabelTextBlock.maxWidth < x && (h.indexLabelTextBlock.x -= "right" === h.hemisphere ? 2 : -2)), Math.abs(h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 - w.y) < A || Math.abs(h.indexLabelTextBlock.y + h.indexLabelTextBlock.height /
                                2 - w.y) < A) && (v /= Math.abs(Math.cos(h.indexLabelAngle)), 9 < v && (v *= 0.3), v > c && (c = v)), v = v = 0, 0 < h.indexLabelAngle && h.indexLabelAngle < Math.PI ? (v = l.y2 - (h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2 + 5), v *= -1) : v = l.y1 - (h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 - 5), 0 < v && (!g && h.indexLabelText && (x = 0 < h.indexLabelAngle && h.indexLabelAngle < Math.PI ? -1 : 1, 0 === f(a, v * x) && f(a, 2 * x)), Math.abs(h.indexLabelTextBlock.x - w.x) < A && (v /= Math.abs(Math.sin(h.indexLabelAngle)), 9 < v && (v *= 0.3), v > c && (c = v)));
                var F = function (a,
                        b, c) {
                    for (var d = [], e = 0; d.push(p[b]), b !== c; b = (b + 1 + n.length) % n.length)
                        ;
                    d.sort(function (a, b) {
                        return a.y - b.y
                    });
                    for (b = 0; b < d.length; b++)
                        if (c = d[b], e < 0.7 * a)
                            e += c.indexLabelTextBlock.height, c.indexLabelTextBlock.text = "", c.indexLabelText = "", c.indexLabelTextBlock.measureText();
                        else
                            break
                };
                (function () {
                    for (var a = -1, b = -1, c = 0, f = !1, g = 0; g < n.length; g++)
                        if (f = !1, s = p[g], s.indexLabelText) {
                            var h = e(g);
                            if (null !== h) {
                                var k = p[h];
                                B = 0;
                                B = d(s, k);
                                var l;
                                if (l = 0 > B) {
                                    l = s.indexLabelTextBlock.x;
                                    var q = s.indexLabelTextBlock.y - s.indexLabelTextBlock.height /
                                            2, r = s.indexLabelTextBlock.y + s.indexLabelTextBlock.height / 2, t = k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2, u = k.indexLabelTextBlock.x + k.indexLabelTextBlock.width, y = k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2;
                                    l = s.indexLabelTextBlock.x + s.indexLabelTextBlock.width < k.indexLabelTextBlock.x - m || l > u + m || q > y + m || r < t - m ? !1 : !0
                                }
                                l ? (0 > a && (a = g), h !== a && (b = h, c += -B), 0 === g % Math.max(n.length / 10, 3) && (f = !0)) : f = !0;
                                f && (0 < c && 0 <= a && 0 <= b) && (F(c, a, b), b = a = -1, c = 0)
                            }
                        }
                    0 < c && F(c, a, b)
                })()
            }
        }
        function h() {
            q.plotArea.layoutManager.reset();
            q._title && (q._title.dockInsidePlotArea || "center" === q._title.horizontalAlign && "center" === q._title.verticalAlign) && q._title.render();
            if (q.subtitles)
                for (var a = 0; a < q.subtitles.length; a++) {
                    var b = q.subtitles[a];
                    (b.dockInsidePlotArea || "center" === b.horizontalAlign && "center" === b.verticalAlign) && b.render()
                }
            q.legend && (q.legend.dockInsidePlotArea || "center" === q.legend.horizontalAlign && "center" === q.legend.verticalAlign) && q.legend.render()
        }
        var q = this;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var k = this.data[a.dataSeriesIndexes[0]],
                    n = k.dataPoints, m = 10, l = this.plotArea, p = [], r = 2, t, y = 1.3, s = 20 / 180 * Math.PI, u = 6, w = {x: (l.x2 + l.x1) / 2, y: (l.y2 + l.y1) / 2}, v = 0;
            a = !1;
            for (var B = 0; B < n.length; B++)
                v += Math.abs(n[B].y), !a && ("undefined" !== typeof n[B].indexLabel && null !== n[B].indexLabel && 0 < n[B].indexLabel.toString().length) && (a = !0), !a && ("undefined" !== typeof n[B].label && null !== n[B].label && 0 < n[B].label.toString().length) && (a = !0);
            if (0 !== v) {
                a = a || "undefined" !== typeof k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length;
                var A = "inside" !== k.indexLabelPlacement &&
                        a ? 0.75 * Math.min(l.width, l.height) / 2 : 0.92 * Math.min(l.width, l.height) / 2;
                k.radius && (A = Ha(k.radius, A));
                var H = "undefined" !== typeof k.innerRadius && null !== k.innerRadius ? Ha(k.innerRadius, A) : 0.7 * A, K = Math.min(H / A, (A - 1) / A);
                this.pieDoughnutClickHandler = function (a) {
                    q.isAnimating || !x(a.dataSeries.explodeOnClick) && !a.dataSeries.explodeOnClick || (a = a.dataPoint, a.exploded = a.exploded ? !1 : !0, 1 < this.dataPoints.length && q._animator.animate(0, 500, function (a) {
                        b(a);
                        h()
                    }))
                };
                c();
                g();
                g();
                g();
                g();
                this.disableToolTip = !0;
                this._animator.animate(0,
                        this.animatedRender ? this.animationDuration : 0, function (a) {
                            var b = q.plotArea.ctx;
                            b.clearRect(l.x1, l.y1, l.width, l.height);
                            b.fillStyle = q.backgroundColor;
                            b.fillRect(l.x1, l.y1, l.width, l.height);
                            a = p[0].startAngle + 2 * Math.PI * a;
                            for (b = 0; b < n.length; b++) {
                                var c = 0 === b ? p[b].startAngle : d, d = c + (p[b].endAngle - p[b].startAngle), e = !1;
                                d > a && (d = a, e = !0);
                                var f = n[b].color ? n[b].color : k._colorSet[b % k._colorSet.length];
                                d > c && ya(q.plotArea.ctx, p[b].center, p[b].radius, f, k.type, c, d, k.fillOpacity, p[b].percentInnerRadius);
                                if (e)
                                    break
                            }
                            h()
                        },
                        function () {
                            q.disableToolTip = !1;
                            q._animator.animate(0, q.animatedRender ? 500 : 0, function (a) {
                                b(a);
                                h()
                            })
                        })
            }
        }
    };
    v.prototype.animationRequestId = null;
    v.prototype.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            window.setTimeout(a, 1E3 / 60)
        }
    }();
    v.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame ||
            window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    da.prototype.registerSpace = function (a, c) {
        "top" === a ? this._topOccupied += c.height : "bottom" === a ? this._bottomOccupied += c.height : "left" === a ? this._leftOccupied += c.width : "right" === a && (this._rightOccupied += c.width)
    };
    da.prototype.unRegisterSpace = function (a, c) {
        "top" === a ? this._topOccupied -= c.height : "bottom" === a ? this._bottomOccupied -= c.height : "left" === a ? this._leftOccupied -= c.width : "right" === a && (this._rightOccupied -= c.width)
    };
    da.prototype.getFreeSpace = function () {
        return{x1: this._x1 + this._leftOccupied, y1: this._y1 + this._topOccupied, x2: this._x2 - this._rightOccupied, y2: this._y2 - this._bottomOccupied, width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied, height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied}
    };
    da.prototype.reset = function () {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    };
    T(O, L);
    O.prototype.render = function (a) {
        a && this.ctx.save();
        var c = this.ctx.font;
        this.ctx.textBaseline =
                this.textBaseline;
        var b = 0;
        this._isDirty && this.measureText(this.ctx);
        this.ctx.translate(this.x, this.y + b);
        "middle" === this.textBaseline && (b = -this._lineHeight / 2);
        this.ctx.font = this._getFontString();
        this.ctx.rotate(Math.PI / 180 * this.angle);
        var d = 0, e = this.padding, f = null;
        (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, b, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
        this.ctx.fillStyle = this.fontColor;
        for (b = 0; b < this._wrappedText.lines.length; b++)
            f =
                    this._wrappedText.lines[b], "right" === this.horizontalAlign ? d = this.width - f.width - this.padding : "left" === this.horizontalAlign ? d = this.padding : "center" === this.horizontalAlign && (d = (this.width - 2 * this.padding) / 2 - f.width / 2 + this.padding), this.ctx.fillText(f.text, d, e), e += f.height;
        this.ctx.font = c;
        a && this.ctx.restore()
    };
    O.prototype.setText = function (a) {
        this.text = a;
        this._isDirty = !0;
        this._wrappedText = null
    };
    O.prototype.measureText = function () {
        if (null === this.maxWidth)
            throw"Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return{width: this.width, height: this.height}
    };
    O.prototype._getLineWithWidth = function (a, c, b) {
        a = String(a);
        if (!a)
            return{text: "", width: 0};
        var d = b = 0, e = a.length - 1, f = Infinity;
        for (this.ctx.font = this._getFontString(); d <= e; ) {
            var f = Math.floor((d + e) / 2), g = a.substr(0, f + 1);
            b = this.ctx.measureText(g).width;
            if (b < c)
                d = f + 1;
            else if (b > c)
                e = f - 1;
            else
                break
        }
        b > c && 1 < g.length && (g = g.substr(0, g.length - 1), b = this.ctx.measureText(g).width);
        c = !0;
        if (g.length === a.length || " " === a[g.length])
            c = !1;
        c && (a = g.split(" "), 1 < a.length && a.pop(), g = a.join(" "), b = this.ctx.measureText(g).width);
        return{text: g, width: b}
    };
    O.prototype._wrapText = function () {
        var a = new String(ea(String(this.text))), c = [], b = this.ctx.font, d = 0, e = 0;
        for (this.ctx.font = this._getFontString(); 0 < a.length; ) {
            var f = this.maxHeight - 2 * this.padding, g = this._getLineWithWidth(a, this.maxWidth - 2 * this.padding, !1);
            g.height = this._lineHeight;
            c.push(g);
            e = Math.max(e, g.width);
            d += g.height;
            a = ea(a.slice(g.text.length, a.length));
            f && d > f && (g = c.pop(), d -= g.height)
        }
        this._wrappedText =
                {lines: c, width: e, height: d};
        this.width = e + 2 * this.padding;
        this.height = d + 2 * this.padding;
        this.ctx.font = b
    };
    O.prototype._getFontString = function () {
        var a;
        a = "" + (this.fontStyle ? this.fontStyle + " " : "");
        a += this.fontWeight ? this.fontWeight + " " : "";
        a += this.fontSize ? this.fontSize + "px " : "";
        var c = this.fontFamily ? this.fontFamily + "" : "";
        !u && c && (c = c.split(",")[0], "'" !== c[0] && '"' !== c[0] && (c = "'" + c + "'"));
        return a += c
    };
    T(ga, L);
    ga.prototype.render = function () {
        if (this.text) {
            var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                    c = a.layoutManager.getFreeSpace(), b = c.x1, d = c.y1, e = 0, f = 0, g = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0, h, q;
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = c.width - 4 - g * ("center" === this.horizontalAlign ? 2 : 1)), f = 0.5 * c.height - this.margin - 2, e = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = c.height - 4), f = 0.5 * c.width - this.margin - 2) : "center" ===
                    this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = c.width - 4), f = 0.5 * c.height - 4));
            this.wrap || (f = Math.min(f, Math.max(1.5 * this.fontSize, this.fontSize + 2.5 * this.padding)));
            var f = new O(this.ctx, {fontSize: this.fontSize, fontFamily: this.fontFamily, fontColor: this.fontColor, fontStyle: this.fontStyle, fontWeight: this.fontWeight, horizontalAlign: this.horizontalAlign, verticalAlign: this.verticalAlign, borderColor: this.borderColor, borderThickness: this.borderThickness, backgroundColor: this.backgroundColor, maxWidth: this.maxWidth,
                maxHeight: f, cornerRadius: this.cornerRadius, text: this.text, padding: this.padding, textBaseline: "top"}), k = f.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (d = c.y1 + 2, q = "top") : "bottom" === this.verticalAlign && (d = c.y2 - 2 - k.height, q = "bottom"), "left" === this.horizontalAlign ? b = c.x1 + 2 : "center" === this.horizontalAlign ? b = c.x1 + c.width / 2 - k.width / 2 : "right" === this.horizontalAlign && (b = c.x2 - 2 - k.width - g), h = this.horizontalAlign, this.width = k.width, this.height = k.height) : "center" ===
                    this.verticalAlign && ("left" === this.horizontalAlign ? (b = c.x1 + 2, d = c.y2 - 2 - (this.maxWidth / 2 - k.width / 2), e = -90, q = "left", this.width = k.height, this.height = k.width) : "right" === this.horizontalAlign ? (b = c.x2 - 2, d = c.y1 + 2 + (this.maxWidth / 2 - k.width / 2), e = 90, q = "right", this.width = k.height, this.height = k.width) : "center" === this.horizontalAlign && (d = a.y1 + (a.height / 2 - k.height / 2), b = a.x1 + (a.width / 2 - k.width / 2), q = "center", this.width = k.width, this.height = k.height), h = "center");
            f.x = b;
            f.y = d;
            f.angle = e;
            f.horizontalAlign = h;
            f.render(!0);
            a.layoutManager.registerSpace(q, {width: this.width + ("left" === q || "right" === q ? this.margin + 2 : 0), height: this.height + ("top" === q || "bottom" === q ? this.margin + 2 : 0)});
            this.bounds = {x1: b, y1: d, x2: b + this.width, y2: d + this.height};
            this.ctx.textBaseline = "top"
        }
    };
    T(na, L);
    na.prototype.render = ga.prototype.render;
    T(oa, L);
    oa.prototype.render = function () {
        var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, c = a.layoutManager.getFreeSpace(), b = null, d = 0, e = 0, f = 0, g = 0, h = this.chart._options.legend && !x(this.chart._options.legend.markerMargin) ?
                this.chart._options.legend.markerMargin : 0.3 * this.fontSize, q = [], k = [];
        "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (this.orientation = "horizontal", b = this.verticalAlign, f = null !== this.maxWidth ? this.maxWidth : 0.7 * c.width, g = null !== this.maxHeight ? this.maxHeight : 0.5 * c.height) : "center" === this.verticalAlign && (this.orientation = "vertical", b = this.horizontalAlign, f = null !== this.maxWidth ? this.maxWidth : 0.5 * c.width, g = null !== this.maxHeight ? this.maxHeight : 0.7 * c.height);
        for (var n = 0; n < this.dataSeries.length; n++) {
            var m =
                    this.dataSeries[n];
            if ("pie" !== m.type && "doughnut" !== m.type && "funnel" !== m.type) {
                var l = m.legendMarkerType ? m.legendMarkerType : "line" !== m.type && "stepLine" !== m.type && "spline" !== m.type && "scatter" !== m.type && "bubble" !== m.type || !m.markerType ? Y.getDefaultLegendMarker(m.type) : m.markerType, p = m.legendText ? m.legendText : this.itemTextFormatter ? this.itemTextFormatter({chart: this.chart._publicChartReference, legend: this._options, dataSeries: m, dataPoint: null}) : m.name, r = m.legendMarkerColor ? m.legendMarkerColor : m.markerColor ?
                        m.markerColor : m._colorSet[0], t = m.markerSize || "line" !== m.type && "stepLine" !== m.type && "spline" !== m.type ? 0.75 * this.lineHeight : 0, u = m.legendMarkerBorderColor ? m.legendMarkerBorderColor : m.markerBorderColor, s = m.legendMarkerBorderThickness ? m.legendMarkerBorderThickness : m.markerBorderThickness ? Math.max(1, Math.round(0.2 * t)) : 0, p = this.chart.replaceKeywordsWithValue(p, m.dataPoints[0], m, n), l = {markerType: l, markerColor: r, text: p, textBlock: null, chartType: m.type, markerSize: t, lineColor: m._colorSet[0], dataSeriesIndex: m.index,
                    dataPointIndex: null, markerBorderColor: u, markerBorderThickness: s};
                q.push(l)
            } else
                for (var v = 0; v < m.dataPoints.length; v++) {
                    var w = m.dataPoints[v], l = w.legendMarkerType ? w.legendMarkerType : m.legendMarkerType ? m.legendMarkerType : Y.getDefaultLegendMarker(m.type), p = w.legendText ? w.legendText : m.legendText ? m.legendText : this.itemTextFormatter ? this.itemTextFormatter({chart: this.chart._publicChartReference, legend: this._options, dataSeries: m, dataPoint: w}) : w.name ? w.name : "DataPoint: " + (v + 1), r = w.legendMarkerColor ? w.legendMarkerColor :
                            m.legendMarkerColor ? m.legendMarkerColor : w.color ? w.color : m.color ? m.color : m._colorSet[v % m._colorSet.length], t = 0.75 * this.lineHeight, u = w.legendMarkerBorderColor ? w.legendMarkerBorderColor : m.legendMarkerBorderColor ? m.legendMarkerBorderColor : w.markerBorderColor ? w.markerBorderColor : m.markerBorderColor, s = w.legendMarkerBorderThickness ? w.legendMarkerBorderThickness : m.legendMarkerBorderThickness ? m.legendMarkerBorderThickness : w.markerBorderThickness || m.markerBorderThickness ? Math.max(1, Math.round(0.2 * t)) : 0, p = this.chart.replaceKeywordsWithValue(p,
                            w, m, v), l = {markerType: l, markerColor: r, text: p, textBlock: null, chartType: m.type, markerSize: t, dataSeriesIndex: n, dataPointIndex: v, markerBorderColor: u, markerBorderThickness: s};
                    (w.showInLegend || m.showInLegend && !1 !== w.showInLegend) && q.push(l)
                }
        }
        !0 === this.reversed && q.reverse();
        if (0 < q.length) {
            m = null;
            v = p = w = 0;
            p = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, f) : Math.min(this.itemWidth, f) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, f) : f;
            t = 0 === t ? 0.75 * this.lineHeight :
                    t;
            p -= t + h;
            for (n = 0; n < q.length; n++) {
                l = q[n];
                if ("line" === l.chartType || "spline" === l.chartType || "stepLine" === l.chartType)
                    p -= 2 * 0.1 * this.lineHeight;
                if (!(0 >= g || "undefined" === typeof g || 0 >= p || "undefined" === typeof p)) {
                    if ("horizontal" === this.orientation) {
                        l.textBlock = new O(this.ctx, {x: 0, y: 0, maxWidth: p, maxHeight: this.itemWrap ? g : this.lineHeight, angle: 0, text: l.text, horizontalAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle"});
                        l.textBlock.measureText();
                        null !== this.itemWidth && (l.textBlock.width = this.itemWidth - (t + h + ("line" === l.chartType || "spline" === l.chartType || "stepLine" === l.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                        if (!m || m.width + Math.round(l.textBlock.width + t + h + (0 === m.width ? 0 : this.horizontalSpacing) + ("line" === l.chartType || "spline" === l.chartType || "stepLine" === l.chartType ? 2 * 0.1 * this.lineHeight : 0)) > f)
                            m = {items: [], width: 0}, k.push(m), this.height += v, v = 0;
                        v = Math.max(v, l.textBlock.height)
                    } else
                        l.textBlock = new O(this.ctx, {x: 0, y: 0, maxWidth: p,
                            maxHeight: !0 === this.itemWrap ? g : 1.5 * this.fontSize, angle: 0, text: l.text, horizontalAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle"}), l.textBlock.measureText(), null !== this.itemWidth && (l.textBlock.width = this.itemWidth - (t + h + ("line" === l.chartType || "spline" === l.chartType || "stepLine" === l.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < g - this.lineHeight ? (m = {items: [], width: 0}, k.push(m)) : (m = k[w],
                                w = (w + 1) % k.length), this.height += l.textBlock.height;
                    l.textBlock.x = m.width;
                    l.textBlock.y = 0;
                    m.width += Math.round(l.textBlock.width + t + h + (0 === m.width ? 0 : this.horizontalSpacing) + ("line" === l.chartType || "spline" === l.chartType || "stepLine" === l.chartType ? 2 * 0.1 * this.lineHeight : 0));
                    m.items.push(l);
                    this.width = Math.max(m.width, this.width)
                }
            }
            this.height = !1 === this.itemWrap ? k.length * this.lineHeight : this.height + v;
            this.height = Math.min(g, this.height);
            this.width = Math.min(f, this.width)
        }
        "top" === this.verticalAlign ? (e = "left" ===
                this.horizontalAlign ? c.x1 : "right" === this.horizontalAlign ? c.x2 - this.width : c.x1 + c.width / 2 - this.width / 2, d = c.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? c.x1 : "right" === this.horizontalAlign ? c.x2 - this.width : c.x1 + c.width / 2 - this.width / 2, d = c.y1 + c.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? c.x1 : "right" === this.horizontalAlign ? c.x2 - this.width : c.x1 + c.width / 2 - this.width / 2, d = c.y2 - this.height);
        this.items = q;
        for (n = 0; n < this.items.length; n++)
            l = q[n],
                    l.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[l.id] = {id: l.id, objectType: "legendItem", legendItemIndex: n, dataSeriesIndex: l.dataSeriesIndex, dataPointIndex: l.dataPointIndex};
        for (n = c = 0; n < k.length; n++) {
            m = k[n];
            for (w = v = 0; w < m.items.length; w++) {
                l = m.items[w];
                r = l.textBlock.x + e + (0 === w ? 0.2 * t : this.horizontalSpacing);
                u = d + c;
                p = r;
                this.chart.data[l.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                this.ctx.save();
                this.ctx.rect(e, d, f, Math.max(g - g % this.lineHeight, d));
                this.ctx.clip();
                if ("line" === l.chartType || "stepLine" === l.chartType || "spline" === l.chartType)
                    this.ctx.strokeStyle = l.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(r - 0.1 * this.lineHeight, u + this.lineHeight / 2), this.ctx.lineTo(r + 0.85 * this.lineHeight, u + this.lineHeight / 2), this.ctx.stroke(), p -= 0.1 * this.lineHeight;
                P.drawMarker(r + t / 2, u + this.lineHeight / 2, this.ctx, l.markerType, l.markerSize, l.markerColor, l.markerBorderColor, l.markerBorderThickness);
                l.textBlock.x = r + h + t;
                if ("line" ===
                        l.chartType || "stepLine" === l.chartType || "spline" === l.chartType)
                    l.textBlock.x += 0.1 * this.lineHeight;
                l.textBlock.y = Math.round(u + this.lineHeight / 2);
                l.textBlock.render(!0);
                this.ctx.restore();
                v = 0 < w ? Math.max(v, l.textBlock.height) : l.textBlock.height;
                this.chart.data[l.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                r = C(l.id);
                this.ghostCtx.fillStyle = r;
                this.ghostCtx.beginPath();
                this.ghostCtx.fillRect(p, l.textBlock.y - this.lineHeight / 2, l.textBlock.x + l.textBlock.width - p, l.textBlock.height);
                l.x1 = this.chart._eventManager.objectMap[l.id].x1 =
                        p;
                l.y1 = this.chart._eventManager.objectMap[l.id].y1 = l.textBlock.y - this.lineHeight / 2;
                l.x2 = this.chart._eventManager.objectMap[l.id].x2 = l.textBlock.x + l.textBlock.width;
                l.y2 = this.chart._eventManager.objectMap[l.id].y2 = l.textBlock.y + l.textBlock.height - this.lineHeight / 2
            }
            c += v
        }
        0 < q.length && a.layoutManager.registerSpace(b, {width: this.width + 2 + 2, height: this.height + 5 + 5});
        this.bounds = {x1: e, y1: d, x2: e + this.width, y2: d + this.height}
    };
    T(ua, L);
    ua.prototype.render = function () {
        var a = this.chart.layoutManager.getFreeSpace();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(a.x1, a.y1, a.x2, a.y2)
    };
    T(Y, L);
    Y.prototype.getDefaultAxisPlacement = function () {
        var a = this.type;
        if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a)
            return"normal";
        if ("bar" ===
                a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a)
            return"xySwapped";
        if ("pie" === a || "doughnut" === a || "funnel" === a)
            return"none";
        window.console.log("Unknown Chart Type: " + a);
        return null
    };
    Y.getDefaultLegendMarker = function (a) {
        if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" ===
                a || "rangeSplineArea" === a)
            return"square";
        if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a || "funnel" === a)
            return"circle";
        if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a)
            return"triangle";
        window.console.log("Unknown Chart Type: " + a);
        return null
    };
    Y.prototype.getDataPointAtX = function (a, c) {
        if (!this.dataPoints || 0 === this.dataPoints.length)
            return null;
        var b = {dataPoint: null, distance: Infinity, index: NaN}, d = null, e = 0, f = 0, g = 1, h = Infinity, q = 0, k = 0, n = 0;
        "none" !== this.chart.plotInfo.axisPlacement &&
                (n = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0);
        for (; ; ) {
            f = 0 < g ? n + e : n - e;
            if (0 <= f && f < this.dataPoints.length) {
                var d = this.dataPoints[f], m = Math.abs(d.x - a);
                m < b.distance && (b.dataPoint = d, b.distance = m, b.index = f);
                d = Math.abs(d.x - a);
                d <= h ? h = d : 0 < g ? q++ : k++;
                if (1E3 < q && 1E3 < k)
                    break
            } else if (0 > n - e && n + e >= this.dataPoints.length)
                break;
            -1 === g ? (e++, g = 1) : g = -1
        }
        return c || b.dataPoint.x !== a ? c && null !==
                b.dataPoint ? b : null : b
    };
    Y.prototype.getDataPointAtXY = function (a, c, b) {
        if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || c < this.chart.plotArea.y1 || c > this.chart.plotArea.y2)
            return null;
        b = b || !1;
        var d = [], e = 0, f = 0, g = 1, h = !1, q = Infinity, k = 0, n = 0, m = 0;
        "none" !== this.chart.plotInfo.axisPlacement && (m = this.chart.axisX.getXValueAt({x: a, y: c}), f = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, m = 0 < f ? Math.min(Math.max((this.dataPoints.length - 1) / f * (m - this.dataPoints[0].x) >>
                0, 0), this.dataPoints.length) : 0);
        for (; ; ) {
            f = 0 < g ? m + e : m - e;
            if (0 <= f && f < this.dataPoints.length) {
                var l = this.chart._eventManager.objectMap[this.dataPointIds[f]], p = this.dataPoints[f], r = null;
                if (l) {
                    switch (this.type) {
                        case "column":
                        case "stackedColumn":
                        case "stackedColumn100":
                        case "bar":
                        case "stackedBar":
                        case "stackedBar100":
                        case "rangeColumn":
                        case "rangeBar":
                            a >= l.x1 && (a <= l.x2 && c >= l.y1 && c <= l.y2) && (d.push({dataPoint: p, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(l.x1 - a), Math.abs(l.x2 - a), Math.abs(l.y1 -
                                        c), Math.abs(l.y2 - c))}), h = !0);
                            break;
                        case "line":
                        case "stepLine":
                        case "spline":
                        case "area":
                        case "stepArea":
                        case "stackedArea":
                        case "stackedArea100":
                        case "splineArea":
                        case "scatter":
                            var t = R("markerSize", p, this) || 4, u = b ? 20 : t, r = Math.sqrt(Math.pow(l.x1 - a, 2) + Math.pow(l.y1 - c, 2));
                            r <= u && d.push({dataPoint: p, dataPointIndex: f, dataSeries: this, distance: r});
                            f = Math.abs(l.x1 - a);
                            f <= q ? q = f : 0 < g ? k++ : n++;
                            r <= t / 2 && (h = !0);
                            break;
                        case "rangeArea":
                        case "rangeSplineArea":
                            t = R("markerSize", p, this) || 4;
                            u = b ? 20 : t;
                            r = Math.min(Math.sqrt(Math.pow(l.x1 -
                                    a, 2) + Math.pow(l.y1 - c, 2)), Math.sqrt(Math.pow(l.x1 - a, 2) + Math.pow(l.y2 - c, 2)));
                            r <= u && d.push({dataPoint: p, dataPointIndex: f, dataSeries: this, distance: r});
                            f = Math.abs(l.x1 - a);
                            f <= q ? q = f : 0 < g ? k++ : n++;
                            r <= t / 2 && (h = !0);
                            break;
                        case "bubble":
                            t = l.size;
                            r = Math.sqrt(Math.pow(l.x1 - a, 2) + Math.pow(l.y1 - c, 2));
                            r <= t / 2 && (d.push({dataPoint: p, dataPointIndex: f, dataSeries: this, distance: r}), h = !0);
                            break;
                        case "pie":
                        case "doughnut":
                            t = l.center;
                            u = "doughnut" === this.type ? l.percentInnerRadius * l.radius : 0;
                            r = Math.sqrt(Math.pow(t.x - a, 2) + Math.pow(t.y -
                                    c, 2));
                            r < l.radius && r > u && (r = Math.atan2(c - t.y, a - t.x), 0 > r && (r += 2 * Math.PI), r = Number(((180 * (r / Math.PI) % 360 + 360) % 360).toFixed(12)), t = Number(((180 * (l.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), u = Number(((180 * (l.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === u && 1 < l.endAngle && (u = 360), t >= u && 0 !== p.y && (u += 360, r < t && (r += 360)), r > t && r < u && (d.push({dataPoint: p, dataPointIndex: f, dataSeries: this, distance: 0}), h = !0));
                            break;
                        case "candlestick":
                            if (a >= l.x1 - l.borderThickness / 2 && a <= l.x2 + l.borderThickness / 2 && c >= l.y2 - l.borderThickness /
                                    2 && c <= l.y3 + l.borderThickness / 2 || Math.abs(l.x2 - a + l.x1 - a) < l.borderThickness && c >= l.y1 && c <= l.y4)
                                d.push({dataPoint: p, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(l.x1 - a), Math.abs(l.x2 - a), Math.abs(l.y2 - c), Math.abs(l.y3 - c))}), h = !0;
                            break;
                        case "ohlc":
                            if (Math.abs(l.x2 - a + l.x1 - a) < l.borderThickness && c >= l.y2 && c <= l.y3 || a >= l.x1 && a <= (l.x2 + l.x1) / 2 && c >= l.y1 - l.borderThickness / 2 && c <= l.y1 + l.borderThickness / 2 || a >= (l.x1 + l.x2) / 2 && a <= l.x2 && c >= l.y4 - l.borderThickness / 2 && c <= l.y4 + l.borderThickness / 2)
                                d.push({dataPoint: p,
                                    dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(l.x1 - a), Math.abs(l.x2 - a), Math.abs(l.y2 - c), Math.abs(l.y3 - c))}), h = !0
                    }
                    if (h || 1E3 < k && 1E3 < n)
                        break
                }
            } else if (0 > m - e && m + e >= this.dataPoints.length)
                break;
            -1 === g ? (e++, g = 1) : g = -1
        }
        a = null;
        for (c = 0; c < d.length; c++)
            a ? d[c].distance <= a.distance && (a = d[c]) : a = d[c];
        return a
    };
    Y.prototype.getMarkerProperties = function (a, c, b, d) {
        var e = this.dataPoints;
        return{x: c, y: b, ctx: d, type: e[a].markerType ? e[a].markerType : this.markerType, size: e[a].markerSize ? e[a].markerSize : this.markerSize,
            color: e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length], borderColor: e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null, borderThickness: e[a].markerBorderThickness ? e[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null}
    };
    T(F, L);
    F.prototype.createLabels = function () {
        var a, c, b = 0, b = 0, d, e = 0, f = 0, g = 0, h = 0, q = 0;
        if ("bottom" === this._position ||
                "top" === this._position)
            q = this.lineCoordinates.width / Math.abs(this.viewportMaximum - this.viewportMinimum) * E[this.intervalType + "Duration"] * this.interval, e = "undefined" === typeof this._options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this._options.labelMaxWidth, this.chart.panEnabled || (g = "undefined" === typeof this._options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
        else if ("left" === this._position || "right" === this._position)
            q = this.lineCoordinates.height / Math.abs(this.viewportMaximum -
                    this.viewportMinimum) * E[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (e = "undefined" === typeof this._options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this._options.labelMaxWidth), g = "undefined" === typeof this._options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
        if ("axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType)
            for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval), d = za(new Date(this.viewportMaximum),
                    this.interval, this.intervalType), b = this.intervalStartPosition; b < d; za(b, this.interval, this.intervalType))
                a = b.getTime(), a = this.labelFormatter ? this.labelFormatter({chart: this.chart._publicChartReference, axis: this._options, value: b, label: this.labels[b] ? this.labels[b] : null}) : "axisX" === this.type && this.labels[a] ? this.labels[a] : wa(b, this.valueFormatString, this.chart._cultureInfo), a = new O(this.ctx, {x: 0, y: 0, maxWidth: e, maxHeight: g, angle: this.labelAngle, text: this.prefix + a + this.suffix, horizontalAlign: "left", fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily, fontWeight: this.labelFontWeight, fontColor: this.labelFontColor, fontStyle: this.labelFontStyle, textBaseline: "middle"}), this._labels.push({position: b.getTime(), textBlock: a, effectiveHeight: null});
        else {
            d = this.viewportMaximum;
            if (this.labels && this.labels.length) {
                a = Math.ceil(this.interval);
                for (var k = Math.ceil(this.intervalStartPosition), f = !1, b = k; b < this.viewportMaximum; b += a)
                    if (this.labels[b])
                        f = !0;
                    else {
                        f = !1;
                        break
                    }
                f && (this.interval = a, this.intervalStartPosition = k)
            }
            for (b = this.intervalStartPosition; b <=
                    d; b = parseFloat((b + this.interval).toFixed(14)))
                a = this.labelFormatter ? this.labelFormatter({chart: this.chart._publicChartReference, axis: this._options, value: b, label: this.labels[b] ? this.labels[b] : null}) : "axisX" === this.type && this.labels[b] ? this.labels[b] : ba(b, this.valueFormatString, this.chart._cultureInfo), a = new O(this.ctx, {x: 0, y: 0, maxWidth: e, maxHeight: g, angle: this.labelAngle, text: this.prefix + a + this.suffix, horizontalAlign: "left", fontSize: this.labelFontSize, fontFamily: this.labelFontFamily, fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor, fontStyle: this.labelFontStyle, textBaseline: "middle", borderThickness: 0}), this._labels.push({position: b, textBlock: a, effectiveHeight: null})
        }
        d = [];
        f = [];
        if (this.labelAutoFit || this._options.labelAutoFit)
            if ("bottom" === this._position || "top" === this._position)
                if (h = 0, e = 0.9 * q >> 0, x(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 >= this.labelAngle ? this.labelAngle -= 180 : 270 < this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), !this.chart.panEnabled &&
                        1 <= this._labels.length) {
                    this.sessionVariables.labelFontSize = this.labelFontSize;
                    this.sessionVariables.labelMaxWidth = e;
                    this.sessionVariables.labelMaxHeight = g;
                    this.sessionVariables.labelAngle = this.labelAngle;
                    this.sessionVariables.labelWrap = !0;
                    for (b = 0; b < this._labels.length; b++)
                        (a = this._labels[b].textBlock, k = a.measureText(), b < this._labels.length - 1 && (h = b + 1, c = this._labels[h].textBlock, c = c.measureText()), d.push(a.height), this.sessionVariables.labelMaxHeight = Math.max.apply(Math, d), f = e * Math.cos(Math.PI / 180 *
                                Math.abs(this.labelAngle)) + (g - a.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), h = e * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (g - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), x(this._options.labelAngle) && isNaN(this._options.labelAngle) && 0 !== this._options.labelAngle) ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? g : Math.min((h - e * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), h), x(this._options.labelWrap)) ?
                                x(this._options.labelWrap) && (x(this._options.labelMaxWidth) ? x(c) || (k.width + c.width >> 0 >= 2 * e && k.width + c.width >> 0 < 2.4 * e ? (k = this.labelFontSize, this.sessionVariables.labelMaxWidth = 1.2 * e, x(this._options.labelFontSize) && 12 < k && (k = Math.floor(12 / 13 * k), a.measureText()), this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? k : this._options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : k.width + c.width >> 0 >= 2.4 * e && k.width + c.width < 2.8 * e ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth =
                                2.5 * e, this.sessionVariables.labelFontSize = this.labelFontSize) : k.width + c.width >> 0 >= 2.8 * e && k.width + c.width < 3.2 * e ? (this.sessionVariables.labelMaxWidth = 1.2 * e, this.sessionVariables.labelWrap = !0, x(this._options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? this.labelFontSize : this._options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : k.width + c.width >> 0 >=
                                3.2 * e && k.width + c.width < 3.6 * e ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = 2.5 * e, this.sessionVariables.labelFontSize = this.labelFontSize) : k.width + c.width > 3.6 * e && k.width + c.width < 5 * e ? (x(this._options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? this.labelFontSize : this._options.labelFontSize, this.sessionVariables.labelWrap =
                                !0, this.sessionVariables.labelMaxWidth = e, this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelWrap = !0) : k.width + c.width > 5 * e && (this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = e, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelMaxHeight = g, this.sessionVariables.labelAngle = this.labelAngle)) : this._options.labelMaxWidth < e ? (this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth, this.sessionVariables.labelMaxHeight = h) :
                                (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = x(this._options.labelMaxWidth) ? e : this._options.labelMaxWidth > 0.3 * this.chart.width >> 0 ? 0.3 * this.chart.width >> 0 : this._options.labelMaxWidth, this.sessionVariables.labelMaxHeight = 2.5 * this.labelFontSize)) : this._options.labelWrap ? (this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth : e, this.sessionVariables.labelAngle = this._options.labelMaxWidth > e ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxHeight =
                                h) : x(this._options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = e, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = g) : (this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth : e, this.sessionVariables.labelAngle = this._options.labelMaxWidth > e ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxHeight = g, this.sessionVariables.labelWrap = this.labelWrap) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight =
                                0 === this.labelAngle ? g : Math.min((h - e * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), h), x(this._options.labelWrap)) ? x(this._options.labelWrap) && (this.labelWrap && !x(this._options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth > 0.8 * this.chart.height >> 0 ? 0.8 * this.chart.height >> 0 : this._options.labelMaxWidth : e, this.sessionVariables.labelMaxHeight = g) :
                                (this.sessionVariables.labelMaxWidth = f > 0.5 * this.chart.height ? 0.5 * this.chart.height : f, this.sessionVariables.labelMaxHeight = h < 0.9 * q ? 0.9 * q : h < this.labelFontSize ? 2.5 * this.labelFontSize : h - this.labelFontSize, this.sessionVariables.labelWrap = this.labelWrap, x(this._options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : (this._options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth > 0.8 *
                                this.chart.height >> 0 ? 0.8 * this.chart.height >> 0 : this._options.labelMaxWidth : e) : (x(this._options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth > 0.8 * this.chart.height >> 0 ? 0.8 * this.chart.height >> 0 : this._options.labelMaxWidth : f, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = g);
                    for (b = 0; b < this._labels.length; b++)
                        a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize =
                                this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                } else
                    for (b = 0; b < this._labels.length; b++)
                        a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = x(this._options.labelMaxWidth) ? this.sessionVariables.labelMaxWidth : this._options.labelMaxWidth, a.fontSize = this.labelFontSize = x(this._options.labelFontSize) ? this.sessionVariables.labelFontSize :
                                this._options.labelFontSize, a.angle = this.labelAngle = x(this._options.labelAngle) ? this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = x(this._options.labelWrap) ? this.sessionVariables.labelWrap : this._options.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
            else if ("left" === this._position || "right" === this._position)
                if (e = x(this._options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this._options.labelMaxWidth, x(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 +
                        360) % 360, 90 < this.labelAngle && 270 >= this.labelAngle ? this.labelAngle -= 180 : 270 < this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), !this.chart.panEnabled && 1 <= this._labels.length) {
                    this.sessionVariables.labelFontSize = this.labelFontSize;
                    this.sessionVariables.labelMaxWidth = e;
                    this.sessionVariables.labelMaxHeight = g;
                    this.sessionVariables.labelAngle = x(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
                    this.sessionVariables.labelWrap = !0;
                    for (b = 0; b < this._labels.length; b++)
                        (a = this._labels[b].textBlock,
                                k = a.measureText(), b < this._labels.length - 1 && (h = b + 1, c = this._labels[h].textBlock, c = c.measureText()), f.push(a.height), this.sessionVariables.labelMaxHeight = Math.max.apply(Math, f), h = e * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (g - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), x(this._options.labelAngle) && isNaN(this._options.labelAngle) && 0 !== this._options.labelAngle) ? x(this._options.labelWrap) ?
                                x(this._options.labelWrap) && (x(this._options.labelMaxWidth) ? x(c) || (k.height + c.height >> 0 >= 2 * this.labelMaxHeight && k.height + c.height >> 0 < 2.4 * this.labelMaxHeight ? (x(this._options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = this.labelMaxHeight, this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? this.labelFontSize : this._options.labelFontSize) : k.height + c.height >> 0 >= 2.4 * this.labelMaxHeight &&
                                k.height + c.height < 2.8 * this.labelMaxHeight ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = !0) : k.height + c.height >> 0 >= 2.8 * this.labelMaxHeight && k.height + c.height < 3.2 * this.labelMaxHeight ? (this.sessionVariables.labelMaxHeight = this.labelMaxHeight, this.sessionVariables.labelWrap = !0, x(this._options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize),
                                a.measureText()), this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? this.labelFontSize : this._options.labelFontSize, this.sessionVariables.labelAngle = x(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : k.height + c.height >> 0 >= 3.2 * this.labelMaxHeight && k.height + c.height < 3.6 * this.labelMaxHeight ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelFontSize = this.labelFontSize) : k.height +
                                c.height > 3.6 * this.labelMaxHeight && k.height + c.height < 10 * this.labelMaxHeight ? (x(this._options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? this.labelFontSize : this._options.labelFontSize, this.sessionVariables.labelMaxWidth = e, this.sessionVariables.labelMaxHeight = this.labelMaxHeight, this.sessionVariables.labelAngle = x(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) :
                                k.height + c.height > 10 * this.labelMaxHeight && k.height + c.height < 50 * this.labelMaxHeight && (x(this._options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? this.labelFontSize : this._options.labelFontSize, this.sessionVariables.labelMaxHeight = this.labelMaxHeight, this.sessionVariables.labelMaxWidth = e, this.sessionVariables.labelAngle = x(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle)) :
                                this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth < e ? this._options.labelMaxWidth : this._options.labelMaxWidth ? this._options.labelMaxWidth > 0.3 * this.chart.width >> 0 ? 0.3 * this.chart.width >> 0 : this._options.labelMaxWidth : this.sessionVariables.labelMaxWidth) : this._options.labelWrap ? this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth > 0.3 * this.chart.width >> 0 ? 0.3 * this.chart.width >> 0 : this._options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this._options.labelMaxWidth ?
                                this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth > 0.3 * this.chart.width >> 0 ? 0.3 * this.chart.width >> 0 : this._options.labelMaxWidth : this.sessionVariables.labelMaxWidth : (this.sessionVariables.labelMaxWidth = e, this.sessionVariables.labelAngle = -25) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? e : Math.min((h - g * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), g),
                                x(this._options.labelWrap)) ? x(this._options.labelWrap) && (this.labelWrap && !x(this._options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth > 0.8 * this.chart.height >> 0 ? 0.8 * this.chart.height >> 0 : this._options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = h) : (this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth > 0.8 * this.chart.height >>
                                0 ? 0.8 * this.chart.height >> 0 : this._options.labelMaxWidth : e, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? g : h, x(this._options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this._options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? g : h, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = e) : (x(this._options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth > 0.8 *
                                this.chart.height >> 0 ? 0.8 * this.chart.height >> 0 : this._options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap);
                    for (b = 0; b < this._labels.length; b++)
                        a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight,
                                a.measureText()
                } else
                    for (b = 0; b < this._labels.length; b++)
                        a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = x(this._options.labelMaxWidth) ? this.sessionVariables.labelMaxWidth : this._options.labelMaxWidth, a.fontSize = this.labelFontSize = x(this._options.labelFontSize) ? this.sessionVariables.labelFontSize : this._options.labelFontSize, a.angle = this.labelAngle = x(this._options.labelAngle) ? this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = x(this._options.labelWrap) ? this.sessionVariables.labelWrap :
                                this._options.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
        for (b = 0; b < this.stripLines.length; b++)
            c = this.stripLines[b], e = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, a = new O(this.ctx, {x: 0, y: 0, backgroundColor: "outside" === c.labelPlacement ? c._options.labelBackgroundColor ? c._options.labelBackgroundColor : "#EEEEEE" : c.startValue ? "#EEEEEE" : c.labelBackgroundColor, maxWidth: c._options.labelMaxWidth ? c._options.labelMaxWidth : e, maxHeight: "undefined" ===
                        typeof c._options.labelWrap || c.labelWrap ? e : 1.5 * this.labelFontSize, angle: this.labelAngle, text: c.labelFormatter ? c.labelFormatter({chart: this.chart._publicChartReference, axis: this, stripLine: c}) : c.label, horizontalAlign: "left", fontSize: "outside" === c.labelPlacement ? c._options.labelFontSize ? c._options.labelFontSize : this.labelFontSize : c.labelFontSize, fontFamily: "outside" === c.labelPlacement ? c._options.labelFontFamily ? c._options.labelFontFamily : this.labelFontFamily : c.labelFontFamily, fontWeight: "outside" ===
                        c.labelPlacement ? c._options.fontWeight ? c._options.fontWeight : this.fontWeight : c.fontWeight, fontColor: c._options.labelFontColor || c.labelFontColor, fontStyle: "outside" === c.labelPlacement ? c._options.fontStyle ? c._options.fontStyle : this.fontWeight : c.fontStyle, textBaseline: "middle", borderThickness: 0}), this._stripLineLabels.push({position: c.value, textBlock: a, effectiveHeight: null, stripLine: c})
    };
    F.prototype.createLabelsAndCalculateWidth = function () {
        var a = 0, c = 0;
        this._labels = [];
        this._stripLineLabels = [];
        if ("left" ===
                this._position || "right" === this._position) {
            this.createLabels();
            for (c = 0; c < this._labels.length; c++) {
                var b = this._labels[c].textBlock, d = b.measureText(), e = 0, e = 0 === this.labelAngle ? d.width : d.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (d.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                a < e && (a = e);
                this._labels[c].effectiveWidth = e
            }
            for (c = 0; c < this._stripLineLabels.length; c++)
                "outside" === this._stripLineLabels[c].stripLine.labelPlacement && (b = this._stripLineLabels[c].textBlock, d = b.measureText(),
                        e = 0 === this.labelAngle ? d.width : d.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (d.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), a < e && (a = e), this._stripLineLabels[c].effectiveWidth = e)
        }
        return(this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + this.tickLength + 5
    };
    F.prototype.createLabelsAndCalculateHeight = function () {
        var a = 0;
        this._labels = [];
        this._stripLineLabels = [];
        var c, b = 0;
        this.createLabels();
        if ("bottom" === this._position || "top" === this._position) {
            for (b = 0; b < this._labels.length; b++) {
                c =
                        this._labels[b].textBlock;
                var d = c.measureText(), e = 0, e = 0 === this.labelAngle ? d.height : d.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d.height - c.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                a < e && (a = e);
                this._labels[b].effectiveHeight = e
            }
            for (b = 0; b < this._stripLineLabels.length; b++)
                "outside" === this._stripLineLabels[b].stripLine.labelPlacement && (c = this._stripLineLabels[b].textBlock, d = c.measureText(), e = 0 === this.labelAngle ? d.height : d.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) +
                        (d.height - c.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), a < e && (a = e), this._labels[b].effectiveHeight = e)
        }
        return(this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + this.tickLength + 5
    };
    F.setLayoutAndRender = function (a, c, b, d, e) {
        var f, g, h, q = a.chart, k = q.ctx;
        a.calculateAxisParameters();
        c && c.calculateAxisParameters();
        b && b.calculateAxisParameters();
        var n = c ? c.margin : 0, m = b ? b.margin : 0, l = 0, p = 0, r = 0, t, u, s, v, w, B, C = 0, A = 0, D, E, I;
        D = E = I = !1;
        a && a.title && (a._titleTextBlock = new O(a.ctx, {text: a.title,
            horizontalAlign: "center", fontSize: a.titleFontSize, fontFamily: a.titleFontFamily, fontWeight: a.titleFontWeight, fontColor: a.titleFontColor, fontStyle: a.titleFontStyle, textBaseline: "top"}));
        c && c.title && (c._titleTextBlock = new O(c.ctx, {text: c.title, horizontalAlign: "center", fontSize: c.titleFontSize, fontFamily: c.titleFontFamily, fontWeight: c.titleFontWeight, fontColor: c.titleFontColor, fontStyle: c.titleFontStyle, textBaseline: "top"}));
        b && b.title && (b._titleTextBlock = new O(b.ctx, {text: b.title, horizontalAlign: "center",
            fontSize: b.titleFontSize, fontFamily: b.titleFontFamily, fontWeight: b.titleFontWeight, fontColor: b.titleFontColor, fontStyle: b.titleFontStyle, textBaseline: "top"}));
        if ("normal" === d) {
            var G = [], F = [], J = [];
            a && a.title && (a._titleTextBlock.maxWidth = a.titleMaxWidth || e.width, a._titleTextBlock.maxHeight = a.titleWrap ? 0.8 * e.height : 1.5 * a.titleFontSize, a._titleTextBlock.angle = 0);
            c && c.title && (c._titleTextBlock.maxWidth = c.titleMaxWidth || e.height, c._titleTextBlock.maxHeight = c.titleWrap ? 0.8 * e.width : 1.5 * c.titleFontSize, c._titleTextBlock.angle =
                    -90);
            b && b.title && (b._titleTextBlock.maxWidth = b.titleMaxWidth || e.height, b._titleTextBlock.maxHeight = b.titleWrap ? 0.8 * e.width : 1.5 * b.titleFontSize, b._titleTextBlock.angle = 90);
            for (; 4 > l++; ) {
                a.lineCoordinates = {};
                t = Math.ceil(c ? c.createLabelsAndCalculateWidth() : 0);
                F.push(t);
                f = Math.round(e.x1 + t + n);
                u = Math.ceil(b ? b.createLabelsAndCalculateWidth() : 0);
                J.push(u);
                g = Math.round(e.x2 - u - m > a.chart.width - 10 ? a.chart.width - 10 : e.x2 - u - m);
                !a.labelAutoFit || (x(w) || x(B)) || (0 < a.labelAngle ? B + r > g && (C += 0 < a.labelAngle ? B + r - g - u : 0) : 0 >
                        a.labelAngle ? w - p < f && w - p < a.viewportMinimum && (A = f - (n + a.tickLength + t + w - p + a.labelFontSize / 2)) : 0 === a.labelAngle && (B + r > g && (C = B + r / 2 - g - u), w - p < f && w - p < a.viewportMinimum && (A = f - n - a.tickLength - t - w + p / 2)), a.viewportMaximum === a.maximum && a.viewportMinimum === a.minimum && 0 < a.labelAngle && 0 < C ? g -= C : a.viewportMaximum === a.maximum && a.viewportMinimum === a.minimum && 0 > a.labelAngle && 0 < A ? f += A : a.viewportMaximum === a.maximum && a.viewportMinimum === a.minimum && 0 === a.labelAngle && (0 < A && (f += A), 0 < C && (g -= C)));
                a.lineCoordinates.x1 = f;
                a.lineCoordinates.x2 =
                        g;
                a.lineCoordinates.width = Math.abs(g - f);
                a.title && (a._titleTextBlock.maxWidth = 0 < a.titleMaxWidth && a.titleMaxWidth < a.lineCoordinates.width ? a.titleMaxWidth : a.lineCoordinates.width);
                s = Math.ceil(a.createLabelsAndCalculateHeight());
                G.push(s);
                a._labels && 1 < a._labels.length && (d = h = 0, h = a._labels[1], d = "dateTime" === a.chart.plotInfo.axisXValueType ? a._labels[a._labels.length - 2] : a._labels[a._labels.length - 1], p = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - d.textBlock.fontSize /
                        2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)), r = d.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(d.textBlock.angle)) + (d.textBlock.height - d.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(d.textBlock.angle)));
                q.panEnabled ? s = q.sessionVariables.axisX.height : q.sessionVariables.axisX.height = s;
                d = Math.round(e.y2 - s - a.margin);
                h = Math.round(e.y2 - a.margin);
                a.lineCoordinates.y1 = d;
                a.lineCoordinates.y2 = d;
                a.boundingRect = {x1: f, y1: d, x2: g, y2: h, width: g - f, height: h - d};
                c && (f = Math.round(e.x1 + c.margin), d = Math.round(10 >
                        e.y1 ? 10 : e.y1), g = Math.round(e.x1 + t + c.margin), h = Math.round(e.y2 - s - a.margin), c.lineCoordinates = {x1: g, y1: d, x2: g, y2: h, height: Math.abs(h - d)}, c.boundingRect = {x1: f, y1: d, x2: g, y2: h, width: g - f, height: h - d}, c.title && (c._titleTextBlock.maxWidth = 0 < c.titleMaxWidth && c.titleMaxWidth < c.lineCoordinates.height ? c.titleMaxWidth : c.lineCoordinates.height));
                b && (f = Math.round(a.lineCoordinates.x2), d = Math.round(10 > e.y1 ? 10 : e.y1), g = Math.round(f + u), h = Math.round(e.y2 - s - a.margin), b.lineCoordinates = {x1: f, y1: d, x2: f, y2: h, height: Math.abs(h -
                            d)}, b.boundingRect = {x1: f, y1: d, x2: g, y2: h, width: g - f, height: h - d}, b.title && (b._titleTextBlock.maxWidth = 0 < b.titleMaxWidth && b.titleMaxWidth < b.lineCoordinates.height ? b.titleMaxWidth : b.lineCoordinates.height));
                a.calculateValueToPixelConversionParameters();
                a._labels && 1 < a._labels.length && (w = (a._labels[1].position - a.viewportMinimum) * a.conversionParameters.pixelPerUnit + a.lineCoordinates.x1, B = "dateTime" === a.chart.plotInfo.axisXValueType ? (a._labels[a._labels.length - 2].position - a.viewportMinimum) * a.conversionParameters.pixelPerUnit +
                        a.lineCoordinates.x1 : (a._labels[a._labels.length - 1].position - a.viewportMinimum) * a.conversionParameters.pixelPerUnit + a.lineCoordinates.x1);
                c && c.calculateValueToPixelConversionParameters();
                b && b.calculateValueToPixelConversionParameters();
                if (a || c || b) {
                    if (!x(G))
                        for (l = 0; l < G.length; l++)
                            for (j = l + 1; j < G.length; j++)
                                G[l] == G[j] && (D = !0);
                    if (!x(F))
                        for (l = 0; l < F.length; l++)
                            for (j = l + 1; j < F.length; j++)
                                F[l] == F[j] && (E = !0);
                    if (!x(J))
                        for (l = 0; l < J.length; l++)
                            for (j = l + 1; j < J.length; j++)
                                J[l] == J[j] && (I = !0)
                }
                if (D && E && I)
                    break
            }
            k.save();
            k.rect(5, a.boundingRect.y1, a.chart.width - 10, a.boundingRect.height);
            k.clip();
            a.renderLabelsTicksAndTitle();
            k.restore();
            c && c.renderLabelsTicksAndTitle();
            b && b.renderLabelsTicksAndTitle()
        } else {
            m = [];
            w = [];
            B = [];
            a && a.title && (a._titleTextBlock.maxWidth = a.titleMaxWidth || e.height, a._titleTextBlock.maxHeight = a.titleWrap ? 0.8 * e.width : 1.5 * a.titleFontSize, a._titleTextBlock.angle = -90);
            c && c.title && (c._titleTextBlock.maxWidth = c.titleMaxWidth || e.width, c._titleTextBlock.maxHeight = c.titleWrap ? 0.8 * e.height : 1.5 * c.titleFontSize,
                    c._titleTextBlock.angle = 0);
            b && b.title && (b._titleTextBlock.maxWidth = c.titleMaxWidth || e.width, b._titleTextBlock.maxHeight = b.titleWrap ? 0.8 * e.height : 1.5 * b.titleFontSize, b._titleTextBlock.angle = 0);
            for (; 4 > l++; ) {
                C = Math.ceil(a.createLabelsAndCalculateWidth());
                m.push(C);
                c && (c.lineCoordinates = {}, f = Math.round(e.x1 + C + a.margin), g = Math.round(e.x2 > c.chart.width - 10 ? c.chart.width - 10 : e.x2), c.labelAutoFit && !x(t) && (f = 0 > c.labelAngle ? Math.max(f, t) : 0 === c.labelAngle ? Math.max(f, t / 2) : f, g = 0 < c.labelAngle ? g - u : 0 === c.labelAngle ?
                        g - u / 2 : g), c.lineCoordinates.x1 = f, c.lineCoordinates.x2 = g, c.lineCoordinates.width = Math.abs(g - f), c.title && (c._titleTextBlock.maxWidth = 0 < c.titleMaxWidth && c.titleMaxWidth < c.lineCoordinates.width ? c.titleMaxWidth : c.lineCoordinates.width));
                b && (b.lineCoordinates = {}, f = Math.round(e.x1 + C + a.margin), g = Math.round(e.x2 > b.chart.width - 10 ? b.chart.width - 10 : e.x2), c && c.labelAutoFit && !x(s) && (f = 0 < b.labelAngle ? Math.max(f, s) : 0 === b.labelAngle ? Math.max(f, s / 2) : f, g -= v / 2), b.lineCoordinates.x1 = f, b.lineCoordinates.x2 = g, b.lineCoordinates.width =
                        Math.abs(g - f), b.title && (b._titleTextBlock.maxWidth = 0 < b.titleMaxWidth && b.titleMaxWidth < b.lineCoordinates.width ? b.titleMaxWidth : b.lineCoordinates.width));
                A = Math.ceil(c ? c.createLabelsAndCalculateHeight() : 0);
                p = Math.ceil(b ? b.createLabelsAndCalculateHeight() : 0);
                w.push(A);
                B.push(p);
                c && 0 < c._labels.length && (h = c._labels[0], d = c._labels[c._labels.length - 1], t = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - d.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)),
                        u = d.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(d.textBlock.angle)) + (d.textBlock.height - d.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(d.textBlock.angle)));
                b && 0 < b._labels.length && (h = b._labels[0], d = b._labels[b._labels.length - 1], s = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - d.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)), v = d.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(d.textBlock.angle)) + (d.textBlock.height - d.textBlock.fontSize /
                        2) * Math.sin(Math.PI / 180 * Math.abs(d.textBlock.angle)));
                q.panEnabled ? A = q.sessionVariables.axisY.height : q.sessionVariables.axisY.height = A;
                c && (d = Math.round(e.y2 - A - c.margin), h = Math.round(e.y2 - n > c.chart.height - 10 ? c.chart.height - 10 : e.y2 - n), c.lineCoordinates.y1 = d, c.lineCoordinates.y2 = d, c.boundingRect = {x1: f, y1: d, x2: g, y2: h, width: g - f, height: A}, c.title && (c._titleTextBlock.maxWidth = 0 < c.titleMaxWidth && c.titleMaxWidth < c.lineCoordinates.width ? c.titleMaxWidth : c.lineCoordinates.width));
                b && (d = Math.round(e.y1 + b.margin),
                        h = e.y1 + b.margin + p, b.lineCoordinates.y1 = h, b.lineCoordinates.y2 = h, b.boundingRect = {x1: f, y1: d, x2: g, y2: h, width: g - f, height: p}, b.title && (b._titleTextBlock.maxWidth = 0 < b.titleMaxWidth && b.titleMaxWidth < b.lineCoordinates.width ? b.titleMaxWidth : b.lineCoordinates.width));
                f = Math.round(e.x1 + a.margin);
                d = Math.round(b ? b.lineCoordinates.y2 : 10 > e.y1 ? 10 : e.y1);
                g = Math.round(e.x1 + C + a.margin);
                h = Math.round(c ? c.lineCoordinates.y1 : e.y2 - n > a.chart.height - 10 ? a.chart.height - 10 : e.y2 - n);
                c && c.labelAutoFit && (g = 0 > c.labelAngle ? Math.max(g,
                        t) : 0 === c.labelAngle ? Math.max(g, t / 2) : g, f = 0 > c.labelAngle || 0 === c.labelAngle ? g - C : f);
                b && b.labelAutoFit && (g = b.lineCoordinates.x1, f = g - C);
                a.lineCoordinates = {x1: g, y1: d, x2: g, y2: h, height: Math.abs(h - d)};
                a.boundingRect = {x1: f, y1: d, x2: g, y2: h, width: g - f, height: h - d};
                a.title && (a._titleTextBlock.maxWidth = 0 < a.titleMaxWidth && a.titleMaxWidth < a.lineCoordinates.height ? a.titleMaxWidth : a.lineCoordinates.height);
                a.calculateValueToPixelConversionParameters();
                c && c.calculateValueToPixelConversionParameters();
                b && b.calculateValueToPixelConversionParameters();
                if (a || c || b) {
                    if (!x(G))
                        for (l = 0; l < G.length; l++)
                            for (j = l + 1; j < G.length; j++)
                                G[l] == G[j] && (D = !0);
                    if (!x(F))
                        for (l = 0; l < F.length; l++)
                            for (j = l + 1; j < F.length; j++)
                                F[l] == F[j] && (E = !0);
                    if (!x(J))
                        for (l = 0; l < J.length; l++)
                            for (j = l + 1; j < J.length; j++)
                                J[l] == J[j] && (I = !0)
                }
                if (D && E && I)
                    break
            }
            c && c.renderLabelsTicksAndTitle();
            b && b.renderLabelsTicksAndTitle();
            a.renderLabelsTicksAndTitle()
        }
        q.preparePlotArea();
        e = a.chart.plotArea;
        k.save();
        k.rect(e.x1, e.y1, Math.abs(e.x2 - e.x1), Math.abs(e.y2 - e.y1));
        k.clip();
        a.renderStripLinesOfThicknessType("value");
        c && c.renderStripLinesOfThicknessType("value");
        b && b.renderStripLinesOfThicknessType("value");
        a.renderInterlacedColors();
        c && c.renderInterlacedColors();
        b && b.renderInterlacedColors();
        k.restore();
        a.renderGrid();
        c && c.renderGrid();
        b && b.renderGrid();
        a.renderAxisLine();
        c && c.renderAxisLine();
        b && b.renderAxisLine();
        a.renderStripLinesOfThicknessType("pixel");
        c && c.renderStripLinesOfThicknessType("pixel");
        b && b.renderStripLinesOfThicknessType("pixel")
    };
    F.prototype.renderLabelsTicksAndTitle = function () {
        var a = !1, c =
                0, b = 1, d = 0;
        0 !== this.labelAngle && 360 !== this.labelAngle && (b = 1.2);
        if ("undefined" === typeof this._options.interval) {
            if ("bottom" === this._position || "top" === this._position) {
                for (var e = 0; e < this._labels.length; e++)
                    f = this._labels[e], f.position < this.viewportMinimum || (f = f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + f.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle), c += f);
                c > this.lineCoordinates.width * b && this.labelAutoFit && (a = !0)
            }
            if ("left" === this._position || "right" === this._position) {
                for (e = 0; e < this._labels.length; e++)
                    f =
                            this._labels[e], f.position < this.viewportMinimum || (f = f.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + f.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), c += f);
                c > this.lineCoordinates.height * b && this.labelAutoFit && (a = !0)
            }
        }
        if ("bottom" === this._position) {
            for (var f, e = 0; e < this._labels.length; e++)
                f = this._labels[e], f.position < this.viewportMinimum || f.position > this.viewportMaximum || (c = this.getPixelCoordinatesOnAxis(f.position), this.tickThickness && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle =
                        this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (c.x << 0) + 0.5 : c.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, c.y << 0), this.ctx.lineTo(b, c.y + this.tickLength << 0), this.ctx.stroke()), a && 0 !== d++ % 2 && this.labelAutoFit || (0 === f.textBlock.angle ? (c.x -= f.textBlock.width / 2, c.y += this.tickLength + f.textBlock.fontSize / 2) : (c.x -= 0 > this.labelAngle ? f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, c.y += this.tickLength + Math.abs(0 > this.labelAngle ? f.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), f.textBlock.x =
                        c.x, f.textBlock.y = c.y, f.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.boundingRect.y2 - this._titleTextBlock.height - 3, this._titleTextBlock.render(!0))
        } else if ("top" === this._position) {
            for (e = 0; e < this._labels.length; e++)
                f = this._labels[e], f.position < this.viewportMinimum || f.position > this.viewportMaximum || (c = this.getPixelCoordinatesOnAxis(f.position),
                        this.tickThickness && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (c.x << 0) + 0.5 : c.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, c.y << 0), this.ctx.lineTo(b, c.y - this.tickLength << 0), this.ctx.stroke()), a && 0 !== d++ % 2 && this.labelAutoFit || (0 === f.textBlock.angle ? (c.x -= f.textBlock.width / 2, c.y -= this.tickLength + f.textBlock.height) : (c.x += (f.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? f.textBlock.width *
                        Math.cos(Math.PI / 180 * this.labelAngle) : 0), c.y -= this.tickLength + (f.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? f.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0))), f.textBlock.x = c.x, f.textBlock.y = c.y, f.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.boundingRect.y1 + 1, this._titleTextBlock.render(!0))
        } else if ("left" ===
                this._position) {
            for (e = 0; e < this._labels.length; e++)
                f = this._labels[e], f.position < this.viewportMinimum || f.position > this.viewportMaximum || (c = this.getPixelCoordinatesOnAxis(f.position), this.tickThickness && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (c.y << 0) + 0.5 : c.y << 0, this.ctx.beginPath(), this.ctx.moveTo(c.x << 0, b), this.ctx.lineTo(c.x - this.tickLength << 0, b), this.ctx.stroke()), a && 0 !== d++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (f.textBlock.y = c.y,
                        f.textBlock.x = c.x - f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5) : (f.textBlock.y = c.y - f.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), f.textBlock.x = 0 < this.labelAngle ? c.x - f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : c.x - f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (f.textBlock.height - f.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength), f.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(),
                    this._titleTextBlock.x = this.boundingRect.x1 + 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this._titleTextBlock.render(!0))
        } else if ("right" === this._position) {
            for (e = 0; e < this._labels.length; e++)
                f = this._labels[e], f.position < this.viewportMinimum || f.position > this.viewportMaximum || (c = this.getPixelCoordinatesOnAxis(f.position), this.tickThickness && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth %
                        2 ? (c.y << 0) + 0.5 : c.y << 0, this.ctx.beginPath(), this.ctx.moveTo(c.x << 0, b), this.ctx.lineTo(c.x + this.tickLength << 0, b), this.ctx.stroke()), a && 0 !== d++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (f.textBlock.y = c.y, f.textBlock.x = c.x + this.tickLength + 5) : (f.textBlock.y = 0 > this.labelAngle ? c.y : c.y - (f.textBlock.height - f.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), f.textBlock.x = 0 < this.labelAngle ? c.x + (f.textBlock.height - f.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength :
                        c.x + this.tickLength + 5), f.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.boundingRect.x2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this._titleTextBlock.render(!0))
        }
    };
    F.prototype.renderInterlacedColors = function () {
        var a = this.chart.plotArea.ctx, c, b, d = this.chart.plotArea, e = 0;
        c = !0;
        if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor,
                    e = 0; e < this._labels.length; e++)
                this._labels[e].stripLine || (c ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position), b = e + 1 >= this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(c.x, d.y1, Math.abs(b.x - c.x), Math.abs(d.y1 - d.y2)), c = !1) : c = !0);
        else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
                this._labels[e].stripLine ||
                        (c ? (b = this.getPixelCoordinatesOnAxis(this._labels[e].position), c = e + 1 >= this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(d.x1, c.y, Math.abs(d.x1 - d.x2), Math.abs(c.y - b.y)), c = !1) : c = !0);
        a.beginPath()
    };
    F.prototype.renderStripLinesOfThicknessType = function (a) {
        if (this.stripLines && 0 < this.stripLines.length && a) {
            for (var c = this, b, d = 0, d = 0; d < this.stripLines.length; d++) {
                var e = this.stripLines[d];
                e._thicknessType === a && ("pixel" ===
                        a && (e.value < this.viewportMinimum || e.value > this.viewportMaximum) || (e.showOnTop ? this.chart.addEventListener("dataAnimationIterationEnd", function () {
                    this.ctx.save();
                    this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                    this.ctx.clip();
                    e.render();
                    this.ctx.restore()
                }, e) : e.render()))
            }
            for (d = 0; d < this._stripLineLabels.length; d++)
                if (e = this.stripLines[d], b = this._stripLineLabels[d], !(b.position < this.viewportMinimum || b.position > this.viewportMaximum))
                    if (a =
                            this.getPixelCoordinatesOnAxis(b.position), "outside" === b.stripLine.labelPlacement) {
                        e && "pixel" === e._thicknessType && (this.ctx.lineWidth = e.thickness, this.ctx.strokeStyle = e.color);
                        if ("bottom" === this._position) {
                            var f = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0;
                            this.ctx.beginPath();
                            this.ctx.moveTo(f, a.y << 0);
                            this.ctx.lineTo(f, a.y + this.tickLength << 0);
                            this.ctx.stroke();
                            0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y += this.tickLength + b.textBlock.fontSize / 2) : (a.x -= 0 > this.labelAngle ? b.textBlock.width * Math.cos(Math.PI /
                                    180 * this.labelAngle) : 0, a.y += this.tickLength + Math.abs(0 > this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5 : 5))
                        } else
                            "top" === this._position ? (f = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, this.ctx.beginPath(), this.ctx.moveTo(f, a.y << 0), this.ctx.lineTo(f, a.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y -= this.tickLength + b.textBlock.height) : (a.x += (b.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) -
                                    (0 < this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), a.y -= this.tickLength + (b.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" === this._position ? (f = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, f), this.ctx.lineTo(a.x - this.tickLength << 0, f), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) -
                                    this.tickLength - 5 : (a.y -= b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" === this._position && (f = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, f), this.ctx.lineTo(a.x + this.tickLength << 0,
                                    f), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x + this.tickLength + 5 : (a.y = 0 > this.labelAngle ? a.y : a.y - (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : a.x + this.tickLength + 5));
                        b.textBlock.x = a.x;
                        b.textBlock.y = a.y;
                        e.showOnTop ? this.chart.addEventListener("dataAnimationIterationEnd", b.textBlock.render, b.textBlock) : b.textBlock.render(!0)
                    } else
                        b.textBlock.angle =
                                -90, "bottom" === this._position ? (b.textBlock.maxWidth = this._options.stripLines[d].labelMaxWidth ? this._options.stripLines[d].labelMaxWidth : this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? x(e.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, x(e.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize / 2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ?
                                        "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y1 + b.textBlock.width + 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (b.textBlock.maxWidth = this._options.stripLines[d].labelMaxWidth ? this._options.stripLines[d].labelMaxWidth :
                                this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? x(e.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, x(e.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize / 2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + b.textBlock.width + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 +
                                this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y2 - b.textBlock.width - 3) : "left" === this._position ? (b.textBlock.maxWidth = this._options.stripLines[d].labelMaxWidth ? this._options.stripLines[d].labelMaxWidth : this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - b.textBlock.height > this.chart.plotArea.y1 ?
                                x(e.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3 : a.y - b.textBlock.height < this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : x(e.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x2 - b.textBlock.width -
                                3) : "right" === this._position && (b.textBlock.maxWidth = this._options.stripLines[d].labelMaxWidth ? this._options.stripLines[d].labelMaxWidth : this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - +b.textBlock.height > this.chart.plotArea.y1 ? x(e.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 - 3 : a.y - b.textBlock.height < this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : x(e.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize /
                                2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x1 + 3), b.textBlock.x = a.x, b.textBlock.y = a.y, e.showOnTop ? (this.ctx.save(), this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.ctx.clip(), this.chart.addEventListener("dataAnimationIterationEnd",
                                function () {
                                    b.textBlock.render(!0);
                                    c.ctx.restore()
                                }, b.textBlock)) : (this.ctx.save(), this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.ctx.clip(), b.textBlock.render(!0), this.ctx.restore())
        }
    };
    F.prototype.renderGrid = function () {
        if (this.gridThickness && 0 < this.gridThickness) {
            var a = this.chart.ctx;
            a.save();
            var c, b = this.chart.plotArea;
            a.lineWidth = this.gridThickness;
            a.strokeStyle = this.gridColor;
            a.setLineDash && a.setLineDash(D(this.gridDashType,
                    this.gridThickness));
            if ("bottom" === this._position || "top" === this._position)
                for (d = 0; d < this._labels.length && !this._labels[d].stripLine; d++)
                    this._labels[d].position < this.viewportMinimum || this._labels[d].position > this.viewportMaximum || (a.beginPath(), c = this.getPixelCoordinatesOnAxis(this._labels[d].position), c = 1 === a.lineWidth % 2 ? (c.x << 0) + 0.5 : c.x << 0, a.moveTo(c, b.y1 << 0), a.lineTo(c, b.y2 << 0), a.stroke());
            else if ("left" === this._position || "right" === this._position)
                for (var d = 0; d < this._labels.length && !this._labels[d].stripLine; d++)
                    this._labels[d].position <
                            this.viewportMinimum || this._labels[d].position > this.viewportMaximum || (a.beginPath(), c = this.getPixelCoordinatesOnAxis(this._labels[d].position), c = 1 === a.lineWidth % 2 ? (c.y << 0) + 0.5 : c.y << 0, a.moveTo(b.x1 << 0, c), a.lineTo(b.x2 << 0, c), a.stroke());
            a.restore()
        }
    };
    F.prototype.renderAxisLine = function () {
        var a = this.chart.ctx;
        a.save();
        if ("bottom" === this._position || "top" === this._position) {
            if (this.lineThickness) {
                a.lineWidth = this.lineThickness;
                a.strokeStyle = this.lineColor ? this.lineColor : "black";
                a.setLineDash && a.setLineDash(D(this.lineDashType,
                        this.lineThickness));
                var c = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                a.beginPath();
                a.moveTo(this.lineCoordinates.x1, c);
                a.lineTo(this.lineCoordinates.x2, c);
                a.stroke()
            }
        } else
            "left" !== this._position && "right" !== this._position || !this.lineThickness || (a.lineWidth = this.lineThickness, a.strokeStyle = this.lineColor, a.setLineDash && a.setLineDash(D(this.lineDashType, this.lineThickness)), c = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 <<
                    0, a.beginPath(), a.moveTo(c, this.lineCoordinates.y1), a.lineTo(c, this.lineCoordinates.y2), a.stroke());
        a.restore()
    };
    F.prototype.getPixelCoordinatesOnAxis = function (a) {
        var c = {};
        if ("bottom" === this._position || "top" === this._position) {
            var b = this.conversionParameters.pixelPerUnit;
            c.x = this.conversionParameters.reference + b * (a - this.viewportMinimum);
            c.y = this.lineCoordinates.y1
        }
        if ("left" === this._position || "right" === this._position)
            b = -this.conversionParameters.pixelPerUnit, c.y = this.conversionParameters.reference -
                    b * (a - this.viewportMinimum), c.x = this.lineCoordinates.x2;
        return c
    };
    F.prototype.convertPixelToValue = function (a) {
        if (!a)
            return null;
        var c = 0;
        return c = this.conversionParameters.minimum + (("left" === this._position || "right" === this._position ? a.y : a.x) - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit
    };
    F.prototype.setViewPortRange = function (a, c) {
        this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, c);
        this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a,
                c)
    };
    F.prototype.getXValueAt = function (a) {
        if (!a)
            return null;
        var c = null;
        "left" === this._position ? c = (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.height * (this.chart.axisX.lineCoordinates.y2 - a.y) + this.chart.axisX.viewportMinimum : "bottom" === this._position && (c = (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.width * (a.x - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.viewportMinimum);
        return c
    };
    F.prototype.calculateValueToPixelConversionParameters = function (a) {
        this.reversed = !1;
        a = {pixelPerUnit: null, minimum: null, reference: null};
        var c = this.lineCoordinates.width, b = this.lineCoordinates.height;
        a.minimum = this.viewportMinimum;
        if ("bottom" === this._position || "top" === this._position)
            a.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(this.viewportMaximum - this.viewportMinimum), a.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
        if ("left" === this._position || "right" === this._position)
            a.pixelPerUnit =
                    (this.reversed ? 1 : -1) * b / Math.abs(this.viewportMaximum - this.viewportMinimum), a.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
        this.conversionParameters = a
    };
    F.prototype.calculateAxisParameters = function () {
        var a = this.chart.layoutManager.getFreeSpace(), c = !1;
        "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
        var a = "axisX" === this.type ? 500 > this.maxWidth ? 8 : Math.max(6, Math.floor(this.maxWidth /
                62)) : Math.max(Math.floor(this.maxWidth / 40), 2), b, d, e, f;
        f = 0;
        if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum = this.minimum;
        if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum = this.maximum;
        "axisX" === this.type ? (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, d = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 === d - b && (f = "undefined" === typeof this._options.interval ? 0.4 : this._options.interval,
                d += f, b -= f), Infinity !== this.dataInfo.minDiff ? e = this.dataInfo.minDiff : 1 < d - b ? e = 0.5 * Math.abs(d - b) : (e = 1, "dateTime" === this.chart.plotInfo.axisXValueType && (c = !0))) : "axisY" === this.type && (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, d = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(b) || isFinite(d) ? isFinite(b) ? isFinite(d) || (d = b) : b = d : (d = "undefined" === typeof this._options.interval ? -Infinity : this._options.interval, b = 0), 0 === b && 0 === d ? (d += 9, b = 0) :
                0 === d - b ? (f = Math.min(Math.abs(0.01 * Math.abs(d)), 5), d += f, b -= f) : b > d ? (f = Math.min(Math.abs(0.01 * Math.abs(d - b)), 5), 0 <= d ? b = d - f : d = b + f) : (f = Math.min(Math.abs(0.01 * Math.abs(d - b)), 0.05), 0 !== d && (d += f), 0 !== b && (b -= f)), e = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < d - b ? 0.5 * Math.abs(d - b) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < b && (b = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > d && (d = 0));
        f = (isNaN(this.viewportMaximum) || null ===
                this.viewportMaximum ? d : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
        if ("axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType) {
            this.intervalType || (f / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : f / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : f / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : f / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : f / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") :
                    f / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : f / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : f / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : f / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : f / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : f / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : f / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : f / (1 * E.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : f / (2 *
                    E.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : f / (5 * E.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : f / (10 * E.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : f / (15 * E.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : f / (20 * E.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : f / (30 * E.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : f / (1 * E.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : f /
                    (2 * E.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : f / (5 * E.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : f / (10 * E.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : f / (15 * E.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : f / (20 * E.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : f / (30 * E.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : f / (1 * E.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : f /
                    (2 * E.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : f / (3 * E.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : f / (6 * E.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : f / (1 * E.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : f / (2 * E.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : f / (4 * E.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : f / (1 * E.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : f / (2 * E.weekDuration) <= a ? (this.interval = 2,
                    this.intervalType = "week") : f / (3 * E.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : f / (1 * E.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : f / (2 * E.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : f / (3 * E.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : f / (6 * E.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = f / (1 * E.yearDuration) <= a ? 1 : f / (2 * E.yearDuration) <= a ? 2 : f / (4 * E.yearDuration) <= a ? 4 : Math.floor(F.getNiceNumber(f / (a - 1), !0) /
                    E.yearDuration), this.intervalType = "year"));
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                this.viewportMinimum = b - e / 2;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                this.viewportMaximum = d + e / 2;
            c ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString =
                    "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
            this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)
        } else {
            this.intervalType = "number";
            f = F.getNiceNumber(f, !1);
            this.interval = this._options && 0 < this._options.interval ? this._options.interval : F.getNiceNumber(f /
                    (a - 1), !0);
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                this.viewportMinimum = "axisX" === this.type ? b - e / 2 : Math.floor(b / this.interval) * this.interval;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                this.viewportMaximum = "axisX" === this.type ? d + e / 2 : Math.ceil(d / this.interval) * this.interval;
            0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this._options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this._options.viewportMaximum && (this.viewportMinimum -= 10), this._options && "undefined" ===
                    typeof this._options.interval && (this.interval = F.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)))
        }
        if (null === this.minimum || null === this.maximum)
            if ("axisX" === this.type ? (b = null !== this.minimum ? this.minimum : this.dataInfo.min, d = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === d - b && (f = "undefined" === typeof this._options.interval ? 0.4 : this._options.interval, d += f, b -= f), e = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < d - b ? 0.5 * Math.abs(d - b) : 1) : "axisY" === this.type && (b = null !==
                    this.minimum ? this.minimum : this.dataInfo.min, d = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(b) || isFinite(d) ? 0 === b && 0 === d ? (d += 9, b = 0) : 0 === d - b ? (f = Math.min(Math.abs(0.01 * Math.abs(d)), 5), d += f, b -= f) : b > d ? (f = Math.min(Math.abs(0.01 * Math.abs(d - b)), 5), 0 <= d ? b = d - f : d = b + f) : (f = Math.min(Math.abs(0.01 * Math.abs(d - b)), 0.05), 0 !== d && (d += f), 0 !== b && (b -= f)) : (d = "undefined" === typeof this._options.interval ? -Infinity : this._options.interval, b = 0), e = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < d - b ? 0.5 *
                    Math.abs(d - b) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < b && (b = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > d && (d = 0)), "axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType) {
                if (null === this.minimum || isNaN(this.minimum))
                    this.minimum = b - e / 2;
                if (null === this.maximum || isNaN(this.maximum))
                    this.maximum = d + e / 2
            } else
                this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? b - e / 2 : Math.floor(b / this.interval) * this.interval, this.minimum =
                        Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? d + e / 2 : Math.ceil(d / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this._options.minimum ?
                        this.maximum += 10 : 0 === this._options.maximum && (this.minimum -= 10));
        this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
        this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
        this.intervalStartPosition = "axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
        if (!this.valueFormatString && (this.valueFormatString =
                "#,##0.##", f = Math.abs(this.viewportMaximum - this.viewportMinimum), 1 > f)) {
            c = Math.floor(Math.abs(Math.log(f) / Math.LN10)) + 2;
            if (isNaN(c) || !isFinite(c))
                c = 2;
            if (2 < c)
                for (b = 0; b < c - 2; b++)
                    this.valueFormatString += "#"
        }
    };
    F.getNiceNumber = function (a, c) {
        var b = Math.floor(Math.log(a) / Math.LN10), d = a / Math.pow(10, b);
        return Number(((c ? 1.5 > d ? 1 : 3 > d ? 2 : 7 > d ? 5 : 10 : 1 >= d ? 1 : 2 >= d ? 2 : 5 >= d ? 5 : 10) * Math.pow(10, b)).toFixed(20))
    };
    F.prototype.getLabelStartPoint = function () {
        var a = E[this.intervalType + "Duration"] * this.interval, a = new Date(Math.floor(this.viewportMinimum /
                a) * a);
        if ("millisecond" !== this.intervalType)
            if ("second" === this.intervalType)
                0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
            else if ("minute" === this.intervalType) {
                if (0 < a.getSeconds() || 0 < a.getMilliseconds())
                    a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("hour" === this.intervalType) {
                if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                    a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("day" === this.intervalType) {
                if (0 <
                        a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                    a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("week" === this.intervalType) {
                if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                    a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("month" === this.intervalType) {
                if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() ||
                        0 < a.getMilliseconds())
                    a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else
                "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
        return a
    };
    T(pa, L);
    pa.prototype.render = function () {
        this.ctx.save();
        var a = this.parent.getPixelCoordinatesOnAxis(this.value),
                c = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness);
        if (0 < c) {
            var b = null === this.opacity ? 1 : this.opacity;
            this.ctx.strokeStyle = this.color;
            this.ctx.beginPath();
            var d = this.ctx.globalAlpha;
            this.ctx.globalAlpha = b;
            C(this.id);
            var e, f, g, h;
            this.ctx.lineWidth = c;
            this.ctx.setLineDash && this.ctx.setLineDash(D(this.lineDashType, c));
            if ("bottom" === this.parent._position || "top" === this.parent._position)
                e = f = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, g = this.chart.plotArea.y1,
                        h = this.chart.plotArea.y2;
            else if ("left" === this.parent._position || "right" === this.parent._position)
                g = h = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, e = this.chart.plotArea.x1, f = this.chart.plotArea.x2;
            this.ctx.moveTo(e, g);
            this.ctx.lineTo(f, h);
            this.ctx.stroke();
            this.ctx.globalAlpha = d
        }
        this.ctx.restore()
    };
    T(V, L);
    V.prototype._initialize = function () {
        if (this.enabled) {
            this.container = document.createElement("div");
            this.container.setAttribute("class", "canvasjs-chart-tooltip");
            this.container.style.position = "absolute";
            this.container.style.height = "auto";
            this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
            this.container.style.zIndex = "1000";
            this.container.style.display = "none";
            var a;
            a = '<div style=" width: auto;height: auto;min-width: 50px;';
            a += "line-height: auto;";
            a += "margin: 0px 0px 0px 0px;";
            a += "padding: 5px;";
            a += "font-family: Calibri, Arial, Georgia, serif;";
            a += "font-weight: normal;";
            a += "font-style: " + (u ? "italic;" : "normal;");
            a += "font-size: 14px;";
            a += "color: #000000;";
            a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
            a += "text-align: left;";
            a += "border: 2px solid gray;";
            a += u ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
            a += "text-indent: 0px;";
            a += "white-space: nowrap;";
            a += "border-radius: 5px;";
            a += "-moz-user-select:none;";
            a += "-khtml-user-select: none;";
            a += "-webkit-user-select: none;";
            a += "-ms-user-select: none;";
            a += "user-select: none;";
            u || (a += "filter: alpha(opacity = 90);", a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
            a += '} "> Sample Tooltip</div>';
            this.container.innerHTML = a;
            this.contentDiv = this.container.firstChild;
            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
            this.chart._canvasJSContainer.appendChild(this.container)
        }
    };
    V.prototype.mouseMoveHandler = function (a, c) {
        this._lastUpdated && 40 > (new Date).getTime() - this._lastUpdated || (this._lastUpdated = (new Date).getTime(), this._updateToolTip(a, c))
    };
    V.prototype._updateToolTip = function (a, c) {
        if (!this.chart.disableToolTip) {
            if ("undefined" === typeof a || "undefined" === typeof c) {
                if (isNaN(this._prevX) ||
                        isNaN(this._prevY))
                    return;
                a = this._prevX;
                c = this._prevY
            } else
                this._prevX = a, this._prevY = c;
            var b = null, d = null, e = [], f = 0;
            if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                f = "xySwapped" === this.chart.plotInfo.axisPlacement ? (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.height * (this.chart.axisX.lineCoordinates.y2 - c) + this.chart.axisX.viewportMinimum : (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.width *
                        (a - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.viewportMinimum;
                d = [];
                for (b = 0; b < this.chart.data.length; b++) {
                    var g = this.chart.data[b].getDataPointAtX(f, !0);
                    g && 0 <= g.index && (g.dataSeries = this.chart.data[b], null !== g.dataPoint.y && d.push(g))
                }
                if (0 === d.length)
                    return;
                d.sort(function (a, b) {
                    return a.distance - b.distance
                });
                f = d[0];
                for (b = 0; b < d.length; b++)
                    d[b].dataPoint.x.valueOf() === f.dataPoint.x.valueOf() && e.push(d[b]);
                d = null
            } else {
                if (g = this.chart.getDataPointAtXY(a, c, !0))
                    this.currentDataPointIndex = g.dataPointIndex,
                            this.currentSeriesIndex = g.dataSeries.index;
                else if (u)
                    if (g = Ea(a, c, this.chart._eventManager.ghostCtx), 0 < g && "undefined" !== typeof this.chart._eventManager.objectMap[g]) {
                        g = this.chart._eventManager.objectMap[g];
                        if ("legendItem" === g.objectType)
                            return;
                        this.currentSeriesIndex = g.dataSeriesIndex;
                        this.currentDataPointIndex = 0 <= g.dataPointIndex ? g.dataPointIndex : -1
                    } else
                        this.currentDataPointIndex = -1;
                else
                    this.currentDataPointIndex = -1;
                if (0 <= this.currentSeriesIndex) {
                    d = this.chart.data[this.currentSeriesIndex];
                    g = {};
                    if (0 <= this.currentDataPointIndex)
                        b = d.dataPoints[this.currentDataPointIndex], g.dataSeries = d, g.dataPoint = b, g.index = this.currentDataPointIndex, g.distance = Math.abs(b.x - f);
                    else {
                        if (!this.enabled || "line" !== d.type && "stepLine" !== d.type && "spline" !== d.type && "area" !== d.type && "stepArea" !== d.type && "splineArea" !== d.type && "stackedArea" !== d.type && "stackedArea100" !== d.type && "rangeArea" !== d.type && "rangeSplineArea" !== d.type && "candlestick" !== d.type && "ohlc" !== d.type)
                            return;
                        f = d.axisX.conversionParameters.minimum + (a - d.axisX.conversionParameters.reference) /
                                d.axisX.conversionParameters.pixelPerUnit;
                        g = d.getDataPointAtX(f, !0);
                        g.dataSeries = d;
                        this.currentDataPointIndex = g.index;
                        b = g.dataPoint
                    }
                    if (!x(g.dataPoint.y))
                        if (g.dataSeries.axisY)
                            if (0 < g.dataPoint.y.length) {
                                for (b = f = 0; b < g.dataPoint.y.length; b++)
                                    g.dataPoint.y[b] < g.dataSeries.axisY.viewportMinimum ? f-- : g.dataPoint.y[b] > g.dataSeries.axisY.viewportMaximum && f++;
                                f < g.dataPoint.y.length && f > -g.dataPoint.y.length && e.push(g)
                            } else
                                "column" === d.type || "bar" === d.type ? 0 > g.dataPoint.y ? 0 > g.dataSeries.axisY.viewportMinimum &&
                                        g.dataSeries.axisY.viewportMaximum >= g.dataPoint.y && e.push(g) : g.dataSeries.axisY.viewportMinimum <= g.dataPoint.y && 0 <= g.dataSeries.axisY.viewportMaximum && e.push(g) : "bubble" === d.type ? (f = this.chart._eventManager.objectMap[d.dataPointIds[g.index]].size / 2, g.dataPoint.y >= g.dataSeries.axisY.viewportMinimum - f && g.dataPoint.y <= g.dataSeries.axisY.viewportMaximum + f && e.push(g)) : (0 <= g.dataSeries.type.indexOf("100") || "stackedColumn" === d.type || "stackedBar" === d.type || g.dataPoint.y >= g.dataSeries.axisY.viewportMinimum &&
                                        g.dataPoint.y <= g.dataSeries.axisY.viewportMaximum) && e.push(g);
                        else
                            e.push(g)
                }
            }
            if (0 < e.length && (this.highlightObjects(e), this.enabled))
                if (f = "", f = this.getToolTipInnerHTML({entries: e}), null !== f) {
                    this.contentDiv.innerHTML = f;
                    this.contentDiv.innerHTML = f;
                    f = !1;
                    "none" === this.container.style.display && (f = !0, this.container.style.display = "block");
                    try {
                        this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor =
                                this.contentDiv.style.borderColor = this.borderColor ? this.borderColor : e[0].dataPoint.color ? e[0].dataPoint.color : e[0].dataSeries.color ? e[0].dataSeries.color : e[0].dataSeries._colorSet[e[0].index % e[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius,
                                this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : u ? "italic" : "normal"
                    } catch (h) {
                    }
                    "pie" === e[0].dataSeries.type || "doughnut" === e[0].dataSeries.type || "funnel" === e[0].dataSeries.type ||
                            "bar" === e[0].dataSeries.type || "rangeBar" === e[0].dataSeries.type || "stackedBar" === e[0].dataSeries.type || "stackedBar100" === e[0].dataSeries.type ? g = a - 10 - this.container.clientWidth : (g = e[0].dataSeries.axisX.conversionParameters.reference + e[0].dataSeries.axisX.conversionParameters.pixelPerUnit * (e[0].dataPoint.x - e[0].dataSeries.axisX.conversionParameters.minimum) - this.container.clientWidth << 0, g -= 10);
                    0 > g && (g += this.container.clientWidth + 20);
                    g + this.container.clientWidth > Math.max(this.chart._container.clientWidth,
                            this.chart.width) && (g = Math.max(0, Math.max(this.chart._container.clientWidth, this.chart.width) - this.container.clientWidth));
                    e = 1 !== e.length || this.shared || "line" !== e[0].dataSeries.type && "stepLine" !== e[0].dataSeries.type && "spline" !== e[0].dataSeries.type && "area" !== e[0].dataSeries.type && "stepArea" !== e[0].dataSeries.type && "splineArea" !== e[0].dataSeries.type && "stackedArea" !== e[0].dataSeries.type && "stackedArea100" !== e[0].dataSeries.type ? "bar" === e[0].dataSeries.type || "rangeBar" === e[0].dataSeries.type || "stackedBar" ===
                            e[0].dataSeries.type || "stackedBar100" === e[0].dataSeries.type ? e[0].dataSeries.axisX.conversionParameters.reference + e[0].dataSeries.axisX.conversionParameters.pixelPerUnit * (e[0].dataPoint.x - e[0].dataSeries.axisX.viewportMinimum) + 0.5 << 0 : c : e[0].dataSeries.axisY.conversionParameters.reference + e[0].dataSeries.axisY.conversionParameters.pixelPerUnit * (e[0].dataPoint.y - e[0].dataSeries.axisY.viewportMinimum) + 0.5 << 0;
                    e = -e + 10;
                    0 < e + this.container.clientHeight + 5 && (e -= e + this.container.clientHeight + 5 - 0);
                    this.container.style.left =
                            g + "px";
                    this.container.style.bottom = e + "px";
                    !this.animationEnabled || f ? this.disableAnimation() : this.enableAnimation()
                } else
                    this.hide(!1)
        }
    };
    V.prototype.highlightObjects = function (a) {
        var c = this.chart.overlaidCanvasCtx;
        this.chart.resetOverlayedCanvas();
        c.clearRect(0, 0, this.chart.width, this.chart.height);
        c.save();
        var b = this.chart.plotArea, d = 0;
        c.rect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1);
        c.clip();
        for (b = 0; b < a.length; b++) {
            var e = a[b];
            if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType &&
                    "dataPoint" === e.objectType) {
                var d = this.chart.data[e.dataSeriesIndex], f = d.dataPoints[e.dataPointIndex], g = e.dataPointIndex;
                !1 === f.highlightEnabled || !0 !== d.highlightEnabled && !0 !== f.highlightEnabled || ("line" === d.type || "stepLine" === d.type || "spline" === d.type || "scatter" === d.type || "area" === d.type || "stepArea" === d.type || "splineArea" === d.type || "stackedArea" === d.type || "stackedArea100" === d.type || "rangeArea" === d.type || "rangeSplineArea" === d.type ? (f = d.getMarkerProperties(g, e.x1, e.y1, this.chart.overlaidCanvasCtx),
                        f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), P.drawMarkers([f]), "undefined" !== typeof e.y2 && (f = d.getMarkerProperties(g, e.x1, e.y2, this.chart.overlaidCanvasCtx), f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), P.drawMarkers([f]))) : "bubble" === d.type ? (f = d.getMarkerProperties(g, e.x1, e.y1, this.chart.overlaidCanvasCtx), f.size = e.size, f.color =
                        "white", f.borderColor = "white", c.globalAlpha = 0.3, P.drawMarkers([f]), c.globalAlpha = 1) : "column" === d.type || "stackedColumn" === d.type || "stackedColumn100" === d.type || "bar" === d.type || "rangeBar" === d.type || "stackedBar" === d.type || "stackedBar100" === d.type || "rangeColumn" === d.type ? M(c, e.x1, e.y1, e.x2, e.y2, "white", 0, null, !1, !1, !1, !1, 0.3) : "pie" === d.type || "doughnut" === d.type ? ya(c, e.center, e.radius, "white", d.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius) : "candlestick" === d.type ? (c.globalAlpha = 1, c.strokeStyle =
                        e.color, c.lineWidth = 2 * e.borderThickness, d = 0 === c.lineWidth % 2 ? 0 : 0.5, c.beginPath(), c.moveTo(e.x3 - d, e.y2), c.lineTo(e.x3 - d, Math.min(e.y1, e.y4)), c.stroke(), c.beginPath(), c.moveTo(e.x3 - d, Math.max(e.y1, e.y4)), c.lineTo(e.x3 - d, e.y3), c.stroke(), M(c, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, !1, !1, !1, !1), c.globalAlpha = 1) : "ohlc" === d.type && (c.globalAlpha = 1, c.strokeStyle = e.color, c.lineWidth = 2 * e.borderThickness, d = 0 === c.lineWidth % 2 ? 0 : 0.5, c.beginPath(), c.moveTo(e.x3 -
                        d, e.y2), c.lineTo(e.x3 - d, e.y3), c.stroke(), c.beginPath(), c.moveTo(e.x3, e.y1), c.lineTo(e.x1, e.y1), c.stroke(), c.beginPath(), c.moveTo(e.x3, e.y4), c.lineTo(e.x2, e.y4), c.stroke(), c.globalAlpha = 1))
            }
        }
        c.restore();
        c.globalAlpha = 1;
        c.beginPath()
    };
    V.prototype.getToolTipInnerHTML = function (a) {
        a = a.entries;
        for (var c = null, b = null, d = null, e = 0, f = "", g = !0, h = 0; h < a.length; h++)
            if (a[h].dataSeries.toolTipContent || a[h].dataPoint.toolTipContent) {
                g = !1;
                break
            }
        if (g && (this.content && "function" === typeof this.content || this.contentFormatter))
            a =
                    {chart: this.chart._publicChartReference, toolTip: this._options, entries: a}, c = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
        else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
            for (var q = "", h = 0; h < a.length; h++)
                if (b = a[h].dataSeries, d = a[h].dataPoint, e = a[h].index, f = "", 0 === h && (g && !this.content) && (q += "undefined" !== typeof this.chart.axisX.labels[d.x] ? this.chart.axisX.labels[d.x] : "{x}", q += "</br>", q = this.chart.replaceKeywordsWithValue(q, d, b, e)), null !== d.toolTipContent && ("undefined" !==
                        typeof d.toolTipContent || null !== b._options.toolTipContent)) {
                    if ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" === b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type)
                        f += d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ?
                                this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}";
                    else if ("bubble" === b.type)
                        f += d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
                    else if ("rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type)
                        f += d.toolTipContent ? d.toolTipContent :
                                b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}";
                    else if ("candlestick" === b.type || "ohlc" === b.type)
                        f += d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
                    null === c && (c = "");
                    !0 === this.reversed ? (c = this.chart.replaceKeywordsWithValue(f, d, b, e) + c, h < a.length - 1 && (c = "</br>" + c)) : (c += this.chart.replaceKeywordsWithValue(f, d, b, e), h < a.length - 1 && (c += "</br>"))
                }
            null !== c && (c = q + c)
        } else {
            b = a[0].dataSeries;
            d = a[0].dataPoint;
            e = a[0].index;
            if (null === d.toolTipContent || "undefined" === typeof d.toolTipContent && null === b._options.toolTipContent)
                return null;
            if ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" ===
                    b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type)
                f = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}";
            else if ("bubble" === b.type)
                f = d.toolTipContent ? d.toolTipContent :
                        b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
            else if ("pie" === b.type || "doughnut" === b.type || "funnel" === b.type)
                f = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.name ? "{name}:</span>&nbsp;&nbsp;" :
                        d.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}";
            else if ("rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type)
                f = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}";
            else if ("candlestick" === b.type || "ohlc" === b.type)
                f = d.toolTipContent ? d.toolTipContent :
                        b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
            null === c && (c = "");
            c += this.chart.replaceKeywordsWithValue(f, d, b, e)
        }
        return c
    };
    V.prototype.enableAnimation = function () {
        this.container.style.WebkitTransition || (this.container.style.WebkitTransition =
                "left .2s ease-out, bottom .2s ease-out", this.container.style.MozTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.MsTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.transition = "left .2s ease-out, bottom .2s ease-out")
    };
    V.prototype.disableAnimation = function () {
        this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
    };
    V.prototype.hide =
            function (a) {
                this.enabled && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas())
            };
    v.prototype.getPercentAndTotal = function (a, c) {
        var b = null, d = null, e = null;
        if (0 <= a.type.indexOf("stacked"))
            d = 0, b = c.x.getTime ? c.x.getTime() : c.x, b in a.plotUnit.yTotals && (d = a.plotUnit.yTotals[b], e = isNaN(c.y) ? 0 : 0 === d ? 0 : 100 * (c.y / d));
        else if ("pie" === a.type || "doughnut" === a.type) {
            for (i = d = 0; i < a.dataPoints.length; i++)
                isNaN(a.dataPoints[i].y) ||
                        (d += a.dataPoints[i].y);
            e = isNaN(c.y) ? 0 : 100 * (c.y / d)
        }
        return{percent: e, total: d}
    };
    v.prototype.replaceKeywordsWithValue = function (a, c, b, d, e) {
        var f = this;
        e = "undefined" === typeof e ? 0 : e;
        if ((0 <= b.type.indexOf("stacked") || "pie" === b.type || "doughnut" === b.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
            var g = "#percent", h = "#total", q = this.getPercentAndTotal(b, c), h = isNaN(q.total) ? h : q.total, g = isNaN(q.percent) ? g : q.percent;
            do {
                q = "";
                if (b.percentFormatString)
                    q = b.percentFormatString;
                else {
                    var q = "#,##0.", k = Math.max(Math.ceil(Math.log(1 /
                            Math.abs(g)) / Math.LN10), 2);
                    if (isNaN(k) || !isFinite(k))
                        k = 2;
                    for (var n = 0; n < k; n++)
                        q += "#"
                }
                a = a.replace("#percent", ba(g, q, f._cultureInfo));
                a = a.replace("#total", ba(h, b.yValueFormatString ? b.yValueFormatString : "#,##0.########"))
            } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
        }
        return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function (a) {
            if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1])
                return a.slice(1, a.length - 1);
            a = ea(a.slice(1, a.length - 1));
            a = a.replace("#index", e);
            var g = null;
            try {
                var h = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                h && 0 < h.length && (g = ea(h[2]), a = ea(h[1]))
            } catch (k) {
            }
            h = null;
            if ("color" === a)
                return c.color ? c.color : b.color ? b.color : b._colorSet[d % b._colorSet.length];
            if (c.hasOwnProperty(a))
                h = c;
            else if (b.hasOwnProperty(a))
                h = b;
            else
                return"";
            h = h[a];
            null !== g && (h = h[g]);
            return"x" === a ? "dateTime" === f.plotInfo.axisXValueType || "dateTime" === b.xValueType || c.x && c.x.getTime ? wa(h, c.xValueFormatString ? c.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : f.axisX && f.axisX.autoValueFormatString ? f.axisX.autoValueFormatString : "DD MMM YY",
                    f._cultureInfo) : ba(h, c.xValueFormatString ? c.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : "#,##0.########", f._cultureInfo) : "y" === a ? ba(h, c.yValueFormatString ? c.yValueFormatString : b.yValueFormatString ? b.yValueFormatString : "#,##0.########", f._cultureInfo) : "z" === a ? ba(h, c.zValueFormatString ? c.zValueFormatString : b.zValueFormatString ? b.zValueFormatString : "#,##0.########", f._cultureInfo) : h
        })
    };
    fa.prototype.reset = function () {
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions =
        [];
        this.previousDataPointEventObject = null;
        this.eventObjects = [];
        u && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath())
    };
    fa.prototype.getNewObjectTrackingId = function () {
        return++this.lastObjectId
    };
    fa.prototype.mouseEventHandler = function (a) {
        if ("mousemove" === a.type || "click" === a.type) {
            var c = [], b = ra(a), d = null;
            if ((d = this.chart.getObjectAtXY(b.x, b.y, !1)) && "undefined" !== typeof this.objectMap[d])
                if (d = this.objectMap[d], "dataPoint" === d.objectType) {
                    var e = this.chart.data[d.dataSeriesIndex],
                            f = e.dataPoints[d.dataPointIndex], g = d.dataPointIndex;
                    d.eventParameter = {x: b.x, y: b.y, dataPoint: f, dataSeries: e._options, dataPointIndex: g, dataSeriesIndex: e.index, chart: this.chart._publicChartReference};
                    d.eventContext = {context: f, userContext: f, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click"};
                    c.push(d);
                    d = this.objectMap[e.id];
                    d.eventParameter = {x: b.x, y: b.y, dataPoint: f, dataSeries: e._options, dataPointIndex: g, dataSeriesIndex: e.index, chart: this.chart._publicChartReference};
                    d.eventContext =
                            {context: e, userContext: e._options, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click"};
                    c.push(this.objectMap[e.id])
                } else
                    "legendItem" === d.objectType && (e = this.chart.data[d.dataSeriesIndex], f = null !== d.dataPointIndex ? e.dataPoints[d.dataPointIndex] : null, d.eventParameter = {x: b.x, y: b.y, dataSeries: e._options, dataPoint: f, dataPointIndex: d.dataPointIndex, dataSeriesIndex: d.dataSeriesIndex, chart: this.chart._publicChartReference}, d.eventContext = {context: this.chart.legend, userContext: this.chart.legend._options,
                        mouseover: "itemmouseover", mousemove: "itemmousemove", mouseout: "itemmouseout", click: "itemclick"}, c.push(d));
            e = [];
            for (b = 0; b < this.mouseoveredObjectMaps.length; b++) {
                f = !0;
                for (d = 0; d < c.length; d++)
                    if (c[d].id === this.mouseoveredObjectMaps[b].id) {
                        f = !1;
                        break
                    }
                f ? this.fireEvent(this.mouseoveredObjectMaps[b], "mouseout", a) : e.push(this.mouseoveredObjectMaps[b])
            }
            this.mouseoveredObjectMaps = e;
            for (b = 0; b < c.length; b++) {
                e = !1;
                for (d = 0; d < this.mouseoveredObjectMaps.length; d++)
                    if (c[b].id === this.mouseoveredObjectMaps[d].id) {
                        e = !0;
                        break
                    }
                e || (this.fireEvent(c[b], "mouseover", a), this.mouseoveredObjectMaps.push(c[b]));
                "click" === a.type ? this.fireEvent(c[b], "click", a) : "mousemove" === a.type && this.fireEvent(c[b], "mousemove", a)
            }
        }
    };
    fa.prototype.fireEvent = function (a, c, b) {
        if (a && c) {
            var d = a.eventParameter, e = a.eventContext, f = a.eventContext.userContext;
            f && (e && f[e[c]]) && f[e[c]].call(f, d);
            "mouseout" !== c ? f.cursor && f.cursor !== b.target.style.cursor && (b.target.style.cursor = f.cursor) : (b.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter,
                    delete a.eventContext);
            "click" === c && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], d)
        }
    };
    T(ha, L);
    va.prototype.animate = function (a, c, b, d, e) {
        var f = this;
        this.chart.isAnimating = !0;
        e = e || B.easing.linear;
        b && this.animations.push({startTime: (new Date).getTime() + (a ? a : 0), duration: c, animationCallback: b, onComplete: d});
        for (a = []; 0 < this.animations.length; )
            if (c = this.animations.shift(), b = (new Date).getTime(), d = 0, c.startTime <=
                    b && (d = e(Math.min(b - c.startTime, c.duration), 0, 1, c.duration), d = Math.min(d, 1), isNaN(d) || !isFinite(d)) && (d = 1), 1 > d && a.push(c), c.animationCallback(d), 1 <= d && c.onComplete)
                c.onComplete();
        this.animations = a;
        0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function () {
            f.animate.call(f)
        }) : this.chart.isAnimating = !1
    };
    va.prototype.cancelAllAnimations = function () {
        this.animations = [];
        this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this.animationRequestId = null;
        this.chart.isAnimating = !1
    };
    var B = {yScaleAnimation: function (a, c) {
            if (0 !== a) {
                var b = c.dest, d = c.source.canvas, e = c.animationBase;
                b.drawImage(d, 0, 0, d.width, d.height, 0, e - e * a, b.canvas.width / N, a * b.canvas.height / N)
            }
        }, xScaleAnimation: function (a, c) {
            if (0 !== a) {
                var b = c.dest, d = c.source.canvas, e = c.animationBase;
                b.drawImage(d, 0, 0, d.width, d.height, e - e * a, 0, a * b.canvas.width / N, b.canvas.height / N)
            }
        }, xClipAnimation: function (a, c) {
            if (0 !== a) {
                var b = c.dest, d = c.source.canvas;
                b.save();
                0 < a && b.drawImage(d,
                        0, 0, d.width * a, d.height, 0, 0, d.width * a / N, d.height / N);
                b.restore()
            }
        }, fadeInAnimation: function (a, c) {
            if (0 !== a) {
                var b = c.dest, d = c.source.canvas;
                b.save();
                b.globalAlpha = a;
                b.drawImage(d, 0, 0, d.width, d.height, 0, 0, b.canvas.width / N, b.canvas.height / N);
                b.restore()
            }
        }, easing: {linear: function (a, c, b, d) {
                return b * a / d + c
            }, easeOutQuad: function (a, c, b, d) {
                return-b * (a /= d) * (a - 2) + c
            }, easeOutQuart: function (a, c, b, d) {
                return-b * ((a = a / d - 1) * a * a * a - 1) + c
            }, easeInQuad: function (a, c, b, d) {
                return b * (a /= d) * a + c
            }, easeInQuart: function (a, c, b, d) {
                return b *
                        (a /= d) * a * a * a + c
            }}}, P = {drawMarker: function (a, c, b, d, e, f, g, h) {
            if (b) {
                var q = 1;
                b.fillStyle = f ? f : "#000000";
                b.strokeStyle = g ? g : "#000000";
                b.lineWidth = h ? h : 0;
                "circle" === d ? (b.moveTo(a, c), b.beginPath(), b.arc(a, c, e / 2, 0, 2 * Math.PI, !1), f && b.fill(), h && (g ? b.stroke() : (q = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = q))) : "square" === d ? (b.beginPath(), b.rect(a - e / 2, c - e / 2, e, e), f && b.fill(), h && (g ? b.stroke() : (q = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = q))) :
                        "triangle" === d ? (b.beginPath(), b.moveTo(a - e / 2, c + e / 2), b.lineTo(a + e / 2, c + e / 2), b.lineTo(a, c - e / 2), b.closePath(), f && b.fill(), h && (g ? b.stroke() : (q = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = q)), b.beginPath()) : "cross" === d && (b.strokeStyle = f, b.lineWidth = e / 4, b.beginPath(), b.moveTo(a - e / 2, c - e / 2), b.lineTo(a + e / 2, c + e / 2), b.stroke(), b.moveTo(a + e / 2, c - e / 2), b.lineTo(a - e / 2, c + e / 2), b.stroke())
            }
        }, drawMarkers: function (a) {
            for (var c = 0; c < a.length; c++) {
                var b = a[c];
                P.drawMarker(b.x, b.y, b.ctx, b.type,
                        b.size, b.color, b.borderColor, b.borderThickness)
            }
        }}, Ia = {Chart: function (a, c) {
            var b = new v(a, c, this);
            this.render = function () {
                b.render(this.options)
            };
            this.options = b._options
        }, addColorSet: function (a, c) {
            aa[a] = c
        }, addCultureInfo: function (a, c) {
            ia[a] = c
        }, formatNumber: function (a, c, b) {
            b = b || "en";
            if (ia[b])
                return ba(a, c || "#,##0.##", new ha(b));
            throw"Unknown Culture Name";
        }, formatDate: function (a, c, b) {
            b = b || "en";
            if (ia[b])
                return wa(a, c || "DD MMM YYYY", new ha(b));
            throw"Unknown Culture Name";
        }};
    Ia.Chart.version = "v1.8.1 Beta 2";
    window.CanvasJS = Ia
})();
/*
 excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.
 
 Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
 Licensed under the Apache License, Version 2.0
 */
document.createElement("canvas").getContext || function () {
    function V() {
        return this.context_ || (this.context_ = new C(this))
    }
    function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function () {
            return a.apply(b, g.concat(M.call(arguments)))
        }
    }
    function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }
    function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }
    function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
            case "width":
                b.getContext().clearRect();
                b.style.width = b.attributes.width.nodeValue + "px";
                b.firstChild.style.width = b.clientWidth + "px";
                break;
            case "height":
                b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight +
                        "px"
            }
    }
    function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px")
    }
    function D() {
        return[[1, 0, 0], [0, 1, 0], [0, 0, 1]]
    }
    function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
            for (var e = 0; 3 > e; e++) {
                for (var f = 0, d = 0; 3 > d; d++)
                    f += a[g][d] * b[d][e];
                c[g][e] = f
            }
        return c
    }
    function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX =
                a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_
    }
    function Q(a) {
        var b = a.indexOf("(", 3), c = a.indexOf(")", b + 1), b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3))
            b[3] = 1;
        return b
    }
    function E(a, b, c) {
        return Math.min(c, Math.max(b, a))
    }
    function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c :
                1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }
    function G(a) {
        if (a in H)
            return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0))
            b = a;
        else if (/^rgb/.test(a)) {
            c = Q(a);
            b = "#";
            for (var g, e = 0; 3 > e; e++)
                g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
            c = +c[3]
        } else if (/^hsl/.test(a)) {
            e = c = Q(a);
            b = parseFloat(e[0]) / 360 % 360;
            0 > b && b++;
            g = E(parseFloat(e[1]) / 100, 0, 1);
            e = E(parseFloat(e[2]) / 100, 0, 1);
            if (0 == g)
                g = e = b = e;
            else {
                var f = 0.5 > e ? e * (1 + g) : e + g - e * g, d = 2 * e - f;
                g = F(d, f, b + 1 / 3);
                e = F(d, f, b);
                b = F(d, f, b - 1 / 3)
            }
            b = "#" +
                    v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
            c = c[3]
        } else
            b = Z[a] || a;
        return H[a] = {color: b, alpha: c}
    }
    function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
                c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(!1);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }
    function R(a, b, c, g) {
        a.currentPath_.push({type: "bezierCurveTo", cp1x: b.x, cp1y: b.y, cp2x: c.x, cp2y: c.y, x: g.x, y: g.y});
        a.currentX_ = g.x;
        a.currentY_ = g.y
    }
    function S(a, b) {
        var c = G(a.strokeStyle), g = c.color, c = c.alpha * a.globalAlpha, e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push("<g_vml_:stroke",
                ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
    }
    function T(a, b, c, g) {
        var e = a.fillStyle, f = a.arcScaleX_, d = a.arcScaleY_, k = g.x - c.x, n = g.y - c.y;
        if (e instanceof w) {
            var h = 0, l = g = 0, u = 0, m = 1;
            if ("gradient" == e.type_) {
                h = e.x1_ / f;
                c = e.y1_ / d;
                var p = s(a, e.x0_ / f, e.y0_ / d), h = s(a, h, c), h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
                0 > h && (h += 360);
                1E-6 > h && (h = 0)
            } else
                p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k, l = (p.y - c.y) / n, k /= f * q,
                        n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
            f = e.colors_;
            f.sort(function (a, b) {
                return a.offset - b.offset
            });
            d = f.length;
            p = f[0].color;
            c = f[d - 1].color;
            k = f[0].alpha * a.globalAlpha;
            a = f[d - 1].alpha * a.globalAlpha;
            for (var n = [], r = 0; r < d; r++) {
                var t = f[r];
                n.push(t.offset * m + u + " " + t.color)
            }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
        } else
            e instanceof
                    I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
    }
    function s(a, b, c) {
        a = a.m_;
        return{x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r, y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r}
    }
    function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] *
                b[1][0]))))
    }
    function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = []
    }
    function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName)
            throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState)
            throw new A("INVALID_STATE_ERR");
        switch (b) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat";
                break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = b;
                break;
            default:
                throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height
    }
    function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code
    }
    var x = Math, k = x.round, J = x.sin, K = x.cos, ba = x.abs, aa = x.sqrt, q = 10, r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {init: function (a) {
            a = a || document;
            a.createElement("canvas");
            a.attachEvent("onreadystatechange", W(this.init_, this, a))
        }, init_: function (a) {
            a = a.getElementsByTagName("canvas");
            for (var b = 0; b < a.length; b++)
                this.initElement(a[b])
        }, initElement: function (a) {
            if (!a.getContext) {
                a.getContext =
                        V;
                O(a.ownerDocument);
                a.innerHTML = "";
                a.attachEvent("onpropertychange", X);
                a.attachEvent("onresize", Y);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
                b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
            }
            return a
        }};
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++)
            v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC",
        bisque: "#FFE4C4", black: "#000000", blanchedalmond: "#FFEBCD", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#00FFFF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgreen: "#006400", darkgrey: "#A9A9A9", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000",
        darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", grey: "#808080", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082",
        ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgreen: "#90EE90", lightgrey: "#D3D3D3", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#FF00FF", mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", oldlace: "#FDF5E6", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", whitesmoke: "#F5F5F5", yellowgreen: "#9ACD32"},
    H = {}, L = {}, $ = {butt: "flat", round: "round"}, d = C.prototype;
    d.clearRect = function () {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null);
        this.element_.innerHTML = ""
    };
    d.beginPath = function () {
        this.currentPath_ = []
    };
    d.moveTo = function (a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({type: "moveTo", x: c.x, y: c.y});
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.lineTo = function (a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({type: "lineTo", x: c.x, y: c.y});
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.bezierCurveTo =
            function (a, b, c, g, e, f) {
                e = s(this, e, f);
                a = s(this, a, b);
                c = s(this, c, g);
                R(this, a, c, e)
            };
    d.quadraticCurveTo = function (a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = {x: this.currentX_ + 2 / 3 * (a.x - this.currentX_), y: this.currentY_ + 2 / 3 * (a.y - this.currentY_)};
        R(this, g, {x: g.x + (c.x - this.currentX_) / 3, y: g.y + (c.y - this.currentY_) / 3}, c)
    };
    d.arc = function (a, b, c, g, e, f) {
        c *= q;
        var d = f ? "at" : "wa", k = a + K(g) * c - r, n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k != g || f || (k += 0.125);
        a = s(this, a, b);
        k = s(this, k, n);
        g = s(this, g, e);
        this.currentPath_.push({type: d,
            x: a.x, y: a.y, radius: c, xStart: k.x, yStart: k.y, xEnd: g.x, yEnd: g.y})
    };
    d.rect = function (a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath()
    };
    d.strokeRect = function (a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e
    };
    d.fillRect = function (a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a +
                c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e
    };
    d.createLinearGradient = function (a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e
    };
    d.createRadialGradient = function (a, b, c, g, e, f) {
        var d = new w("gradientradial");
        d.x0_ = a;
        d.y0_ = b;
        d.r0_ = c;
        d.x1_ = g;
        d.y1_ = e;
        d.r1_ = f;
        return d
    };
    d.drawImage = function (a, b) {
        var c, g, e, d, r, y, n, h;
        e = a.runtimeStyle.width;
        d = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width, u = a.height;
        a.runtimeStyle.width =
                e;
        a.runtimeStyle.height = d;
        if (3 == arguments.length)
            c = arguments[1], g = arguments[2], r = y = 0, n = e = l, h = d = u;
        else if (5 == arguments.length)
            c = arguments[1], g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u;
        else if (9 == arguments.length)
            r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d = arguments[8];
        else
            throw Error("Invalid number of arguments");
        var m = s(this, c, g), p = [];
        p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:',
                10, "px;height:", 10, "px;position:absolute;");
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
            var t = [];
            t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
            var v = s(this, c + e, g), w = s(this, c, g + d);
            c = s(this, c + e, g + d);
            m.x = x.max(m.x, v.x, w.x, c.x);
            m.y = x.max(m.y, v.y, w.y, c.y);
            p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');")
        } else
            p.push("top:",
                    k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    };
    d.stroke = function (a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"',
                ' stroked="', !a, '"', ' path="');
        for (var c = {x: null, y: null}, d = {x: null, y: null}, e = 0; e < this.currentPath_.length; e++) {
            var f = this.currentPath_[e];
            switch (f.type) {
                case "moveTo":
                    b.push(" m ", k(f.x), ",", k(f.y));
                    break;
                case "lineTo":
                    b.push(" l ", k(f.x), ",", k(f.y));
                    break;
                case "close":
                    b.push(" x ");
                    f = null;
                    break;
                case "bezierCurveTo":
                    b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                    break;
                case "at":
                case "wa":
                    b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ *
                            f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
            }
            if (f) {
                if (null == c.x || f.x < c.x)
                    c.x = f.x;
                if (null == d.x || f.x > d.x)
                    d.x = f.x;
                if (null == c.y || f.y < c.y)
                    c.y = f.y;
                if (null == d.y || f.y > d.y)
                    d.y = f.y
            }
        }
        b.push(' ">');
        a ? T(this, b, c, d) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    };
    d.fill = function () {
        this.stroke(!0)
    };
    d.closePath = function () {
        this.currentPath_.push({type: "close"})
    };
    d.save = function () {
        var a =
                {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_)
    };
    d.restore = function () {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
    };
    d.translate = function (a, b) {
        z(this, t([[1, 0, 0], [0, 1, 0], [a, b, 1]], this.m_), !1)
    };
    d.rotate = function (a) {
        var b = K(a);
        a = J(a);
        z(this, t([[b, a, 0], [-a, b, 0], [0, 0, 1]], this.m_), !1)
    };
    d.scale = function (a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([[a, 0, 0], [0, b, 0], [0, 0, 1]], this.m_), !0)
    };
    d.transform = function (a, b, c, d, e, f) {
        z(this, t([[a,
                b, 0], [c, d, 0], [e, f, 1]], this.m_), !0)
    };
    d.setTransform = function (a, b, c, d, e, f) {
        z(this, [[a, b, 0], [c, d, 0], [e, f, 1]], !0)
    };
    d.drawText_ = function (a, b, c, d, e) {
        var f = this.m_;
        d = 0;
        var r = 1E3, t = 0, n = [], h;
        h = this.font;
        if (L[h])
            h = L[h];
        else {
            var l = document.createElement("div").style;
            try {
                l.font = h
            } catch (u) {
            }
            h = L[h] = {style: l.fontStyle || "normal", variant: l.fontVariant || "normal", weight: l.fontWeight || "normal", size: l.fontSize || 10, family: l.fontFamily || "sans-serif"}
        }
        var l = h, m = this.element_;
        h = {};
        for (var p in l)
            h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                l = "ltr" == m.direction ? "right" : "left";
                break;
            case "start":
                l = "rtl" == m.direction ? "right" :
                        "left";
                break;
            default:
                l = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                t = h.size / 1.75;
                break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                t = -h.size / 2.25
        }
        switch (l) {
            case "right":
                d = 1E3;
                r = 0.05;
                break;
            case "center":
                d = r = 500
        }
        b = s(this, b + 0, c + t);
        n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(this, n, {x: -d, y: 0},
        {x: r, y: h.size});
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
    };
    d.fillText = function (a, b, c, d) {
        this.drawText_(a, b, c, d, !1)
    };
    d.strokeText = function (a,
            b, c, d) {
        this.drawText_(a, b, c, d, !0)
    };
    d.measureText = function (a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return{width: this.textMeasureEl_.offsetWidth}
    };
    d.clip = function () {
    };
    d.arcTo = function () {
    };
    d.createPattern = function (a, b) {
        return new I(a, b)
    };
    w.prototype.addColorStop = function (a, b) {
        b = G(b);
        this.colors_.push({offset: a, color: b.color, alpha: b.alpha})
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR =
            13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A
}();
