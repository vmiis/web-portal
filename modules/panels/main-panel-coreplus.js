var coreplus_query=function(UID){
    $vm.request({cmd:"find",table:"coreplus-api",query:{UID:UID},options:{}},function(res){
        var records=res.result;
        if(records!=undefined && records.length==1){
            var uid=records[0].UID;
            var name=records[0].Data.Name;
            var columns=records[0].Data.Columns;
            var array=records[0].Data.Array;
            var input="";
            var path=records[0].Data.Path;
            if(path.indexOf('[INPUT]')!=-1){
                input=prompt("Input", "");
                input=input.replace(/ /g,'%20');
                if(input==null) return;
            }
            var today="";
            if(path.indexOf('[TODAY]')!=-1){
                today=new Date().toISOString().substr(0,10);
            }
            $vm.request({cmd:'coreplus-api',input:input,today:today,uid},function(res){
            //$vm.request({cmd:'coreplus-api',uid:uid},function(res){
                if(res.status=="err"){
                    $vm.show_module('jsonv',{json_data:res.result})
                    return;
                }
                var data="";
                try{
                    var data=JSON.parse(res.result);
                    console.log(data);
                }
                catch(e){
                    alert(e);
                    return;
                }
                if(array!=""){
                    var type=columns.indexOf('|');
                    if(type!=-1) $vm.show_module('gridv',{name:name,json_data:data,array:array,columns:columns})
                    else $vm.show_module('arrayv',{name:name,json_data:data,array:array,columns:columns})
                }
                else{
                    $vm.show_module('jsonv',{json_data:data})
                }
            });
            //--------------------------------------------------------
        }
        else alert('No report.')
    })
}
