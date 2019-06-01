import { LightningElement, api, track } from 'lwc';

export default class Hoge extends LightningElement {
    @api name = 'hoge';

    _foo = 'foo';

    get foo() {
        return this._foo + '様';
    }

    set foo(val) {
        this._foo = val;
    }

    @api contacts;

    onClick() {}

    handleInput(event) {
        this.name = event.target.value;
    }
}
