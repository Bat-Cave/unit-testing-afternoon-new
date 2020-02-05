import React from 'react';
import { render } from '@testing-library/react';
import PostWidget from '../components/PostWidget';
import { MemoryRouter } from 'react-router-dom';
import { shortenText } from '../utils/functions';
import { posts } from '../_tests_/_data_/testData';

const longPost = posts[0];
const post = posts[1];

// The first test can be very basic and should just check that PostWidget actually renders out the post that is passed to it. Create an it block and then render out PostWidget passing through the destructured post object. Destructure container from the returned result of invoking render. Then assert about the container's inner text content that it should contain post's text value.

it('Renders out a Post', () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget {...post} />
    </MemoryRouter>,
  );
  expect(container.textContent).toContain(post.text);
});

// This next test should check if passing through longPost will shorten the displayed text by default. Render out PostWidget passing through longPost and destructure container from the result of invoking render. The assertion for this test should check if the text content of container matches the result of running shortenText on longPost.text.

it('Shortens display text when expanded is false', () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget {...longPost} />
    </MemoryRouter>,
  );
  expect(container.textContent).toContain(shortenText(longPost.text));
});


// Let's write a test that checks if passing through the longPost to PostWidget but passing an extended prop will display all the text of the post. Follow the steps for the first two tests except on this one the assertion should pass through expanded={true} to the PostWidget. Then the assertion should check if the inner text content matches the text of the longPost.

it('Displays all text when expanded is true', () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget expanded={true} {...longPost} />
    </MemoryRouter>,
  );

  expect(container.textContent).toContain(longPost.text);
});