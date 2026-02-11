Clazz.declarePackage("J.rendersurface");
Clazz.load(["J.rendersurface.IsosurfaceRenderer"], "J.rendersurface.PmeshRenderer", null, function(){
var c$ = Clazz.declareType(J.rendersurface, "PmeshRenderer", J.rendersurface.IsosurfaceRenderer);
Clazz.overrideMethod(c$, "render", 
function(){
return this.renderIso();
});
});
;//5.0.1-v7 Thu Feb 05 13:38:23 CST 2026
