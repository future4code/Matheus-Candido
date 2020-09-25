import React from 'react';
import './App.css';
import { useAxiosConfigs } from './AxiosConfigs/AxiosConfigs';
import Planner from './Componentes/Planner/Planner'

function App() {
  // Recebe as funções e estado que estão no custom hook.
  const { getTasks, tasks, deletTask } = useAxiosConfigs()

  return (
    <main className="App">
      {/* Enviado as funções e estado recebidos acima em forma de props para o componente que esta sendo chamado abaixo. */}
      <Planner getTasks={getTasks} tasks={tasks} deletTask={deletTask} />
    </main>
  );
}

export default App;
