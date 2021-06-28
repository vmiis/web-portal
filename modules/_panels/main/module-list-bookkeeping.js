(function(){
    //-------------------------------------------------------------------------------------
    var p="bookkeeping-"; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/apps/bookkeeping/modules";
    var m=$vm.module_list;
    var api="wapp";
    
    var pre_item="vm-demo-predefined-transaction-item";
    var transaction="vm-demo-transaction-records";
    var aggregation="vm-demo-ato-bas-quarter";
    var aggregation_ie="vm-demo-income-expense-month-aggregation";
    var aggregation_year_ie="vm-demo-income-expense-year-aggregation";
    var aggregation_item="vm-demo-item-monthly-aggregation";
    var aggregation_tax="vm-demo-tax-return-yearly-aggregation";
    
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
    //-------------------------------------------------------------------------------------
})();

