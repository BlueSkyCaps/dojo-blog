import {Link} from "react-router-dom";

const BlogList = ({blogs,title}) => {
    return (
        <div >
            <h4><i>{title}</i></h4>
            {
                blogs.map(b=>(
                    <div key={b.id}>
                        <h1 className="Title">{b.title}</h1>
                        <button onClick={()=>{}}>删除</button>
                        <Link to={`details/${b.id}`}>详情</Link>
                    </div>
                ))
            }
        </div>
    );
}
export default BlogList