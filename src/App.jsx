import { useState } from "react";
import { AddForm } from "./components/AddForm";
import { EmployerList } from "./components/EmployerList";

const App = () => {
  const [empList, setEmpList] = useState([
    {id: 1, name: 'Ivan', surname: 'Ivanov', active: true},
    {id: 2, name: 'Petro', surname: 'Petrov', active: true},
    {id: 3, name: 'Mikola', surname: 'Mikolov', active: true},
    {id: 4, name: 'Taras', surname: 'Tarasov', active: true},
  ]);

  // const addEmployer = (employer) => {
  //   employer.id = getId(empList);
  //   setEmpList([...empList, employer]);    
  // }

  const addEmployer = (employer) => {
    employer.id = getId(empList);
    const updatedList = [...empList, employer];
    setEmpList(updatedList);
    console.log('New', updatedList); // Виведення нового масиву в консоль
  }

  const delEmployer = (id) => {
    setEmpList(prevEmpList => {
      const updatedEmpList = prevEmpList.filter(employer => employer.id !== id);
      console.log('Del', updatedEmpList);
      return updatedEmpList;
    });
  }

  const editEmployer = (editedEmployer) => {
    setEmpList(prevEmpList => {
      const updatedList = prevEmpList.map(employer => {
        if (employer.id === editedEmployer.id) {
          return editedEmployer;
        }
        return employer;
      });

      console.log('Edit', updatedList);

      return updatedList;
    });
  }

  return (
    <div className="container">
      <h1>Employer list app</h1>
      
      <div className="employer-list-app">

        <AddForm addEmployer={ addEmployer } />

        <div className="employer-list-block">

          <p className="employer-list-count">
            Employers count: <span>{ empList.length }</span>
          </p>

          <EmployerList 
            data={ empList } 
            delEmployer={ delEmployer } 
            editEmployer={ editEmployer }
          />

        </div>

      </div>
    </div>
  );
}

export default App;

function getId(dataArr) {
  const lastId = dataArr[dataArr.length - 1].id;
  return lastId + 1;
}

