import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService = {
    getAll:()=>apiService.get(urls.comments.base),
    getPostOfComment:(id)=> apiService.get(urls.comments.postByCommentId(id))
}

export {
    commentsService
}