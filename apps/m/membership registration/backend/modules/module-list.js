(function(){
    //-------------------------------------------------------------------------------------
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    //-------------------------------------------------------------------------------------
    m["Membership Data"]                             ={url:H+"/tasks/#/page.html",Table:"demo-membership",form_module:"Membership Form",router:1};
    m["Membership Form"]                             ={url:H+"/tasks/#/page.html",Table:"demo-membership"};
    m["About"]                                       ={url:"http://localhost:8000/vmiis/web-portal/modules/shared/microapp/page.html",router:1};
    //m["About"]                                       ={url:"https://www.vmiis.com/modules/shared/microapp/page.html",router:1};
   
    for(p in m){  
        m[p].url=m[p].url.replace('*',p); 
        var a=p.substring(0,p.lastIndexOf(' ')) +'/'+p.substring(p.lastIndexOf(' ') + 1); //replace the last space to /, example: Student Form --> Student/Form
        m[p].url=m[p].url.replace('#',a); 
    }
})();
