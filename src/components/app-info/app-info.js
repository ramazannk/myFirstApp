
import './app-info.css';

const AppInfo = ({employees, increaset})=>{
    return(
        <div className="app-info">
            <h1>Учеть сщтрудники в компании Н</h1>
            <h2>Общая число сотрудники: {employees}</h2>
            <h2>премиум получет: {increaset} </h2>
        </div>
    );
}

export default AppInfo;