import {useEffect, useState} from "react";
import axios from "axios";

const UseRequest = (rUrl_, m, body_=null) => {
    const [isPending,setPending] = useState(true)
    const [errorMsg,setErrorMsg] = useState(null)
    const [body,setBody] = useState(body_)
    const [url,setUrl] = useState(rUrl_)
    useEffect(()=>{
        axios.request({
            url:rUrl_,
            method:m,
            data:body_
        })
            .then(res => {
                if (!(res.statusText==="OK")){
                    throw Error("发出错误了")
                }
                setBody(res.data)
                console.log(res.data)
                setPending(false)
                setErrorMsg(null)
            })
            .catch((err) => {
                setErrorMsg(err.message)
                setPending(false)
            });
    },[url])

    return {body,errorMsg,isPending}
}

export default UseRequest