/**
 * Created by hexia on 2016-09-08.
 */
var language = (navigator.languages ? navigator.languages[0]:(navigator.language || navigator.userLanguage)).toLowerCase();
document.write('<script src="bower_components/localdatetime/i18n/angular-locale_'+language+'.js"><\/script>');

var locale = language;
if (locale == "fr-fr" || locale == "ar-eg" || locale == "de-de" || locale == "en-us" || locale == "es-es" || locale == "sv-se") {
    locale = locale.substring(0,2);
}
if (locale == "zh") {
    locale = "zh-cn";
} else if (locale == "no") {
    locale = "nb";
}
if (locale !== "en") {
    var fileref_localtime = document.createElement('script');
    fileref_localtime.setAttribute("type", "text/javascript");
    fileref_localtime.setAttribute("src", "bower_components/moment/locale/" + locale + ".js");
    document.getElementsByTagName("body")[0].appendChild(fileref_localtime);
}

