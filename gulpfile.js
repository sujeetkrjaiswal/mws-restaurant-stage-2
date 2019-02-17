const { src, dest, watch } = require("gulp");
function copyAssets() {
  return src("./assets/**/*").pipe(dest("./.tmp/public"));
}

function copyJS() {
  return src("./assets/js/*.js").pipe(dest("./.tmp/public/js"));
}
function copyCSS() {
  return src("./assets/css/*.css").pipe(dest("./.tmp/public/css"));
}
function copyHTML() {
  return src("./assets/*.html").pipe(dest("./.tmp/public"));
}

exports.copyAssets = copyAssets;
exports.default = function() {
  watch("./assets/js/*.js", copyJS);
  watch("./assets/css/*.css", copyCSS);
  watch("./assets/*.html", copyHTML);
};
