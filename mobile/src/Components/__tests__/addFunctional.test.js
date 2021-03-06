import { shallow, mount, render } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import MobileClient from '../MobileClient';
import MobileAddOrEdit from '../MobileAddOrEdit';
import MobileCompany from '../MobileCompany';
import clients from '../../Clients';
import ReactTestUtils from 'react-dom/test-utils';
test('Testing add button in MobileClient', () => {
    const component = renderer.create(<MobileCompany clients={clients}/>);
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    //находим кнопку на клиенте, нажимаем и делаем снимок
    const button = component.root.findByProps({className: 'button addButton'}); 
    button.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    
  });