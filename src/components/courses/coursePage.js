"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;

var CoursePage = React.createClass({

  render: function() {
    return (
          <div>
            <h1>Courses</h1>
            <Link to="addCourse" className="btn btn-default">Add Course</Link>
          </div>
        );
    }
});

module.exports = CoursePage;
