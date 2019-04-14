import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class FormUserDetails extends Component {
	continue=e=>{
		e.preventDefault();
		this.props.nextStep();
	};

  render() {
		const {values,handleChange}=this.props;
    return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title='请输入用户信息'/>
					<TextField
						hintText={'输入你的姓'}
						floatingLabelText={<i class="far fa-id-card">姓</i>}
						onChange={handleChange('firstName')}
						defaultValue={values.firstName}
					/>
					<br/>
					<TextField
						hintText='输入你的名字'
						floatingLabelText={<i class="fas fa-id-card">名</i>}
						onChange={handleChange('lastName')}
						defaultValue={values.lastName}
					/>
					<br/>
					<TextField
						hintText='输入你的邮箱'
						floatingLabelText={<i class="fas fa-mail-bulk">邮箱</i>}
						onChange={handleChange('email')}
						defaultValue={values.email}
					/>
					<br/>
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

export default FormUserDetails;
