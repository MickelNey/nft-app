import {useEffect, useState} from "react";

export const useQuery = (url, deps) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch(url)
            .then(async (response) => {
                const responseData = await response.json()
                if (!response.ok) throw new Error('data changed; current url is outdated. ')
                setData(responseData)
                setIsLoading(false)
            })
            .catch(error => {
                setError(error)
                setIsLoading(false)
            })
    }, [deps, url])
    return {data, error, isLoading}
}