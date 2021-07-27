// ./src/components/LoginForm.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginImg from '../img/main/log_img.png';//로그인 이미지
import IdImg from '../img/main/m_log_i3.png';//아이디 이미지
import PwImg from '../img/main/m_log_i2.png';//비번 이미지

class LoginForm extends Component {
    render () {
        return (
            <section className="main">
                <div className="m_login">
                <h3><span><img src={LoginImg} alt="" /></span>LOGIN</h3>
                <div className="log_box">
                    <form onSubmit={this.handleSubmit}>
                    <div className="in_ty1">
                        <span><img src={IdImg} alt="" /></span>
                        <input type="text" id="email_val" name="email" placeholder="이메일" onChange={this.handleChange} />
                    </div>
                    <div  className="in_ty1">
                        <span className="ic_2"><img src={PwImg} alt="" /></span>
                        <input type="password" id="pwd_val" name="password" placeholder="비밀번호" onChange={this.handleChange} />
                    </div>
                    <ul className="af">
                        <li><Link to={'/register_check'}>회원가입</Link></li>
                        <li className="pwr_b" onClick={this.pwdResetClick}><a href="#n">비밀번호 재설정</a></li>
                    </ul>
                    <button className="s_bt" type="submit" onClick={this.submitClick}>로그인</button>
                    </form>
                </div>
                </div>
            </section>
        );
    }
}

export default LoginForm;