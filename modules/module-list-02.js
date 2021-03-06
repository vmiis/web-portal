(function(){
    //-------------------------------------------------------------------------------------
    var set_prefix=function(prefix, modules){
        for(m in modules){ 
            if($vm.module_list[prefix+m]!=undefined) console.log(m+" is existed"); 
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
     
        mlist_02_003_data:{url:$H+"/anthropometry-age-sex/data.html",api:"wapp",Table:"anthropometry-age-sex-spardac",form_module:"mlist_02_003_form",router:1},
        mlist_02_003_form:{url:$H+"/anthropometry-age-sex/form.html",api:"wapp",Table:"anthropometry-age-sex-spardac",router:1},
        
        mlist_02_004_data:{url:$H+"/basic-psychological-need-satisfaction-scale/data.html",api:"wapp",Table:"bpns-spardac",form_module:"mlist_02_004_form",router:1},
        mlist_02_004_form:{url:$H+"/basic-psychological-need-satisfaction-scale/form.html",api:"wapp",Table:"bpns-spardac",router:1},
        
        mlist_02_005_data:{url:$H+"/brief-illness-perception-questionnaire/data.html",api:"wapp",Table:"brief-illness-perception-questionnaire-spardac",form_module:"mlist_02_005_form",router:1},
        mlist_02_005_form:{url:$H+"/brief-illness-perception-questionnaire/form.html",api:"wapp",Table:"brief-illness-perception-questionnaire-spardac",router:1},

        mlist_02_006_data:{url:$H+"/brief-sexual-function-inventory/data.html",api:"wapp",Table:"breif-sexual-function-inventory-spardac",form_module:"mlist_02_006_form",router:1},
        mlist_02_006_form:{url:$H+"/brief-sexual-function-inventory/form.html",api:"wapp",Table:"breif-sexual-function-inventory-spardac",router:1},
        
        mlist_02_007_data:{url:$H+"/concomitant-medication/data.html",api:"wapp",Table:"concom-medication-spardac",form_module:"mlist_02_007_form",router:1},
        mlist_02_007_form:{url:$H+"/concomitant-medication/form.html",api:"wapp",Table:"concom-medication-spardac",router:1},
        
        mlist_02_008_data:{url:$H+"/depression-anxiety-stress-scale/data.html",api:"wapp",Table:"dass-spardac",form_module:"mlist_02_008_form",router:1},
        mlist_02_008_form:{url:$H+"/depression-anxiety-stress-scale/form.html",api:"wapp",Table:"dass-spardac",router:1},
        
        mlist_02_009_data:{url:$H+"/digital-symbol-substitution/data.html",api:"wapp",Table:"dsst-spardac",form_module:"mlist_02_009_form",router:1},
        mlist_02_009_form:{url:$H+"/digital-symbol-substitution/form.html",api:"wapp",Table:"dsst-spardac",router:1},
        
        mlist_02_010_data:{url:$H+"/dysfunctional-beliefs-and-attitudes-about-sleep/data.html",api:"wapp",Table:"dbas-16-spardac",form_module:"mlist_02_010_form",router:1},
        mlist_02_010_form:{url:$H+"/dysfunctional-beliefs-and-attitudes-about-sleep/form.html",api:"wapp",Table:"dbas-16-spardac",router:1},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();


