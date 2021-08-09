(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var A=$vm.hosting_path;
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wapp";

    var manager_table="purchase_order_manager_demo";
    var supplier_table="purchase_order_supplier_demo";
    var purchase_order_table="purchase_order_record_demo";
    var print_module="purchase-order-print";

    m[p+"panel"]                    ={url:A+"/panels/main/panel.html",                  prefix:p, router:1};
    m[p+"manager-data"]             ={url:H+"/business/manager/data.html",              api:api, Table:manager_table,  form_module:p+"manager-form"};
    m[p+"manager-form"]             ={url:H+"/business/manager/form.html",              api:api, Table:manager_table};
    m[p+"supplier-data"]            ={url:H+"/business/supplier/data.html",             api:api, Table:supplier_table,  form_module:p+"supplier-form"};
    m[p+"supplier-form"]            ={url:H+"/business/supplier/form.html",             api:api, Table:supplier_table};
    m[p+"purchase-order-data"]      ={url:H+"/business/purchase-order/data.html",       api:api, Table:purchase_order_table, form_module:p+'purchase-order-form', print_module:p+print_module,router:1};
    m[p+"purchase-order-form"]      ={url:H+"/business/purchase-order/form.html",       api:api, Table:purchase_order_table, supplier_table:supplier_table,  router:1};
    
    m[p+"purchase-order-data-p"]    ={url:H+"/business/purchase-order-data-p.html",     api:api, Table:purchase_order_table, form_module:p+'purchase-order-form', print_module:p+print_module,router:1};
    m[p+"purchase-order-print"]     ={url:H+"/business/purchase-order-form.print-and-pdf.html"};
//-------------------------------------------------------------------------------------
})();
