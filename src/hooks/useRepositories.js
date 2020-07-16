import React from 'react'
import api from '../services/api'

export default function useRepositories() {
    
    const [ repositories, setRepositories ] = React.useState([])

    React.useEffect(() => {
        fetchRepositories()
    }, [])

    async function fetchRepositories() {
        const { data } = api.get('/repositories')
        setRepositories(data || [])
    }

    async function handleAddRepository(repo) {
        const { data } = await api.post('/repositories', repo)        
        setRepositories([ ...repositories, data ])
    }
    
    async function handleRemoveRepository(id) {
        await api.delete(`/repositories/${id}`)
        fetchRepositories()
    }

    
    return {
        repositories,
        //Actions
        handleAddRepository,
        handleRemoveRepository,
    }
}
