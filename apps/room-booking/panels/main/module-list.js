(function(){
    //-------------------------------------------------------------------------------------
    var set_prefix=function(prefix, modules){
        for(m in modules){ 
            if($vm.module_list[prefix+m]!=undefined) alert(m+" is existed"); 
            else{
                $vm.module_list[prefix+m]=modules[m];
                $vm.module_list[prefix+m].prefix=prefix;
            }
        }
    }
    //-------------------------------------------------------------------------------------
    var prefix='';
    var $H=$vm.hosting_path+"/modules";
    var modules={
        panel:          {url:$H+"/panels/panel.html",router:1},
        diagram:        {url:$H+"/diagram/diagram.html"},
        booking_data:   {url:$H+"/forms/booking-data.html",  Table:"demo-vm-19091805",  form_module:"booking_form"},
        booking_form:   {url:$H+"/forms/booking-form.html",  Table:"demo-vm-19091805",  lookup:"demo-vm-19091806"},
        booking_form_2: {url:$H+"/forms/booking-form-2.html",Table:"demo-vm-19091805",  lookup:"demo-vm-19091806"},
        list_data:      {url:$H+"/forms/list-data.html",     Table:"demo-vm-19091806",  form_module:"list_form"},
        list_form:      {url:$H+"/forms/list-form.html",     Table:"demo-vm-19091806"},
        month:          {url:$H+"/calendar/month.html",      Table:"demo-vm-19091805","booking":"booking_form",lookup:"demo-vm-19091806",router:1},
        week:           {url:$H+"/calendar/week.html",       Table:"demo-vm-19091805","booking":"booking_form","booking2":"booking_form_2",lookup:"demo-vm-19091806"},
        day:            {url:$H+"/calendar/day.html",        Table:"demo-vm-19091805","booking":"booking_form",lookup:"demo-vm-19091806"},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
