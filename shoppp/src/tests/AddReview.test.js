import React from 'react';
import { act } from 'react-dom/test-utils';
import AddReview from '../ui/components/AddReview';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import store from '../redux/store'
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

// let container;
// beforeEach(() => {
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   document.body.removeChild(container);
//   container = null;
// });
configure({ adapter: new Adapter() });
describe('AddReview renders correctly', () => {
  const componentSnap = renderer.create(<Provider store={store}>
                                          <AddReview/>
                                        </Provider>);
  let componentTree=componentSnap.toJSON();
  expect(componentTree).toMatchSnapshot();
  it('should render MobileAddOrEdit component when clicked', () => {
    const component = renderer.create(<Provider store={store}>
                                <AddReview/>
                              </Provider>);
    const Link = component.root.findByProps({className: 'close'});
    Link.props.onClick();
    

    componentTree=componentSnap.toJSON();
    expect(componentTree).toMatchSnapshot();
    });

  // expect(container).toMatchSnapshot();
  // add1=container.toJSON();
  // const buttonClose = add1.root.findByProps({className: 'close'}); 
  // buttonClose.props.onClick();
  
  // expect(add).toMatchSnapshot();
});