import {getPokemon} from "./API";
import App from "./App";
import {render} from "@testing-library/react";
import renderer from 'react-test-renderer';

test('eevee should match snapshot', async () => {
  const eevee = await getPokemon('charizard');
  expect(eevee).toMatchSnapshot();
})

test('react component snapshot', () => {
  const output = render(<App />);
  expect(output).toMatchSnapshot();
})

test('react component snapshot HTML', () => {
  const output = renderer.create(<App />).toJSON();
  expect(output).toMatchSnapshot();
})
