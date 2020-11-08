import React from "react";
import ArticleList from "./ArticleList";
import { fireEvent } from "@testing-library/react";

describe("ArticleList tests", () => {
  it("renders correctly", () => {
    const list = [{"title": "a", "displayDate": "b", "shortText": "c"}];
    const { container } = render(<ArticleList list={list}/>);
    expect(container).toMatchSnapshot();
  });
});