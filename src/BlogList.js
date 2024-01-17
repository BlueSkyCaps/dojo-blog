import {Link, useNavigate} from "react-router-dom";
import ToRequest from "./ToRequest";
import {Default_Uri, HTTP_DELETE} from "./Common";

const BlogList = ({blogs,title}) => {
    let navigate = useNavigate();
    async function deleteBlog(id) {
        if (id == null) {
            return
        }
        console.log(id)
        const {err}= await ToRequest(Default_Uri + "/" + id, HTTP_DELETE)
        if (err==null){
            navigate(0)
        }
    }

    return (
        <div >
            <h4><i>{title}</i></h4>
            {
                blogs.map(b=>(
                    <div key={b.id}>
                        <h1 className="Title">{b.title}</h1>
                        <button onClick={async () => {
                            await deleteBlog(b.id)
                        }}>删除</button>
                        <Link to={`details/${b.id}`}>详情</Link>
                    </div>
                ))
            }
        </div>
    );
}
export default BlogList