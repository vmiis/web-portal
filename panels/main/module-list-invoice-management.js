/*
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
*/


(function(){
    //-------------------------------------------------------------------------------------
    var p="invoice-demo-"; //put a unique prefix to avoid conflict with others 
    var A=$vm.hosting_path+"/apps/invoice-management";;
    var H=$vm.hosting_path+"/apps/invoice-management/modules";
    var m=$vm.module_list;
    var api="wapp";

    var client_table="vm-demo-invoice-client";
    var invoice_record_table="vm-demo-invoice";
    var print_module="invoice-print";

    m[p+"panel"]             ={url:A+"/panels/main/panel.html",     prefix:p, router:1};
    m[p+"client_data"]       ={url:H+"/forms/client-data.html",     api:api, Table:client_table,  form_module:p+"client_form"};
    m[p+"client_form"]       ={url:H+"/forms/client-form.html",     api:api, Table:client_table};
    m[p+"invoice_data"]      ={url:H+"/forms/invoice-data.html",    api:api, Table:invoice_record_table, form_module:p+'invoice_form', print_module:p+print_module,router:1};
    m[p+"invoice_data_p"]    ={url:H+"/forms/invoice-data-p.html",  api:api, Table:invoice_record_table, form_module:p+'invoice_form', print_module:p+print_module,router:1};
    m[p+"invoice_form"]      ={url:H+"/forms/invoice-form.html",    api:api, Table:invoice_record_table, client_table:client_table,  router:1};
    m[p+"invoice-print"]     ={url:H+"/forms/invoice-form.print_and_pdf.demo.html"};
//-------------------------------------------------------------------------------------
})();
(function(){
    //-------------------------------------------------------------------------------------
    var p="invoice-wapp-"; //put a unique prefix to avoid conflict with others 
    var A=$vm.hosting_path+"/apps/invoice-management";;
    var H=$vm.hosting_path+"/apps/invoice-management/modules";
    var m=$vm.module_list;
    var api="wapp";

    var client_table="invoice-wappsystem";
    var invoice_record_table="invoice-wappsystem";
    var print_module="invoice-print";

    m[p+"panel"]             ={url:A+"/panels/main/panel.html",     prefix:p, router:1,company:"WAPP"};
    m[p+"client_data"]       ={url:H+"/forms/client-data.html",     api:api, Table:client_table,  form_module:p+"client_form"};
    m[p+"client_form"]       ={url:H+"/forms/client-form.html",     api:api, Table:client_table};
    m[p+"invoice_data"]      ={url:H+"/forms/invoice-data.html",    api:api, Table:invoice_record_table, form_module:p+'invoice_form', print_module:p+print_module,router:1};
    m[p+"invoice_data_p"]    ={url:H+"/forms/invoice-data-p.html",  api:api, Table:invoice_record_table, form_module:p+'invoice_form', print_module:p+print_module,router:1};
    m[p+"invoice_form"]      ={url:H+"/forms/invoice-form.html",    api:api, Table:invoice_record_table, client_table:client_table,  router:1};
    m[p+"invoice-print"]     ={url:H+"/forms/invoice-form.print_and_pdf.wapp.html"};
    
    m[p+"invoice-print-wapp"]={url:H+"/forms/invoice-form.print_and_pdf.wapp.html"};
    m[p+"invoice-print-vm"]  ={url:H+"/forms/invoice-form.print_and_pdf.vm.html"};
    //-------------------------------------------------------------------------------------
})();
(function(){
    //-------------------------------------------------------------------------------------
    var p="invoice-vm-"; //put a unique prefix to avoid conflict with others 
    var A=$vm.hosting_path+"/apps/invoice-management";;
    var H=$vm.hosting_path+"/apps/invoice-management/modules";
    var m=$vm.module_list;
    var api="wapp";

    var client_table="invoice-vm";
    var invoice_record_table="invoice-vm";
    var print_module="invoice-print";

    m[p+"panel"]             ={url:A+"/panels/main/panel.html",     prefix:p, router:1,company:"VM"};
    m[p+"client_data"]       ={url:H+"/forms/client-data.html",     api:api, Table:client_table,  form_module:p+"client_form"};
    m[p+"client_form"]       ={url:H+"/forms/client-form.html",     api:api, Table:client_table};
    m[p+"invoice_data"]      ={url:H+"/forms/invoice-data.html",    api:api, Table:invoice_record_table, form_module:p+'invoice_form', print_module:p+print_module,router:1};
    m[p+"invoice_data_p"]    ={url:H+"/forms/invoice-data-p.html",  api:api, Table:invoice_record_table, form_module:p+'invoice_form', print_module:p+print_module,router:1};
    m[p+"invoice_form"]      ={url:H+"/forms/invoice-form.html",    api:api, Table:invoice_record_table, client_table:client_table,  router:1};
    m[p+"invoice-print"]     ={url:H+"/forms/invoice-form.print_and_pdf.vm.html"};
    //-------------------------------------------------------------------------------------
})();
