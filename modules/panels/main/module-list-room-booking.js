(function(){
    //-------------------------------------------------------------------------------------
    var p="room-booking-"; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/apps/room-booking/modules";
    var m=$vm.module_list;
    var api="wapp";
    m[p+"panel"]           ={url:H+"/panels/panel.html", prefix:p, router:1};
    m[p+"diagram"]         ={url:H+"/diagram/diagram.html",router:1};
    m[p+"booking_data"]    ={url:H+"/room-list-and-room-booking-records/booking-data.html",  api:api, Table:"demo-vm-19091805",  form_module:p+"booking_form", router:1};
    m[p+"booking_form"]    ={url:H+"/room-list-and-room-booking-records/booking-form.html",  api:api, Table:"demo-vm-19091805",  lookup:"demo-vm-19091806"};
    m[p+"booking_form_2"]  ={url:H+"/room-list-and-room-booking-records/booking-form-2.html",api:api, Table:"demo-vm-19091805",  lookup:"demo-vm-19091806"};
    m[p+"list_data"]       ={url:H+"/room-list-and-room-booking-records/list-data.html",     api:api, Table:"demo-vm-19091806",  form_module:p+"list_form"};
    m[p+"list_form"]       ={url:H+"/room-list-and-room-booking-records/list-form.html",     api:api, Table:"demo-vm-19091806"};
    m[p+"month"]           ={url:H+"/room-booking-calendar/calendar-month.html",            api:api, Table:"demo-vm-19091805","booking":p+"booking_form",lookup:"demo-vm-19091806",router:1};
    m[p+"week"]            ={url:H+"/room-booking-calendar/calendar-week.html",             api:api, Table:"demo-vm-19091805","booking":p+"booking_form","booking2":p+"booking_form_2",lookup:"demo-vm-19091806",router:1};
    m[p+"day"]             ={url:H+"/room-booking-calendar/calendar-day.html",              api:api, Table:"demo-vm-19091805","booking":p+"booking_form",lookup:"demo-vm-19091806",router:1};
    //-------------------------------------------------------------------------------------
})();
