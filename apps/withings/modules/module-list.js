(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wapp";
    m["test"]={url:H+"/test/page.html", api:api, router:1}
    //-------------------------------------------------------------------------------------
})();
