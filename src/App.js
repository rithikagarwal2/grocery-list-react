import React, { useState } from 'react'
import Table from './Table';

function App() {
  const [list,setlist]= useState([]);
  const [item,setItemName]= useState("");
  const [qty,setItemQty]= useState(0);
  
  //Editing value
  const edit=()=>{
    
    var found= list.find((element)=>{
       return element[0]==item;
    })
   if(found==undefined){
     alert("Enter-correct Item name to edit");
   }
   else{
    if(parseInt(qty)<=0){
      alert("Please Enter valid Quantity");
    }
    else{
    for(var i=0;i<list.length;i++){
        if(list[i][0]==item){
          list[i][1]= parseInt(qty);
        }
    }
    setlist((oldlist)=>{
      return oldlist.filter((element,idx)=>{
        return idx!==-1;
      })
    });
  }
   }
   

  }

  //setting Item name
  const settingName=(e)=>{
     setItemName(e.target.value);
  }

  //Setting Quantity
  const settingQuantity= (e)=>{
    setItemQty(e.target.value);
  }

 //Adding Values to list
  const add =()=>{
    var insert=false;
    var found= list.find((element)=>{
       return element[0]==item;
    })
   if(found===undefined){
     insert = true;
   }

   if(!insert){
     if(parseInt(qty)<=0){
       alert("Please Enter valid Quantity");
     }
     else{
     console.log(list.length);
    for(var i=0;i<list.length;i++){
      if(list[i][0]==item){
        var temp= parseInt(list[i][1]);
        temp+=parseInt(qty);
        list[i][1]=temp;
      }
    }
    setlist((oldlist)=>{
      return oldlist.filter((element,idx)=>{
        return idx!==-1;
      })
    });
  }
   }
   else{
    if(parseInt(qty)<=0){
      alert("Please Enter valid Quantity");
    }
    else{
    setlist((oldlist)=>{
      return [...oldlist,[item,qty]];
    });
  }
  }
    console.log(list);
  }

  //Deleting values from list

  const Delete= (id)=>{
      
   
    
    setlist((oldlist)=>{
      return oldlist.filter((element,idx)=>{
        return idx!==id;
      })
    });
  
  }

  //Setting input fields
  const setinput= (id)=>{
    var itemname,qnt;
    
    list.forEach((element,idx)=>{
        if(idx==id){
          itemname= element[0];
          qnt=element[1];
        }
    });
    
  setItemQty(qnt);
  setItemName(itemname);
  

  }

  return (
    <>
     <div className="container">
      <div className="tab tab-2" id="maindiv">
        <div id="inner-div">
          <h1>Add Items</h1>
          Item:<input type="text" name="item" id="item" onChange={settingName} value={item}/>

          Quantity:<input type="number" name="qty" id="qty" onChange={settingQuantity} value={qty} />

          <button id="add" onClick={add}>
            Add
          </button>
          <button id="edit" onClick={edit}>
            Edit
          </button>
        </div>
      </div>
      <div className="tab tab-1">
        <h1 id="title">Grocery-List</h1>
        <table id="table" border="1">
          <tr>
            <th className="tc">Item</th>

            <th className="tc">quantity</th>
            <th className="tc">Edit</th>
            <th className="tc">Delete</th>
          </tr>
          {list.map((element,id)=>{
            return(
            <Table
            key={id}
            index={id}
            item={element}
            onSelect={Delete}
            onSelect2={setinput}
            />
            );
          })}
        </table>
      </div>
    </div>
    </>
  );
}

export default App;
