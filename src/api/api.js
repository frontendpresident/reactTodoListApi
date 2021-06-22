export const getAllTasks = () => {
    return fetch('/tasks')
      .then(res => res.json())
}

export const createTaskApi = tasks => {
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(tasks)
    })
}
export const deleteTaskApi = id => {
    fetch(`/delete/${id}`, {
        method: 'DELETE'
    })
} 

export const deleteAllTaskApi = () => {
    fetch('/delete-all', {
        method: 'DELETE'
    })
}

export const changeTextApi = (id, text) => {
    fetch(`/update-text/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({todo: text})
    })
}

export const changeStateApi = (id, state) => {
    fetch(`/update-status/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({isDone: state})
    })
}