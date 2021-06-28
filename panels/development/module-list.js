(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H="https://spardac.wappsystem.com.au/m";
    var m=$vm.module_list;
    var api="wapp";

    m[p+"ess-data-spardac"]={url:H+"/library/ess-data.html",Table:"ess-spardac",form_module:p+"ess-form-spardac"};
    m[p+"ess-form-spardac"]={url:H+"/library/ess-form.html",Table:"ess-spardac"};
    //-------------------------------------------------------------------------------------
})();
