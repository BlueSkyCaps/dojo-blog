import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ToRequest from "./ToRequest";
import {Default_Uri, HTTP_POST} from "./Common";

function CreateBlog() {
    let navigate = useNavigate();
    const [title,setTitle] = useState("")
    const [describe,setDescribe] = useState("")
    const [blog, setBlog] = useState(null)
    useEffect( () => {
        (async ()=>{
            if (blog == null)
                return
            const {err} = await ToRequest(Default_Uri, HTTP_POST, blog)
            if (err == null) {
                navigate("/")
            }
        })()
    },[blog])

    const createSub =  ()=>{
        if (title.trim()===""||describe.trim()===""){
            return
        }
        setBlog({title,describe})
    }
    return (
        <div>
           <h3>新建一个博客</h3>
            <label>标题：</label>
            <input value={title} onChange={(event)=>{setTitle(event.target.value)}}/>
            <label>内容：</label>
            <textarea value={describe} onChange={(event)=>{setDescribe(event.target.value)}}/>,
            <button onClick={()=>createSub()} type="button">提交</button>
        </div>
        );
}

export default CreateBlog