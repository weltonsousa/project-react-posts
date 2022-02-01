import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe('<Button />', () => {

    test('sould render the button with the text "Load more"', () => {

        render(<Button text="Load more" />);

        const button = screen.getByRole('button', {name: /load more/i});
        expect(button).toBeInTheDocument();
    });

    it('Should call function on button "Load more"', () => {
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn} />);

        const button = screen.getByRole('button', {name: /load more/i});
        
        //fireEvent.click(button);

        userEvent.click(button);
        
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('Should be disable when is true', () => {
        
        render(<Button text="Load more" disabled={true} />);

        const button = screen.getByRole('button', {name: /load more/i});
                   
        expect(button).toBeDisabled();
    });

    it('Should be disable when is disable', () => {
        
        render(<Button text="Load more" disabled={false} />);

        const button = screen.getByRole('button', {name: /load more/i});
                   
        expect(button).toBeEnabled();
    });


});