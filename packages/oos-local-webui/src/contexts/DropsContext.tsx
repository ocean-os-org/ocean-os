import { createContext, Dispatch, PropsWithChildren, useContext, useReducer } from 'react';

const TasksContext = createContext<Drop[] | null>(null);
const TasksDispatchContext = createContext<Dispatch<DropAction> | null>(null);

const DropsProvider = ({ children }:PropsWithChildren<{}>) => {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
export default DropsProvider;

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

type Drop = {
    id: number;
    text: string;
    done: boolean;
}

type DropAction = {
    type: string;
    task: Drop;
    id: number;
    text: string;
}

function tasksReducer(tasks:Drop[], action:DropAction) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];