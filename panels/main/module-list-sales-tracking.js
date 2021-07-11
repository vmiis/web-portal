(function(){
    //-------------------------------------------------------------------------------------
    var p="sales-tracking-"; //put a unique prefix to avoid conflict with others 
    var A=$vm.hosting_path+"/apps/sales-tracking";
    var H=$vm.hosting_path+"/apps/sales-tracking/modules";
    var m=$vm.module_list;
    var api="wapp";
    m[p+"panel"]=           {url:A+"/panels/main/panel.html", prefix:p, router:1};
    m[p+"sales-form"]=      {url:H+"/forms/sales-form.html",  api:api, Table:"sales-demo-0703", prefix:p };
    m[p+"sales-data"]=      {url:H+"/forms/sales-data.html",     api:api, Table:"sales-demo-0703", form_module:p+'sales-form'};
    m[p+"item-data"]=  	    {url:H+"/forms/item-data.html",api:api,Table:"item-demo-0703",form_module:p+"item-form",router:1};
    m[p+"item-form"]=  	    {url:H+"/forms/item-form.html",api:api,Table:"item-demo-0703"};
    m[p+"rep-data"]=  	    {url:H+"/forms/rep-data.html",api:api,Table:"rep-demo-0703",form_module:p+"rep-form",router:1};
    m[p+"rep-form"]=  	    {url:H+"/forms/rep-form.html",api:api,Table:"rep-demo-0703"};
    m[p+"region-data"]=  	{url:H+"/forms/region-data.html",api:api,Table:"region-demo-0703",form_module:p+"region-form",router:1};
    m[p+"region-form"]=  	{url:H+"/forms/region-form.html",api:api,Table:"region-demo-0703"};
    //-------------------------------------------------------------------------------------
})();
