import { useState, useEffect } from 'react'
import axios from 'axios'
import { base_url } from '../../constants/urls/urls'


export const useRequestData = (params) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${base_url}/${params}`)
            .then((response) => {
                setData(response.data)
                setIsLoading(false)
            }).catch((error) => {
                setError(error)
                setIsLoading(false)
            })
    }, [])

    return [data, isLoading, error]
}