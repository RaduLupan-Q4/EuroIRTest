$(function () {
    
    $.when(requestTranslationsData).done(function () {
        var translationData = jQuery.parseJSON(requestTranslationsData.responseText);

        var allData = new Object;

        allData.headers = translationData.data;

        //insiders list
        var source = $('#IRDataTemplate').html();
        var template = Handlebars.compile(source);
        $('#emailAlertData').html(template(allData));

        //run genericIR_mobileOverlayFix function
        init();
    });

});