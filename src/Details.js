import {useParams} from "react-router-dom";
import ToRequest from "./ToRequest";
import {Default_Uri, HTTP_GET} from "./Common";
import {useEffect, useState} from "react";

function Details() {
    let {id} = useParams()
    const [details,setDetails]=useState(null)
    // 空数组作为依赖
    // useEffect会在第一次渲染后执行一次，调用ToRequest设置state值为body新值，值改变触发组件重新渲染，
    // 因为useEffect中[]没有依赖，不会再次触发useEffect，至此结束
    useEffect(() => {
        (async ()=>{
            let {body,err} =  await ToRequest(Default_Uri+'/'+id, HTTP_GET);
            if (err==null){
                setDetails(body)
                console.log(body)
            }
        })()
    }, [])

    return (
        <div>
            详情-{id}
            {
                details&&(
                    <div>
                        <h3>标题：{details.title}</h3>
                        <h3>内容：{details.describe}</h3>
                        <h3>网站：{details.link}</h3>
                    </div>
                )
            }
        </div>
    );
}
export default Details