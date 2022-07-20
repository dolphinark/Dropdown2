import { useEffect } from "react";
import { useState, useRef } from "react";

function Dropdown(props) {
  const [isActive, setIsActive] = useState(false);
  const options = ["React", "Vue", "Angular"];
  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="dropdown" ref={menuRef}>
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
                props.setSelected(option);
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
