var React = require('react');
var Header = require('./Header');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <Header page={this.props.location.pathname} />
                {this.props.children}
            </div>
        )
    }
});

module.exports = Main;