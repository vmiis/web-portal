//------------------------------------
if(typeof $vm2=="undefined") $vm2={}
//------------------------------------
$vm2.__print__=0;
$vm2.slot="content";
window.onbeforeprint=function(event){$vm2.__print__=1;};
window.onafterprint=function(event){$vm2.__print__=0;};
//------------------------------------
/*
$vm2._load_module=function(inp,callback){//{name,url:,id:,type:}
    var slot=$vm2.slot;
    if(inp.slot!=undefined) slot=inp.slot;
    var doc=document.getElementById(slot);
    var process=function(r,resolve){
        if(r.status==200){
            r.text().then(function(txt){
                if(inp.type=="html"){
                    var e=document.createElement('div');
                    e.innerHTML=txt.replace(/__ID/g,"_"+inp.id);;
                    doc.appendChild(e.firstChild);
                    var dn=document.getElementById("D_"+inp.id);
                    var head = document.getElementsByTagName("head")[0];
                    var src;
                    var scrajx=dn.getElementsByTagName('script');
                    for(var i in scrajx){
                        src=document.createElement("script");
                        src.type="text/javascript";
                        if(scrajx[i].text!=undefined) src.text=scrajx[i].text;
                        if(scrajx[i].src!=undefined && scrajx[i].src!="") src.src=scrajx[i].src;
                        if(scrajx[i].src!=undefined && scrajx[i].src!="" || scrajx[i].text!=undefined)  head.appendChild(src);
                    }
                    if (typeof window['F_'+inp.id] == 'function') {
                        try{
                            var m=$vm2.module_list[inp.name];
                            eval('F_'+inp.id)(m);
                        }
                        catch(err){
                            alert(err+"\r\nThis error happend in the module\r\n"+inp.url);
                        }
                    }
                }
                if(inp.type=="css"){
                    var e=document.createElement('style');
                    e.innerHTML=txt.replace(/__ID/g,"_"+inp.id);;
                    var dn=document.getElementById("D_"+inp.id);
                    dn.appendChild(e);
                }
                resolve(r);
            });        
        }
        else doc.innerHTML="Page not found.";
    }
    var process_text=function(txt){
        if(inp.type=="html"){
            var e=document.createElement('div');
            e.innerHTML=txt.replace(/__ID/g,"_"+inp.id);;
            doc.appendChild(e.firstChild);
            var dn=document.getElementById("D_"+inp.id);
            var head = document.getElementsByTagName("head")[0];
            var src;
            var scrajx=dn.getElementsByTagName('script');
            for(var i in scrajx){
                src=document.createElement("script");
                src.type="text/javascript";
                if(scrajx[i].text!=undefined) src.text=scrajx[i].text;
                if(scrajx[i].src!=undefined && scrajx[i].src!="") src.src=scrajx[i].src;
                if(scrajx[i].src!=undefined && scrajx[i].src!="" || scrajx[i].text!=undefined)  head.appendChild(src);
            }
            if (typeof window['F_'+inp.id] == 'function') {
                try{
                    var m=$vm2.module_list[inp.name];
                    eval('F_'+inp.id)(m);
                }
                catch(err){
                    alert(err+"\r\nThis error happend in the module\r\n"+inp.url);
                }
            }
        }
        if(inp.type=="css"){
            var e=document.createElement('style');
            e.innerHTML=txt.replace(/__ID/g,"_"+inp.id);;
            var dn=document.getElementById("D_"+inp.id);
            dn.appendChild(e);
        }
    }
    return new Promise(function (resolve, reject) {
        fetch(inp.url).then(
            r=>{
                r.text().then( txt=>{process_text(txt);})
            }

        )
        .catch(error => {
            reject(error);
        });
    });
    /*
    var slot=$vm2.slot;
    if(inp.slot!=undefined) slot=inp.slot;
    var doc=document.getElementById(slot);
    var process=function(r){
        if(r.status==200){
            r.text().then(function(txt){
                if(inp.type=="html"){
                    var e=document.createElement('div');
                    e.innerHTML=txt.replace(/__ID/g,"_"+inp.id);;
                    doc.appendChild(e.firstChild);
                    var dn=document.getElementById("D_"+inp.id);
                    var head = document.getElementsByTagName("head")[0];
                    var src;
                    var scrajx=dn.getElementsByTagName('script');
                    for(var i in scrajx){
                        src=document.createElement("script");
                        src.type="text/javascript";
                        if(scrajx[i].text!=undefined) src.text=scrajx[i].text;
                        if(scrajx[i].src!=undefined && scrajx[i].src!="") src.src=scrajx[i].src;
                        if(scrajx[i].src!=undefined && scrajx[i].src!="" || scrajx[i].text!=undefined)  head.appendChild(src);
                    }
                }
                if(inp.type=="css"){
                    var e=document.createElement('style');
                    e.innerHTML=txt.replace(/__ID/g,"_"+inp.id);;
                    var dn=document.getElementById("D_"+inp.id);
                    dn.appendChild(e);
                }
            });        
        }
        else doc.innerHTML="Page not found.";
        if(inp.callback!=undefined) inp.callback();
    }
    fetch(inp.url).then(r=>process(r));
    
}
*/
//------------------------------------
$vm2._load_module=function(inp){//{name,url:,id:,type:}
    var slot=$vm2.slot;
    if(inp.slot!=undefined) slot=inp.slot;
    var doc=document.getElementById(slot);
    var process=function(r){
        if(r.status==200){
            r.text().then(function(txt){
                if(inp.type=="html"){
                    var e=document.createElement('div');
                    e.innerHTML=txt.replace(/__ID/g,"_"+inp.id);;
                    doc.appendChild(e.firstChild);
                    var dn=document.getElementById("D_"+inp.id);
                    var head = document.getElementsByTagName("head")[0];
                    var src;
                    var scrajx=dn.getElementsByTagName('script');
                    for(var i in scrajx){
                        src=document.createElement("script");
                        src.type="text/javascript";
                        if(scrajx[i].text!=undefined) src.text=scrajx[i].text;
                        if(scrajx[i].src!=undefined && scrajx[i].src!="") src.src=scrajx[i].src;
                        if(scrajx[i].src!=undefined && scrajx[i].src!="" || scrajx[i].text!=undefined)  head.appendChild(src);
                    }
                    if (typeof window['F_'+inp.id] == 'function') {
                        try{
                            var m=$vm2.module_list[inp.name];
                            eval('F_'+inp.id)(m);
                        }
                        catch(err){
                            alert(err+"\r\nThis error happend in the module\r\n"+inp.url);
                        }
                    }
                }
                if(inp.type=="css"){
                    var e=document.createElement('style');
                    e.innerHTML=txt.replace(/__ID/g,"_"+inp.id);;
                    var dn=document.getElementById("D_"+inp.id);
                    dn.appendChild(e);
                }
                if(inp.callback!=undefined) inp.callback();
            });        
        }
        else doc.innerHTML="Page not found.";
    }
    fetch(inp.url).then(r=>process(r));
}
//------------------------------------
$vm2.load_module=function(inp){//{name,url:,id:,type:}
    var slot=$vm2.slot; if(inp.slot!=undefined) slot=inp.slot;
    var doc=document.getElementById(slot);
    var process=function(r){
        if(r.status==200){
            r.text().then(function(txt){
                if(inp.type=="html"){
                    var e=document.createElement('div');
                    e.innerHTML=txt.replace(/__ID/g,"_"+inp.id);;
                    doc.appendChild(e.firstChild);
                    var dn=document.getElementById("D_"+inp.id);
                    var head = document.getElementsByTagName("head")[0];
                    var src;
                    var scrajx=dn.getElementsByTagName('script');
                    for(var i in scrajx){
                        src=document.createElement("script");
                        src.type="text/javascript";
                        if(scrajx[i].text!=undefined) src.text=scrajx[i].text;
                        if(scrajx[i].src!=undefined && scrajx[i].src!="") src.src=scrajx[i].src;
                        if(scrajx[i].src!=undefined && scrajx[i].src!="" || scrajx[i].text!=undefined)  head.appendChild(src);
                    }
                    if (typeof window['F_'+inp.id] == 'function') {
                        try{
                            var m=$vm2.module_list[inp.name];
                            eval('F_'+inp.id)(m);
                        }
                        catch(err){
                            alert(err+"\r\nThis error happend in the module\r\n"+inp.url);
                        }
                    }
                }
                if(inp.type=="css"){
                    var e=document.createElement('style');
                    e.innerHTML=txt.replace(/__ID/g,"_"+inp.id);;
                    var dn=document.getElementById("D_"+inp.id);
                    dn.appendChild(e);
                }
                if(inp.callback!=undefined) inp.callback();
            });        
        }
        else doc.innerHTML="Page not found.";
    }
    fetch(inp.url).then(r=>process(r));
}
//------------------------------------
$vm2.responsive_form=function(a){
    if( $vm2.__print__==1 ) return;
    var dw=a[0].contentRect.width;
    var id=a[0].target.id;
    var bp=document.getElementById(id).getAttribute("bp"); 
    if(bp==null) return;
    var bps=bp.split('|');
    var n0=10000000; if(bps.length>0) n0=parseInt(bps[0]);
    var n1=20000000; if(bps.length>1) n1=parseInt(bps[1]);
    var n2=30000000; if(bps.length>2) n2=parseInt(bps[2]);
    var n3=40000000; if(bps.length>3) n3=parseInt(bps[3]);
    var divs = document.getElementById(id).getElementsByTagName('div');
    for( i=0; i< divs.length; i++ ){
        var vmw=divs[i].getAttribute("w");
        if(vmw!=null){
            divs[i].style['float']='left';
            divs[i].style['box-sizing']='border-box';
            divs[i].parentElement.style['border-width']=0;
            divs[i].parentElement.style['box-sizing']='border-box';
            divs[i].parentElement.style['display']="flow-root";
            
            var ws=vmw.split('|');
            var nw0=576; if(ws.length>0) nw0=ws[0]+"%";
            var nw1=nw0; if(ws.length>1) nw1=ws[1]+"%";
            var nw2=nw1; if(ws.length>2) nw2=ws[2]+"%";
            var nw3=nw2; if(ws.length>3) nw3=ws[3]+"%";
            var nw4=nw3; if(ws.length>4) nw4=ws[4]+"%";

            var nw=0;
            if(dw<n0)           nw=nw0;
            if(dw>=n0 && dw<n1) nw=nw1
            if(dw>=n1 && dw<n2) nw=nw2
            if(dw>=n2 && dw<n3) nw=nw3;
            if(dw>=n3)          nw=nw4;
            divs[i].style.width=nw; 
        }
    }                    
}
//------------------------------------
$vm2.request=function(inp){
    //-----------------------------
    var api_address=$vm2.api_address;    if(inp.api_address!=undefined) api_address=inp.api_address;
    var token_name="vm_token";
    var token=sessionStorage.getItem(token_name);
    if(token==undefined) token="";
    //-----------------------------


    fetch('https://05.vmiis.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"cmd": "captcha"})
    })
    .then(res=>{inp});


    /*
    (async () => {
        const rawResponse = await fetch('https://05.vmiis.com', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"cmd": "captcha"})
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })();
      */
}
//------------------------------------
