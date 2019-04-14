import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class FormPersonalDetails extends Component {
	continue=e=>{
		e.preventDefault();
		this.props.nextStep();
	};

	back=e=>{
		e.preventDefault();
		this.props.prevStep();
	};

  render() {
		const {values,handleChange}=this.props;
    return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title='请输入用户详细信息'/>
					<TextField
						hintText='输入你的职业'
						floatingLabelText={<i class="fas fa-user-md">职业</i>}
						onChange={handleChange('occupation')}
						defaultValue={values.occupation}
					/>
					<br/>
					<TextField
						hintText='输入你的城市'
						floatingLabelText={<i class="fas fa-city">城市</i>}
						onChange={handleChange('city')}
						defaultValue={values.city}
					/>
					<br/>
					<TextField
						hintText='输入你的简介'
						floatingLabelText={<i class="fas fa-portrait">简介</i>}
						onChange={handleChange('bio')}
						defaultValue={values.bio}
					/>
					<br/>
					<RaisedButton
						label='后退'
						style={{margin:15}}
						primary={false}
						onClick={this.back}
					/>
					<RaisedButton
						label='继续'
						style={{margin:15}}
						primary={true}
						onClick={this.continue}
					/>
				</React.Fragment>
			</MuiThemeProvider>
    )
  }
}

export default FormPersonalDetails;
