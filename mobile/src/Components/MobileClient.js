import React, {PureComponent} from 'react';
import './MobileClient.scss';
import {mobileEvents} from '../events';
import PropTypes from 'prop-types';

class MobileClient extends PureComponent {
    static propTypes = {
        active: PropTypes.bool,
        clientInfo: PropTypes.shape({
            id: PropTypes.number.isRequired,
            fam: PropTypes.string.isRequired,
            im: PropTypes.string.isRequired,
            otch: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
            }),
    };
    delete = () => {
        mobileEvents.emit('deleteClient',this.props.clientInfo.id);
    }
    edit = () => {
        mobileEvents.emit('editClient',this.props.clientInfo);
    }

    render() {
        // console.log(this.props.clientInfo.fam +" render");
        return (
            <tr>
                <td>{this.props.clientInfo.fam}</td>
                <td>{this.props.clientInfo.im}</td>
                <td>{this.props.clientInfo.otch}</td>
                <td>{this.props.clientInfo.balance}</td>
                <td className={this.props.active?'active':'blocked'}>{this.props.active?'active':'blocked'}</td>
                <td><input id={this.props.id} className='button' type='button' value='Редактировать' onClick={this.edit}/></td>
                <td><input className='button' type='button' value='Удалить' onClick={this.delete}/></td>
            </tr>
        )
    }
}
export default MobileClient;