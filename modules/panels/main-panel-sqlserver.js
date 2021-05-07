var sqlserver_query=function(UID){
    $vm.request({cmd:"find",table:"cms-api",query:{UID:UID},options:{}},function(res){
        var records=res.result;
        if(records!=undefined && records.length==1){
            var uid=records[0].UID;
            var name=records[0].Data.Name;
            var query=records[0].Data.Query;
            var array='result';
            var columns=records[0].Data.Columns;
            if(query.indexOf('[INPUT]')!=-1){
                var p=prompt("Input", "");
                if(p==null) return;
                query=query.replace('[INPUT]',p);
            }      
            var req={cmd:'find',options:{sql:1,uid:uid}}
            $vm.request(req,function(res){
                var v=res;
                if(res.status=="err"){
                    $vm.show_module('jsonv',{json_data:v.result})
                }
                else if(array!=""){
                    var type=columns.indexOf('|');
                    if(type!=-1) $vm.show_module('gridv',{name:name,json_data:v,array:array,columns:columns})
                    else $vm.show_module('arrayv',{name:name,json_data:v,array:array,columns:columns})
                }
            });
            //--------------------------------------------------------
        }
        else alert('No report.')
    })
}
