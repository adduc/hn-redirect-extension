
var regex = /^\?id=(\d+)/;
var dest = "http://hn.premii.com/#/comments/";
var result = regex.exec(location.search);


if (result) {
  window.location.replace(dest + result[1] + '/');
}
