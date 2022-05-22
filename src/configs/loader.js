// INFO: https://stackoverflow.com/questions/70500084/how-to-export-static-images-on-nextjs
function imageLoader({ src }) {
  return `${src}`; // REPLACE WITH YOUR IMAGE DIRECTORY
}

module.exports = imageLoader;
