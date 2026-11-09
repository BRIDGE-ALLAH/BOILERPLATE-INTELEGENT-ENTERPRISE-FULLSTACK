"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
class Engine {
    compile(predicate) {
        return predicate;
    }
    validate(predicate) {
        if (!predicate.field && !predicate.and && !predicate.or && !predicate.not) {
            throw new Error('Invalid predicate: missing field or logical operator');
        }
    }
    translate(predicate) {
        return predicate;
    }
}
exports.Engine = Engine;
