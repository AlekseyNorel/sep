import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const albumsService = {
    getAll: () => apiService(urls.albums.base)
}

export {
    albumsService
}