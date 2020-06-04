import React from 'react';

class Sort extends React.Component {
    constructor() {
        super()
        this.state = {
            sortValue: 0
        }
    }
    onSort = (value) => {
        this.props.onSort(value)
        this.setState({
            sortValue: value
        })
    }
    setFalse = () => {
        this.setState({
            sortValue: 0
        })
        this.props.setFalse();
    }
    render() {
        var {sortValue} = this.state;
        var addClassNormal = "fa fa-sort-alpha-asc pr-5";
        var addClassSelected = "fa fa-sort-alpha-asc pr-5 selected";
        if (this.props.onResetSort) this.setFalse();
        return (
            <div className="dropdown" style={{display:'inline-block'}}>
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort<span className="fa fa-caret-square-o-down ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                        <a role="button" href='#sortedas' onClick={ () => this.onSort(0)}>
                            <span className={sortValue===0?addClassSelected:addClassNormal}>Default</span>
                        </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li>
                        <a role="button" href='#sortedas' onClick={ () => this.onSort(1)}>
                            <span className={sortValue===1?addClassSelected:addClassNormal}>name: A to Z</span>
                        </a>
                    </li>
                    <li>
                        <a role="button" href='#sorteddes' onClick={ () => this.onSort(-1)}>
                            <span className={sortValue===-1?addClassSelected:addClassNormal}>name: Z to A</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Sort;