import PlayerButton from "@/app/components/PlayerButton";
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";;

describe("PlayerButton", () => {
    it("should renders a PlayerButton", () => {
        render(
            <PlayerButton
                prop={""}
                play={false}
                playerState={""}
                setPlayerState={""}
                setPlay={""}
            />
        )
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should display text passed as a prop", () => {
        render(
            <PlayerButton
                prop={"test text"}
                play={false}
                playerState={""}
                setPlayerState={""}
                setPlay={""}
            />
        )

        expect(screen.getByRole("button")).toHaveTextContent("test text");
    });

    it("should update play state when Play/Pause is the the prop", () => {
        const mockSetPlayerState = jest.fn().mockImplementation((playerState) => playerState);
        
        const mockSetPlay = jest.fn().mockImplementation((play) => !play);
        const playProp = true
        const playStateProp = ""
        render(
            <PlayerButton
                prop={"Pause/Play"}
                play={playProp}
                playerState={playStateProp}
                setPlayerState={mockSetPlayerState}
                setPlay={mockSetPlay}
            />
        )

        act(() => fireEvent.click(screen.getByRole("button")))
        expect(playProp).toBeTruthy();
        expect(playStateProp).toBe("");

    });

});