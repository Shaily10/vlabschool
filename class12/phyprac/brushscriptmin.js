/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(){
    typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
    function a(){
        var b="break case catch continue default delete do else false  for function if in instanceof new null return super switch this throw true try typeof var while with";
        var c=SyntaxHighlighter.regexLib;
        this.regexList=[{regex:c.multiLineDoubleQuotedString,css:"string"},
            {regex:c.multiLineSingleQuotedString,css:"string"},
            {regex:c.singleLineCComments,css:"comments"},
            {regex:c.multiLineCComments,css:"comments"},
            {regex:/\s*#.*/gm,css:"preprocessor"},
            {regex:new RegExp(this.getKeywords(b),"gm"),
                css:"keyword"}];
        this.forHtmlScript(c.scriptScriptTags)}
    a.prototype=new SyntaxHighlighter.Highlighter();
    a.aliases=["js","jscript","javascript"];
    SyntaxHighlighter.brushes.JScript=a;
    typeof(exports)!="undefined"?exports.Brush=a:null
})();


