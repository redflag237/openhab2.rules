(function() {
	var lines = input.toString();
	//var regex = /(?:{\"regionName\":\"Ennepe-Ruhr-Kreis\"[^}]+\"description\":\")([^}"]+)(?:\"[^}]+\"event\":\")([^}"]+)(?:\"[^}]+)(?:})/ig;
    //var res = lines.match(/{\"regionName\":\"Ennepe-Ruhr-Kreis\"[^}]+\"description\":\"([^}"])+\"[^}]+\"event\":\"([^}"])+\"[^}]+}/ig).toString();

    var myRegexp = /(?:{\"regionName\":\"Ennepe-Ruhr-Kreis\")(?:[",]+)(?:\"start\":\")([\d\s.:]{16})(?:[",]+)(?:\"end\":\")([\d\s.:]{16})(?:[^}]+)(?:\"description\":\")([^}"]+)(?:\"[^}]+\"event\":\")([^}"]+)(?:\"[^}]+)(?:})/ig;
    match = myRegexp.exec(lines);
    var res2 = '';
    while (match != null) {
      // matched text: match[0]
      // match start: match.index
      // capturing group n: match[n]
      res2 += match[4] + ': ' + match[3] + ' (' + match[1] + ' - ' + match[2] + ')\r\n';
      match = myRegexp.exec(lines);
    }

	return res2;
}(input));