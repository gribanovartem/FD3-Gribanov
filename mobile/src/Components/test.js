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
        mobileEvents.addListener('delete', this.delete);
        mobileEvents.addListener('edit', this.edit);
        mobileEvents.addListener('add', this.add);
    };
    componentWillUnmount = () => {
        mobileEvents.removeListener('delete', this.delete);
        mobileEvents.removeListener('edit', this.edit);
        mobileEvents.removeListener('add', this.add);
    };
    delete = (id) => {
        let newClients = [...this.state.clients];
        let filteredClients = newClients.filter(client => {
            if (client.id !== id) {
                return client;
            } else return null;
        });
        this.setState({ clients: filteredClients });
        if (this.state.status === 'all') {
            this.setState({ clientsForShow: filteredClients });
        }
        if (this.state.status === 'active') {
            filteredClients = filteredClients.filter(client => {
                if (client.balance >= 0) {
                    return client;
                } else return null;
            });
            this.setState({ clientsForShow: filteredClients });
        }
        if (this.state.status === 'blocked') {
            filteredClients = filteredClients.filter(client => {
                if (client.balance < 0) {
                    return client;
                } else return null;
            });
            this.setState({ clientsForShow: filteredClients });
        }
    }
    edit = (client) => {
        this.setState({inputMode: 'editItem'});
        this.setState({editClient: client});
    }
    add = (newClient) => {
        let newClients = [...this.state.clients, newClient];
        this.setState({clients: newClients});
    }
     // Изменение имени
    setNameVelcom = () => {
        this.setState({ nameCompany: 'Velcom' });
    };
    setNameMTS = () => {
        this.setState({ nameCompany: 'MTS' });
    };
    // Фильтрация
    showActive = () => {
        if (this.state.status !== 'active') {
            let newClients = [...this.state.clients];
            let filteredClients = newClients.filter(client => {
                if (client.balance >= 0) {
                    return client;
                } else return null;
            });
            this.setState({ status: 'active' });
            this.setState({ clientsForShow: filteredClients });
        }

    };
    showAll = () => {
        if (this.state.status !== 'all') {
            this.setState({ status: 'all' });
            this.setState({ clientsForShow: this.state.clients });
        }
    };
    showBlocked = () => {
        if (this.state.status !== 'blocked') {
            let newClients = [...this.state.clients];
            let filteredClients = newClients.filter(client => {
                if (client.balance < 0) {
                    return client;
                } else return null;
            });

            this.setState({ status: 'blocked' });
            this.setState({ clientsForShow: filteredClients });
        }
    };
    addItem = () => {
        this.setState({inputMode: 'addItem'});
    }

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
                <input className='button' type='button' value='Добавить Клиента' onClick={this.addItem}/>
                {this.state.inputMode==='addItem'&&<MobileAddOrEdit inputMode={this.state.inputMode}/>}
                {this.state.inputMode==='editItem'&&<MobileAddOrEdit inputMode={this.state.inputMode} client={this.state.editClient}/>}
            </div>
        )
    }
}
export default MobileCompany;