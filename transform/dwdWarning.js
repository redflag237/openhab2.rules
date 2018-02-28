(function() {
	var lines = input.toString();
	//var regex = /(?:{\"regionName\":\"Ennepe-Ruhr-Kreis\"[^}]+\"description\":\")([^}"]+)(?:\"[^}]+\"event\":\")([^}"]+)(?:\"[^}]+)(?:})/ig;
    var res = lines.match(/{\"regionName\":\"Ennepe-Ruhr-Kreis\"[^}]+\"description\":\"([^}"])+\"[^}]+\"event\":\"([^}"])+\"[^}]+}/ig).toString();

    var myRegexp = /(?:{\"regionName\":\"Ennepe-Ruhr-Kreis\"[^}]+\"description\":\")([^}"]+)(?:\"[^}]+\"event\":\")([^}"]+)(?:\"[^}]+)(?:})/ig;
    match = myRegexp.exec(res);
    var res2 = '';
    while (match != null) {
      // matched text: match[0]
      // match start: match.index
      // capturing group n: match[n]
      res2 += match[2] + ': ' + match[1] + '\r\n';
      match = myRegexp.exec(res);
    }

	return res2;
}(input));