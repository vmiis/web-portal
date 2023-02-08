(function(){
    //-------------------------------------------------------------------------------------
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    //-------------------------------------------------------------------------------------
    m["revenue-2022-data"]                      ={url:H+"/tasks/Use Cases/*/page.html",router:1};
    m["revenue-2022-chart"]                     ={url:H+"/tasks/Use Cases/*/page.html",router:1};
    m["What is a Micro-app"]                    ={url:H+"/tasks/About Microapp/*/page.html",router:1};
    m["Cost of running a Micro-app"]            ={url:H+"/tasks/About Microapp/*/page.html",router:1};
    m["Authentication"]                         ={url:H+"/tasks/About Microapp/*/page.html",router:1};
    m["Permissions Control"]                    ={url:H+"/tasks/About Microapp/*/page.html",router:1};
    m["Student-Data"]                           ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-student",form_module:"Student-Form",router:1};
    m["Student-Form"]                           ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-student"};
    m["Membership-Application-Data"]            ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-membership-application",form_module:"Membership-Application-Form",router:1};
    m["Membership-Application-Form"]            ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-membership-application"};
    m["File-Data"]                              ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-file",form_module:"File-Form",router:1};
    m["File-Form"]                              ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-file"};
    m["Adverse-Event-Data"]                     ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-adverse-event",form_module:"!",router:1};
    m["Adverse-Event-Form"]                     ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-adverse-event"};
    m["Employee-Data"]                          ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-employee",form_module:"!",router:1};
    m["Employee-Form"]                          ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-employee"};
    m["Incident-Report-Data"]                   ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-incident-report",form_module:"!",router:1};
    m["Incident-Report-Form"]                   ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-incident-report"};
    m["Epworth-Sleepiness-Scale-Data"]          ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-epworth-sleepiness-scale",form_module:"!",router:1};
    m["Epworth-Sleepiness-Scale-Form"]          ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-epworth-sleepiness-scale"};
    m["Insomnia-Severity-Index-Data"]           ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-insomnia-severity-index",form_module:"!",router:1};
    m["Insomnia-Severity-Index-Form"]           ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-insomnia-severity-index"};
    m["Karolinska-Sleepiness-Scale-Data"]       ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-karolinska-sleepiness-scale",form_module:"!",router:1};
    m["Karolinska-Sleepiness-Scale-Form"]       ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-karolinska-sleepiness-scale"};
    m["Pittsburgh-Sleep-Quality-Index-Data"]    ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-pittsburgh-sleep-quality-index",form_module:"!",router:1};
    m["Pittsburgh-Sleep-Quality-Index-Form"]    ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-pittsburgh-sleep-quality-index"};
    m["Ethnicity-Data"]                         ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-ethnicity",form_module:"!",router:1};
    m["Ethnicity-Form"]                         ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-ethnicity"};
    m["Student-Captcha-Data"]                   ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-student-captcha",form_module:"Student-Captcha-Form",router:1};
    m["Student-Captcha-Form"]                   ={url:H+"/tasks/Use Cases/#/page.html",Table:"demo-student-captcha"};
    

    
    for(p in m){  
        m[p].url=m[p].url.replace('*',p); 
        var a=p.substring(0,p.lastIndexOf('-')) +'/'+p.substring(p.lastIndexOf('-') + 1);  //replace the last - to /, example: Student-Form --> Student/Form
        m[p].url=m[p].url.replace('#',a);                                                  //replace #  
        if(m[p].form_module=="!") m[p].form_module=p.replace('-Data','-Form');             //replace ! to form module 
    }
})();
