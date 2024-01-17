import axios from "axios";

/*
* 封装处理HTTP接口请求。不要在此声明任何react hock，应该在调用方组件中进行声明，否则会报错
* */
async function ToRequest (rUrl_, m_, body_=null) {
    let body = null;
    let err =null
    await axios.request({
        url:rUrl_,
        method:m_,
        data:body_
    })
    .then(res => {
        if (!(res.statusText==="OK")){
            throw Error("发出错误了")
        }
        body=res.data
    })
    .catch((e) => {
        err=e.message()
    });
    return {body,err}
}

export default ToRequest