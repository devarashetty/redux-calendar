module.exports = {
	entry:__dirname+'/client/index.js',
	output: {
	    path: __dirname,
	    filename: 'bundle.js'
	},
	mode:"development",
	module:{
		rules:[
			{ 
				test: /\.css$/,
		        use: [
		          { loader: "style-loader" },
		          { loader: "css-loader" }
		        ]
		    },
		    {
		        test: /\.js$/,
		        exclude: /node_modules/,
		        use: "babel-loader"
		    }, 
		    {
		        test: /\.jsx?$/,
		        exclude: /node_modules/,
		        use: "babel-loader"
		    }
		]
	}
}