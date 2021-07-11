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
        booking_data:   {url:$H+"/forms/booking-data.html",  Table:"demo-vm-19091811",  form_module:"booking_form"},
        booking_form:   {url:$H+"/forms/booking-form.html",  Table:"demo-vm-19091811",  lookup:"demo-vm-19091812"},
        booking_form_2: {url:$H+"/forms/booking-form-2.html",Table:"demo-vm-19091811",  lookup:"demo-vm-19091812"},
        list_data:      {url:$H+"/forms/list-data.html",     Table:"demo-vm-19091812",  form_module:"list_form"},
        list_form:      {url:$H+"/forms/list-form.html",     Table:"demo-vm-19091812"},
        month:          {url:$H+"/calendar/month.html",      Table:"demo-vm-19091811","booking":"booking_form",lookup:"demo-vm-19091812",router:1},
        week:           {url:$H+"/calendar/week.html",       Table:"demo-vm-19091811","booking":"booking_form","booking2":"booking_form_2",lookup:"demo-vm-19091812"},
        day:            {url:$H+"/calendar/day.html",        Table:"demo-vm-19091811","booking":"booking_form",lookup:"demo-vm-19091812"},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
