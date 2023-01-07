# Theory Assignment:

● - What is `NPM`?

-> NPM is not stand for Node Package Module. npm to share and borrow packages. It is world's largest registry. The registry is nothing but large public database of JavaScript software and the meta information.

To initalize we use **npm init** and it creats package.json file. It manages our packages. To run our react app we need several helper package, so all these helper package come inside npm.

---

● - What is `Parcel/Webpack`? Why do we need it?

-> Parcel/webpack are bundlers. So bascially to bundle the code and dependency modules related to it together at one place.

---

● - What is `.parcel-cache`

-> The .parcel-cache stores information about project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's key reason why parcel can be so fast in development mode.

---

● - What is `npx` ?

-> npx is comes with npm and it is used to execute the packages.

---

● - What is difference between `dependencies` vs `devDependencies`

-> The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime.

---

● - What is Tree Shaking?

-> Tree Shaking is a term used in JavaScript context to descibe the removal of dead code. There are different module bundlers to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready with clean structure and minimal file size.

---

● - What is Hot Module Replacement?
-> As you make changes to your code, Parcel automatically rebuilds the changed files and updates your app in the browser. By default, Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR). HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things in your code.

---

● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.

-> Hot Module Replacement

Zero Config

Dev Server

Minification

Image optimization

Dev Server : Parcel’s builtin dev server is automatically started when you run the default parcel command, which is a shortcut for parcel serve. By default, it starts a server at http://localhost:1234. If port 1234 is already in use, then a fallback port will be used.

Minification : Parcel includes minifiers for JavaScript, CSS, HTML, and SVG. Minification reduces the file size of your output bundles by removing whitespace, renaming variables to shorter names, and many other optimizations.

By default, minification is enabled when using the parcel build command. You can use the --no-optimize CLI flag to disable minification and other optimizations if needed.

Image optimization : Parcel has built in support for resizing, converting, and optimizing images. Images can be referenced from HTML, CSS, JavaScript, or any other file type.

---

● - What is `.gitignore`? What should we add and not add into it?

-> A .gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected. Like node_modules, .parcel-cache and dist should be in .giignore file and package-lock.json and package.json sholud not be in .gitignore file.

---

● - What is the difference between `package.json` and `package-lock.json`

-> package.json file holds various metadata to the project, basically it allows project to install diffenrent modules it depends on. and package-lock is created for locking the dependency with the installed version.

---

● - Why should I not modify `package-lock.json`?

-> We should never modify the package-lock.json file beacuse it contains exact version for dependency which is used by our project, changes to it will hamper our project and it is recommneded to to modify package-lock.json file.

---

● - What is `node_modules` ? Is it a good idea to push that on git?

-> node_modules contains all the different modules on which our project is depended and it is used by our peoject ot work correctly. It is not good idea to push node_modules to git because it is very heavy and it contains a lot of external dependecy. we can generate everything which are in node_modules, if we have package.json and package-loack.json file.

---

● - What is the `dist` folder?

-> The dist folder contains minimized version of source code. The code which is present on dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

---

● - What is `browserlists`

-> Browserlists is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file.

---

Read about dif bundlers: vite, webpack, parcel
● Read about: ^ - caret and ~ - tilda
● Read about Script types in html (MDN Docs)
