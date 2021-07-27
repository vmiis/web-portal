(function(){
    //-------------------------------------------------------------------------------------
    var p="invoice-"; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/apps/invoice/modules";
    var m=$vm.module_list;
    var api="wapp";
    
    var invoice_client_table="vm-demo-invoice-client";
    var invoice_record_table="vm-demo-invoice";
    var invoice_print_module="invoice-print-demo";
    
    m[p+"panel"]           ={url:H+"/panels/panel.html", prefix:p, router:1};
    m[p+"diagram"]         ={url:H+"/diagram/diagram.html",router:1};
    
    m[p+"client-data"]=                    {url:H+"/client/data.html",      api:api, Table:invoice_client_table, form_module:p+'client-form',  router:1};
    m[p+"client-form"]=                    {url:H+"/client/form.html",      api:api, Table:invoice_client_table, router:1};
    m[p+"invoice-data"]=                   {url:H+"/invoice/data.html",     api:api, Table:invoice_record_table, form_module:p+'invoice-form', print_module:p+invoice_print_module,router:1};
    m[p+"invoice-form"]=                   {url:H+"/invoice/form.html",     api:api, Table:invoice_record_table, client_table:invoice_client_table,  router:1};
    
    m[p+"invoice-print-demo"]=             {url:H+"/invoice/form.print_and_pdf.demo.html"};
    //-------------------------------------------------------------------------------------
})();


