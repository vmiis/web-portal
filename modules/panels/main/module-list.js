(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wapp";
    
    m[p+"new-starter-data"]=         {url:H+"/hr/new-starter.data.html",api:api, Table:'new-starter',form_module:p+"new-starter-form",action_module:p+'new-starter-action',action_table:'new-starter-action',notes_module:'new-starter-notes-data',notes_table:'new-starter-notes', router:1};
    m[p+"new-starter-form"]=         {url:H+"/hr/new-starter.form.html",api:api, Table:'new-starter'};
    m[p+"new-starter-action"]=       {url:H+"/hr/new-starter.action.html",api:api, Table:'new-starter-action',parent_table:"new-starter"};
    m[p+"new-starter-notes-data"]=   {url:H+"/hr/notes.data.html",api:api, Table:'new-starter-notes',form_module:p+"new-starter-notes-form",parent_table:'new-starter'};
    m[p+"new-starter-notes-form"]=   {url:H+"/hr/notes.form.html",api:api, Table:'new-starter-notes',parent_table:'new-starter'};
    
    m[p+"student-data"]=             {url:H+"/hr/student.data.html",api:api, Table:'vm-demo-student',form_module:p+"student-form", router:1};
    m[p+"student-form"]=             {url:H+"/hr/student.form.html",api:api, Table:'vm-demo-student'};
    
    m[p+"staff-data"]=              {url:H+"/shift-roster/staff.data.html",api:api, Table:'demo-vm-19091702',form_module:p+"staff-form", router:1};
    m[p+"staff-form"]=              {url:H+"/shift-roster/staff.form.html",api:api, Table:'demo-vm-19091702'};
    m[p+"roster-data"]=             {url:H+"/shift-roster/roster.data.html",api:api, Table:'demo-vm-19091701',form_module:p+"roster-form", router:1};
    m[p+"roster-form"]=             {url:H+"/shift-roster/roster.form.html",api:api, Table:'demo-vm-19091701'};
    m[p+"shift-roster-month"]=      {url:H+"/shift-roster/calendar-month.html",api:api,Table:"demo-vm-19091701", "booking":p+"roster-form"};
    //-------------------------------------------------------------------------------------
})();
