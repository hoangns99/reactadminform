import React from 'react';
import TableDataRow from './TableDataRow';

function TableData(props) {

    const deleteBtnClick = (id) => {
        props.deleteUserProps(id);
    }
    const mappingDataUser = () => props.dataUserProps.map((value, key) => (< TableDataRow
        deleteBtnProps={(id) => deleteBtnClick(id)}
        editClickProps={(infoUser) => props.editProps(value)}
        id={value.id}
        name={value.name}
        phone={value.phone}
        role={value.role}
        stt={key} key={key}
        changeEditUserSttRowProps={() => props.changeEditUserSttProps()}
    />))


    return (

        < div className="col" >
            <table table="true" className="table table-striped table-hover " >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {mappingDataUser()}


                </tbody>
            </table >
        </div>

    );
}

export default TableData;