import React from 'react';
import Mobile from '../components/Mobile'

class Page_Mobile extends React.PureComponent {
    render() {
        return (
            <div>
                <Mobile id={parseInt(this.props.match.params.mobile)}/>
            </div>
        )
    }
}
export default Page_Mobile;