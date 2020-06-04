import React from 'react';

class TaskForm extends React.Component {
    render() {
        var { onSubmit, onBlur, onDisplayTaskForm, onResetSort } = this.props;
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Add work</h3>
                    </div>
                    <div className="panel-body">
                        <form  onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Name :</label>
                                <input type="text" className="form-control" name="username" required onBlur = {onBlur}/>
                            </div>
                            <label>Status :</label>
                            <select className="form-control" name="status" required="required" onBlur = {onBlur}>
                                <option></option>
                                <option value="1">Normal</option>
                                <option value="">Important</option>
                            </select>
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning" style={{marginRight:'10px'}}
                                onClick={onResetSort}>Add</button>
                                <button type="submit" className="btn btn-danger"
                                    onClick = {onDisplayTaskForm}
                                >Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskForm;