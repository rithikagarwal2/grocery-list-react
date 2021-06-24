import React from 'react';

const Table =(props)=>{
    return(
    <>
    <tr>
        <td>{props.item[0]}</td>
        <td>{props.item[1]}</td>
        <td><button id="edit_btn" onClick={()=>{
            props.onSelect2(props.index);
        }}>edit</button></td>
        <td><button id="del_btn" onClick={()=>{
            props.onSelect(props.index);
        }}> Delete</button></td>

    </tr>
    </>
    );
}
export default Table;