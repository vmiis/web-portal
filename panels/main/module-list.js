(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var A=$vm.hosting_path;
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wapp";
    
    //-------------------------------------------------------------------------------------
    m["wappsystem-panel"]=      {url:A+"/panels/wappsystem/panel.html", router:1};
    m["vmautomation-panel"]=    {url:A+"/panels/vmautomation/panel.html", router:1};
    m["administrator-panel"]=   {url:A+"/panels/administrator/panel.html", router:1};
    m["local-sleep-panel"]=     {url:A+"/panels/local-sleep-study/panel.html", router:1};
    m["my-panel"]=              {url:A+"/panels/my/panel.html", router:1};
    m["development-panel"]=     {url:A+"/panels/development/panel.html", router:1};
    m["hba-panel"]=             {url:A+"/panels/hba/panel.html", prefix:"hba-", router:1};
    m["melody"]=                {url:A+"/panels/melody/panel.html",router:1};
    m["woolcock-portal"]=       {url:A+"/panels/woolcock/panel.html", router:1};

    m["volunteers-panel"]=      {url:A+"/apps/volunteer-system/panels/main/panel.html", router:1}
    m["printer-panel"]=         {url:A+"/apps/printer-status/panels/main/panel.html", router:1}
    m["server-panel"]=          {url:A+"/apps/server-status/panels/main/panel.html", router:1}
    m["sleep-study-panel"]=     {url:A+"/apps/sleep-study/panels/main/panel.html", router:1}
    m["shift-roster-panel"]=    {url:A+"/apps/shift-roster/panels/main/panel.html", router:1}
    m["equipment-booking-panel"]={url:A+"/apps/equipment-booking/panels/main/panel.html", router:1}
    //-------------------------------------------------------------------------------------
})();
