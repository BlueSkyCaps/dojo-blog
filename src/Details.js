import {useParams} from "react-router-dom";
import UseRequest from "./UseRequest";
import {Default_Uri, HTTP_GET} from "./Common";

function Details() {
    let {id} = useParams()
    let {body:details,errorMsg,isPending} = UseRequest(Default_Uri+'/'+id, HTTP_GET);
    return (
        <div>
            详情-{id}
            {isPending&&<p>loading..</p>}
            {errorMsg&&<p>{errorMsg}</p>}
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