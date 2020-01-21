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
            clientsForShow: this.props.clients,
            inputMode: null,
            editClient: null,
        }
    }
    componentDidMount = () => {
        mobileEvents.addListener('deleteClient', this.delete);
        mobileEvents.addListener('editClient', this.editClient);
        mobileEvents.addListener('addClient', this.add);
    };
    componentWillUnmount = () => {
        mobileEvents.removeListener('deleteClient', this.delete);
        mobileEvents.removeListener('editClient', this.editClient);
        mobileEvents.removeListener('addClient', this.add);
    };
            // Кнопки "добавить" и "изменить" у компонента MobileAddOrEdit
    add = (newClient) => {
        let newClients = [...this.state.clients, newClient];
        this.setState({clients: newClients});
    }
    edit = () => {

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
        let filteredClients = this.state.clients.filter(client => {
            if (client.balance >= 0) {
                return client;
            } else return null;
        });
        this.setState({ clientsForShow: filteredClients });
    };
    showAll = () => {
        this.setState({ status: 'all' });
        this.setState({ clientsForShow: this.state.clients });
    };
    showBlocked = () => {
        this.setState({ status: 'blocked' });
        let filteredClients = this.state.clients.filter(client => {
            if (client.balance < 0) {
                return client;
            } else return null;
        });
        this.setState({ clientsForShow: filteredClients });
    };
    // filter = () => {
    //     if (this.state.status === 'all') {
    //         this.setState({ clientsForShow: this.state.clients });
    //     }
    //     if (this.state.status === 'active') {
    //         let filteredClients = this.state.clients.filter(client => {
    //             if (client.balance >= 0) {
    //                 return client;
    //             } else return null;
    //         });
    //         this.setState({ clientsForShow: filteredClients });
    //     }
    //     if (this.state.status === 'blocked') {
    //         let filteredClients = this.state.clients.filter(client => {
    //             if (client.balance < 0) {
    //                 return client;
    //             } else return null;
    //         });
    //         this.setState({ clientsForShow: filteredClients });
    //     }
    // }
            /* ********************************************************** */
            // Кнопки у клиентов
    addClient = () => {
        this.setState({inputMode: 'addClient'});
    }
    editClient = (client) => {
        this.setState({inputMode: 'editClient'});
            this.setState({editClient: client});
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
        console.log("MobileCompany render");
        let clientsJSX = this.state.clientsForShow.map(client => {
            return <MobileClient key={client.id} clientInfo={client} active={client.balance >= 0 ? true : false} />
        });
        return (
            <div className='mobileCompany'>
                <input className='button' type='button' value='Velcom' onClick={this.setNameVelcom} />
                <input className='button' type='button' value='MTS' onClick={this.setNameMTS} />
                <p>Компания: {this.state.nameCompany}</p>
                <hr />
                <input className='button' type='button' value='Все' onClick={this.showAll} />
                <input className='button' type='button' value='Активные' onClick={this.showActive} />
                <input className='button' type='button' value='Заблокированные' onClick={this.showBlocked} />
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
                <input className='button' type='button' value='Добавить Клиента' onClick={this.addClient}/>
                {this.state.inputMode==='addClient'&&<MobileAddOrEdit inputMode={this.state.inputMode} id={this.state.clients[this.state.clients.length-1].id+1}/>}
                {this.state.inputMode==='editClient'&&<MobileAddOrEdit key={this.state.editClient.id} inputMode={this.state.inputMode} client={this.state.editClient}/>}
            </div>
        )
    }
}
export default MobileCompany;