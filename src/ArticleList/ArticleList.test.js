import React from "react";
import ArticleList from "./ArticleList";
import { fireEvent } from "@testing-library/react";

describe("ArticleList tests", () => {
  it("renders correctly", () => {
    const list = [{"title": "a", 
                    "displayDate": "b", 
                    "shortText": "c", 
                    "image": {
                      "_url": "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg"
                    }}];
    const { container } = render(<ArticleList list={list}/>);
    expect(container).toMatchSnapshot();
  });
});