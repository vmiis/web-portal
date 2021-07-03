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
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();



