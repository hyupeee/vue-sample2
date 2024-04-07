const config = {
  presets: ['@vue/cli-plugin-babel/preset',],
  plugins: [],
}

if(process.env.NODE_ENV === 'production') {
  config.plugins.push('transform-remove-console');
}

module.exports = config;
