(function(){
    //-------------------------------------------------------------------------------------
    var set_prefix=function(prefix, modules){
        for(m in modules){ 
            if($vm.module_list[prefix+m]!=undefined) console.log(m+" is existed"); 
            else{
                $vm.module_list[prefix+m]=modules[m];
                $vm.module_list[prefix+m].prefix=prefix;
            }
        }
    }
    //-------------------------------------------------------------------------------------
    var prefix='';
    var $H=$vm.hosting_path+"/modules";
    var modules={
        "data-panel":{url:$vm.hosting_path+"/modules/panels/main/panel.html",title:"Portal",description:"main panel",router:1},
        "app-panel":{url:$vm.hosting_path+"/modules/panels/app-panel.html",description:"main panel",router:1},
        "diagram":                                  {url:$H+"/diagram/diagram.html",router:1},
        "lab-order-panel":{url:$vm.hosting_path+"/modules/panels/lab-order-panel.html",description:"lab order panel",router:1},
        "temperature-reports":  {url:$vm.hosting_path+"/modules/it/temperature-reports.html",description:"Temperature reports"},
        "coreplus-datatable-relationships":{
            url:$H+"/diagram/coreplus-datatable-relationships.html",
            router:1
        },
        "coreplus-referral-diagram":{
            url:$H+"/diagram/referral.html",
            router:1
        },
        "test": {
            url:$vm.hosting_path+"/modules/excel/test.html",
            Table:"file",
            description:"test"
        },
        "thankq-all-transactions": {
            url:$vm.hosting_path+"/modules/excel/thankq-all-transactions.html",
            Table:"file",
            description:"thankq-all-transactions"
        },
        "thankq-all-people": {
            url:$vm.hosting_path+"/modules/excel/thankq-all-people.html",
            Table:"file",
            description:"thankq-all-people"
        },
        "thankq-people-fields": {
            url:$vm.hosting_path+"/modules/excel/thankq-people-to-re-constituent.html",
            Table:"file",
            description:"thankq-all-people-fields"
        },
        "thankq-t-fields": {
            url:$vm.hosting_path+"/modules/excel/thankq-t-to-gift.html",
            Table:"file",
            description:"thankq-t-fields"
        },
        "database-backup-rt":{
            title:'CMS and research database backup files',
            url:$H+"/database-backup/data.html",
            folder:"research-tools",
        },
        "database-backup-SleepwareG3_Adult":{
            title:'CMS and research database backup files',
            url:$H+"/database-backup/data.html",
            folder:"SleepwareG3_Adult",
        },
        "database-backup-SleepwareG3_Paeds":{
            title:'CMS and research database backup files',
            url:$H+"/database-backup/data.html",
            folder:"SleepwareG3_Paeds",
        },
        "lab-order-data-self":{
            title:'My communal ordering records',
            url:$H+"/lab-order/order/data.html",
            Table:"communal-ordering",
            form_module:"lab-order-form-self", 
            description:"Communal ordering data",
            self:1,
            
            lab_manager_approval_module:prefix+'lab-order-lab-manager-approval-form',
            lab_manager_approval_table:"communal-ordering-lab-manager-approval",
            supervisor_approval_module:prefix+'lab-order-supervisor-approval-form',
            supervisor_approval_table:"communal-ordering-supervisor-approval",
            financial_approval_module:prefix+'lab-order-financial-approval-form',
            financial_approval_table:"communal-ordering-financial-approval",
            receive_module:prefix+'lab-order-receive-form',
            receive_table:"communal-ordering-receive",
            print:"lab-order-print",
        },
        "lab-order-form-self":{
            title:'Communal ordering form',
            url:$H+"/lab-order/order/form.html",
            Table:"communal-ordering",
            
            supplier_table:"communal-ordering-company",
            supervisor_table:"communal-ordering-supervisor",
            print:"lab-order-print",
            
            description:"Communal ordering form",
            self:1,
            router:1
        },
        "lab-order-data":{
            title:'Communal ordering records',
            url:$H+"/lab-order/order/data.html",
            Table:"communal-ordering",
            form_module:"lab-order-form", 
            description:"Communal ordering data",
            router:1,
            
            lab_manager_approval_module:prefix+'lab-order-lab-manager-approval-form',
            lab_manager_approval_table:"communal-ordering-lab-manager-approval",
            supervisor_approval_module:prefix+'lab-order-supervisor-approval-form',
            supervisor_approval_table:"communal-ordering-supervisor-approval",
            financial_approval_module:prefix+'lab-order-financial-approval-form',
            financial_approval_table:"communal-ordering-financial-approval",
            receive_module:prefix+'lab-order-receive-form',
            receive_table:"communal-ordering-receive",
            print:"lab-order-print",
        },
        "lab-order-form":{
            title:'Communal ordering form',
            url:$H+"/lab-order/order/form.html",
            Table:"communal-ordering",
            description:"Communal ordering form",
            print:"lab-order-print",
        },
        "lab-order-print-version-template":{
            url:$H+"/lab-order/order/print-version-template.html",
        },
        /*
        "lab-order-print":{
            title:'Communal ordering form print version',
            url:$H+"/lab-order/order/print-version.html",
            description:"Communal ordering form print version",
        },
        */
        "lab-order-pdf-form":{
            title:'Communal ordering pdf form',
            url:$H+"/lab-order/order/form.html",
            Table:"communal-ordering",
            description:"Communal ordering pdf form",
        },
        "lab-order-lab-manager-approval-form":{
            title:"Communal ordering lab manager approval",
            url:$H+"/lab-order/lab-manager-approval/form.html",
            Table:"communal-ordering-lab-manager-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering lab manager approval",
        },
        "lab-order-supervisor-approval-form":{
            title:"Communal ordering supervisor approval",
            url:$H+"/lab-order/supervisor-approval/form.html",
            Table:"communal-ordering-supervisor-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering supervisor approval",
        },
        "lab-order-financial-approval-form":{
            title:"Communal ordering financial approval",
            url:$H+"/lab-order/financial-approval/form.html",
            Table:"communal-ordering-financial-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering financial approval",
        },
        "lab-order-receive-form":{
            title:"Communal ordering received form",
            url:$H+"/lab-order/receive/form.html",
            Table:"communal-ordering-receive",
            parent_table:"communal-ordering",
            description:"Communal ordering received",
        },
        

        "lab-order-diagram":{
            title:"Communal ordering diagram",
            url:$H+"/lab-order/diagram/diagram.html",
            description:"Communal ordering diagram",
            router:1,
        },


        "lab-order-company-data":{
            title:'Company records',
            url:$H+"/supplier/data.html",
            Table:"communal-ordering-company",
            form_module:"lab-order-company-form", 
        },
        "lab-order-company-form":{
            title:'Company form',
            url:$H+"/supplier/form.html",
            Table:"communal-ordering-company",
        },
        "lab-order-supervisor-data":{
            title:'supervisor records',
            url:$H+"/supervisor/data.html",
            Table:"communal-ordering-supervisor",
            form_module:"lab-order-supervisor-form", 
        },
        "lab-order-supervisor-form":{
            title:'Supervisor form',
            url:$H+"/supervisor/form.html",
            Table:"communal-ordering-supervisor",
        },
        "cms-sleep-study__":{
            title:"Sleep study",
            url:$H+"/cms/sleep-study/data.html",
            Table:"cms-sleep-study",
            description:"Sleep study",
            router:1,
        },
        "cms-sleep-study":{
            title:"Sleep study",
            url:$H+"/cms/sleep-study/data.html",
            Table:"400448",
            form_module:"jsonv",
            description:"Sleep study",
            router:1,
        },
        
        "microsoft-api-data":{  url:$H+"/api/microsoft/data.html",  Table:"microsoft-api", form_module: 'microsoft-api-form', router:1  },
        "microsoft-api-form":{  url:$H+"/api/microsoft/form.html",  Table:"microsoft-api" },
        "mongodb-api-data":{  url:$H+"/api/mongodb/data.html",  api:"wzd",Table:"mongodb-api", api:"wzd", form_module: 'mongodb-api-form', router:1  },
        "mongodb-api-form":{  url:$H+"/api/mongodb/form.html",  api:"wzd",Table:"mongodb-api" },
        "cms-api-data":{  url:$H+"/api/cms/data.html",  api:"wzd",Table:"cms-api", form_module: 'cms-api-form', router:1  },
        "cms-api-form":{  url:$H+"/api/cms/form.html",  api:"wzd",Table:"cms-api" },
        "coreplus-api-data":{  url:$H+"/api/coreplus/data.html",  api:"wzd",Table:"coreplus-api", form_module: 'coreplus-api-form', router:1  },
        "coreplus-api-form":{  url:$H+"/api/coreplus/form.html",  api:"wzd",Table:"coreplus-api" },
                
        "microsoft-data":{url:$vm.hosting_path+"/modules/api/woolcock-dynamics-365/microsoft-data.html",form_module:"jsonv"},
        
        "mailchimp-api-data":{  url:$H+"/api/mailchimp/data.html",  api:'wapp',Table:"mailchimp-api", form_module: 'mailchimp-api-form', router:1  },
        "mailchimp-api-form":{  url:$H+"/api/mailchimp/form.html",  api:'wapp',Table:"mailchimp-api" },
        
        "blackbaud-api-data":{  url:$H+"/api/blackbaud/data.html",  api:'wapp',Table:"blackbaud-api", form_module: 'blackbaud-api-form', router:1  },
        "blackbaud-api-form":{  url:$H+"/api/blackbaud/form.html",  api:'wapp',Table:"blackbaud-api" },
        
        "intuit-api-data":{  url:$H+"/api/intuit/data.html",  api:'wapp',Table:"intuit-api", form_module: 'intuit-api-form', router:1  },
        "intuit-api-form":{  url:$H+"/api/intuit/form.html",  api:'wapp',Table:"intuit-api" },
        
        "wapp-query-data":{  url:$H+"/api/wappsystem/data.html",  api:"wapp",Table:"wappsystem-query", form_module: 'wapp-query-form', router:1  },
        "wapp-query-form":{  url:$H+"/api/wappsystem/form.html",  api:"wapp",Table:"wappsystem-query" },
        
        "woolcock-dynamics-365-query-data":{  url:$H+"/api/woolcock-dynamics-365/data.html",  api:"wapp",Table:"woolcock-dynamics-365-query", form_module: 'woolcock-dynamics-365-query-form', router:1  },
        "woolcock-dynamics-365-query-form":{  url:$H+"/api/woolcock-dynamics-365/form.html",  api:"wapp",Table:"woolcock-dynamics-365-query" },
        
        "youtube-data":{  url:$H+"/api/youtube/data.html",  api:"wapp",Table:"youtube", form_module: 'youtube-form', router:1  },
        "youtube-form":{  url:$H+"/api/youtube/form.html",  api:"wapp",Table:"youtube" },

        "image-data":{  url:$H+"/api/image/data.html",  api:"wapp",Table:"image", form_module: 'image-form', router:1  },
        "image-form":{  url:$H+"/api/image/form.html",  api:"wapp",Table:"image" },
        
        "firebase-data":{  url:$H+"/api/firebase/data.html",  api:"wapp",Table:"firebase", form_module: 'firebase-form', router:1  },
        "firebase-form":{  url:$H+"/api/firebase/form.html",  api:"wapp",Table:"firebase" },
        
        "piano":{  url:$H+"/piano/piano.html"},
        
        "notes-data":{  url:$H+"/notes/data.html",  api:"wapp",Table:"notes-vm", form_module: 'notes-form', router:1  },
        "notes-form":{  url:$H+"/notes/form.html",  api:"wapp",Table:"notes-vm" },
        
        "wapp-table-data":{  url:$H+"/api/vm-table/data.html",  api:"wapp",Table:"wappsystem-table", form_module: 'wapp-table-form', router:1  },
        "wapp-table-form":{  url:$H+"/api/vm-table/form.html",  api:"wapp",Table:"wappsystem-table" },

        //"vmiis-calendar-week":              {url:"$H/m/calendar-week.html",Table:"vmiis-event-calendar-record","booking":"vmiis-event-calendar-record","booking2":"vmiis-event-calendar-record-2",lookup:"vmiis-event-calendar-record-category"},
        "vmiis-calendar-month":             {url:$H+"/calendar/calendar-month.html",api:"wapp",Table:"vmiis-event-calendar-record","booking":"vmiis-event-calendar-record",lookup:"vmiis-event-calendar-record-category"},
        //"vmiis-calendar-day":               {url:"$H/m/calendar-day.html",Table:"vmiis-event-calendar-record","booking":"vmiis-event-calendar-record",lookup:"vmiis-event-calendar-record-category"},
        "vmiis-event-calendar-record":      {url:$H+"/calendar/booking-form.html",api:"wapp",Table:"vmiis-event-calendar-record",lookup:"vmiis-event-calendar-record-category"},
        "vmiis-event-calendar-record-2":    {url:$H+"/calendar/booking-form.2.html",api:"wapp",Table:"vmiis-event-calendar-record",lookup:"vmiis-event-calendar-record-category"},
        //"m3":       {url:"$H/m/booking-data.html",Table:"vmiis-event-calendar-record",form_module:"m2"},
        //"m4":       {url:"$H/m/list-data.html",Table:"vmiis-event-calendar-record-category",form_module:"m5"},
        //"m5":       {url:"$H/m/list-form.html",Table:"vmiis-event-calendar-record-category"},

        "major":            {url:$H+"/piano/major.html", router:1},
        "major-pentatonic": {url:$H+"/piano/major-pentatonic.html", router:1},
        "major-blues":      {url:$H+"/piano/major-blues.html", router:1},
        "major-bebop":      {url:$H+"/piano/major-bebop.html", router:1},
        "minor-natural":    {url:$H+"/piano/minor-natural.html", router:1},
        "minor-melodic":    {url:$H+"/piano/minor-melodic.html", router:1},
        "minor-harmonic":   {url:$H+"/piano/minor-harmonic.html", router:1},
        "data":   {url:$H+"/system/data.html", router:1},
        "vm-grid":       {url:$H+"/system/vm-grid.html"},
        "vm-query":       {url:$H+"/system/vm-query.html"},
        "vm-pivot":       {url:$H+"/system/vm-pivot.html"},
        "vm-table":       {url:$H+"/system/vm-table.html", router:1},
        "json-editor":   {url:$H+"/system/json-editor.html", router:1},
        
        "wappsystem-panel":     {url:$H+"/panels/wappsystem/panel.html", router:1},
        "vmautomation-panel":   {url:$H+"/panels/vmautomation/panel.html", router:1},
        "woolcock-panel":       {url:$H+"/panels/woolcock/panel.html", router:1},
        "administrator-panel":  {url:$H+"/panels/administrator/panel.html", router:1},
        "local-sleep-panel":    {url:$H+"/panels/local-sleep-study/panel.html", router:1},
        "my-panel":             {url:$H+"/panels/my/panel.html", router:1},
        "development":          {url:$H+"/panels/development/panel.html", router:1},
        "hba":                  {url:$H+"/panels/hba/panel.html", router:1},
        
        
        "local_excel_file":   {url:$H+"/test/local_excel_file.html", router:1},
        "sales-form":  	      {url:$H+"/forms/sales.html",Table:"sales-demo-0703"},
        "Course_Registration_Form":  {url:$H+"/forms/jotform/Course_Registration_Form.html",api:"wapp",Table:"Course_Registration_Form_demo"},
        
        "excel-to-web-data-collection-form": {url:$H+"/data-collection/form-generator.html", router:1},
        "data-grid": {url:$H+"/data-collection/data-grid.html", router:1},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();



