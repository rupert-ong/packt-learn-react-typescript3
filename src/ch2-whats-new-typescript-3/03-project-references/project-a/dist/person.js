// tsc --build project-a --verbose (in root directory of this chapter module)
// can force a build: tsc --build project-a --force --verbose
import { randomString } from '../../shared/dist/utils';
var Person = /** @class */ (function () {
    function Person() {
        this.id = randomString();
    }
    return Person;
}());
//# sourceMappingURL=person.js.map