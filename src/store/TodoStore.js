import { observable, computed } from 'mobx'

export class Todo {
    constructor({ title, date = Date.now() }) {
        this.title = title
        this.date = date
    }
}

export default class TodoStore {
    @observable todos = []

    @computed get completedTodosCount() {
        return this.todos.filter(todo => todo.completed).length
    }

    report() {
        return {
            total: this.todos.length,
            next: this.todos[0],
            completed: this.completedTodosCount
        } 
    }

    addTodo({ title }) {
        this.todos.push({
            title,
            assignee: null,
            completed: false
        })
    }

    editTodo({ title }, i) {
        this.todos[i].title = title
    }
}
