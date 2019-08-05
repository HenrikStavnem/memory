i18next.use(i18nextXHRBackend).init({
    //lng: localStorage.getItem('lng'),
    lng: 'en-US',
    fallbackLng: 'en-US',
    loadPath: 'res/locales/{{lng}}.json',
    backend: {
        loadPath: 'res/locales/{{lng}}.json',
        crossDomain: false
    },
}, function(err /*, t*/) {
    console.error(err);
});

window.onload = function() {
    document.title = i18next.t('app.title');
};
