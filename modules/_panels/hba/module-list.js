(function(){
    //-------------------------------------------------------------------------------------
    var p="hba-"; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules/hba";
    var m=$vm.module_list;
    var api="wapp";

    m[p+"panel-time-point"]={url:H+"/panel-time-point.html",api:api, router:1};
    m[p+"panel-task"]={url:H+"/panel-task.html",api:api, router:1};
    
    m[p+"participant-data"]={url:H+"/participant-data.html",api:api, Table:"hba-participant", form_module:p+"participant-form", router:1};
    m[p+"participant-form"]={url:H+"/participant-form.html",api:api, Table:"hba-participant"};
    m[p+"ess-data"]={url:H+"/ess-data.html",api:api, Table:"hba-ess", form_module:p+"ess-form", router:1};
    m[p+"ess-form"]={url:H+"/ess-form.html",api:api, Table:"hba-ess"};
    //-------------------------------------------------------------------------------------
})();
