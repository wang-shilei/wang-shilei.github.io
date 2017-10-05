/**
 * will use web config info
 * @param {*} f 
 */
function useWebConfig(f){
      //load web config
    if(!$.webconf){
        $.extend({
            webConfig:null
        })
        $.ajax(
            {
                url:"/conf/web.json",
                data:null,
                cache:false,
                success:function(data){
                    $.webConfig = data;
                    console.log(data)
                    f();
                }
            }
        );
    }else{
        f();
    }
 }
 