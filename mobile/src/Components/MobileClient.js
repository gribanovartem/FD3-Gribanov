import React, {PureComponent} from 'react';
import './MobileClient.scss';

class MobileClient extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.clientInfo.fam +" render");
        return (
            <tr>
                <td>{this.props.clientInfo.fam}</td>
                <td>{this.props.clientInfo.im}</td>
                <td>{this.props.clientInfo.otch}</td>
                <td>{this.props.clientInfo.balance}</td>
                <td className={this.props.active?'active':'blocked'}>{this.props.active?'active':'blocked'}</td>
                <td><input className='button' type='button' value='Редактировать'/></td>
                <td><input className='button' type='button' value='Удалить'/></td>
            </tr>
        )
    }
}
export default MobileClient;