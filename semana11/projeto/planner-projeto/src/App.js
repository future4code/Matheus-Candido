import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import { useAxiosConfigs } from './AxiosConfigs/AxiosConfigs';
import Planner from './Componentes/Planner/Planner'

function App() {
  const { getTasks, tasks, deletTask,putEdit } = useAxiosConfigs()

  return (
    <main className="App">
      <Planner getTasks={getTasks} tasks={tasks} deleteEdit={deletTask} putEdit={putEdit} />
    </main>
  );
}

export default App;
