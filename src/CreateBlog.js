import {useState} from "react";
import {useNavigate} from "react-router-dom";
import UseRequest from "./UseRequest";
import {Default_Uri, HTTP_GET, HTTP_POST} from "./Common";

function CreateBlog() {
    let navigate = useNavigate();
    const [title,setTitle] = useState("")
    const [describe,setDescribe] = useState("")
    function createSub() {
        if (title.trim()===""||describe.trim()===""){
            return
        }
        let blog = {title,describe}
        const {errorMsg} = UseRequest(Default_Uri, HTTP_POST, blog)
        if (errorMsg==null){
            navigate("/")
        }
        alert(errorMsg)
    }

    return (
        <div>
           <h3>新建一个博客</h3>
            <label>标题：</label>
            <input value={title} onChange={(event)=>{setTitle(event.target.value)}}/>
            <label>内容：</label>
            <textarea value={describe} onChange={(event)=>{setDescribe(event.target.value)}}/>,
            <button onClick={()=>{createSub()}} type="button">提交</button>
        </div>
        );
}

export default CreateBlog