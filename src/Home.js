import BlogList from "./BlogList";
import UseRequest from "./UseRequest";
import {Default_Uri, HTTP_GET} from "./Common";


const Home = () => {
    // function delBlogFunc(delId) {
    //     setBlogs( blogs.filter(b=>b.id!==delId))
    // }
    // let [blogs,setBlogs] = useState([
    //     {title:"爱机1",describe:"yes 挨近1",link:"https://reminisce.top",id:1},

    //     {title:"爱机2",describe:"yes 挨近2",link:"https://reminisce.top",id:2},
    //     {title:"爱机3",describe:"yes 挨近3",link:"https://reminisce.top",id:3}
    // ])

    const {body:blogs,errorMsg,isPending} = UseRequest(Default_Uri, HTTP_GET)
    return (
        <div>
            {isPending&&<p>loading..</p>}
            {errorMsg&&<p>{errorMsg}</p>}
            {blogs&&<BlogList blogs={blogs} title="所有博客↓" />}
        </div>
    );
}
export default Home
