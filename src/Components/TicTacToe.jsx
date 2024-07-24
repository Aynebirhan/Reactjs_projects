import React, { useRef, useState } from "react";
import Cross from "../assets/cross.png";
import Circle from "../assets/circle.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [counter, setCounter] = useState(0);
  let [lock, setLock] = useState(false);
  let title = useRef(null);
  let box0 = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);

  let box_array = [box0, box1, box2, box3, box4, box5, box6, box7, box8];

  const handleToggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (counter % 2 === 0) {
      e.target.innerHTML = `<img src=${Cross}>`;
      data[num] = "x";
      setCounter(++counter);
    } else {
      e.target.innerHTML = `<img src=${Circle}>`;
      data[num] = "o";
      setCounter(++counter);
    }
    console.log(counter);
    check();
  };

  const check = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      winner(data[2]);
    }
    if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      winner(data[5]);
    }
    if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      winner(data[8]);
    }
    if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      winner(data[6]);
    }
    if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      winner(data[7]);
    }
    if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      winner(data[8]);
    }
    if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      winner(data[8]);
    }
    if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      winner(data[6]);
    }
  };

  const winner = (win) => {
    setLock(true);
    if (win === "x") {
      title.current.innerHTML = `<img width="40px" height="40px" src=${Cross}>`;
    } else {
      title.current.innerHTML = `<img width="40px" height="40px" src=${Circle}>`;
    }
  };

  const reset = () => {
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
    data = ["", "", "", "", "", "", "", "", ""];
    title.current.innerHTML = ``;
    setLock(false);
  };

  return (
    <div className=" bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 h-screen">
      <div className="flex flex-col items-center ">
        <h1 className="text-4xl font-bold mt-9 text-gray-800">
          Tic Tac Toe Game
        </h1>
        {lock && <h2 className="text-2xl font-bold mt-5">Winner is</h2>}
        <p className="text-2xl inline-block" ref={title}></p>
        <div className="flex mt-10">
          <div className="cols">
            <div
              ref={box0}
              onClick={(e) => handleToggle(e, 0)}
              className="bg-gray-800 h-20 w-20 rounded-md mx-2 my-1 flex cursor-pointer "
            ></div>
            <div
              ref={box1}
              onClick={(e) => handleToggle(e, 1)}
              className="bg-gray-800 h-20 w-20 rounded-md mx-2 my-1 flex cursor-pointer "
            ></div>
            <div
              ref={box2}
              onClick={(e) => handleToggle(e, 2)}
              className="bg-gray-800 h-20 w-20 rounded-md mx-2 my-1 flex cursor-pointer "
            ></div>
          </div>
          <div className="cols">
            <div
              ref={box3}
              onClick={(e) => handleToggle(e, 3)}
              className="bg-gray-800 h-20 w-20 rounded-md mx-2 my-1 flex cursor-pointer "
            ></div>
            <div
              ref={box4}
              onClick={(e) => handleToggle(e, 4)}
              className="bg-gray-800 h-20 w-20 rounded-md mx-2 my-1 flex cursor-pointer "
            ></div>
            <div
              ref={box5}
              onClick={(e) => handleToggle(e, 5)}
              className="bg-gray-800 h-20 w-20 rounded-md mx-2 my-1 flex cursor-pointer "
            ></div>
          </div>
          <div className="cols">
            <div
              ref={box6}
              onClick={(e) => handleToggle(e, 6)}
              className="bg-gray-800 h-20 w-20 rounded-md mx-2 my-1 flex cursor-pointer "
            ></div>
            <div
              ref={box7}
              onClick={(e) => handleToggle(e, 7)}
              className="bg-gray-800 h-20 w-20 rounded-md mx-2 my-1 flex cursor-pointer "
            ></div>
            <div
              ref={box8}
              onClick={(e) => handleToggle(e, 8)}
              className="bg-gray-800 h-20 w-20 rounded-md mx-2 my-1 flex cursor-pointer "
            ></div>
          </div>
        </div>
        <button
          onClick={reset}
          className="mt-7 bg-green-800 rounded-md px-3 py-2 cursor-pointer text-white text-xl text-bold"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
