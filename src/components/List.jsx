

export default function List({names}){
    return (
        <ul>
        {names.map((name)=>{
            return(
                <li className="listItem" key={name}>
                    {name}
                </li>
            )
        })}
        </ul>
    )
}