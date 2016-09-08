/**
 * Created by hexia on 2016-09-08.
 */
var locale = (navigator.languages ? navigator.languages[0]:(navigator.language || navigator.userLanguage)).toLowerCase();
if (locale == "fr-fr" || locale == "ar-eg" || locale == "de-de" || locale == "en-us" || locale == "es-es" || language == "sv-se") {
    locale = locale.substring(0,2);
}

if (locale == "zh") {
    locale = "zh-cn";
}
if (locale == "no") {
    locale = "nb";
}

var fileref_localtime = document.createElement('script');
fileref_localtime.setAttribute("type", "text/javascript");
if (locale != "en") {
    fileref_localtime.setAttribute("src", "bower_components/moment/locale/" + locale + ".js");
    document.getElementsByTagName("body")[0].appendChild(fileref_localtime);
}
