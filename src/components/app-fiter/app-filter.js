
import './app-filter.css';



const AppFiter = (props)=>{
    const buttosData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'start', label: 'На повышение'},
        {name: 'ThenMore1000', label: 'З/П больше 1000$'},
    ]
    const buttons = buttosData.map(({name, label})=>{
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return(
            <button className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={()=>props.filterItem(name)}>
                    {label}
            </button>
        )
    })
    
    return(
        <div className="btn-group">
            {buttons}
        </div>
    );
    
}
export default AppFiter;