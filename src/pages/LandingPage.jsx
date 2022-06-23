import React, { useState } from "react";
import InputWithButton from "../components/InputWithButton";
import { ReactComponent as AccentDesign } from "../assets/accent.svg";
import { StyledLandingPage, StyledList } from "./style";
import { generateKey } from "../utils";

const LandingPage = () => {
  const [textList, setTextList] = useState([]);
  const [text, setText] = useState("");

  // can directly put setText(value) to onChange of input but this function is more reusable in the future if in case we want to add more actions to it
  const handleTextInputChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  // this is an example of doing multiple actions to an event
  const handleAddButtonClick = (e) => {
    e.preventDefault();

    // instead of using index for the key / id, I created a function that generates a unique key
    const newText = {
      id: generateKey(text),
      content: text,
    };
    const newTextList = [...textList, newText];
    setTextList(newTextList);
    setText("");
  };

  // if I used the index here, I can remove the item using splice(index, 1) but since I assigned a key to each item, I filtered the array instead
  const handleListItemClick = (id) => {
    const newTextList = textList.filter((item) => item.id !== id);
    setTextList(newTextList);
  };

  return (
    <StyledLandingPage>
      <AccentDesign className="accent-design" />
      <div className="content">
        <section>
          <h1>CodingChiefs Challenge</h1>
          <p>
            <b>Instructions: </b>In this challenge, the developer has to create
            an input field with a button. When the button is clicked, the text
            in the input field should be added below in a list. Moreover,
            whenever any list item is clicked, it should be removed from the
            list.
          </p>
        </section>

        <section>
          <InputWithButton
            type="text"
            placeholder="Enter Text..."
            value={text}
            onChange={handleTextInputChange}
            onSubmit={handleAddButtonClick}
            buttonText="Add"
          />
        </section>

        {textList.length > 0 ? (
          <StyledList>
            {textList.map(({ id, content }) => {
              return (
                <div
                  // I added a tooltip here to somehow let the user know on what would happen if they click the item
                  title="Click to remove item from the list."
                  className="slide-in-right"
                  key={id}
                  onClick={() => handleListItemClick(id)}
                >
                  {content}
                </div>
              );
            })}
          </StyledList>
        ) : (
          <span className="light-text">List is Empty.</span>
        )}

        <div className="author light-text">
          Developed by:{" "}
          <a href="https://github.com/adrn1216/codingchiefs-challenge">
            Louis Adrian Reyes
          </a>
        </div>
      </div>
    </StyledLandingPage>
  );
};

export default LandingPage;
