var React = require('react');
var Logo = require('./Logo');
var Menu = require('./Menu');

var Header = React.createClass({
    render: function () {
        return (
            <header>
                <Logo />
                <Menu page={this.props.page} />
            </header>
        )
    }
});

module.exports = Header;