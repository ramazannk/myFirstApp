import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelet,onToggelIncrease, onToggelStart}) => {
    const elements = data.map((item)=>{
        const {id , ...itemProps} = item;
        return (
            <EmployeesListItem key={id} {...itemProps}
            onDelet={()=>onDelet(id)}
            onToggelIncrease={()=>onToggelIncrease(id)}
            onToggelStart={()=>onToggelStart(id)}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
    
}

export default EmployeesList;