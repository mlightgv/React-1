"use strict";

var React = require('react');
var SelectInput = require('../common/selectInput');
var TextInput = require('../common/textInput');

var CourseForm = React.createClass({
	propTypes: {
		course: React.PropTypes.object.isRequired,
		onSave: React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		authors: React.PropTypes.array.isRequired,
		errors: React.PropTypes.object
	},

	render: function() {
		return (
			<form onSubmit={this.props.onSave}>
				<legend>Course Information</legend>
				<TextInput name="title"
					label="Title"
					onChange={this.props.onChange}
					value={this.props.course.title}
					error={this.props.errors.title} />
				<SelectInput name="author"
					label="Author"
					authors={this.props.authors}
					onChange={this.props.onChange}
					value={this.props.course.author} />
				<TextInput name="category"
					label="Category"
					onChange={this.props.onChange}
					value={this.props.course.category}
					error={this.props.errors.category} />
				<TextInput name="length"
					label="Length"
					onChange={this.props.onChange}
					value={this.props.course.length}
					error={this.props.errors.length} />
				<div>
					<input type="submit" value="Save" className="btn btn-primary" />
				</div>
			</form>
		);
	}
});

module.exports = CourseForm;
