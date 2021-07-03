(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    
    var A=$vm.hosting_path;
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    /*
    m[p+"crm-volunteer-data"]   ={url:H+"/it/crm-volunteer-data.html",  description:"crm-volunteer",form_module:"crm-form",router:1};
    m[p+"crm-project-data"]     ={url:H+"/it/crm-project-data.html",    description:"crm-project",form_module:"crm-form",router:1};
    m[p+"crm-study-data"]       ={url:H+"/it/crm-study-data.html",      description:"crm-study",form_module:"crm-form",router:1};
    m[p+"crm-form"]             ={url:H+"/it/crm-form.html",            description:"crm-form"};
    */
    m[p+"ad-user"]  ={url:H+"/it/ad-user.html",api:"wzd",description:"AD User",router:1};
    m[p+"printers"] ={url:H+"/operations/printers.html",api:"wzd",description:"printers",router:1};
    m[p+"patients"] ={url:H+"/coreplus/patients/data.html",api:"wzd", Table:"patient", form_module:"jsonv", description:"Patients"};
    m[p+"referrers"]={ url:H+"/coreplus/referrers/data.html",api:"wzd",Table:"referrer",form_module:"jsonv", description:"Referrers"};
    m[p+"referrals"]={ url:H+"/coreplus/referrals/data.html",api:"wzd",Table:"referral",form_module:"jsonv", description:"Referrals"};
    m[p+"clinics"]  ={ url:H+"/coreplus/clinics/data.html",api:"wzd",Table:"clinic",form_module:"jsonv",description:"Clinics"};   
})();
