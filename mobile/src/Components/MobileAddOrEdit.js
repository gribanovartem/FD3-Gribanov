import React, { PureComponent } from 'react';
import './MobileAddOrEdit.scss';
import { mobileEvents } from '../events'
import PropTypes from 'prop-types';

class MobileAddOrEdit extends PureComponent {
    constructor(props) {
        super(props);
        this.famRef = React.createRef();
        this.imRef = React.createRef();
        this.otchRef = React.createRef();
        this.balanceRef = React.createRef();
    }
    static propTypes = {
        inputMode: PropTypes.string.isRequired,
        client: PropTypes.shape({
            fam: PropTypes.string.isRequired,
            im: PropTypes.string.isRequired,
            otch: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
            }),
    };
    add = () => {
        mobileEvents.emit('add',{   
                                    id: this.props.id,
                                    fam: this.famRef.current.value,
                                    im: this.imRef.current.value,
                                    otch: this.otchRef.current.value,
                                    balance: this.balanceRef.current.value,
                                });
    }
    edit = () => {
        console.log('dddddddddddddddddddd');
    }
    render() {
        console.log(this.props.inputMode +" render");
        console.log(this.props.inputMode+' '+this.props.client.fam);
        return (
            <div className='textInput'>
                <h1>{this.props.inputMode === 'addItem' ? 'Добавление товара' : 'Редактирование товара'}</h1>
                <form className='addItem'>
                    <label>Фамилия
                        <input name='fam' type='text' defaultValue={this.props.inputMode==='editItem'?this.props.client.fam:''}  ref={this.famRef} />
                    </label><br/>
                    <label>Имя
                        <input name='im' type='text' defaultValue={this.props.inputMode==='editItem'?this.props.client.im:''} ref={this.imRef} />
                    </label><br/>
                    <label>Отчество
                        <input name='otch' type='text' defaultValue={this.props.inputMode==='editItem'?this.props.client.otch:''} ref={this.otchRef} />
                    </label><br/>
                    <label>Баланс
                        <input name='balance' type='text' defaultValue={this.props.inputMode==='editItem'?this.props.client.balance:''} ref={this.balanceRef} />
                    </label>
                </form>
                {this.props.inputMode==='addItem'&&<input className='button' type="button" value='Добавить' onClick={this.add}/>}
                {this.props.inputMode==='editItem'&&<input className='button' type="button" value='Изменить' onClick={this.edit}/>}
                
            </div>
        )
    }
}

export default MobileAddOrEdit;