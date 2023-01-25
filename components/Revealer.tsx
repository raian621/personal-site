import React, { Dispatch, SetStateAction, useState } from "react"

const Revealer = ({ children, setVisible } : { 
  children:React.ReactElement,
  setVisible:Dispatch<SetStateAction<boolean>>
}) => {
  const [clicked, setClicked] = useState(false)

  return (
    <>
      { React.cloneElement(children, { 
          onClick: () => {
            setClicked(!clicked);
          },
          onMouseEnter: () => setVisible(clicked || true),
          onMouseLeave: () => setVisible(clicked || false) 
      })}
    </>
  );
}

export default Revealer