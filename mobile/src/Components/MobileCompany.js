import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import 'MobileCompany.scss';

class MobileCompany extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.b);
        return (
            <div>{this.props.b}</div>
        )
    }
}
export default MobileCompany;