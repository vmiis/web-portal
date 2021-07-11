(function(){
    //-------------------------------------------------------------------------------------
    var p="invoice-management-"; //put a unique prefix to avoid conflict with others 
    var A=$vm.hosting_path+"/apps/invoice-management";
    var H=$vm.hosting_path+"/apps/invoice-management/modules";
    var m=$vm.module_list;
    var api="wapp";
    m[p+"panel"]             ={url:A+"/panels/main/panel.html",     prefix:p, router:1};
    m[p+"client_data"]       ={url:H+"/forms/client-data.html",     api:api, Table:"vm-demo-invoice-client",  form_module:p+"client_form"};
    m[p+"client_form"]       ={url:H+"/forms/client-form.html",     api:api, Table:"vm-demo-invoice-client"};
    m[p+"invoice_data"]      ={url:H+"/forms/invoice-data.html",    api:api, Table:"vm-demo-invoice", form_module:p+'invoice_form', print_module:p+"invoice-print-demo",router:1};
    m[p+"invoice_data_p"]    ={url:H+"/forms/invoice-data-p.html",  api:api, Table:"vm-demo-invoice", form_module:p+'invoice_form', print_module:p+"invoice-print-demo",router:1};
    m[p+"invoice_form"]      ={url:H+"/forms/invoice-form.html",    api:api, Table:"vm-demo-invoice", client_table:"vm-demo-invoice-client",  router:1};
    m[p+"invoice-print-demo"]={url:H+"/forms/invoice-form.print_and_pdf.demo.html"};
    //-------------------------------------------------------------------------------------
})();
