Clazz.declarePackage ("JSV.js2d");
Clazz.load (["JSV.api.JSVFileHelper"], "JSV.js2d.JsFileHelper", ["JSV.js2d.JsFile"], function () {
c$ = Clazz.decorateAsClass (function () {
this.viewer = null;
Clazz.instantialize (this, arguments);
}, JSV.js2d, "JsFileHelper", null, JSV.api.JSVFileHelper);
Clazz.makeConstructor (c$, 
function () {
});
$_V(c$, "set", 
function (viewer) {
this.viewer = viewer;
return this;
}, "JSV.common.JSViewer");
$_V(c$, "getFile", 
function (fileName, panelOrFrame, isSave) {
var f = null;
{
f = prompt("Enter a file name:", fileName);
}return (f == null ? null :  new JSV.js2d.JsFile (f));
}, "~S,~O,~B");
$_V(c$, "setDirLastExported", 
function (name) {
return name;
}, "~S");
$_V(c$, "setFileChooser", 
function (pdf) {
}, "JSV.common.ExportType");
$_V(c$, "showFileOpenDialog", 
function (panelOrFrame, isAppend) {
var applet = this.viewer.applet;
{
Jmol._loadFileAsynchronously(this, applet, "", isAppend);
}return null;
}, "~O,~B");
$_M(c$, "setData", 
function (fileName, data, isAppend) {
if (fileName == null) return;
if (data == null) {
this.viewer.selectedPanel.showMessage (fileName, "File Open Error");
return;
}this.viewer.si.siOpenDataOrFile ( String.instantialize (data), fileName, null, null, -1, -1, isAppend != null);
}, "~S,~O,~O");
$_V(c$, "getUrlFromDialog", 
function (info, msg) {
{
return prompt(info, msg);
}}, "~S,~S");
});
