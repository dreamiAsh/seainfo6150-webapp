import React from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {
  it("renders correctly", () => {
    const article = {"title": "a", "displayDate": "b", "shortText": "c"};
    const { container } = render(<ArticleListItem article={article}/>);
    expect(container).toMatchSnapshot();
  });
});