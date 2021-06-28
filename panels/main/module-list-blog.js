(function(){
    //-------------------------------------------------------------------------------------
    var p="blog-"; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules/blog";
    var m=$vm.module_list;
    var api="wapp";
    m[p+"b2021"]={url:H+"/b2021.html", api:api, router:1, prefix:p, description:"Blog 1",has_child:1};
    m[p+"b2020"]={url:H+"/b2020.html", api:api, router:1, prefix:p, description:"Blog 2",has_child:1};
    m[p+"blog1"]={url:H+"/blog1.html", api:api, router:1, description:"Blog 1",parent:p+'b2020'};
    m[p+"blog2"]={url:H+"/blog2.html", api:api, router:1, description:"Blog 2",parent:p+'b2020'};
    m[p+"blog3"]={url:H+"/blog3.html", api:api, router:1, description:"Blog 3",parent:p+'b2021'};
    m[p+"blog4"]={url:H+"/blog4.html", api:api, router:1, description:"Blog 4",parent:p+'b2021'};
    //-------------------------------------------------------------------------------------
})();
(function(){
    //-------------------------------------------------------------------------------------
    var p="purchase-order-request-"; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules/purchase-order-request";
    var m=$vm.module_list;
    var api="wapp";
    m[p+"data"]={url:H+"/data.html", api:api, Table:'vm-demo-purchase-order-request', form_module:p+'form',router:1};
    m[p+"form"]={url:H+"/form.html", api:api, Table:'vm-demo-purchase-order-request' };
    //-------------------------------------------------------------------------------------
})();
