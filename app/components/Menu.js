var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Menu = React.createClass({
    render: function () {
        console.log(this.props);
        return (
            <nav>
                <ul>
                    <li><Link to='/settings'>Settings</Link></li>
                </ul>
            </nav>
        )
    }
});

module.exports = Menu;