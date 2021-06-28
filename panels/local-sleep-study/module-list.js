(function(){
    //-------------------------------------------------------------------------------------
    /*
    var p="local-sleep--"; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/apps/bookkeeping/modules";
    var m=$vm.module_list;
    var api="wapp";
    
    var pre_item="predefined-transaction-item-vmautomation";
    var transaction="transaction-vmautomation";
    var aggregation="ato-bas-quarter-aggregation-vmautomation";
    var aggregation_ie="income-expense-month-aggregation-vmautomation";
    var aggregation_year_ie="income-expense-year-aggregation-vmautomation";
    var aggregation_item="item-month-aggregation-vmautomation";
    var aggregation_tax="ato-tax-return-yearly-aggregation-vmautomation";

    
    m[p+"panel"]=                                    {url:H+"/panels/panel.html",prefix:p, router:1};
    m[p+"diagram"]=                                  {url:H+"/diagram/diagram.html",router:1};
    m[p+"predefined_transaction_item_data"]=         {url:H+"/predefined-transaction-item/data.html",api:api, Table:pre_item,form_module:p+"predefined_transaction_item_form",router:1};
    m[p+"predefined_transaction_item_form"]=         {url:H+"/predefined-transaction-item/form.html",api:api, Table:pre_item};
    m[p+"transaction-data-basic"]=                   {url:H+"/transaction-records/data-basic.html",                   api:api, Table:transaction,form_module:p+"transaction-form",router:1};
    m[p+"transaction-data-date"]=                    {url:H+"/transaction-records/data-date.html",                    api:api, Table:transaction,form_module:p+"transaction-form",router:1};
    m[p+"transaction-data-year-quarter"]=            {url:H+"/transaction-records/data-year-quarter.html",            api:api, Table:transaction,form_module:p+"transaction-form",router:1};
    m[p+"transaction-data-bas"]=                     {url:H+"/transaction-records/data-bas.html",                     api:api, Table:transaction,form_module:p+"transaction-form",router:1};
    m[p+"transaction-data-year-quarter-bas"]=        {url:H+"/transaction-records/data-year-quarter-bas.html",        api:api, Table:transaction,form_module:p+"transaction-form",router:1};
    m[p+"transaction-data-tax-return"]=              {url:H+"/transaction-records/data-tax-return.html",              api:api, Table:transaction,form_module:p+"transaction-form",router:1};
    m[p+"transaction-data-year-quarter-tax-return"]= {url:H+"/transaction-records/data-year-quarter-tax-return.html", api:api, Table:transaction,form_module:p+"transaction-form",router:1};
    m[p+"transaction-form"]=                         {url:H+"/transaction-records/form.html",                         api:api, Table:transaction,item_table:pre_item,router:1};
    m[p+"ato-bas-quarter-aggregation-data"]=         {url:H+"/aggregations/ato-bas-quarter-aggregation-data.html",  api:api, Table:aggregation,transaction_table:transaction,form_module:p+'ato-bas-quarter-aggregation-form',router:1};
    m[p+"ato-bas-quarter-aggregation-form"]=         {url:H+"/aggregations/ato-bas-quarter-aggregation-form.html",  api:api, Table:aggregation,router:1};
    m[p+"income-expense-month-aggregation-data"]=    {url:H+"/aggregations/income-expense-month-aggregation-data.html", api:api, Table:aggregation_ie,transaction_table:transaction,form_module:p+'income-expense-month-aggregation-form',router:1};
    m[p+"income-expense-month-aggregation-form"]=    {url:H+"/aggregations/income-expense-month-aggregation-form.html", api:api, Table:aggregation_ie,router:1};
    m[p+"income-expense-month-aggregation-chart"]=   {url:H+"/aggregations/income-expense-month-aggregation-chart.html",api:api, Table:aggregation_ie,router:1};
    m[p+"income-expense-year-aggregation-data"]=     {url:H+"/aggregations/income-expense-year-aggregation-data.html", api:api, Table:aggregation_year_ie,transaction_table:transaction,form_module:p+'income-expense-year-aggregation-form',router:1};
    m[p+"income-expense-year-aggregation-form"]=     {url:H+"/aggregations/income-expense-year-aggregation-form.html", api:api, Table:aggregation_year_ie,router:1};
    m[p+"item-monthly-aggregation-data"]=            {url:H+"/aggregations/item-month-aggregation-data.html",   api:api, Table:aggregation_item,transaction_table:transaction,form_module:p+'item-monthly-aggregation-form',router:1};
    m[p+"item-monthly-aggregation-form"]=            {url:H+"/aggregations/item-month-aggregation-form.html",   api:api, Table:aggregation_item,router:1};
    m[p+"item-monthly-aggregation-chart"]=           {url:H+"/aggregations/item-month-aggregation-chart.html",  api:api, Table:"vm-demo-item-monthly-aggregation",router:1};
    m[p+"tax-return-yearly-aggregation-data"]=       {url:H+"/aggregations/ato-tax-return-yearly-aggregation-data.html",    api:api, Table:aggregation_tax,transaction_table:transaction,form_module:p+'tax-return-yearly-aggregation-form',router:1};
    m[p+"tax-return-yearly-aggregation-form"]=       {url:H+"/aggregations/ato-tax-return-yearly-aggregation-form.html",    api:api, Table:aggregation_tax,router:1};
    m[p+"tax-return-yearly-aggregation-chart"]=      {url:H+"/aggregations/ato-tax-return-yearly-aggregation-chart.html",   api:api, Table:aggregation_tax,router:1};
    */
    //-------------------------------------------------------------------------------------
})();


(function(){
    //-------------------------------------------------------------------------------------
    var p="invoice-vm-"; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/apps/invoice/modules";
    var m=$vm.module_list;
    var api="wapp";
    
    var invoice_client_table="client-vm";
    var invoice_record_table="invoice-vm";
    var invoice_print_module="invoice-print-vm";

    m[p+"panel"]           ={url:H+"/panels/panel.html", prefix:p, router:1};
    m[p+"diagram"]         ={url:H+"/diagram/diagram.html",router:1};
    
    m[p+"client-data"]=                    {url:H+"/client/data.html",      api:api, Table:invoice_client_table, form_module:p+'client-form',  router:1};
    m[p+"client-form"]=                    {url:H+"/client/form.html",      api:api, Table:invoice_client_table, router:1};
    m[p+"invoice-data"]=                   {url:H+"/invoice/data.html",     api:api, Table:invoice_record_table, form_module:p+'invoice-form', print_module:p+invoice_print_module,router:1};
    m[p+"invoice-form"]=                   {url:H+"/invoice/form.html",     api:api, Table:invoice_record_table, client_table:invoice_client_table,  router:1};
    
    m[p+"invoice-print-vm"]=             {url:H+"/invoice/form.print_and_pdf.vm.html"};
    //-------------------------------------------------------------------------------------
})();
