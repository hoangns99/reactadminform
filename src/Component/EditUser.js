import React from 'react';
import { useState } from 'react/cjs/react.development';

function EditUser(props) {

    const [dulieuSua, setDulieuSua] = useState({
        id: props.editUserInfoSearchProps.id,
        name: props.editUserInfoSearchProps.name,
        phone: props.editUserInfoSearchProps.phone,
        role: props.editUserInfoSearchProps.role
    });
    const isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDulieuSua({ ...dulieuSua, [name]: value });
    }

    const handleSaveBtn = () => {
        var info = {};
        info.id = dulieuSua.id;
        info.name = dulieuSua.name;
        info.phone = dulieuSua.phone;
        info.role = dulieuSua.role;
        props.getEditUserInfoProps(info);
        props.changeEditUserSttSaveProps();
    }

    console.log(dulieuSua);
    return (
        <div className="row">
            <div className="col">
                <form>
                    <div className="card border-primary mb-3 mt-2">
                        <div className="card-header text-center">Sửa thông tin User</div>
                        <div className="card-body">
                            <div className="form-group">
                                <input onChange={(event) => isChange(event)} defaultValue={props.editUserInfoSearchProps.name} type="text" name="name" className="form-control" placeholder="Tên user" />
                            </div>
                            <div className="form-group">
                                <input onChange={(event) => isChange(event)} defaultValue={props.editUserInfoSearchProps.phone} type="text" name="phone" className="form-control" placeholder="Điện thoại" />
                            </div>
                            <div className="form-group">
                                <select onChange={(event) => isChange(event)} defaultValue={props.editUserInfoSearchProps.role} name="role" className="custom-select" required>
                                    <option value>Chọn quyền mặc định </option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Mod</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input onClick={() => handleSaveBtn()} type="button" className="btn btn-block btn-success" value="Lưu" />
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default EditUser;