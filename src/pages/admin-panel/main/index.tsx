import {Link} from "react-router-dom";

const AdminPanelMain = () => {
    return (
        <div>
            <p style={{textAlign: "center", fontSize: '17pt'}}>Панель администратора</p>

            <div style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
                <p style={{fontSize: '14pt'}}>Продукты:</p>
                <Link to={'add-product'}>
                    <button className={'CartBtn'}>Добавить продукт</button>
                </Link>
                <Link to={'remove-product'}>
                    <button style={{marginTop: '2%'}} className={'CartBtn'}>Удалить продукт</button>
                </Link>
                <Link to={'edit-product'}>
                    <button style={{marginTop: '2%'}} className={'CartBtn'}>Редактировать продукт</button>
                </Link>
                <p style={{fontSize: '14pt'}}>Отызывы:</p>
                <Link to={'remove-review'}>
                    <button style={{marginTop: '2%'}} className={'CartBtn'}>Удалить отзыв</button>
                </Link>
            </div>
        </div>
    );
};

export default AdminPanelMain;
