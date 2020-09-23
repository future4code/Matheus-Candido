import React from 'react';
import '../../App.css';
import Tasks from '../Tasks/Tasks';

export default function Planner() {
    return (
        <main className="App">
            <div>
                <input type="text" placeholder="Digite sua task" />
                <select>
                    <option value="Segunda" key="">Segunda</option>
                    <option value="Terça" key="">Terça</option>
                    <option value="Quarta" key="">Quarta</option>
                    <option value="Quinta" key="">Quinta</option>
                    <option value="Sexta" key="">Sexta</option>
                    <option value="Sábado" key="">Sábado</option>
                    <option value="Domingo" key="">Domingo</option>
                </select>
                <button>Criar Task</button>
            </div>

            <h2>Todas as tarefas</h2>

            <Tasks />

        </main>
    );
}


