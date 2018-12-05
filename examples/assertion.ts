/** Casting */

const text: any = 'lorem ipsum bla';

(text as string).length;
<string> text.length;


/** Casting: a class example **/

abstract class Animal {}

class Cat extends Animal {}

const animal: Animal = new Cat();

animal as Cat

/** Casting: not working if no possible conversion **/

const data = {
  foo: 'bar'
};

<string[]> data;
data as string[]


/** Validators (is keyword) **/

function isString(value: any): value is string {
  return typeof value === "string";
}

const value = 42;

if(isString(value)) {
  value.length
}

value.length


/** Validators: a use case **/


enum MessageType {
  Text,
  Image,
}

type Message<P> = {
  type: MessageType;
  params: P;
}

type TextMessage = Message<{body: string}>;
type ImageMessage = Message<{uri: string}>;

function isTextMessage(value: Message<any>): value is TextMessage {
  return value.type === MessageType.Text;
}

function isImageMessage(value: Message<any>): value is ImageMessage {
  return value.type === MessageType.Image;
}



const textMessage: TextMessage = {
  type: MessageType.Text,
  params: {
    body: 'Hello'
  }
};
const imageMessage: ImageMessage = {
  type: MessageType.Image,
  params: {
    uri: 'http://a-beautiful-picture.jpg'
  }
};

const message: Message<any> = Math.random() > 0.5 ? textMessage : imageMessage;


if(isTextMessage(message)) {
  message.params.body
}

if(isImageMessage(message)) {
  message.params.uri
  message.params.body
}
