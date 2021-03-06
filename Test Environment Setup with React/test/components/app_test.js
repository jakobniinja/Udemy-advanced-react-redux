import { renderComponent, expect } from " ../test_helper";
import App from "../../src/components/app";

describe("App", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it("shows a commebt box", () => {
    expect(component.find(".comment-box")).to.exist;
  });

  it("shows a comment list", () => {
    expect(component.find(".commment-list")).to.exist;
  });
});
