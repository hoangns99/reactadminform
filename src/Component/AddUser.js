import React, { useState } from 'react';

function AddUser(props) {
    const [dulieuthem, setDulieuthem] = useState({ id: '', name: '', phone: '', role: '' });
    const isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDulieuthem({ ...dulieuthem, [name]: value });
    }

    const checkStt = () => {
        if (props.displayForm === true) {
            return (
                <div className="col">
                    <form>
                        <div className="card border-primary mb-3 mt-2">
                            <div className="card-header">Thêm mới user</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" placeholder="Tên user" onChange={(event) => isChange(event)} />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="phone" className="form-control" placeholder="Điện thoại" onChange={(event) => isChange(event)} />
                                </div>
                                <div className="form-group">
                                    <select name="role" className="custom-select" onChange={(event) => isChange(event)} required>
                                        <option value>Chọn quyền mặc định </option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Mod</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary" onClick={(name, phone, role) => props.addProps(dulieuthem.name, dulieuthem.phone, dulieuthem.role)} value="Thêm mới" />
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            )
        }
    }

    return (

        <div>
            {checkStt()}
        </div>



    );



}

export default AddUser;