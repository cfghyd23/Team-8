import React, { useState, useEffect } from 'react';
import { Progress } from '@material-tailwind/react';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', category: 'todo' },
    { id: 2, title: 'Task 2', category: 'todo' },
    { id: 3, title: 'Task 3', category: 'todo' },
    { id: 4, title: 'Task 4', category: 'todo' },
    { id: 5, title: 'Task 5', category: 'todo' }
  ]);

  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const completedTasks = tasks.filter(task => task.category === 'done');
    setCompletedTasks(completedTasks);
  }, [tasks]);

  const moveTask = (taskId, newCategory) => {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === taskId) {
          return { ...task, category: newCategory };
        }
        return task;
      });
    });
  };

  const calculateProgress = () => {
    const totalTasks = tasks.length;
    const completedTaskCount = completedTasks.length;
    if (totalTasks === 0) {
      return 0;
    } else {
      return Math.round((completedTaskCount / totalTasks) * 100);
    }
  };

  return (
    <div>
      <div className="container text-center mt-6" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <Progress className="m-4 w-50" value={calculateProgress()} label="Completed" />
      </div>
      <div className="container text-center mt-6" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="flex justify-center">
          <div className="p-4 bg-red-100 rounded-lg mr-8 flex-1">
            <h2 className="text-sm font-bold mb-4">Tasks to be Completed</h2>
            {tasks
              .filter(task => task.category === 'todo')
              .map(task => (
                <div key={task.id} className="bg-white rounded-lg p-4 mb-2 shadow">
                  <p>{task.title}</p>
                  <button
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => moveTask(task.id, 'done')}
                  >
                    Move to Completed
                  </button>
                </div>
              ))}
          </div>

          <div className="p-4 bg-green-100 rounded-lg flex-1">
            <h2 className="text-sm font-bold mb-4">Completed Tasks</h2>
            {completedTasks.map(task => (
              <div key={task.id} className="bg-white rounded-lg p-4 mb-2 shadow">
                <p>{task.title}</p>
                <button
                  className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Task Completed
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <div className="container text-center p-4 bg-blue-100 rounded-lg" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h1>Great Work!! Keep Going</h1>
      </div>
      <br />
      <div className="container text-center p-4 bg-purple-100 rounded-lg" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h1>Funds Collected Till Now </h1>
      </div>
      <br />
    </div>
  );
};

export default KanbanBoard;