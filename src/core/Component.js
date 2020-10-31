export default class Component{
	$target; $state; $props;

	constructor($target, $props = {}) {
		this.$target = $target;
		this.$props = $props;
		this.init();
		this.setEvent();
		this.render();

		return this;
	};

	template() {return ``};

	init () {};
	render() {};
	mounted() {};
	setEvent() {};

	setState(newState) {
		this.$state.todos = newState.todos;

		this.render();
	};

	addEvent(eventName, eventTarget, callback) {
		this.$target.addEventListener(eventName, event => {
			const children = [ ...this.$target.querySelectorAll(eventTarget) ];

			if (!children.includes(event.target)) return;

			callback(event);
		});
	};

	objectForEach(object, callback) {
		let index = 0;

		for(let key in object) {
			callback(object[key], index);
			index++;
		}
	};

	getStateValue(object) {
		const arr = [];

		this.objectForEach(object, item => {
			arr.push(item);
		});

		return arr;
	};
};