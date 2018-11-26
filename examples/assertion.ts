/** TYPE ASSERTION (CASTING) */

const text: any = 'lorem ipsum bla';
(text as string).length;
<string> text.length;

const data = {
    prop1: '',
    prop2: <Error> { message: '' }
};
