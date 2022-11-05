import { baseUrl } from "../utils";

export const getImages = () => {
    return async (dispatch) => {
        dispatch({type: 'START_FETCH'})
        fetch(baseUrl + 'assets?format=json')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    const filterData = json.assets.map(asset => ({
                        id: asset.id.toString(),
                        name: asset.name,
                        imageUrl: asset.image_url,
                        contractAddress: asset.asset_contract.address,
                        tokenId: asset.token_id.toString(),
                        asset: asset
                    }))
                    dispatch({type: 'FETCH_IMAGES_SUCCESS', payload: filterData})
                }, 1500)
            })
            .catch(error => dispatch({type: 'FETCH_ERROR', payload: error.message}))
    }
}
