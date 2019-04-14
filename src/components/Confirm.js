import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
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
		const {values:{firstName,lastName,
			email, occupation, city, bio}}=this.props;
    return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title='确认用户信息'/>
					<List>
						<ListItem
							primaryText={<i class="far fa-id-card">姓</i>}
							secondaryText={firstName}
						/>
						<ListItem
							primaryText={<i class="fas fa-id-card">名</i>}
							secondaryText={lastName}
						/>
						<ListItem
							primaryText={<i class="fas fa-mail-bulk">邮箱</i>}
							secondaryText={email}
						/>
						<ListItem
							primaryText={<i class="fas fa-user-md">职业</i>}
							secondaryText={occupation}
						/>
						<ListItem
							primaryText={<i class="fas fa-city">城市</i>}
							secondaryText={city}
						/>
						<ListItem
							primaryText={<i class="fas fa-portrait">简介</i>}
							secondaryText={bio}
						/>
					</List>
					<br/>
					<RaisedButton
						label='后退'
						style={{margin:15}}
						primary={false}
						onClick={this.back}
					/>
					<RaisedButton
						label='确认 & 继续'
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
