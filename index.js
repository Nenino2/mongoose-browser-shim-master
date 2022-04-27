"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const dummyObj = {}
const dummyProxy = new Proxy(dummyObj, {
    get() {
        return dummyProxy;
    }
})

exports.default = dummyProxy;