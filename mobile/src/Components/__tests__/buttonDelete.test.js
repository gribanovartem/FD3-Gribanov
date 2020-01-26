import { shallow } from 'enzyme';
import React from 'react';
import MobileClient from '../MobileClient';
import clients from '../../Clients';
import renderer from 'react-test-renderer';
import MobileCompany from '../MobileCompany';
 
describe('Button Delete', () => {
    const componentSnap = renderer.create(<MobileCompany clients={clients}/>);
    let componentTree=componentSnap.toJSON();
    expect(componentTree).toMatchSnapshot();
    it('should delete Client when clicked', () => {
      const component = shallow(<MobileClient clientInfo={clients[0]} active={true}/>);
      const secondLink = component.find('input').at(1);

      secondLink.simulate('click');
      expect(component).toEqual({});

      componentTree=componentSnap.toJSON();
      expect(componentTree).toMatchSnapshot();
      });
    it('should delete Client when clicked', () => {
      const component = shallow(<MobileClient clientInfo={clients[1]} active={true}/>);
      const secondLink = component.find('input').at(1);
      

      secondLink.simulate('click');
      expect(component).toEqual({});

      componentTree=componentSnap.toJSON();
      expect(componentTree).toMatchSnapshot();
      });
    it('should delete Client when clicked', () => {
      const component = shallow(<MobileClient clientInfo={clients[2]} active={true}/>);
      const secondLink = component.find('input').at(1);

      secondLink.simulate('click');
      expect(component).toEqual({});

      componentTree=componentSnap.toJSON();
      expect(componentTree).toMatchSnapshot();
      });
    it('should delete Client when clicked', () => {
      const component = shallow(<MobileClient clientInfo={clients[3]} active={true}/>);
      const secondLink = component.find('input').at(1);

      secondLink.simulate('click');
      expect(component).toEqual({});

      componentTree=componentSnap.toJSON();
      expect(componentTree).toMatchSnapshot();
      })
  });