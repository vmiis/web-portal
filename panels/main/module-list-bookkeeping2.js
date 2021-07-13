(function(){
    //-------------------------------------------------------------------------------------
    var p="bookkeeping2-"; //put a unique prefix to avoid conflict with others 
    var A=$vm.hosting_path+"/apps/bookkeeping2";
    var H=$vm.hosting_path+"/apps/bookkeeping2/modules";
    var m=$vm.module_list;
    var api="wapp";
    
    var pre_item="vm-demo-predefined-transaction-item";
    var transaction="vm-demo-transaction-records";

    m[p+"panel"]=                                    {url:A+"/panels/main/panel.html", pre_item:pre_item, transaction:transaction, prefix:p, router:1};
    m[p+"predefined_transaction_item_data"]=         {url:H+"/predefined-transaction-item/data.html",                 api:api,Table:pre_item,form_module:"predefined_transaction_item_form",router:1};
    m[p+"predefined_transaction_item_form"]=         {url:H+"/predefined-transaction-item/form.html",                 api:api,Table:pre_item};
    m[p+"transaction-data-basic"]=                   {url:H+"/transaction-records/data-basic.html",                   api:api,Table:transaction,form_module:"transaction-form",router:1};
    m[p+"transaction-data-date"]=                    {url:H+"/transaction-records/data-date.html",                    api:api,Table:transaction,form_module:"transaction-form",router:1};
    m[p+"transaction-data-year-quarter"]=            {url:H+"/transaction-records/data-year-quarter.html",            api:api,Table:transaction,form_module:"transaction-form",router:1};
    m[p+"transaction-data-bas"]=                     {url:H+"/transaction-records/data-bas.html",                     api:api,Table:transaction,form_module:"transaction-form",router:1};
    m[p+"transaction-data-year-quarter-bas"]=        {url:H+"/transaction-records/data-year-quarter-bas.html",        api:api,Table:transaction,form_module:"transaction-form",router:1};
    m[p+"transaction-data-tax-return"]=              {url:H+"/transaction-records/data-tax-return.html",              api:api,Table:transaction,form_module:"transaction-form",router:1};
    m[p+"transaction-data-year-quarter-tax-return"]= {url:H+"/transaction-records/data-year-quarter-tax-return.html", api:api,Table:transaction,form_module:"transaction-form",router:1};
    m[p+"transaction-form"]=                         {url:H+"/transaction-records/form.html",                         api:api,Table:transaction,item_table:pre_item,router:1};
    //-------------------------------------------------------------------------------------
})();
