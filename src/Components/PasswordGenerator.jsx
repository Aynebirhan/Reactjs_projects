import React, { useState } from "react";
import ReactSwitch from "react-switch";

const Password = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSpecialCharacter, setIncludeSpecialCharacter] = useState(true);

  const generatePassword = () => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "1234567890";
    const specialCharcter = "!@#$%^&*()?><";

    let validChar = lowerCase;

    if (includeUpperCase) {
      validChar += upperCase;
    }
    if (includeNumber) {
      validChar += number;
    }
    if (includeSpecialCharacter) {
      validChar += specialCharcter;
    }

    let generatePassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChar.length);
      generatePassword += validChar.charAt(randomIndex);
    }
    setPassword(generatePassword);
  };

  return (
    <div className=" bg-red-400 h-screen">
      <h1 className=" text-3xl font-bold text-center pt-7 text-black">
        Password Generator
      </h1>
      <div className="w-[400px] bg-indigo-500 p-5 flex flex-col mx-auto mt-7 rounded-md">
        <div className="flex justify-center mb-7">
          <label className="font-bold text-md text-white">
            Password Length
          </label>
          <input
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            type="number"
            className="w-10 ml-2 rounded-sm outline-none px-1"
          />
        </div>
        <div className="flex flex-row justify-between items-center mb-7">
          <label className="text-white font-bold text-md">
            Include Uppercase
          </label>
          <ReactSwitch
            checked={includeUpperCase}
            onChange={() => setIncludeUpperCase(!includeUpperCase)}
            className=""
            handleDiameter={18}
            height={20}
            width={40}
          />
        </div>
        <div className="flex flex-row justify-between items-center mb-7">
          <label className="text-white font-bold text-md">Include Number</label>
          <ReactSwitch
            checked={includeNumber}
            onChange={() => setIncludeNumber(!includeNumber)}
            className=""
            handleDiameter={18}
            height={20}
            width={40}
          />
        </div>
        <div className="flex flex-row justify-between items-center mb-7">
          <label className="text-white font-bold text-md">
            Include Special Character
          </label>
          <ReactSwitch
            checked={includeSpecialCharacter}
            onChange={() =>
              setIncludeSpecialCharacter(!includeSpecialCharacter)
            }
            className=""
            handleDiameter={18}
            height={20}
            width={40}
          />
        </div>
        <button
          onClick={generatePassword}
          type="button"
          className=" bg-green-400 px-3 py-2 rounded mx-auto"
        >
          Genarate Password
        </button>
        {password && (
          <p className="mx-auto font-bold text-md text-white mt-5">
            Generated Password:{" "}
            <span className="text-xl text-black font-bold">{password}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Password;
