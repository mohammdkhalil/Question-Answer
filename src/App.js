import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'react-bootstrap';
import FormInput from './Components/FormInput';
import QAList from './Components/QAList';
import {useState} from 'react';
import { question } from './data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const  [data, setData] = useState(question)
  //to add new item
  const addItem=()=>{
    localStorage.setItem("itemss",JSON.stringify([...question]))
    setData([...question])
    notify("تمت الإضافة بنجاح","Success")
  }
//to delete all item use button
  const deleteAllItems=()=>{
    localStorage.removeItem("itemss")
    question.splice(0,question.length)
    setData([])
    notify("تم حذف الكل بنجاح","Success")
  }
  //delete one item in list
  const deleteOneItem=(items)=>{
    localStorage.setItem("itemss",JSON.stringify([...items]))
    setData([...items])
    notify("تم حذف السؤال بنجاح","Success")
    if(items.length <=0){
      deleteAllItems();
    }
  }
  //to push notification
  const notify = (messege,type) => {
    if(type==="Error")
      toast.error(messege)
    else if(type==="Success")
      toast.success(messege)
  };

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
      <Row className="justify-content-center">
        <Col sm="4">
        <div className="fs-2 text-center py-2">أسئلة و أجوبة</div>
        </Col>
        <Col sm="8">
        <FormInput onAdd={addItem} notify={notify}/>
        <QAList data={data} deleteOneItem={deleteOneItem}/>
        {
          localStorage.getItem("itemss") != null ?(<button onClick={deleteAllItems} className="btn-color w-100 my-2"> مسح الكل</button>):null
        }
        
        </Col>
      </Row>
      <ToastContainer/>
      </Container>
    </div>
  );
}

export default App;
