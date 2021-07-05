(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wapp";

    /*
    m[p+"volunteers"]=  {url:H+"/forms/new-starter.data.status.html",api:api, Table:'new-starter',form_module:p+"new-starter-form",action_module:p+'new-starter-action',action_table:'new-starter-action',notes_module:'new-starter-notes-data',notes_table:'new-starter-notes', router:1};
    m[p+"new-starter-data"]=         {url:H+"/forms/new-starter.data.html",api:api, Table:'new-starter',form_module:p+"new-starter-form",action_module:p+'new-starter-action',action_table:'new-starter-action',notes_module:'new-starter-notes-data',notes_table:'new-starter-notes', router:1};
    m[p+"new-starter-form"]=         {url:H+"/forms/new-starter.form.html",api:api, Table:'new-starter'};
    m[p+"new-starter-action"]=       {url:H+"/forms/new-starter.action.html",api:api, Table:'new-starter-action',parent_table:"new-starter"};
    m[p+"new-starter-notes-data"]=   {url:H+"/forms/notes.data.html",api:api, Table:'new-starter-notes',form_module:p+"new-starter-notes-form",parent_table:'new-starter'};
    m[p+"new-starter-notes-form"]=   {url:H+"/forms/notes.form.html",api:api, Table:'new-starter-notes',parent_table:'new-starter'};
    */

    m["microsoft-data"]={url:H+"/system/microsoft-data.html",form_module:"jsonv"};
    m["arrayv"]={url:H+"/system/array-viewer.html",form_module:"jsonv"};
    m["jsonv"]={url:H+"/system/json-viewer.html",form_module:"jsonv"};

    //-------------------------------------------------------------------------------------
})();
