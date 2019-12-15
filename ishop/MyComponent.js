let MyComponent = React.createClass({
    displayName: 'MyComponent',
    render: function() {
       var newArr = this.props.itemArr.map(item=>
            React.DOM.div({key: item.name, className: 'shopItem'},
                React.DOM.h2({className: 'itemName'}, item.name),
                React.DOM.p({className: 'itemPrice'}, 'Цена: '+item.price+ ' руб'),
                React.DOM.img({className: 'itemImg', src: item.url}),
                React.DOM.p({className: 'itemStock'}, 'Остаток на складе: '+ item.stockBalance)
            )
        );
        return React.DOM.div({className: 'shop'},
            React.DOM.h1({},this.props.shopName),
            React.DOM.div({className: 'shopItems'}, newArr),
        );
    },

});