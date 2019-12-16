var userLang = navigator.language || navigator.userLanguage;
var lang;
if(userLang == "pl-PL"){
    lang = lang_pl
}
else{
    lang = lang_en
}
document.title = lang.title;