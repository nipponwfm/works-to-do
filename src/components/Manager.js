import React from 'react';
import ListItem from './ListItem';
import Sort from './Sort';

class Manager extends React.Component {
    render() {
        var { displaying, onDisplay, task, onChangeStatus, onChangeSearchBar, onDelete, onEdit, onSort, onResetSort, setFalse } = this.props;
        return (
            <div className={ displaying ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
                <button type="button" className="btn btn-primary" style={{margin:'0px 20px 20px 0px',float:'left'}} onClick={onDisplay}>
                    <span className="fa fa-plus"></span>{displaying ? 'Hide form' : 'Show form'}
                </button>
                <Sort onSort={onSort} onResetSort={onResetSort} setFalse= {setFalse}/>
                <ListItem 
                    task = {task} 
                    onChangeStatus = {onChangeStatus} 
                    onChangeSearchBar={onChangeSearchBar}
                    onDelete = {onDelete}
                    onEdit = {onEdit}
                />
            </div>
        )
    }
}

export default Manager;