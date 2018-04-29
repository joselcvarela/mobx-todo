class TodoStore {
    todos = []

    get completedTodosCount() {
        return this.todos.filter(todo => todo.completed).length
    }

    report() {
        return {
            total: this.todos.length,
            next: this.todos[0],
            completed: this.completedTodosCount
        } 
    }

    addTodo(todo) {
        this.todos.push({
            ...todo,
            assignee: null,
            completed: false
        })
    }
}

export default TodoStore