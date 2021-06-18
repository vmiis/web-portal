(function(){
    //-------------------------------------------------------------------------------------
    var p="web-page-"; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules/web-page";
    var m=$vm.module_list;
    var api="wapp";
    m[p+"1"]={url:H+"/page-01.html", api:api, router:1, description:"Page 1"};
    m[p+"2"]={url:H+"/page-01.html", api:api, router:1, description:"Page 2"};
    m[p+"3"]={url:H+"/page-01.html", api:api, router:1, description:"Page 3"};
    m[p+"4"]={url:H+"/page-01.html", api:api, router:1, description:"Page 4"};
    //-------------------------------------------------------------------------------------
})();
