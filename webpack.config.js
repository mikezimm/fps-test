

const path = require('path');

const runMode = 'development';
const isDevelopment = runMode === 'development' ? true : false;

module.exports = (env, argv) => ({
  mode: runMode,
  entry: {
    fpsTest: path.resolve(__dirname, 'src/index.ts')  // npmReactComponents is the name of the library - external cdn reference name:  myServices.js
  },

  module: {
    rules: [{
      test: /\.tsx|.ts?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
            transpileOnly: true,
          },
        },
      ]
    }
  ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDevelopment ? '[name].js' : '[name].[hash].js',  // [name] Comes from entry
    hashDigestLength: 10, // 2022-12-07:  Added this per AC
    publicPath: "/assets/",
    library: { type: "amd" },  // Used by SPFx
    clean: true
  },





  mode: 'development', // switch to production when you package for production - impacts final size of package you import
  target: 'web',

  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: "[name].js",  // [name] Comes from entry
  //   publicPath: "/assets/",
  //   library: { type: "amd" },  // Used by SPFx
  //   clean: true
  // },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    modules: ['node_modules']
  },
  // module: {
  //   rules: [{
  //     test: /\.tsx|.ts?$/,
  //     exclude: /node_modules/,
  //     use: [
  //       {
  //         loader: 'ts-loader',
  //         options: {
  //           happyPackMode: true,
  //           transpileOnly: true,
  //         },
  //       },
  //     ]
  //   },
  //   {
  //     test: /\.svg/,
  //     type: 'asset/resource'
  //   },
  //   {
  //     test: /\.css$/i,
  //     use: ["style-loader", "css-loader"],
  //   },,
  //   // {
  //   //   test: /\.scss$/,
  //   //   use: [
  //   //       // Creates `style` nodes from JS strings
  //   //       "style-loader",
  //   //       // Translates CSS into CommonJS
  //   //       "css-loader",
  //   //       // Compiles Sass to CSS
  //   //       "sass-loader",
  //   //   ],
  //   // }

  // ]
  // },
  externals: { // Read webpack documentation - do not want to bundle these into the package
    "react": "React",
    // "lodash-es": "lodash-es/*", //JT added it but it is not being used... so it is an example.

    // In the end, I want final this to come from final web part since it already has to have it
    // Is this the correct way to reference it?
    //    If I do this and my SPFx project does not have one, will it figure that out and then add it as a dependancy for me automatically?
    //    Or will I have to remember to do it downstream
    // And to get all typings etc in here from @microsoft, fabric-react, do I install it as dependancy in this package?

    // "@microsoft/sp-property-pane": "*",
    // "office-ui-fabric-react": "*",  //My actual component import:  import { Slider } from 'office-ui-fabric-react/lib/Slider';
  },
  // devServer: {
  //   compress: true,
  //   hot: true,
  //   port: 3000,
  //   static: {
  //     directory: resolveAppPath('app'),
  //     publicPath: '/',
  //   },
  // },
  plugins: [
    ///...  https://www.developerhandbook.com/webpack/how-to-configure-scss-modules-for-webpack/
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   filename: isDevelopment ? '[name].css' : '[name].[hash].css',
    //   chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    // })
  ],
  module: {
    rules: [
      ///...  https://www.developerhandbook.com/webpack/how-to-configure-scss-modules-for-webpack/
      // {
      //   test: /\.module\.s(a|c)ss$/,
      //   loader: [
      //     isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         sourceMap: isDevelopment
      //       }
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: isDevelopment
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.s(a|c)ss$/,
      //   exclude: /\.module.(s(a|c)ss)$/,
      //   loader: [
      //     isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: isDevelopment
      //       }
      //     }
      //   ]
      // }
      ///...
    ]
  },
  // resolve: {
  //   extensions: ['.js', '.jsx'],
  //   // extensions: ['.js', '.jsx', '.scss']
  // }
});