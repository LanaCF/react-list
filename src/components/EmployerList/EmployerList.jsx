import { EmployerItem } from ".";
import "./EmployerList.css";

export const EmployerList = (props) => {
  const { data, delEmployer, editEmployer } = props;

  return (
    <ul className="employer-list">
      {
        data.map((item, index) => (
          <EmployerItem
            key={ item.id }
            item={ item } 
            index={ index }
            delEmployer={ delEmployer }
            editEmployer={ editEmployer }
          />
        ))
      }
    </ul>
  );
};