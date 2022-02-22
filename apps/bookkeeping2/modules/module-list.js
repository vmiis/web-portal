(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    //var A=$vm.hosting_path;
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wapp";
    
    var pre_item=$vm.pre_item;
    var transaction=$vm.transaction;
        
    m[p+"panel"]=                                    {url:H+"/panels/main/panel.html", pre_item:pre_item,transaction:transaction, prefix:p, router:1};
    m[p+"predefined_transaction_item_data"]=         {url:H+"/business/predefined-transaction-item/data.html",                 api:api,Table:pre_item,form_module:"predefined_transaction_item_form",router:1};
    m[p+"predefined_transaction_item_form"]=         {url:H+"/business/predefined-transaction-item/form.html",                 api:api,Table:pre_item};
    m[p+"transaction-data-basic"]=                   {url:H+"/business/transaction-records/data-basic.html",                   api:api,Table:transaction,form_module:"transaction-form",router:1};
    m[p+"transaction-data-date"]=                    {url:H+"/business/transaction-records/data-date.html",                    api:api,Table:transaction,form_module:"transaction-form",router:1};
    m[p+"transaction-data-year-quarter"]=            {url:H+"/business/transaction-records/data-year-quarter.html",            api:api,Table:transaction,form_module:"transaction-form",router:1};
    m[p+"transaction-data-bas"]=                     {url:H+"/business/transaction-records/data-bas.html",                     api:api,Table:transaction,form_module:"transaction-form",router:1};
    m[p+"transaction-data-year-quarter-bas"]=        {url:H+"/business/transaction-records/data-year-quarter-bas.html",        api:api,Table:transaction,form_module:"transaction-form",router:1};
    m[p+"transaction-data-tax-return"]=              {url:H+"/business/transaction-records/data-tax-return.html",              api:api,Table:transaction,form_module:"transaction-form",router:1};
    m[p+"transaction-data-year-quarter-tax-return"]= {url:H+"/business/transaction-records/data-year-quarter-tax-return.html", api:api,Table:transaction,form_module:"transaction-form",router:1};
    m[p+"transaction-form"]=                         {url:H+"/business/transaction-records/form.html",                         api:api,Table:transaction,item_table:pre_item,router:1};
    //-------------------------------------------------------------------------------------
})();
