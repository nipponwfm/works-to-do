import React from 'react';

class Item extends React.Component {
    constructor () {
        super();
        this.state = {
            onEdit: false
        }
    }
    onDelete = () => {
        this.props.onDelete(this.props.stt-1)
    }
    onEdit = (event) => {
        if (this.state.onEdit) {
            this.props.onEdit(
                document.getElementsByClassName("valueInput")[0].value, 
                document.getElementsByClassName("valueInput")[1].value, 
                this.props.stt-1,
                )
        }
        this.setState({
            onEdit: !this.state.onEdit
        })

    }
    render() {
        var { stt, name, status } = this.props;
        var { onEdit } = this.state;
        var tagNameOnEdit = onEdit ? 
        <input className="valueInput" placeholder={name} style={{width:'100%', height:'33px'}}/> : 
        `${name}`;
        
        var tagStatusOnEdit = onEdit ? 
        <select className="form-control changeAll valueInput">
            <option value="1">Normal</option>
            <option value="0">Important</option>
        </select> : 
        <div>
            {status ? 
                <span className="label label-default">
                    Normal
                </span>
                : 
                <span className="label label-danger">
                    Important
                </span>
            }
        </div>

        return (
            <tr>
                <td className= "text-center">{stt}</td>
                <td>{tagNameOnEdit}</td>
                <td className="text-center">
                    {tagStatusOnEdit}
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onEdit}>
                        <span className="fa fa-pencil mr-5"></span>{onEdit?'Save':'Edit'}
                    </button>&nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5"></span>Delete
                    </button>&nbsp;
                </td>
            </tr>
        )
    }
}
export default Item;