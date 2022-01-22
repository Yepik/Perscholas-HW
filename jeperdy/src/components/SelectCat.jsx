import React from "react";


export default function SelectCat(props){
    const handleOnChangeCat=event =>{
        props.setCategory({title:event.target.value,id:event.target.childNodes[event.target.selectedIndex].id});
        props.getNextData();
    }
    return(
        <div className="SelectCat">
            <h3 className="SelectCat white">Select random question from 1 out of ten random categories</h3>
            <select placeholder="Select a Category" className="select-category" onChange={handleOnChangeCat}>
                <option value="">-Select a Category-</option>
                {props.categories.map((category,index) =><option key={index} value={category.title} id={category.id}>{category.title}</option>)}
            </select>
        </div>
    )
}