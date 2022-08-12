import React from 'react';
import TestRenderer from 'react-test-renderer';
//import renderer from 'react-test-renderer';
import Intro from '../Intro';

test('rend correctement', () => {
  //const tree = renderer.create(<Intro />).toJSON();
  //expect(tree).toMatchSnapshot();
  const testRenderer = TestRenderer.create(
    <Link page="https://www.facebook.com/">Facebook</Link>
  );
  
  console.log(testRenderer.toJSON());
});