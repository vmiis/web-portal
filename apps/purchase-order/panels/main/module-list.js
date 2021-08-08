(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var A=$vm.hosting_path;
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wapp";

    var client_table=$vm.client_table;
    var invoice_record_table=$vm.invoice_record_table;
    var print_module=$vm.invoice_print_module;

    m[p+"panel"]             ={url:A+"/panels/main/panel.html",     prefix:p, router:1};
    m[p+"client_data"]       ={url:H+"/forms/client-data.html",     api:api, Table:client_table,  form_module:p+"client_form"};
    m[p+"client_form"]       ={url:H+"/forms/client-form.html",     api:api, Table:client_table};
    m[p+"invoice_data"]      ={url:H+"/forms/invoice-data.html",    api:api, Table:invoice_record_table, form_module:p+'invoice_form', print_module:p+print_module,router:1};
    m[p+"invoice_data_p"]    ={url:H+"/forms/invoice-data-p.html",  api:api, Table:invoice_record_table, form_module:p+'invoice_form', print_module:p+print_module,router:1};
    m[p+"invoice_form"]      ={url:H+"/forms/invoice-form.html",    api:api, Table:invoice_record_table, client_table:client_table,  router:1};
    m[p+"invoice-print-demo"]={url:H+"/forms/invoice-form.print_and_pdf.demo.html"};
    m[p+"invoice-print-wapp"]={url:H+"/forms/invoice-form.print_and_pdf.wapp.html"};
    m[p+"invoice-print-vm"]  ={url:H+"/forms/invoice-form.print_and_pdf.vm.html"};
//-------------------------------------------------------------------------------------
})();
