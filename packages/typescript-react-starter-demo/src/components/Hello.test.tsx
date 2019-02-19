// import 'core-js/es6/map';
// import 'core-js/es6/set';
import 'raf/polyfill';

import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
// import Adapter from 'enzyme-adapter-react-16'; ??是动态导入
enzyme.configure({ adapter: new Adapter() });


import Hello from './Hello';

// 正常输入，正常返回
it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name='galaxyw' enthusiasmLevel={1} />);
  expect(hello.find(".greeting").text()).toEqual("Hello galaxyw!")
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name='bing' enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual("Hello bing!!!!!");
});

// 默认输入，正常返回
it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name='galaxyw' />);
  expect(hello.find(".greeting").text()).toEqual("Hello galaxyw!");
});

// 异常输入，捕获异常
it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name="galaxyw" enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name="galaxyw" enthusiasmLevel={-1} />);
  }).toThrow();
})