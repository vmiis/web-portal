$vm.vm_data_query=function(api,table,UID){
    $vm.request({api:api,cmd:"find",table:table,query:{UID:UID},options:{}},function(res){
        var records=res.result;
        if(records!=undefined && records.length==1){
            $vm.show_module('data',{Data:records[0].Data})
        }
        else alert('The table was not found.')
    })
}
