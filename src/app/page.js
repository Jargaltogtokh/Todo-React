"use client";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const submitModal = () => {
    git;
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={openModal}>Add task</button>
      {isOpen && (
        <div
          style={{
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            alignContent: "center",
          }}
        >
          <div
            style={{
              height: 500,
              width: 800,
              backgroundColor: "white",
              borderRadius: 16,
              margin: "auto",
              padding: 48,
            }}
          >
            <button onClick={closeModal}>close</button>
            <input
              style={{
                width: 256,
                height: 56,
                border: "1px solid black",
                padding: 4,
              }}
              placeholder="task"
            ></input>
            <button onClick={submitModal}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}
