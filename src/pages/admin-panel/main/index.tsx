import React from 'react';
import {Link} from "react-router-dom";

const AdminPanelMain = () => {
    return (
        <div>
            <p style={{textAlign: "center", fontSize:'17pt'}}>Панель администратора</p>
            <div style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Link to={'add-product'}>
                    <button className={'CartBtn'}>Добавить продукт</button>
                </Link>
                <Link to={'remove-product'}>
                    <button style={{marginTop: '2%'}} className={'CartBtn'}>Удалить продукт</button>
                </Link>
                <Link to={'edit-product'}>
                    <button style={{marginTop: '2%'}} className={'CartBtn'}>Редактировать продукт</button>
                </Link>
            </div>
        </div>
    );
};

export default AdminPanelMain;
