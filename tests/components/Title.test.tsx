import Title from "@/app/components/Title";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";;

describe("Title", () => {
    it("should render Title section", () => {
        render(
            <Title
            prop={"test title text"}
            />
        )
        expect(screen.getByTestId("Title")).toHaveTextContent("test title text");
    });

});