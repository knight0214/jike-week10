fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});
//把所有的css,js,png，jpg文件集中到static文件夹，并加上MD5
fis.match('*.{js,css,png,jpg}', {
  useHash: true,
  release: '/static/$0'
});
//压缩js文件
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});
//压缩css文件
fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});
//压缩png文件
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});