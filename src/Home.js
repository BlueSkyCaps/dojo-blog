import BlogList from "./BlogList";
import ToRequest from "./ToRequest";
import {Default_Uri, HTTP_GET} from "./Common";
import {useEffect, useState} from "react";


const Home = () => {
    // function delBlogFunc(delId) {
    //     setBlogs( blogs.filter(b=>b.id!==delId))
    // }
    // let [blogs,setBlogs] = useState([
    //     {title:"爱机1",describe:"yes 挨近1",link:"https://reminisce.top",id:1},

    //     {title:"爱机2",describe:"yes 挨近2",link:"https://reminisce.top",id:2},
    //     {title:"爱机3",describe:"yes 挨近3",link:"https://reminisce.top",id:3}
    // ])
    const [blogs,setBlogs] = useState(null)
    const [errorMsg,setErrorMsg] = useState(null)
    const [isPending,setIsPending] = useState(true)
    useEffect(() => {
        (async ()=>{
            if (blogs != null)
                return
            const {body, err} = await ToRequest(Default_Uri, HTTP_GET)
            if (err==null){
                setBlogs(body)
                setIsPending(false)
                return
            }
            setErrorMsg(err)
        })()
    }, [blogs])

    return (
        <div>
            {isPending&&"loading..."}
            {errorMsg&&{errorMsg}}
            {blogs&&<BlogList blogs={blogs} title="所有博客↓" />}
        </div>
    );
}
export default Home
