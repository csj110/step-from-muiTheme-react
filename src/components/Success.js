import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';


export class Success extends Component {
  render() {
    return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title='信息提交成功'/>
					<h2>感谢提交</h2>
					<p>稍后将会将后续信息发送到你的邮箱，请注意查收。</p>
					<RaisedButton
					label='返回主页'
					style={{margin:15}}
					primary={true}
					onClick={this.props.backToHome}
				/>
				</React.Fragment>
			</MuiThemeProvider>
    )
  }
}

export default Success;
