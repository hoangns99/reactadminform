
import { useEffect, useState } from 'react';
import '../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from './Data.json';

const { v4: uuidv4 } = require('uuid');

function App(props) {

  const [displayForm, setdisplayForm] = useState(false);
  const [data, setData] = useState([]);
  const [dulieuNhan, setDulieunhan] = useState('');
  const [editUserStt, setEditUserStt] = useState(false);
  const [editUserInfo, setEditUserInfo] = useState({});

  useEffect(() => {
    if (localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }
    else {
      var dulieuTam = JSON.parse(localStorage.getItem('userData'));
      setData(dulieuTam);
    }
    // handleGetDbLocal()
  }, [])

  // useEffect(() => {
  //   console.log(data, 222222)
  //   if (data.length > 0) {
  //     //console.log(typeof JSON.stringify(data))
  //     localStorage.setItem('userData', JSON.stringify(data));
  //   }
  // }, [data]) //depts
  // // cái useEffect này chạy khi depts có thay đổi nghĩa là localstogre lại setItem userData = data( kiểu của data đc binding thành kiểu string???? chú ý là kiểu string)
  // const handleGetDbLocal = async () => {
  //   try {
  //     //Anh cho 1 biến dat1 là localStorage.getItem('userData')

  //     let dat1 = await JSON.parse(localStorage.getItem('userData'))// Em dang de kieu stringfy nos doi thanh kieu string chu k phai array obj => em phair parse lai kieu arr obj thang function foreach moi hieu. 
  //     // cái này parse lại thành arr obj nên forEarch dc
  //     if (!dat1 || dat1.length < 1) {
  //       dat1 = DataUser;
  //       await localStorage.setItem('userData', dat1)
  //       //setData(DataUser);
  //     }
  //     setData(dat1)
  //     console.log(dat1)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const changeStt = () => {
    setdisplayForm(!displayForm)
  };
  console.log('data', data)

  const changeEditUserStt = () => {
    setEditUserStt(!editUserStt);
  }

  const getNewDataUser = (name, phone, role) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.phone = phone;
    item.role = role;
    setData([...data, item]);
    localStorage.setItem('userData', JSON.stringify(item));
  }




  const getTextSearch = (textSearch) => {
    setDulieunhan(textSearch);
  };

  var ketqua = [];

  data.forEach((item) => {

    if (item.name.indexOf(dulieuNhan) !== -1) {
      ketqua.push(item);
    }
    // localStorage.setItem('userData', JSON.parse(item));
  })
  // console.log(data.length, 111111)
  // if (data.length === 0) {
  //   ketqua = []
  // } else {
  //   console.log('data+++++', data)


  // }



  const editUser = (userInfo) => {

    setEditUserInfo(userInfo);

  }
  const getEditUserInfoApp = (info) => {
    data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.phone = info.phone;
        value.role = info.role;
      }
    })
    localStorage.setItem('userData', JSON.stringify(data));
  }

  const deleteUser = (id) => {

    var dulieuXoa = data.filter(item => item.id !== id);
    setData(dulieuXoa);
    localStorage.setItem('userData', JSON.stringify(dulieuXoa));
  };
  return (
    <div >
      <Header />
      <div className="searchForm ">
        <div className="container">
          <div className="row">
            <Search
              getEditUserInfoAppProps={(info) => getEditUserInfoApp(info)}
              connect={() => changeStt()}
              displayForm={displayForm}
              getTextSearchProps={(textSearch) => getTextSearch(textSearch)}
              editUserSttProps={editUserStt}
              changeEditUserSttProps={() => changeEditUserStt()}
              editUserInfoProps={editUserInfo}
            />
            <TableData deleteUserProps={(id) => deleteUser(id)} editProps={(userInfo) => editUser(userInfo)} dataUserProps={ketqua} changeEditUserSttProps={() => changeEditUserStt()} />
            <AddUser item addProps={(name, phone, role) => getNewDataUser(name, phone, role)} displayForm={displayForm} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
