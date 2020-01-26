import { shallow, mount} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import MobileAddOrEdit from '../MobileAddOrEdit';
import MobileCompany from '../MobileCompany';
import clients from '../../Clients';

describe('Button Add in MobileAddOrEdit', () => {
    const componentMain = renderer.create(<MobileCompany clients={clients}/>);
    let componentTree=componentMain.toJSON();
    expect(componentTree).toMatchSnapshot();
    it('should render MobileCompany with new client', () => {
        const componentMain1 = shallow(<MobileCompany clients={clients}/>);
        componentMain1.find('.addButton').first().simulate('click');
        const component = mount(<MobileAddOrEdit inputMode='addClient' id={105} />);
        component.find('input').at(0).instance().value = "aaaaaaaaaaa";
        component.find('input').at(1).instance().value = 'bbbbbbbbbb';
        component.find('input').at(2).instance().value = 'ccccccccc';
        component.find('input').at(3).instance().value =  500;
        component.find('input').at(4).simulate('click');
        expect(componentMain1.state().inputMode).toEqual(null);
        let newClient = {
            id: 105,
            fam: 'aaaaaaaaaaa',
            im: 'bbbbbbbbbb',
            otch: 'ccccccccc',
            balance: 500,
        };
        let newClients = [...clients,newClient];
        expect(componentMain1.state().clients).toEqual(newClients);
        componentTree=componentMain.toJSON();
        expect(componentTree).toMatchSnapshot();
    })
  });