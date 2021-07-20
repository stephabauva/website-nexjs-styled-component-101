Really simple, basic layout of a responsive website with navbar, footer, about and contact page.
There are also a button on the homepage. It combines Material-UI and Styled-Components, it changes color as well as the "NEXT" text color.

Material-UI allows for faster and easier stylized web development.
Styled-Components makes your code more readable, understandable and offer useful tools like:

- variable injection via props
- style inheritance
- theming
  So what about we mix those two, ay! 👨‍🎨

As I am going to repeat Material-UI and styled-components a lot:
MU = Material-UI
SC = styled-components

## setup part 1: create app, install SC and MU:

The doc for more details 👉 https://nextjs.org/learn/basics/create-nextjs-app/setup

```
npx create-next-app web-next-styled-101
npm install --save styled-components
npm install @material-ui/core
```

## Setup part 2: to use styled-components with Next.js:

(from https://github.com/vercel/next.js/tree/canary/examples/with-styled-components)

```
npm install --save babel-plugin-styled-components
```

- add a \_document.js file into your pages/ folder
  If you just want to use SC or just MU:
- for SC, you need that document: https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.js
  and for MU, you need that document: https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js .
  But we want to use **BOTH** SC and MU so thanks to stackoverflow, by making a little adjustment we can merge the two: https://github.com/stephanBV/website-nexjs-styled-component-101/blob/master/web-next-styled-101/pages/_documents.js
- paste it in your \_documents.js file
- at the root directory, adda a .babelrc file
- copy the content of https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/.babelrc
- paste it in your .babelrc file

Since we use SC, we don't need the jsx style, you can delete the style import and the <div className={styles.container}> tag from index.js, as well as the Home.module.css file from the styles/ folder.

## Problem! -> Interoperability, the trick? - Controlling the priority 👮‍♀️

To be able to "overwrite" MU styling with our SC', we have two options:
1- we can change the CSS injection order
2- we can "use the && characters in SC to bump up specificity by repeating the class name"; which is what we are going to use here.
Hence, we add the '&&' characters to the SubmitFormButton component in SubmitButton.styles.js .
If you want to read more about it:
MU interoperability with SC: https://material-ui.com/guides/interoperability/#styled-components
How to use the '&&' characters: https://styled-components.com/docs/basics

## The Flow

For the button:

- We create a SC theme for the button -> ./styles/theme.js
- We import the theme in the SC file -> ./styles/SubmitButton.styles.js
- We pass the theme in the ternary operator for teh background color
- finally, we import the SC in index.js, return the Sc in the body, create a state with 0 and 1 for false and true, and pass the state as props to the SC.

For the homepage text:

- We create the SCs, with a ternary operator to change the text color-> ./styles/HomePage.styles.js
- We import then in index.js
- And we pass the state created previously, to the Heading component as props

## Run the app

from the root:

```
npm run dev
```

Articles related:
Styled Components vs CSS / SASS / CSS-In-JSX article: https://binyamin.medium.com/styled-components-vs-css-sass-css-in-jsx-c3c9268e8945 <br />
styled-components + Material-UI guide: https://material-ui.com/guides/interoperability/#styled-components <br />
Class Components vs Functional Components in React: https://dev.to/mehmehmehlol/class-components-vs-functional-components-in-react-4hd3 <br />

Original website author: Next.js + styled-components
briancodex
full video: https://www.youtube.com/watch?v=LyEc2fGCR90
