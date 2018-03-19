// ok, we are running inside rhino here...
// see https://github.com/openhab/openhab/raw/master/bundles/core/org.openhab.core.transform/src/main/java/org/openhab/core/transform/internal/service/JavaScriptTransformationService.java
// and https://docs.oracle.com/javase/7/docs/technotes/guides/scripting/programmer_guide/

// openhab binding looks like this:
// String uwz      "Warnstufe: [MAP(uwz_de.map:%s]" (Weather) { http="<[http://www.unwetterzentrale.de/uwz/getwarning_de.php?plz=69429&uwz=UWZ-DE&lang=de:80:JS(uwzWarning.js)]" }

// logic from http://knx-user-forum.de/forum/%C3%B6ffentlicher-bereich/knx-eib-forum/code-schnipsel/16534-unwetterzentrale
(function() {
	var lines = input.toString().split('\n');
	var regex = /<div style="float:left;display:block;width:117px;height:110px;padding-top:6px;"><img src="..\/images\/icons\/(.*?)-(.*?).gif" width="117" height="104"><\/div>/ig;

	var warnstufen = {gelb: 1, orange: 2, rot: 3, violett: 4};
	var	warntyp = {gewitter: 1, glatteisregen: 2, regen: 3, schnee: 4, sturm: 5, temperatur: 6, strassenglaette: 7};
	
	var type_max = 0;
	var level_max = 0;
	for (var i = 0; i < lines.length; i += 1) {
		var match = regex.exec(lines[i]);
		if (match != null) {
			var type = warntyp[match[1]];
			var level = warnstufen[match[2]];
			if (type > type_max) type_max = type;
			if (level > level_max) level_max = level;
		}
	}
	result = type_max + '-' + level_max;
	return result;
}(input));