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
    const comp = mount(<MobileCompany clients={clients}/>);
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const button = component.root.findByProps({className: 'button addButton'}); 
    button.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    const famInput = component.root.findByProps({className: 'fam'}); 
    famInput.value = 'жираф';

    ReactTestUtils.Simulate.change(famInput);
    const finalButton = component.root.findByProps({className: 'button finalAdd'}); 
    console.log(famInput);
    finalButton.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

  });