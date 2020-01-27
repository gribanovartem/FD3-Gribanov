import { shallow, mount, render } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import MobileClient from '../MobileClient';
import MobileAddOrEdit from '../MobileAddOrEdit';
import MobileCompany from '../MobileCompany';
import clients from '../../Clients';
import ReactTestUtils from 'react-dom/test-utils';
describe('Testing edit button in MobileClient', () => {
    const componentSnap = renderer.create(<MobileCompany clients={clients}/>);
    let componentTree=componentSnap.toJSON();
    expect(componentTree).toMatchSnapshot();
    const mainComponent = shallow(<MobileCompany clients={clients}/>);
    it('should render MobileAddOrEdit component when clicked', () => {
      const component = shallow(<MobileClient clientInfo={clients[0]} active={true}/>);
      const secondLink = component.find('input').at(0);

      secondLink.simulate('click');
      expect(mainComponent.state().inputMode).toEqual('editClient');

      componentTree=componentSnap.toJSON();
      expect(componentTree).toMatchSnapshot();
      });
    it('should render MobileAddOrEdit component when clicked', () => {
      const component = shallow(<MobileClient clientInfo={clients[1]} active={true}/>);
      const secondLink = component.find('input').at(0);
      

      secondLink.simulate('click');
      expect(mainComponent.state().inputMode).toEqual('editClient');

      componentTree=componentSnap.toJSON();
      expect(componentTree).toMatchSnapshot();
      });
    it('should render MobileAddOrEdit component when clicked', () => {
      const component = shallow(<MobileClient clientInfo={clients[2]} active={true}/>);
      const secondLink = component.find('input').at(0);

      secondLink.simulate('click');
      expect(mainComponent.state().inputMode).toEqual('editClient');

      componentTree=componentSnap.toJSON();
      expect(componentTree).toMatchSnapshot();
      });
    it('should render MobileAddOrEdit component when clicked', () => {
      const component = shallow(<MobileClient clientInfo={clients[3]} active={false}/>);
      const secondLink = component.find('input').at(0);

      secondLink.simulate('click');
      expect(mainComponent.state().inputMode).toEqual('editClient');

      componentTree=componentSnap.toJSON();
      expect(componentTree).toMatchSnapshot();
      })
  });