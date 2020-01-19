import React, {PureComponent} from 'react';
import './MobileCompany.scss';
import MobileClient from  './MobileClient';

class MobileCompany extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            nameCompany: 'Velcom',
            clients: this.props.clients,
            status: 'all',
        }
    }
    // Изменение имени
    setNameVelcom = () => {
        this.setState({nameCompany: 'Velcom'});
    };
    setNameMTS = () => {
        this.setState({nameCompany: 'MTS'});
    };
    // Фильтрация
    showActive =()=> {
        if(this.state.status!=='active') {
            let filteredClients = this.props.clients.filter(client=>{
                if(client.balance>=0) {
                    return client;
                } else return null;
            });
            let newClients = [...filteredClients];
            this.setState({status: 'active'});
            this.setState({clients: newClients});
        }

    };
    showAll = () => {
        if(this.state.status!=='all') {
            this.setState({status:'all'});
            this.setState({clients: this.props.clients});
        }
    };
    showBlocked = () => {
        if(this.state.status!=='blocked') {
            let filteredClients = this.props.clients.filter(client=>{
                if(client.balance<0) {
                    return client;
                } else return null;
            });
            let newClients = [...filteredClients];
            this.setState({status: 'blocked'});
            this.setState({clients: newClients});
        }
    };
    render() {
        console.log("MobileCompany render");
        let clientsJSX = this.state.clients.map(client=>{
            return <MobileClient key={client.id} clientInfo={client} active={client.balance >= 0 ? true : false}/>
        });
        return (
            <div className='mobileCompany'>
                <input className='button' type='button' value='Velcom' onClick={this.setNameVelcom}/>
                <input className='button' type='button' value='MTS' onClick={this.setNameMTS}/>
                <p>Компания: {this.state.nameCompany}</p>
                <hr/>
                <input className='button' type='button' value='Все' onClick={this.showAll}/>
                <input className='button' type='button' value='Активные' onClick={this.showActive}/>
                <input className='button' type='button' value='Заблокированные' onClick={this.showBlocked}/>
                <hr/>
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
                <hr/>
                <input className='button' type='button' value='Добавить Клиента'/>
            </div>
        )
    }
}
export default MobileCompany;