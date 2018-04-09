# Starter kit for a react component library

The problem: Create a library of components (for react)

You can take the code, and just create your own components inside the components directory.

When you add your library to another react app: `import { yourReusableComponts } from 'your-lib/lib`

Inspired by this [medium](https://medium.com/@efreyreg/create-react-component-libraries-with-storybook-and-styled-jsx-8999f423f06b) blog

Background story: My current gig has a few React apps and it's become evident that there could be some reusable components shared between the applications. We also want to use [Storybook](https://storybook.js.org/), which looks like an interesting tool for checking components in isolation.

I initially thought this wouldn't work with Create-React-App.  I didn't need to build an app, I needed to make available components that could be imported into another app. So I googled around for a while, made some progress, figured out how to run babel so it creates a directory with a componet that I could add into another git repository. But when I tried to add Storybook, storybook would crash.

So I tried doing this with CRA, and after a while I figured out the pieces that I needed to change: The build script in package.json so that it uses the babel-cli.

This is probably overkill for a library, but to get Storybook to work with the least amount of effort, it seems to work. This is good for other reasons because it adds other stuff, like Jest is configured, and updating should be easy.
