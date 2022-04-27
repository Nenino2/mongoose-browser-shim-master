"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dummyValue = "";

const dummyObj = {}

const dummyProxy = new Proxy(dummyObj, {
    get() {
        return dummyProxy;
    }
})

exports = dummyProxy;