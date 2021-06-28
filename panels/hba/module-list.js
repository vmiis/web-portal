(function(){
    //-------------------------------------------------------------------------------------
    var p="hba-"; //put a unique prefix to avoid conflict with others 
    var C=$vm.hosting_path+"/panels/hba/sub-panels";
    var H=$vm.hosting_path+"/modules/hba";
    var m=$vm.module_list;
    var api="wapp";

    m[p+"panel-time-point"]={url:C+"/time-point.html",api:api, prefix:p};
    m[p+"panel-task"]={url:C+"/task.html",api:api, prefix:p};
    
    m[p+"participant-data"]={url:H+"/participant-data.html",api:api, Table:"hba-participant", form_module:p+"participant-form", router:1};
    m[p+"participant-form"]={url:H+"/participant-form.html",api:api, Table:"hba-participant"};
    m[p+"ess-data"]={url:H+"/ess-data.html",api:api, Table:"hba-ess", form_module:p+"ess-form"};
    m[p+"ess-form"]={url:H+"/ess-form.html",api:api, Table:"hba-ess"};
    m[p+"visit-date-data"]={url:H+"/visit-date-data.html",api:api, Table:"hba-visit-date", form_module:p+"visit-date-form"};
    m[p+"visit-date-form"]={url:H+"/visit-date-form.html",api:api, Table:"hba-visit-date"};
    //-------------------------------------------------------------------------------------
})();
