const initialState = {
    nftImages: [],
    status: 'idle',
    error: null
}

const START_FETCH = 'START_FETCH'
const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS'
const FETCH_ERROR = 'FETCH_ERROR'
const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE'

export const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCH:
            return { ...state, status: 'loading'}
        case FETCH_ERROR:
            return { ...state, status: 'error', error: action.payload }
        case FETCH_IMAGES_SUCCESS:
            return { ...state, status: 'succeeded', nftImages: action.payload }
        case FETCH_IMAGE_SUCCESS:
            return { ...state, status: 'succeeded'}
        default:
            return state
    }
}

export const selectImageById = (state, imageId) => {
    return state.images.nftImages.find(image => image.id.toString() === imageId.toString()) ?
        state.images.nftImages.find(image => image.id.toString() === imageId.toString()) : {}
}



