import React from "react";
import { Row, Accordion } from "react-bootstrap";
import { question } from "../data";

const QAList = ({ data,deleteOneItem }) => {
  const dataLocal=JSON.parse(localStorage.getItem("itemss")) 

  //to delete one item from array
  const oneDeleteItem=(ID)=>{
    if(localStorage.getItem("itemss") != null){
      const index = question.findIndex((item)=>item.id===ID)
      question.splice(index,1)
      deleteOneItem(question);
    }
  }
  return (
    <Row>
      <Accordion>
        { localStorage.getItem("itemss") != null ? (dataLocal.map((item,index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                  <div className="m-auto">{item.q}</div>
                </Accordion.Header>
                <Accordion.Body className="text-end">
                  <div className="px-3 d-inline">{item.a}</div>
                  <button onClick={()=> oneDeleteItem(item.id)} className="btn-color">مسح السؤال</button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (<h2 className="fs-4 text-center p-5">لا يوجد أسئلة</h2> )}
      </Accordion>
    </Row>
  );
};

export default QAList;
