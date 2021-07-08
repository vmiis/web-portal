(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var A=$vm.hosting_path;
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
    m[p+"roster-form"]=             {url:H+"/shift-roster/roster.form.html",api:api, Table:'demo-vm-19091701',
                                        lookup:"demo-vm-19091702",staff_data:p+"staff-data",staff_form:p+"staff-form"};
    m[p+"shift-roster-month"]=      {url:H+"/shift-roster/calendar-month.html",api:api,Table:"demo-vm-19091701", "booking":p+"roster-form"};
    m[p+"shift-roster-week"]=       {url:H+"/shift-roster/calendar-week.html",api:api,Table:"demo-vm-19091701", "booking":p+"roster-form"};
    m[p+"shift-roster-day"]=        {url:H+"/shift-roster/calendar-day.html",api:api,Table:"demo-vm-19091701", "booking":p+"roster-form"};
    //-------------------------------------------------------------------------------------
    m["wappsystem-panel"]=      {url:A+"/panels/wappsystem/panel.html", router:1};
    m["vmautomation-panel"]=    {url:A+"/panels/vmautomation/panel.html", router:1};
    m["administrator-panel"]=   {url:A+"/panels/administrator/panel.html", router:1};
    m["local-sleep-panel"]=     {url:A+"/panels/local-sleep-study/panel.html", router:1};
    m["my-panel"]=              {url:A+"/panels/my/panel.html", router:1};
    m["development-panel"]=     {url:A+"/panels/development/panel.html", router:1};
    m["hba-panel"]=             {url:A+"/panels/hba/panel.html", prefix:"hba-", router:1};
    m["melody"]=                {url:A+"/panels/melody/panel.html",router:1};
    m["woolcock-portal"]=       {url:A+"/panels/woolcock/panel.html", router:1};

    m["volunteers-panel"]=      {url:A+"/apps/volunteer-system/panels/main/panel.html", router:1}
    m["printer-panel"]=         {url:A+"/apps/printer-status/panels/main/panel.html", router:1}
    m["server-panel"]=          {url:A+"/apps/server-status/panels/main/panel.html", router:1}
    m["sleep-study-panel"]=     {url:A+"/apps/sleep-study/panels/main/panel.html", router:1}
    //-------------------------------------------------------------------------------------
})();
