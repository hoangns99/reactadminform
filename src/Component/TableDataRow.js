import React from 'react';

function TableDataRow(props) {
    const roleShow = () => {
        if (props.role === 1) { return "Admin" }
        else if (props.role === 2) { return "Mod" }
        else { return "Normal" }
    }
    const handleEditClick = () => {
        props.editClickProps();
        props.changeEditUserSttRowProps();
    }
    const handleDeleteClick = (id) => {
        props.deleteBtnProps(id);
    }

    return (
        <tr>
            <td >{props.stt + 1}</td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td> {roleShow()} </td>
            <td>
                <div className="btn-group">
                    <div className="btn btn-warning sua" onClick={() => handleEditClick()}><i className="fa fa-edit " /> Sửa</div>
                    <div className="btn btn-danger xoa" onClick={(id) => handleDeleteClick(props.id)} ><i className="fa fa-delete " /> Xoá</div>
                </div>
            </td>
        </tr >
    );
}

export default TableDataRow;