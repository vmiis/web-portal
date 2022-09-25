(function(){
    if(typeof $vm==undefined) $vm={}
    $vm={"m1":{}};
    var m=$vm["m1"];
    m.input={}
    //-------------------------------------
    $vm.render_checkbox_field=function(record,mID,$div,html){
        var field=$div.attr('data-id');
        //record.vm_custom[field]=true;
        $div.html(html);
        if(record[field]=="1" || record[field]=="True" || record[field]=="on" ) $div.find('input').prop('checked', true);
        $div.find('input').on('click', function(){
            var value='0';
            if($(this).prop("checked") == true)   value='1';
    
            if(value==="" && record[field]===undefined) return;
            if(value!==record[field]){
                record.vm_dirty=1;
                record[field]=value;
                $('#save'+mID).css('background','#E00');
            }
        });
    }
    //-------------------------------------
    m.item_a_create_header=function(){
        var cols=m.item_a_fields.split(',');
        m.item_a_field_header=[];
        m.item_a_field_id=[];
        //------------------------------------
        //table
        for(var i=0;i<cols.length;i++){
            var th=cols[i];
            var thA=th.split('|')[0];
            var thB=th.split('|').pop().trim().replace(/ /g,'_');
            //create grid header and id
            m.item_a_field_header.push(thA);
            m.item_a_field_id.push(thB);
        }
        //-------------------------
    }
    //-------------------------------------
    m.item_a_render=function(I){
        var start=0;
        var max=m.item_a_records.length;
        if(I!==undefined){
            start=I;
            max=I+1;
        }
        var txt="";
        txt+="<tr><th></th>"
        //-------------------------
        m.item_a_create_header();
        //-------------------------
        for(var i=0;i<m.item_a_field_header.length;i++){
            var print='';
            var header_name=m.item_a_field_header[i];
            if(m.item_a_field_header[i][0]=='_'){
                print='class=c_print';
                header_name=header_name.replace('_','');
            }
            header_name=header_name.replace(/_/g,' ');
            var header_id=m.item_a_field_id[i];
            if(m.item_a_field_header[i]=='_Remove') {txt+="<th "+print+" data-header="+header_id+" style='width:30px;'></th>";}
            else                                    txt+="<th "+print+" data-header="+header_id+">"+header_name+"</th>";
        }
        txt+"</tr>";
        for(var i=0;i<m.item_a_records.length;i++){
            txt+="<tr><td>"+(i+1).toString()+"</td>";
            for(var j=0;j<m.item_a_field_header.length;j++){
                var b=m.item_a_field_id[j];
                var value="";
                if(m.item_a_records[i][b]!==undefined) value=m.item_a_records[i][b];
                value=value.toString();
                value=$('<div/>').text(value).html();
                value=value.replace(/\n/g,'<br>');
                var print='';
                if(m.item_a_field_header[j][0]=='_') print='class=c_print';
                txt+="<td data-id="+b+" "+print+" ><div contenteditable>"+value+"</div></td>";
            }
            txt+"</tr>";
        }
        $('#grid_item_a__ID').html(txt);
        //------------------------------------
        m.item_a_cell_process();
        return;
    }
    //----------------------------------
    m.item_a_cell_process=function(){
        //cell render
        $('#grid_item_a__ID td').each(function(){
            var col = $(this).parent().children().index($(this));
            var row = $(this).parent().parent().children().index($(this).parent())-1; var I=row;
            var column_name=$('#grid_item_a__ID th:nth-child('+(col+1)+')').attr('data-header');
            //-------------------------
            if(column_name=='_Remove'){
                $(this).css('color','#666')
                $(this).css('width','50px')
                $(this).html("<u style='cursor:pointer'><i class='far fa-trash-alt'></i></u>");
                $(this).find('u').data('ID',m.item_a_records[row].ID);
                $(this).find('u').on('click',function(){
                    m.item_a_records.splice(row, 1);
                    m.item_a_render();
                    if(m.item_a_after_remove!=undefined) m.item_a_after_remove();
                })
            }
            //-------------------------
            if(m.item_a_cell_render!==undefined){ m.item_a_cell_render(m.item_a_records,row,column_name,$(this),m.item_a_set_value,'grid'); }
            //-------------------------
        })
        //------------------------------------
        $('#grid_item_a__ID td').find('div:first').blur(function(){
            var col = $(this).parent().parent().children().index($(this).parent()); //edge
            var row = $(this).parent().parent().parent().children().index($(this).parent().parent())-1; //edge
            var column_name=$('#grid_item_a__ID th:nth-child('+(col+1)+')').attr('data-header');
            var value=$(this).html().replace(/<div>/g,'').replace(/<\/div>/g,'\n').replace(/<br>/g,'\n');
            var value=$('<div/>').html(value).text();
            if(m.item_a_cell_value_process!==undefined) value=m.item_a_cell_value_process(value,column_name);
            m.item_a_set_value(value,m.item_a_records,row,column_name);
            if(m.item_a_after_change!==''){ m.item_a_after_change(m.item_a_records,row,column_name,$(this),m.item_a_set_value,'grid'); }
        })
        //------------------------------------
    }
    //-------------------------------------
    m.item_a_set_value=function(value,records,I,column_name){
        if(value==="" && records[I][column_name]===undefined) return;
        if(value!==records[I][column_name]){
            records[I].vm_dirty=1;
            records[I][column_name]=value;
        }
    }
    //-----------------------------------------------
    m.item_a_add=function(){
        var new_row={}
        for(var i=0;i<m.item_a_field_id.length;i++){
            var b=m.item_a_field_id[i];
            if(b!=="ID" && b!=="_Remove"){
                new_row[b]="";
            }        
        }
        var p=m.item_a_records.length;
        m.item_a_records.splice(p, 0, new_row);
        m.item_a_render(0);
    };
    //-----------------------------------------------
    m.item_a_get_data=function(){
        var data=[];
        for(var i=0;i<m.item_a_records.length;i++){
            var one={}
            for(var j=0;j<m.item_a_field_id.length;j++){
                var id=m.item_a_field_id[j];
                if(id[0]!='_') one[id]=m.item_a_records[i][id];
            }
            data.push(one);
        }
        return data;
    }
    //-----------------------------------------------
    var item_a_list=function(){
        //----------------------------------
        //item a part
        m.item_a_fields="Item_No,Description,Unit_Price,Quantity,GST,Amount,_Remove";
        //----------------------------------
        $('#item_a_add__ID').on('click',function(){ m.item_a_add(); })
        //----------------------------------
        m.item_a_cell_render=function(records,I,field,td,set_value,source){
            switch(field){
                case "Amount":
                    td.find('div:first').removeAttr('contenteditable');
                    break;
                case "GST":
                    var html='<input type=checkbox />';
                    $vm.render_checkbox_field(records[I],'__ID',td,html)
                    td.find('input').on('change',function(){
                        cal();
                    })
                    break;
            }
        }
        //----------------------------------
        m.item_a_after_change=function(records,I,field,td,set_value,source){
            switch(field){
                case "Unit_Price":
                case "Quantity":
                /*case "GST":*/
                    cal();
                    break;
            }
        }
        //----------------------------------
        m.item_a_after_remove=function(){
            cal();
        }
        $('#F__ID input[name=Delivery]').on('change',function(){
            cal();
        })
        //----------------------------------
        var cal=function(){
            var total=0,subtotal=0,gst=0;
            for(var i=0;i<m.item_a_records.length;i++){
                var p=parseFloat(m.item_a_records[i].Unit_Price);
                var q=parseFloat(m.item_a_records[i].Quantity);
                if(m.item_a_records[i].Unit_Price=='') p=0;
                if(m.item_a_records[i].Quantity=='') q=0;
                var a=p*q;
                if(m.item_a_records[i].GST=='1'){
                    gst+=a*0.1;
                    a=a*1.1;
                }
                m.item_a_records[i].Amount=a.toFixed(2);
                total+=a;
            }
            $('#F__ID input[name=GST_Amount]').val(gst.toFixed(2));
            $('#F__ID input[name=Total_Amount]').val(total.toFixed(2));
            m.item_a_render();
        }
        //----------------------------------
    }
    //-----------------------------------
    var item_a_render=function(){
        //-------item a part
        m.item_a_records=[]; if(m.input.record!=undefined && m.input.record.Data.items!=undefined) m.item_a_records=m.input.record.Data.items;
        m.item_a_render();
        //-------
    }
    //-----------------------------------
    item_a_list();
    item_a_render();
    //-----------------------------------
    var table="demo-purchase-order-request";
    $('#F__ID').submit(function(e){
        e.preventDefault();
        e.stopPropagation();
        var items=m.item_a_get_data();
        
        var formData = new FormData(F__ID);
        var data = {};
        formData.forEach((value, key) => data[key] = value);
        data.items=items;
        var req={"cmd":"insert",table:table,data:data}
        var param={
            type: "POST",
            url: "https://01.vmiis.com",
            contentType: "application/json",
            charset:"utf-8",
            dataType: "json",
            data: JSON.stringify(req),
            success: function(c,textStatus, request){
                $('#submit__ID').prop('disabled', true);
                $('#submit__ID').hide();
                alert('Thank you for your submission');
            }
        }
        $.ajax(param)
    })
    //-----------------------------------
}())