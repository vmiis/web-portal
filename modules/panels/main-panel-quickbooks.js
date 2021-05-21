var quickbooks_query=function(UID){
    var realmId="";
    var t=sessionStorage.getItem("intuit oauth");
    if(t==null){
        alert("You haven't login!");
        return "";
    }
    t=JSON.parse(t);
    realmId=t.href.split("ealmId=").pop().split('&')[0];
    t=t.a.access_token;
    
    $vm.request({api:'wapp',cmd:"find",table:"intuit-api",query:{UID:UID},options:{}},function(res){
        var records=res.result;
        if(records!=undefined && records.length==1){
            var name=records[0].Data.Name;
            var array=records[0].Data.Array;
            var columns=records[0].Data.Columns;
            var path=encodeURI(records[0].Data.Path);
            if(t!="" && realmId!=""){
                var path2="/v3/company/"+realmId+path;
                $vm.request({api:'wapp',cmd:'intuit-api',access_token:t,path:path2},function(res){
                    var v=JSON.parse(res.result);
                    console.log(v)
                    //$vm.show_module('jsonv',{json_data:JSON.parse(res.result)})
                    if(res.status=="err"){
                        $vm.show_module('jsonv',{json_data:v})
                    }
                    else if(array!=""){
                        var type=columns.indexOf('|');
                        if(type!=-1) $vm.show_module('gridv',{name:name,json_data:v,array:array,columns:columns})
                        else $vm.show_module('arrayv',{name:name,json_data:v,array:array,columns:columns})
                    }
                    else{
                        $vm.show_module('jsonv',{json_data:v})
                    }
                })
            }
        }
        else alert('No report.')
    })
}
