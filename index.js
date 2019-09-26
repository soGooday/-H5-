
class index {
    constructor(){
 
        this.init();
        this.bin();

    }

    init(){//取到相关服务器信息
        console.log('我也是来测试js中');
        $('#text-b').text('我是来测试js驱动html的')
    }
    bin(){}





    sendHttp(){


        $.ajax({
            url: 'url的链接地址',
            type: type,
            data: JSON.stringify({ '参数对象' }),
            dataType: 'json',
            crossDomain: true, //强制使用5+跨域 --这关掉了 我有时候在ios端发送不了数据 所以我就打开了
            contentType: 'application/json',
            beforeSend: function(request) {
                request.setRequestHeader('你的头部关键字如：H',123);//添加的头部的相关信息 123是传入的参数
            },
            success: function (res) {//成功的回调
                console.log('res:',res); 
            },
            error:function (xhr,text) {//失败的回调
                console.log('text:',text,'xhr:',xhr);
                if(xhr.status == 200){//这个200码说明返回时正常的--也不是错误
                  
                }else {//下面是返回的信息是出现错误的信息
                    
                }
            }
        });
    }
}
      
new index();

