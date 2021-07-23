(function(){
    //-------------------------------------------------------------------------------------
    var p="snapforms-"; //put a unique prefix to avoid conflict with others 
    var A=$vm.hosting_path+"/apps/snapforms";
    var H=$vm.hosting_path+"/apps/snapforms/modules";
    var m=$vm.module_list;
    var api="wzd";
    m[p+"panel"]  ={url:A+"/panels/main/panel.html", prefix:p, router:1};
    m[p+"contact"]={url:H+"/business/contact.data.html", api:api, router:1};
    //-------------------------------------------------------------------------------------
})();


