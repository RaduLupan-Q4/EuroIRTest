//
//  Render Tool Handlebar
//


function initHandlebars() {
    debugStep("initHandlebars");
    compiledTemplates.menuTemplate_QuoteTable = compileHtmlTemplate(ModulesList.IRQuoteModule);
    compiledTemplates.menuTemplate_IRProfile = compileHtmlTemplate(ModulesList.IRProfileModule);
    compiledTemplates.menuTemplate_IRChart = compileHtmlTemplate(ModulesList.IRChartModule);
    compiledTemplates.menuTemplate_IRChartHTML = compileHtmlTemplate(ModulesList.IRChartHTMLModule);
    compiledTemplates.menuTemplate_Miniquote = compileHtmlTemplate(ModulesList.IRMiniquoteModule);
    compiledTemplates.menuTemplate_MiniquoteChart = compileHtmlTemplate(ModulesList.IRMiniquoteChartModule);
    compiledTemplates.menuTemplate_OrdersTable = compileHtmlTemplate(ModulesList.IROrdersModule);
    compiledTemplates.menuTemplate_TradesTable = compileHtmlTemplate(ModulesList.IRTradesModule);
    compiledTemplates.menuTemplate_News = compileHtmlTemplate(ModulesList.IRNewsModule);
    compiledTemplates.menuTemplate_NewsEntries = compileHtmlTemplate(ModulesList.IRNewsEntriesModule);
    compiledTemplates.toolTemplate_IRNewsArticle = compileHtmlTemplate(ModulesList.IRNewsArticleModule);
    compiledTemplates.menuTemplate_NewsHeadline = compileHtmlTemplate(ModulesList.IRNewsHeadlineModule);
    compiledTemplates.menuTemplate_Lookup = compileHtmlTemplate(ModulesList.IRLookupModule);
    compiledTemplates.menuTemplate_Calc = compileHtmlTemplate(ModulesList.IRCalcModule);
    compiledTemplates.menuTemplate_EmailAlert = compileHtmlTemplate(ModulesList.IREmailAlertModule);
    compiledTemplates.menuTemplate_Performance = compileHtmlTemplate(ModulesList.IRPerformanceModule)
    compiledTemplates.menuTemplate_Custom = compileHtmlTemplate(ModulesList.IRCustomModule)
}

function compileHtmlTemplate(module) {
    if (module.active) {
        if (typeof ($(module.view).html()) != "undefined" && typeof ($(module.template).html()) != "undefined") {
            return Handlebars.compile($(module.template).html());
        } else {
            debugError("Template or view doesn't exist in HTML")
        }
    }
}
