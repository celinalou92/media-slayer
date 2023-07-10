import Author from "@/app/components/Author";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";;

describe("Author", () => {
    it("should render Author section", () => {
        render(
            <Author
            prop={"test author text"}
            />
        )
        expect(screen.getByTestId("Author")).toHaveTextContent("test author text");
    });

});