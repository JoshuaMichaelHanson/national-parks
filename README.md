<h1 align="center">
  National Parks - Vite / React 18
</h1>

Example site using React 18, Vite, and the nps.gov API.  
In the end will have Browser based DB for contact me page

## Folder Structure
     
Run tree command to regenerate this folder structure or     
npm install -D markdown-notes-tree    
markdown-notes-tree
```
vite-template-react
├── node_modules
├── public
│   ├── favicon.svg
│   └── robots.txt
└── src
    ├── App.css
    ├── App.jsx
    ├── App.test.jsx
    ├── index.css
    ├── index.jsx
    └── logo.svg
    └── setupTests.js
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

## Development

To get a local copy of the code, clone it using npx (or degit):

```
npx http://where-ever-i-upload-this-to-github.git my-project-name
cd my-project-name
```

Make it your own:

```
rm -rf .git && git init && npm init
git add .
git commit -m "Initial commit"
```

Install dependencies:

```
npm install
```

Now, you can start a local web server by running:

```
npm start
```

And then open http://localhost:3000 to view it in the browser.

### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                             |
| ------------- | ------------------------------------------------------- |
| npm start     | Runs the app in the development mode.                   |
| npm test      | Launches the test runner in the interactive watch mode. |
| npm run build | Builds the app for production to the `dist` folder.     |
| npm run serve | Serves the production build from the `dist` folder.     |

## What makes it special
Joshua M. Hanson built this using a combination of techniques and the help of the  
nps.gov API.

## Todo
### 12/03/2024
- [ ] Still want to make the MN page generic and then pick state with a nice icon  
- [ ] Update the main state page to have more options from the API with counts on links
- [ ] Add generic nature picture when one does not exist for entries
- [ ] Change landing page
- [ ] Change routes to indicate National Parks vs State Parks
- [ ] Contact me page using TinyDB or other PWA type DB
- [ ] Host on my new VPS using [Dokploy](https://dokploy.com/)
- [ ] Generate HTTPs cert and give this a sub-domain - Let's Encrypt / Dokploy
- [ ] [traefik.me -> Free Link](https://docs.dokploy.com/docs/core/domains/generated)
- [ ] Setup Auto Deploy - From GitHub, hooks?
- [ ] Hook up local DB option to real server DB - Dokploy
- [ ] Setup DB backups - Dokploy
- [ ] Play with Docker Compose - Dokploy
- [ ] Update Vite to get rid of Critical / High Warnings after npm install

## Credits
This project was initially started from
git clone https://github.com/SafdarJamal/vite-template-react.git  
Vite Template React is built and maintained by [Safdar Jamal](https://safdarjamal.github.io).

## License
Since this is on GitHub I guess feel free to use it for fun  
This project is licensed under the terms of the [MIT license](https://github.com/SafdarJamal/vite-template-react/blob/main/LICENSE).
