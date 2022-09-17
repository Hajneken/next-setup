# Next Setup 

Boilerplate for Next projects with configured static exporting, Material UI and some goodies.

## Get Started

1. `cd src`
2. `yarn`
3. `yarn dev`

---

## Generate icons 

1. Install `npm install --global pwa-asset-generator`
1. copy image and rename it to `logo.png` 
1. `cd` to `/public` 
1. run `pwa-asset-generator logo.png ./ -b "#082250" --favicon --mstile --xhtml`
1. create a `manifest.json` and copy the JSON output from the terminal

see [pwa-asset-generator](https://github.com/elegantapp/pwa-asset-generator) for details 