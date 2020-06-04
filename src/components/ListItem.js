import React from 'react';
import Item from './Item'

class ListItem extends React.Component {
    render() {
        var {task, onChangeStatus, onChangeSearchBar, onDelete, onEdit} = this.props;
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">Order</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Status</th>
                                <th className="text-center col-xs-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" onChange={onChangeSearchBar} />
                                </td>
                                <td>
                                    <select className="form-control changeAll" onChange={onChangeStatus}>
                                        <option value="-1">All</option>
                                        <option value="1">Normal</option>
                                        <option value="0">Important</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {
                                task.map( (value, i) => {
                                    return (
                                        <Item 
                                            key={i} 
                                            stt={i+1} 
                                            name={task[i].name} 
                                            status={task[i].status}
                                            onDelete = {onDelete}
                                            onEdit = {onEdit}
                                        />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListItem;