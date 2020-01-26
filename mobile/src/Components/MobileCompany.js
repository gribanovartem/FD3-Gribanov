import React, { PureComponent } from 'react';
import './MobileCompany.scss';
import MobileClient from './MobileClient';
import { mobileEvents } from '../events'
import MobileAddOrEdit from './MobileAddOrEdit';

class MobileCompany extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            nameCompany: 'Velcom',
            clients: this.props.clients,
            status: 'all',
            // clientsForShow: this.props.clients,
            inputMode: null,
            editClient: null,
        }
    }
    componentDidMount = () => {
        mobileEvents.addListener('deleteClient', this.delete);
        mobileEvents.addListener('editClient', this.editClient);
        mobileEvents.addListener('edit', this.edit);
        mobileEvents.addListener('addClient', this.add);
    };
    componentWillUnmount = () => {
        mobileEvents.removeListener('deleteClient', this.delete);
        mobileEvents.removeListener('editClient', this.editClient);
        mobileEvents.removeListener('edit', this.edit);
        mobileEvents.removeListener('addClient', this.add);
    };
    // Кнопки "добавить" и "изменить" у компонента MobileAddOrEdit
    add = (newClient) => {
        let newClients = [...this.state.clients, newClient];
        this.setState({ clients: newClients });
        this.setState({ inputMode: null });
    }
    edit = (editClient) => {
        let clients = this.state.clients.map((client)=>{
            if(client.id===editClient.id) {
                return editClient;
            } else return client;
        });
        this.setState({ clients: clients });
        this.setState({ inputMode: null });
    }
    /* ********************************************************** */
    // Изменение имени
    setNameVelcom = () => {
        this.setState({ nameCompany: 'Velcom' });   
    };
    setNameMTS = () => {
        this.setState({ nameCompany: 'MTS' });
    };
    // Фильтрация
    showActive = () => {
        this.setState({ status: 'active' });
    };
    showAll = () => {
        this.setState({ status: 'all' });
    };
    showBlocked = () => {
        this.setState({ status: 'blocked' });
    };
    /* ********************************************************** */
    // Кнопки у клиентов
    addClient = () => {
        this.setState({ inputMode: 'addClient' });
    }
    editClient = (client) => {
        this.setState({ editClient: client });
        this.setState({ inputMode: 'editClient' });
    }
    delete = (id) => {
        let newClients = [...this.state.clients];
        let filteredClients = newClients.filter(client => {
            if (client.id !== id) {
                return client;
            } else return null;
        });
        this.setState({ clients: filteredClients });
        this.setState({ inputMode: null });
    }
    /* ************************************************************* */
    render() {
        // console.log("MobileCompany render");
        let clientsForShow;
        if (this.state.status === 'all') {
            clientsForShow = this.state.clients;
        }
        if (this.state.status === 'active') {
            clientsForShow = this.state.clients.filter(client => {
                if (client.balance >= 0) {
                    return client;
                } else return null;
            });
        }
        if (this.state.status === 'blocked') {
            clientsForShow = this.state.clients.filter(client => {
                if (client.balance < 0) {
                    return client;
                } else return null;
            });
        }
        let clientsJSX = clientsForShow.map(client => {
            return <MobileClient key={client.id} clientInfo={client} active={client.balance >= 0 ? true : false} />
        });
        return (
            <div className='mobileCompany'>
                <input className='button' type='button' value='Velcom' onClick={this.setNameVelcom} />
                <input className='button' type='button' value='MTS' onClick={this.setNameMTS} />
                <p>Компания: {this.state.nameCompany}</p>
                <hr />
                <input className='button all' type='button' value='Все' onClick={this.showAll} />
                <input className='button active' type='button' value='Активные' onClick={this.showActive} />
                <input className='button blocked' type='button' value='Заблокированные' onClick={this.showBlocked} />
                <hr />
                <table rules='rows'>
                    <thead>
                        <tr>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th>Отчество</th>
                            <th>Баланс</th>
                            <th>Статус</th>
                            <th>Редактировать</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientsJSX}
                    </tbody>
                </table>
                <hr />
                <input className='button addButton' type='button' value='Добавить Клиента' onClick={this.addClient} />
                {this.state.inputMode === 'addClient' && <MobileAddOrEdit inputMode={this.state.inputMode} id={this.state.clients[this.state.clients.length - 1].id + 1} />}
                {/* {this.state.inputMode === 'editClient' && <MobileAddOrEdit key={this.state.editClient.id} inputMode={this.state.inputMode} client={this.state.editClient} />} */}
                {this.state.inputMode === 'editClient' && <MobileAddOrEdit key={this.state.editClient.id} inputMode={this.state.inputMode} client={this.state.editClient} />}
            </div>
        )
    }
}
export default MobileCompany;