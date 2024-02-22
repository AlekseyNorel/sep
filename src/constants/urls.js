const baseURL = 'https://rickandmortyapi.com/api'

const characters = '/character'
const episodes = '/episode'

const urls = {
    episodes:{
        base:episodes
    },
    characters:{
        byId:(ids)=>`${characters}/${ids}`
    }

}

export {
    baseURL,
    urls
}