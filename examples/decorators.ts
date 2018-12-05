/** DECORATORS **/


/** Class decorator **/

type Prototype<T> = { new(...args: any[]): T };

interface IGame {
  run(): void;
}

function Loop<T extends Prototype<IGame>>(constructor: T) {
  return class extends constructor {
    run() {
      setTimeout(super.run, 20); // 50 fps
    }
  };
}

@Loop
class Game {

  run() {
    console.log('Paint frame');
  }
}

const game = new Game();

console.log(game.run());

/** Class decorator: bad example **/

function addMagicNumberProperty<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    magicNumber = 42;
  };
}

@addMagicNumberProperty
class MagicClass {

}

const magicInstance = new MagicClass();

console.log(magicInstance.magicNumber); // type issue


/** Method decorator **/

const deprecated = (message: string): MethodDecorator => {
  return (target, propertyKey) => {
    const func = target.constructor.prototype[propertyKey];
    target.constructor.prototype[propertyKey] = (...args: any[]) => {
      console.warn(`DEPRECATED: ${target.constructor.name}#${propertyKey.toString()} ${message}`);
      return func(...args);
    };
  };
};

class Browser {

  @deprecated('Please use a modern browser')
  runIE6() {
    console.log('Running IE6...');
  }
}

const browser = new Browser();

browser.runIE6();






