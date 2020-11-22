import React from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {
  it("renders correctly", () => {
    const article = {"title": "a", 
                      "displayDate": "b", 
                      "shortText": "c", 
                      "image": {
                        "_url": "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg"
                      }};
    const { container } = render(<ArticleListItem article={article}/>);
    expect(container).toMatchSnapshot();
  });
});