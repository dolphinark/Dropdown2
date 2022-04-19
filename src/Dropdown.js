import { useState } from "react";

function Dropdown(props) {
  // 原作者使用 function Dropdown({ selected, setSelected }) 
  const [isActive, setIsActive] = useState(false);
  const options = ["React", "Vue", "Angular"];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {props.selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div
              className="dropdown-item"
              key={index}
              onClick={(e) => {
                props.setSelected(e.target.textContent);
                // ↑原作者改使用 setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
