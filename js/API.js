// (function () {
//     //------公共部分---------
//     setHttp(url,type,obj,BACK,ERROR){
//
//         // $.ajaxSettings.beforeSend = function(xhr,request){  };
//         $.ajax({
//             url: baseURL+url,
//             type: type,
//             data: JSON.stringify({
//                 obj
//             }),
//             dataType: 'json',
//             contentType: 'application/json',
//             beforeSend: function(request) {
//                 request.setRequestHeader('X-AA-BXMID', "6561112");
//                 // request.setRequestHeader("Method", "Login");
//                 console.log('当前的hander',request.headers)
//             },
//             success: function (res) {
//                 if(BACK!=null){
//                     BACK(res);
//                 }
//             },
//             error:function (xhr,text) {
//                 if(ERROR != null){
//                     ERROR(res);
//                 }
//             }
//
//         });
//     }
//
// })
