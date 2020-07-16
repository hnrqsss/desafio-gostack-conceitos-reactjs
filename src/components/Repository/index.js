import React from 'react'

export default function Repository({ 
    repository,
    removeRepository
}) {
    return (
        <li>
            {repository.title}
            <button onClick={() => removeRepository(repository.id)}>Remover</button>
        </li>
    )
}
