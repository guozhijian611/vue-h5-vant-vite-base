import postcssPxtorem from 'postcss-pxtorem'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    postcssPxtorem({
      rootValue: 37.5,
      propList: ['*'],
      exclude: /node_modules/i
    }),
    autoprefixer({})
  ]
}