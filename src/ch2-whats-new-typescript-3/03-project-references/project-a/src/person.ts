// tsc --build project-a --verbose (in root directory of this chapter module)
// can force a build: tsc --build project-a --force --verbose
import { randomString } from '../../shared/dist/utils';

class Person {
  id: string;
  name: string;
  constructor() {
    this.id = randomString();
  }
}
