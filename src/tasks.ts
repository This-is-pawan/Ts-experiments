// console.log('task');
const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLElement>('.list');

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = [];

taskForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskDescription = formInput?.value;

  if (!taskDescription) {
    alert('Please enter a task');
    return;
  }

  tasks.push({ description: taskDescription, isCompleted: false });

  formInput.value = ''; 
  return ;
});
