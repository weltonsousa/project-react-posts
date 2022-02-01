import { render } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;


describe('<PostCard />', () => {
    test('Should render PostCard correctly', () => {
        const {debug} = render(<PostCard {...props} />);

        debug();
    });
});