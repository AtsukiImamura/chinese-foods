import { LightningElement, api, track } from 'lwc';

export default class Hoge extends LightningElement {
    @api name = 'hoge';

    @track state = {};

    _foo = 'foo';

    get foo() {
        return this._foo + '様';
    }

    set foo(val) {
        this._foo = val;
    }

    @api
    get rows() {
        return this.state.rows;
    }

    set rows(values) {
        this.state.rows = values;
        console.log(values);
        console.log(typeof values);
    }

    @api contacts;

    onClick() {}

    handleInput(event) {
        this.name = event.target.value;
    }
}
