import React from 'react';
import TaskForm from './TaskForm';
import Manager from './Manager';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            task: [],
            name: '',
            status: '',
            onChangeSearchBar: '',
            onChangeStatus: -1,
            onResetSort: false,
            TaskFormisDisplay: false,
        }
    }

    componentDidMount() {
        if (localStorage && localStorage.getItem('task'))
            this.setState({
                task: JSON.parse(localStorage.getItem('task'))
            })
        else {
            localStorage.setItem('task', JSON.stringify(this.state.task))
        }
    }

    onBlur = (event) => {
        if (event.target.name === "username") this.setState({ name: event.target.value });
        else this.setState({
            status: event.target.value ? 1 : 0
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        var { name, status } = this.state;
        var newTask = JSON.parse(localStorage.getItem('task'));
        var taskPush = {
            name: name,
            status: status
        };
        newTask.unshift(taskPush);
        this.setState({
            task: newTask,
            status: ''
        })
        localStorage.setItem('task', JSON.stringify(newTask))
        event.target.reset()
    }
    onDisplayTaskForm = () => {
        this.setState({
            TaskFormisDisplay: !this.state.TaskFormisDisplay
        })
    }

    onChangeStatus = (event) => {
        this.setState({
            onChangeStatus: Number(event.target.value)
        })
    }

    onChangeSearchBar = (event) => {
        this.setState({
            onChangeSearchBar: event.target.value
        })
    }

    onDelete = (stt) => {
        var { task } = this.state;
        this.setState({
            task: task.splice(stt, 1)
        })
        if (task.length === 0) localStorage.setItem('task', JSON.stringify(task))
        else localStorage.setItem('task', JSON.stringify(task));
        this.setState({
            task: task
        })
    }
    onEdit = (valueName, valueStatus, stt) => {
        var taskMap = this.state.task;
        if (valueName !== "") taskMap[stt].name = valueName;
        taskMap[stt].status = Number(valueStatus);
        this.setState({
            task: taskMap
        })
        localStorage.setItem('task', JSON.stringify(taskMap))
    }

    onSort = (value) => {
        var taskSort = this.state.task;
        if (value === 0) {
            this.setState({
                task: JSON.parse(localStorage.getItem('task'))
            })
        }
        else {
            if (value === 1) {
                taskSort.sort((a, b) => {
                    if (a.name > b.name) return value;
                    else if (a.name < b.name) return -value;
                    else return 0;
                })
            }
            else {
                taskSort.sort((a, b) => {
                    if (a.name > b.name) return value;
                    else if (a.name < b.name) return -value;
                    else return 0;
                })
            }
            this.setState({
                task: taskSort
            })
        }
    }
    onResetSort = () => {
        if(this.state.name!==""&&this.state.status!=="") {
            this.setState({
                onResetSort: true
            })
        }
    }
    setFalse = () => {
        this.setState({
            onResetSort: false
        })
    }

    render() {
        var { TaskFormisDisplay, task, onChangeSearchBar, onChangeStatus, onResetSort } = this.state;
        var filtered = task.filter((value, i) => {
            return task[i].name.toLowerCase().includes(onChangeSearchBar.toLowerCase())
        })
        if (onChangeStatus !== -1) {
            filtered = filtered.filter((value, i) => {
                return task[i].status === onChangeStatus
            })
        }
        var displayTaskForm = this.state.TaskFormisDisplay ?
            <TaskForm
                onDisplayTaskForm={this.onDisplayTaskForm}
                onBlur={this.onBlur}
                onSubmit={this.onSubmit}
                onResetSort = {this.onResetSort}
            /> : '';
        return (
            <div>
                <p className='text-center' style={{ fontSize: '45px' }}>WORKS TO DO</p>
                {displayTaskForm}
                <Manager
                    onDisplay={this.onDisplayTaskForm}
                    displaying={TaskFormisDisplay}
                    task={filtered}
                    onChangeStatus={this.onChangeStatus}
                    onChangeSearchBar={this.onChangeSearchBar}
                    onDelete={this.onDelete}
                    onEdit={this.onEdit}
                    onSort = {this.onSort}
                    onResetSort = {onResetSort}
                    setFalse = {this.setFalse}
                />
            </div>
        )
    }
}
export default App;