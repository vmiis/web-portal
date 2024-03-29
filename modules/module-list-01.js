(function(){
    //-------------------------------------------------------------------------------------
    var set_prefix=function(prefix, modules){
        for(m in modules){ 
            if($vm.module_list[prefix+m]!=undefined) console.log(m+" is existed"); 
            else{
                $vm.module_list[prefix+m]=modules[m];
                if(modules[m]==undefined) $vm.module_list[prefix+m].prefix=prefix;
            }
        }
    }
    //-------------------------------------------------------------------------------------
    var prefix='';
    var $H=$vm.hosting_path+"/modules";
    var H=$vm.hosting_path;
    var modules={
        "chinese": {url:$vm.hosting_path+"/panels/chinese/panel.html", router:1},
        "thinking": {url:$vm.hosting_path+"/panels/thinking/panel.html", router:1},
        "Old-melody": {url:$vm.hosting_path+"/panels/old-melody/panel.html", router:1},
        "Nice-melody": {url:$vm.hosting_path+"/panels/nice-melody/panel.html", router:1},
        "numbered-sheet-music": {url:$vm.hosting_path+"/panels/numbered-sheet-music/page.html", router:1},
        "Build-website": {url:$vm.hosting_path+"/panels/build-website/page.html", router:1},
        
        "main-panel":{url:$vm.hosting_path+"/panels/main/panel.html",title:"Portal",description:"main panel",router:1},
        //"app-panel":{url:$vm.hosting_path+"/modules/panels/app-panel.html",description:"main panel",router:1},
        "diagram":                                  {url:$H+"/diagram/diagram.html",router:1},
        "lab-order-panel":{
            api:"wzd",
            url:$vm.hosting_path+"/modules/panels/lab-order-panel.html",description:"lab order panel",router:1},
        "temperature-reports":  {
            api:"wzd",
            url:$vm.hosting_path+"/modules/it/temperature-reports.html",description:"Temperature reports"},
        "coreplus-datatable-relationships":{
            api:"wzd",
            url:$H+"/diagram/coreplus-datatable-relationships.html",
            router:1
        },
        "coreplus-referral-diagram":{
            api:"wzd",
            url:$H+"/diagram/referral.html",
            router:1
        },
        "test": {
            url:$vm.hosting_path+"/modules/excel/test.html",
            api:"wzd",
            Table:"file",
            description:"test"
        },
        "thankq-all-transactions": {
            api:"wzd",
            url:$vm.hosting_path+"/modules/excel/thankq-all-transactions.html",
            Table:"file",
            description:"thankq-all-transactions"
        },
        "thankq-all-people": {
            api:"wzd",
            url:$vm.hosting_path+"/modules/excel/thankq-all-people.html",
            Table:"file",
            description:"thankq-all-people"
        },
        "thankq-people-fields": {
            api:"wzd",
            url:$vm.hosting_path+"/modules/excel/thankq-people-to-re-constituent.html",
            Table:"file",
            description:"thankq-all-people-fields"
        },
        "thankq-t-fields": {
            api:"wzd",
            url:$vm.hosting_path+"/modules/excel/thankq-t-to-gift.html",
            Table:"file",
            description:"thankq-t-fields"
        },
        "database-backup-rt":{
            api:"wzd",
            title:'CMS and research database backup files',
            url:$H+"/database-backup/data.html",
            folder:"research-tools",
        },
        "database-backup-SleepwareG3_Adult":{
            api:"wzd",
            title:'CMS and research database backup files',
            url:$H+"/database-backup/data.html",
            folder:"SleepwareG3_Adult",
        },
        "database-backup-SleepwareG3_Paeds":{
            api:"wzd",
            title:'CMS and research database backup files',
            url:$H+"/database-backup/data.html",
            folder:"SleepwareG3_Paeds",
        },
        "lab-order-data-self":{
            api:"wzd",
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
            api:"wzd",
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
            api:"wzd",
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
            api:"wzd",
            title:'Communal ordering form',
            url:$H+"/lab-order/order/form.html",
            Table:"communal-ordering",
            description:"Communal ordering form",
            print:"lab-order-print",
        },
        "lab-order-print-version-template":{
            api:"wzd",
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
            api:"wzd",
            title:'Communal ordering pdf form',
            url:$H+"/lab-order/order/form.html",
            Table:"communal-ordering",
            description:"Communal ordering pdf form",
        },
        "lab-order-lab-manager-approval-form":{
            api:"wzd",
            title:"Communal ordering lab manager approval",
            url:$H+"/lab-order/lab-manager-approval/form.html",
            Table:"communal-ordering-lab-manager-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering lab manager approval",
        },
        "lab-order-supervisor-approval-form":{
            api:"wzd",
            title:"Communal ordering supervisor approval",
            url:$H+"/lab-order/supervisor-approval/form.html",
            Table:"communal-ordering-supervisor-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering supervisor approval",
        },
        "lab-order-financial-approval-form":{
            api:"wzd",
            title:"Communal ordering financial approval",
            url:$H+"/lab-order/financial-approval/form.html",
            Table:"communal-ordering-financial-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering financial approval",
        },
        "lab-order-receive-form":{
            api:"wzd",
            title:"Communal ordering received form",
            url:$H+"/lab-order/receive/form.html",
            Table:"communal-ordering-receive",
            parent_table:"communal-ordering",
            description:"Communal ordering received",
        },
        

        "lab-order-diagram":{
            api:"wzd",
            title:"Communal ordering diagram",
            url:$H+"/lab-order/diagram/diagram.html",
            description:"Communal ordering diagram",
            router:1,
        },


        "lab-order-company-data":{
            api:"wzd",
            title:'Company records',
            url:$H+"/supplier/data.html",
            Table:"communal-ordering-company",
            form_module:"lab-order-company-form", 
        },
        "lab-order-company-form":{
            api:"wzd",
            title:'Company form',
            url:$H+"/supplier/form.html",
            Table:"communal-ordering-company",
        },
        "lab-order-supervisor-data":{
            api:"wzd",
            title:'supervisor records',
            url:$H+"/supervisor/data.html",
            Table:"communal-ordering-supervisor",
            form_module:"lab-order-supervisor-form", 
        },
        "lab-order-supervisor-form":{
            api:"wzd",
            title:'Supervisor form',
            url:$H+"/supervisor/form.html",
            Table:"communal-ordering-supervisor",
        },
        "cms-sleep-study__":{
            api:"wzd",
            title:"Sleep study",
            url:$H+"/cms/sleep-study/data.html",
            Table:"cms-sleep-study",
            description:"Sleep study",
            router:1,
        },
        "cms-sleep-study":{
            api:"wzd",
            title:"Sleep study",
            url:$H+"/cms/sleep-study/data.html",
            api:"wzd",
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
        
        "piano2":{  url:$H+"/piano/piano.html"},
        "piano3":{  url:$H+"/piano/piano3.html"},
        "piano-notes":{  url:$H+"/system/piano-notes.html"},
        "piano-notes-c":{  url:$H+"/system/piano-notes-c.html"},
        
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
        "arpeggios":        {url:$H+"/piano/arpeggios.html", router:1},
        "chords":           {url:$H+"/piano/chords.html", router:1},
        
        "data":   {url:$H+"/system/data.html", router:1},
        "vm-grid":       {url:$H+"/system/vm-grid.html"},
        "vm-query":       {url:$H+"/system/vm-query.html"},
        "vm-pivot":       {url:$H+"/system/vm-pivot.html"},
        "vm-table":       {url:$H+"/system/vm-table.html", router:1},
        "json-editor":   {url:$H+"/system/json-editor.html", router:1},
        "noteflight":   {url:$H+"/system/noteflight.html", router:1},
        
        
        
        "local_excel_file":   {url:$H+"/test/local_excel_file.html", router:1},
        "sales-form":  	      {url:$H+"/forms/sales.html",Table:"sales-demo-0703"},
        "Course_Registration_Form":  {url:$H+"/forms/jotform/Course_Registration_Form.html",api:"wapp",Table:"Course_Registration_Form_demo"},
        
        "excel-to-web-data-collection-form": {url:$H+"/data-collection/form-generator.html", router:1},
        "data-grid": {url:$H+"/data-collection/data-grid.html", router:1},
        "life": {url:$H+"/thinking/life.html", router:1},
        "understanding": {url:$H+"/thinking/understanding.html", router:1},
        "investment": {url:$H+"/thinking/investment.html", router:1},
        "pareto-principle": {url:$H+"/thinking/pareto-principle.html", router:1},
        
        "Portal": {url:H+"/panels/portal.html", router:1},
        "Data-collection": {url:H+"/panels/data-collection.html", router:1},
        "WIMR-Apps": {url:H+"/panels/wimr-apps.html", router:1},
        "Piano-scales": {url:H+"/panels/piano-scales.html", router:1},
        "Others": {url:H+"/panels/others.html", router:1},
        "Micro-Apps": {url:H+"/panels/micro-apps.html", router:1},
        "About-Micro-App":{url:$H+"/shared/microapp/page.html",router:1},
        
        "midi-player":{url:$H+"/midi-player/page.html",router:1},
        
        "abcjs":{url:$H+"/abcjs/page.html"},
        "abcjs-numbered":{url:$H+"/abcjs-numbered/page.html"},
        "abcjs-waterfall":{url:$H+"/abcjs-waterfall/page.html"},
        
        "abcjs-local":{url:$H+"/abcjs-local/page.html",router:1},
        "abcjs-numbered-local":{url:$H+"/abcjs-numbered-local/page.html",router:1},
        
        "sheet-music":{url:H+"/panels/sheet-music.html",router:1},
        "piano-left-hand-pattern":{url:H+"/panels/piano-left-hand-pattern.html",router:1},
        "numbered-left-hand":{url:H+"/panels/numbered-left-hand/page.html","title":"Left hand pattern"},
        "ssl-check":{url:$H+"/ssl-check/page.html",router:1},
        "domain-check":{url:$H+"/domain-check/page.html",router:1},
        "api-server-status":{url:$H+"/api-server-status/page.html",router:1},
        "db-server-status":{url:$H+"/db-server-status/page.html",router:1},
        "db-backup-status":{url:$H+"/db-backup-status/page.html",router:1},
        "linux":{url:H+"/panels/linux.html",router:1},
        "linux-setup":{url:$H+"/linux/setup/page.html",router:1},
        "linux-iptable":{url:$H+"/linux/iptable/page.html",router:1},
        "linux-samba":{url:$H+"/linux/samba/page.html",router:1},
        "linux-nodejs":{url:$H+"/linux/nodejs/page.html",router:1},
        "linux-certbot":{url:$H+"/linux/certbot/page.html",router:1},
        "linux-mongodb":{url:$H+"/linux/mongodb/page.html",router:1},
        "linux-common":{url:$H+"/linux/common/page.html",router:1},
        "linux-others":{url:$H+"/linux/others/page.html",router:1},
        "crypto":{url:$H+"/crypto/page.html",router:1},
        "ud1":{url:$H+"/dev/d1/page.html",router:1},
        "ud2":{url:$H+"/dev/abcjs/page.html",router:1},
        "ud3":{url:$H+"/dev/abcjs-waterfall/page.html",router:1},
        "ud4":{url:$H+"/dev/abcjs-local/page.html",router:1},
        "ud5":{url:$H+"/dev/abcjs-numbered-local/page.html",router:1},
        "ud6":{url:$H+"/dev/abcjs-numbered-waterfall/page.html",router:1},
        "ud7":{url:$H+"/dev/abcjs-numbered/page.html",router:1},

        "abcjs-numbered-waterfall":{url:$H+"/dev/abcjs-numbered-waterfall/page.html",router:1},
        "Web-template":{url:H+"/panels/web-template.html",router:1},
        "Piano-References":{url:H+"/panels/piano-references.html",router:1},

        "piano-connection":{url:$H+"/piano-connection/page.html",router:1},
    };

    for(var i=1;i<20;i++){
        var p=i.toString().padStart(4, '0');
        modules["chat"+p]={url:$H+"/chat/"+p+".html",router:1}
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();



