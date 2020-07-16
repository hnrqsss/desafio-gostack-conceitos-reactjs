import React from "react";

import Repository from './components/Repository';
import "./styles.css";
import useRepositories from "./hooks/useRepositories";

function App() {

  const { 
    repositories,
    handleAddRepository,
    handleRemoveRepository,
  } = useRepositories()

  
  return (
    <div>
      <ul data-testid="repository-list">
          {repositories.map(repository => <Repository 
              repository={repository} 
              key={repository.id}
              removeRepository={handleRemoveRepository}
          />)}
      </ul>

      <button onClick={(data) => handleAddRepository(data)}>Adicionar</button>
    </div>
  );
}

export default App;
