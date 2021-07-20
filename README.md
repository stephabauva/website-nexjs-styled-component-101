Really simple, basic layout of a responsive website with navbar, footer, about and contact page.
The doc for more details 👉 https://nextjs.org/learn/basics/create-nextjs-app/setup

## To run the app:

```
npm run dev
```

For the setup:

```
npx create-next-app web-next-styled-101
npm install --save styled-components
```

## Setup to use styled-components with Next.js:

(from https://github.com/vercel/next.js/tree/canary/examples/with-styled-components)

```
npm install --save babel-plugin-styled-components
```

- add a \_document.js file into your pages/ folder
- copy the content of https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.js
- paste it in your \_documents.js file
- at the root directory, adda a .babelrc file
- copy the content of https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/.babelrc
- paste it in your .babelrc file

Since we use styled-components, we don't need the jsx style, you can delete the style import and the <div className={styles.container}> tag from index.js, as well as the Home.module.css file from the styles/ folder.

Original author:
briancodex
full video: https://www.youtube.com/watch?v=LyEc2fGCR90
