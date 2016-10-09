import { observable, computed } from 'mobx';

class GlobalStore {
    constructor() {
        this.userName = undefined;
    }
}

export default GlobalStore;