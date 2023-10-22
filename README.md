## Run

### Development server

Node.js 16.14 or later ir required.

Download project archive and extract it or clone project from github repository.
```bash
git clone https://github.com/Suiluap/themeable.git
```

Install dependencies.

```bash
npm install
```

Run development server. 

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Tests

Make sure you have development server running before running tests.
```bash
npm run test
```

## About

### Themes

This project uses [next-themes](https://github.com/pacocoursey/next-themes).

It supports light and dark theme by nesting ```header, main and footer``` elements inside ```ThemeProvider``` component. 

Themes' color configurations can be found in [globals.css](./app/globals.css).

Selected theme is carried between sessions via cookies.

To avoid hydration mismatch on some components (eg. ```ThemeSwitch```), rendering of those components only after page is mounted on the client is required.