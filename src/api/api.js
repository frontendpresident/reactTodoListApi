export const createTaskApi = Tasks => {
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(Tasks)
    })
}
export const deleteTaskApi = id => {
    fetch(`/delete/${id}`, {
        method: 'DELETE'
    })
} 

export const deleteAllTaskApi = () => {
    fetch('/delete-all', {
        method: 'DELETE',
        body: {}
    })
}

export const changeTextApi = (id, text) => {
    debugger
    fetch(`/update-text/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({todo: text})
    })
    debugger
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