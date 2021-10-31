import React from 'react';
import { useState } from 'react/cjs/react.development';
import EditUser from './EditUser';

function Search(props) {
    const [textValue, settextValue] = useState('');
    const [userObj, setUserObj] = useState({});
    const isChange = (event) => {

        settextValue(event.target.value);
        props.getTextSearchProps(textValue);
    }

    const displayEditForm = () => {
        if (props.editUserSttProps === true) {
            return <EditUser
                getEditUserInfoProps={(info) => getEditUserInfo(info)}
                editUserInfoSearchProps={props.editUserInfoProps}
                changeEditUserSttSaveProps={() => props.changeEditUserSttProps()}
            />
        }
    }
    const getEditUserInfo = (info) => {
        setUserObj(info);
        props.getEditUserInfoAppProps(info);

    }
    const displayBtn = () => {
        if (props.displayForm === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => props.connect()} > Đóng</div>
        }
        else {
            return <div className="btn btn-block btn-outline-info" onClick={() => props.connect()}  > Thêm mới</div>
        }
    }

    return (
        <div className="col-12">
            {displayEditForm()}
            <div className="form-group">
                <div className="btn-group">
                    <input type="text" className="form-control" placeholder=" Nhập từ khoá" style={{ width: '610px' }} onChange={(event) => isChange(event)} />
                    <div className="btn btn-info" onClick={(textSearch) => props.getTextSearchProps(textValue)}> Tìm </div>

                </div>
            </div>

            <div className="col-3">
                {displayBtn()}

            </div>

            <hr />

        </div>

    );
}

export default Search;