(function(){
    //-------------------------------------------------------------------------------------
    var p="new-starter-"; //put a unique prefix to avoid conflict with others 
    var A=$vm.hosting_path+"/apps/new-starter";
    var H=$vm.hosting_path+"/apps/new-starter/modules";
    var m=$vm.module_list;
    var api="wapp";
    m[p+"panel"]           ={url:A+"/panels/main/panel.html", prefix:p, router:1};
    /*    
    m[p+"booking_data"]    ={url:H+"/forms/booking-data.html",  api:api, Table:"demo-vm-19091805",  form_module:p+"booking_form", router:1};
    m[p+"booking_form"]    ={url:H+"/forms/booking-form.html",  api:api, Table:"demo-vm-19091805",  lookup:"demo-vm-19091806"};
    m[p+"booking_form_2"]  ={url:H+"/forms/booking-form-2.html",api:api, Table:"demo-vm-19091805",  lookup:"demo-vm-19091806"};
    m[p+"list_data"]       ={url:H+"/forms/list-data.html",     api:api, Table:"demo-vm-19091806",  form_module:p+"list_form"};
    m[p+"list_form"]       ={url:H+"/forms/list-form.html",     api:api, Table:"demo-vm-19091806"};
    m[p+"month"]           ={url:H+"/calendar/month.html",      api:api, Table:"demo-vm-19091805","booking":p+"booking_form",lookup:"demo-vm-19091806",router:1};
    m[p+"week"]            ={url:H+"/calendar/week.html",       api:api, Table:"demo-vm-19091805","booking":p+"booking_form","booking2":p+"booking_form_2",lookup:"demo-vm-19091806",router:1};
    m[p+"day"]             ={url:H+"/calendar/day.html",        api:api, Table:"demo-vm-19091805","booking":p+"booking_form",lookup:"demo-vm-19091806",router:1};
    */
    //-------------------------------------------------------------------------------------
})();
