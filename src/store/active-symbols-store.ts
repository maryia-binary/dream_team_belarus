/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { WS } from 'api/services';
import { action, makeObservable, observable, runInAction } from 'mobx';
import BaseStore from './base-store';

export default class ActiveSymbolsStore extends BaseStore {
    active_symbols = [];

    constructor() {
        // TODO: [mobx-undecorate] verify the constructor arguments and the arguments of this automatically generated super call
        super();

        makeObservable(this, {
            active_symbols: observable,
            setActiveSymbols: action.bound,
        });
    }

    async setActiveSymbols() {
        const { active_symbols, error } = await WS.authorized.activeSymbols();
        runInAction(() => {
            if (!active_symbols.length || error) {
                this.active_symbols = [];
                return;
            }
            this.active_symbols = active_symbols;
        });
    }
}
