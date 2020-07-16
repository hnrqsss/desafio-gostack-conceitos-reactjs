import React from 'react'
import api from '../services/api'

export default function useRepositories() {
    
    const [ repositories, setRepositories ] = React.useState([])

    React.useEffect(() => {

        async function fetchRepositories() {
            const { data } = await api.get('/repositories')
            setRepositories(data || [])
        }

        fetchRepositories()
    }, [])

    

    async function handleAddRepository(repo) {
        const { data } = await api.post('/repositories', repo)        
        setRepositories([ ...repositories, data ])
    }
    
    async function handleRemoveRepository(id) {
        
        console.log('repo', id)

        const repos = repositories.find(repository => repository.id !== id) || []

        setRepositories(repos)
        
        await api.delete(`/repositories/${id}`)
    }   

    
    return {
        repositories,
        //Actions
        handleAddRepository,
        handleRemoveRepository,
    }
}
