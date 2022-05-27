module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/pomodoro/" : "/",
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
