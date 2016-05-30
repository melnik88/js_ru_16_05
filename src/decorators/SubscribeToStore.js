import { Component as ReactComponent } from 'react'

export default class BasicSubscribeTo extends ReactComponent {

	constructor(stores, initialData = []) {
		super();
		this._store = null;
	}

	handleChange = () => {};

	componentDidMount() {
		this._store.addChangeListener(this.handleChange);
	}

	componentWillUnmount() {
		this._store.removeChangeListener(this.handleChange);
	}
}