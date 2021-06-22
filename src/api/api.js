export const getAllTasks = () => {
    return fetch('/tasks')
      .then(res => res.json())
}

export const createTaskApi = tasks => {
   return fetch('/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(tasks)
    })
}
export const deleteTaskApi = id => {
   return fetch(`/delete/${id}`, {
        method: 'DELETE'
    })
} 

export const deleteAllTaskApi = () => {
  return  fetch('/delete-all', {
        method: 'DELETE'
    })
}

export const changeTextApi = (id, text) => {
   return fetch(`/update-text/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({todo: text})
    })
}

export const changeStateApi = (id) => {
  return  fetch(`/update-status/${id}`, {
        method: 'PUT'
    })
}