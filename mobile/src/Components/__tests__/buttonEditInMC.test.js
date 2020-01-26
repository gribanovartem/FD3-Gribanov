import { shallow, mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import MobileClient from '../MobileClient';
import MobileAddOrEdit from '../MobileAddOrEdit';
import MobileCompany from '../MobileCompany';
import clients from '../../Clients';
 
describe('Button Edit in MobileClient', () => {
    const componentMain = renderer.create(<MobileCompany clients={clients}/>);
    let componentTree=componentMain.toJSON();
    expect(componentTree).toMatchSnapshot();
    it('should render MobileAddOrEdit component with data in defaultValue client[0]', () => {
        const component = shallow(<MobileClient clientInfo={clients[0]} active={true}/>);
        const componentMain1 = shallow(<MobileCompany clients={clients}/>);
        const link = component.find('input').at(0);
        link.simulate('click');
        expect(componentMain1.state().inputMode).toEqual('editClient');
        expect(componentMain1.state().editClient).toEqual(clients[0]);

        componentTree=componentMain.toJSON();
        expect(componentTree).toMatchSnapshot();
    })
    it('should render MobileAddOrEdit component with data in defaultValue client[1]', () => {
        const component = shallow(<MobileClient clientInfo={clients[1]} active={true}/>);
        const componentMain1 = shallow(<MobileCompany clients={clients}/>);
        const link = component.find('input').at(0);
        link.simulate('click');
        expect(componentMain1.state().inputMode).toEqual('editClient');
        expect(componentMain1.state().editClient).toEqual(clients[1]);

        componentTree=componentMain.toJSON();
        expect(componentTree).toMatchSnapshot();
    })
    it('should render MobileAddOrEdit component with data in defaultValue client[2]', () => {
        const component = shallow(<MobileClient clientInfo={clients[2]} active={true}/>);
        const componentMain1 = shallow(<MobileCompany clients={clients}/>);
        const link = component.find('input').at(0);
        link.simulate('click');
        expect(componentMain1.state().inputMode).toEqual('editClient');
        expect(componentMain1.state().editClient).toEqual(clients[2]);

        componentTree=componentMain.toJSON();
        expect(componentTree).toMatchSnapshot();
    })
    it('should render MobileAddOrEdit component with data in defaultValue client[3]', () => {
        const component = shallow(<MobileClient clientInfo={clients[3]} active={true}/>);
        const componentMain1 = shallow(<MobileCompany clients={clients}/>);
        const link = component.find('input').at(0);
        link.simulate('click');
        expect(componentMain1.state().inputMode).toEqual('editClient');
        expect(componentMain1.state().editClient).toEqual(clients[3]);

        componentTree=componentMain.toJSON();
        expect(componentTree).toMatchSnapshot();
    })
  });