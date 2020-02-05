import React from 'react';

const white = '#fff';
const black = '#000';
const red = '#f00';

const Provider = props => (
  <div>
    {props.children}
    <div
      css={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        margin: 16,
      }}
    >
      Scorum
    </div>
  </div>
);

export const theme = {
  Provider,
  googleFont: 'https://fonts.googleapis.com/css?family=Dosis:400,700',
  fonts: {
    body: '"Dosis", sans-serif',
  },
  colors: {
    text: black,
    background: white,
    primary: red,
  },
  styles: {
    root: {
      textAlign: 'left',
      fontSize: ['1.5em', null, '3em'],
    },
    Slide: {
      display: 'block',
      padding: '2em',
      textAlign: 'left',
    },
    Image: {
      maxHeight: '60vh',
      backgroundSize: 'contain',
    },
    ul: {
      listStyleType: 'none',
    },
    h1: {
      textAlign: 'center',
    },
    h2: {
      textAlign: 'center',
    },
    blockquote: {
      fontStyle: 'italic',
    },
  },
  fontWeights: {
    heading: 700,
    bold: 700,
  },
}
