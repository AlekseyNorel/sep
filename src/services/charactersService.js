import {apiService} from "./apiService";
import {urls} from "../constants";

const charactersService = {
    getByEpisode: (ids) => apiService.get(urls.characters.byId(ids))
}
export {charactersService}