import React from 'react';
import renderer from 'react-test-renderer';
import MobileCompany from '../MobileCompany';
import clients from '../../Clients';
test('Testing filter buttons', () => {
    const component = renderer.create(<MobileCompany clients={clients}/>);

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const buttonAll = component.root.findByProps({className: 'button all'}); 
    buttonAll.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
  
    const buttonActive = component.root.findByProps({className: 'button active'}); 
    buttonActive.props.onClick();
    
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    
    const buttonBlocked = component.root.findByProps({className: 'button blocked'}); 
    buttonBlocked.props.onClick();
    
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
  });