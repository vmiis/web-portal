(function(){
    //-------------------------------------------------------------------------------------
    var p="shift-roster-"; //put a unique prefix to avoid conflict with others 
    var A=$vm.hosting_path+"/apps/shift-roster";
    var H=$vm.hosting_path+"/apps/shift-roster/modules";
    var m=$vm.module_list;
    var api="wapp";
    m[p+"panel"]           ={url:A+"/panels/main/panel.html", prefix:p, router:1};
    m[p+"diagram"]         ={url:H+"/diagram/diagram.html",router:1};
    m[p+"booking_data"]    ={url:H+"/forms/booking-data.html",  api:api, Table:"demo-vm-19091701",  form_module:p+"booking_form", router:1};
    m[p+"booking_form"]    ={url:H+"/forms/booking-form.html",  api:api, Table:"demo-vm-19091701",  
                                lookup:"demo-vm-19091702",staff_data:p+"list_data",staff_form:p+"list_form"
                            };
    m[p+"list_data"]       ={url:H+"/forms/list-data.html",     api:api, Table:"demo-vm-19091702",  form_module:p+"list_form"};
    m[p+"list_form"]       ={url:H+"/forms/list-form.html",     api:api, Table:"demo-vm-19091702"};
    m[p+"month"]           ={url:H+"/calendar/month.html",      api:api, Table:"demo-vm-19091701","booking":p+"booking_form",lookup:"demo-vm-19091702",router:1};
    m[p+"week"]            ={url:H+"/calendar/week.html",       api:api, Table:"demo-vm-19091701","booking":p+"booking_form","booking2":p+"booking_form_2",lookup:"demo-vm-19091702",router:1};
    m[p+"day"]             ={url:H+"/calendar/day.html",        api:api, Table:"demo-vm-19091701","booking":p+"booking_form",lookup:"demo-vm-19091702",router:1};
    //-------------------------------------------------------------------------------------
})();
