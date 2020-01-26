import { shallow, mount} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import MobileClient from '../MobileClient';
import MobileAddOrEdit from '../MobileAddOrEdit';
import MobileCompany from '../MobileCompany';
import clients from '../../Clients';

describe('Button Edit in MobileAddOrEdit', () => {
    const componentMain = renderer.create(<MobileCompany clients={clients}/>);
    let componentTree=componentMain.toJSON();
    expect(componentTree).toMatchSnapshot();
    it('should render MobileCompany with edited [0] client', () => {
        const componentMain1 = shallow(<MobileCompany clients={clients}/>);
        const componentMain2 = shallow(<MobileClient clientInfo={clients[0]} active={true}/>);
        componentMain2.find('input').at(0).simulate('click');
        const component = mount(<MobileAddOrEdit key={clients[0].id} inputMode='editClient' client={clients[0]} />);
        component.find('input').at(0).instance().value = "aaaaaaaaaaa";
        component.find('input').at(1).instance().value = 'bbbbbbbbbb';
        component.find('input').at(2).instance().value = 'ccccccccc';
        component.find('input').at(3).instance().value =  500;
        component.find('input').at(4).simulate('click');
        expect(componentMain1.state().inputMode).toEqual(null);
        let newClients = clients.map((client)=>{
            if(client.id===clients[0].id) {
                return {   
                    id: clients[0].id,
                    fam: 'aaaaaaaaaaa',
                    im: 'bbbbbbbbbb',
                    otch: 'ccccccccc',
                    balance: 500,
                };
            } else return client;
        });
        expect(componentMain1.state().clients).toEqual(newClients);

        componentTree=componentMain.toJSON();
        expect(componentTree).toMatchSnapshot();
    })
    
  });