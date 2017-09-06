import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-porter'
import stylus from 'rollup-plugin-stylus-css-modules'

export default {
	input: 'src/index.js',
	exports: 'named',
	name: 'vue-googlemaps',
	plugins: [
		resolve({
			jsnext: true,
			main: true,
			browser: true,
		}),
		vue({
			// css: false,
			autoStyles: false,
			styleToImports: true,
		}),
		stylus({
			// output: 'dist/vue-googlemaps2.css',
			sourceMap: false,
		}),
		css({
			output: 'dist/vue-googlemaps.css',
		}),
		babel({
			exclude: 'node_modules/**',
		}),
	],
	watch: {
		include: 'src/**',
	},
}
