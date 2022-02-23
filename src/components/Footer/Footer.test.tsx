import { fireEvent, render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

const OLD_OPEN = global.open;

beforeEach(() => {
  global.open = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
  global.open = OLD_OPEN;
});

describe("Footer", () => {
  it("renders the Footer component correctly.", () => {
    render(<Footer />);

    const footerContactInfo = screen.getByTestId("footer-contact");
    const footerAddress = screen.getByTestId("footer-contact-address");
    const footerEmail = screen.getByTestId("footer-contact-email");
    const footerTelephone = screen.getByTestId("footer-contact-telephone");
    const footerAuthorInfo = screen.getByTestId("footer-author");
    const footerTitle = screen.getByTestId("footer-author-title");
    const footerGitHubBtn = screen.getByTestId("icon-btn-footer-github");
    const footerLinkedInBtn = screen.getByTestId("icon-btn-footer-linkedin");

    expect(footerContactInfo).toBeDefined();
    expect(footerAddress.textContent).toEqual("37 Oakwood Gardens, Halifax, HX28HB");
    expect(footerEmail.textContent).toEqual("joshuagardiner@live.com");
    expect(footerTelephone.textContent).toEqual("+44 7947 633 294");
    expect(footerAuthorInfo).toBeDefined();
    expect(footerTitle.textContent).toEqual("Joshua Gardiner, 2022");
    expect(footerGitHubBtn).toBeDefined();
    expect(footerLinkedInBtn).toBeDefined();
  });

  it("should open a new tab when clicking the GitHub IconButton.", () => {
    render(<Footer />);

    const navigationGitHubBtn = screen.getByTestId("icon-btn-footer-github");
    fireEvent.click(navigationGitHubBtn);

    expect(global.open).toHaveBeenCalledWith("https://github.com/joshuagardiner", "_blank");
  });

  it("should open a new tab when clicking the LinkedIn IconButton.", () => {
    render(<Footer />);

    const navigationLinkedInBtn = screen.getByTestId("icon-btn-footer-linkedin");
    fireEvent.click(navigationLinkedInBtn);

    expect(global.open).toHaveBeenCalledWith(
      "https://www.linkedin.com/in/joshua-gardiner",
      "_blank"
    );
  });
});
