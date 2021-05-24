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
    var $H=$vm.hosting_path+"/apps";
    var modules={
        
        mlist_02_001_data:{url:$H+"/activity-morning-eveningness-questionnaire/data.html",api:"wapp",Table:"me-shf-spardac",form_module:"mlist_02_001_form",router:1,description:"view and search data in a cloud database table"},
        mlist_02_001_form:{url:$H+"/activity-morning-eveningness-questionnaire/form.html",api:"wapp",Table:"me-shf-spardac",router:1,description:"data collection form"},
        
        mlist_02_002_data:{url:$H+"/adverse-event/data.html",api:"wapp",Table:"adverse-event-spardac",form_module:"mlist_02_002_form",router:1,description:"adverse event data"},
        mlist_02_002_form:{url:$H+"/adverse-event/form.html",api:"wapp",Table:"adverse-event-spardac",router:1,description:"adverse event form"},
     
        mlist_02_003_data:{url:$H+"/anthropometry-age-sex/data.html",api:"wapp",Table:"anthropometry-age-sex-spardac",form_module:"mlist_02_003_form",router:1,description:"adverse event data"},
        mlist_02_003_form:{url:$H+"/anthropometry-age-sex/form.html",api:"wapp",Table:"anthropometry-age-sex-spardac",router:1,description:"adverse event form"},
        
        mlist_02_004_data:{url:$H+"/basic-psychological-need-satisfaction-scale/data.html",api:"wapp",Table:"bpns-spardac",form_module:"mlist_02_004_form",router:1,description:"adverse event data"},
        mlist_02_004_form:{url:$H+"/basic-psychological-need-satisfaction-scale/form.html",api:"wapp",Table:"bpns-spardac",router:1,description:"adverse event form"},
        

    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();


