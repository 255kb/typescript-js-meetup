// Needs npm i reflect-metadata

import 'reflect-metadata'

/** Reflect **/

// Define metadata for the prototype
class Foo {
  
  @Reflect.metadata('metadataKey', 'metadataValue')
  method() {
  }
}

// Instead of using the decorator we could use :
Reflect.defineMetadata('metadataKey', 'metadataValue', Foo.prototype, 'method');


// Get metadata from the instance
const foo = new Foo();
const metadataValue = Reflect.getMetadata('metadataKey', foo, 'method'); 


/** Reflect **/

// Reflect metadata already set some metadata about types that you can use


const logType: PropertyDecorator = (target, propertyKey) => {
  const reflectedType = Reflect.getMetadata('design:type', target, propertyKey);
  console.log(`Reflected type: ${reflectedType}`)
};

class LoggedFoo {
  
  @logType
  public age: number = 20; // Prints "Reflected type: Number"

  @logType
  public bar: string[] = []; // Prints "Reflected type: Array" not Array<String>
}

// /!\ This is limited, you only have the first type, so it doesn't work with composed types like Array<string>


/** 
 * Reflect use case: 
 * 
 * @see https://github.com/thomaswinckell/ts-serialize#readme 
 * 
 **/
