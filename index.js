import { html, render } from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-html/lib/repeat.js';

//const sections = Object.keys(resume);
const sections = [{name:"Education"}, {name:"Work"}, {name:"Skills"}];

const main = (sections) => {
	return html`
		<main>
		${repeat(
			sections,
			section => section,
			section => html`
				<section>
					<h2>${section.name}</h2>
				</section>
			`
		)}
		</main>
	`;
};

/*
var test = `${array.map((item, i) => 
	`
	<div>
		I am item number ${i+1}
		I am a ${item.name}.
	</div>
	`).join('')}`;
console.log(test);
*/

const container = document.body;

render(main(sections), container);
