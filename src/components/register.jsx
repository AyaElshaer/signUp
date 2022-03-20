import React, { Component } from "react";
import { Select, FormControl, MenuItem, InputLabel } from "@material-ui/core";

// import { MenuItem } from '@mui/material';

class SignUp extends Component {
  state = {
    email: "",
    phone: "",
    password: "",
    confirmPass: "",
    company: "",
    username: "",
    country: "",
    city: "",
    address: "",
  };

  handleChange = (e) => {
    
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  getSelectedValue = (e) => {
      console.log(e.target.value)
  
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="container">
            <div className="img-container">
              <img src={require("../im1.png")} alt="img"></img>
            </div>

            <h1 className="title">انشاء حساب جديد</h1>

            <form onSubmit={this.handleSubmit}>
              <div className="form-wrapper">
                <div className="group">
                  <div className="phone">
                    <input
                      type="text"
                      name="phone"
                      value={this.state.phone}
                      placeholder="رقم الهاتف"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="email">
                    <input
                      type="text"
                      name="email"
                      value={this.state.email}
                      placeholder="البريد الالكتروني"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="password">
                    <input
                      type="password"
                      name="password"
                      placeholder="كلمه المرور"
                      onChange={this.handleChange}
                      value={this.state.password}
                      required
                    />
                  </div>
                  <div className="confirm-password">
                    <input
                      type="password"
                      name="confirmPass"
                      placeholder="تاكيد كلمه المرور"
                      onChange={this.handleChange}
                      value={this.state.confirmPass}
                      required
                    />
                  </div>
                </div>
                <div className="group">
                  <div className="user-name">
                    <input
                      type="text"
                      name="username"
                      placeholder="اسم المستخدم"
                      value={this.state.username}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="company">
                    <input
                      type="text"
                      name="company"
                      placeholder="اسم الشركه"
                      onChange={this.handleChange}
                      value={this.state.company}
                      required
                    />
                  </div>
                </div>

                <div className="address-content">
                  <div className="adress-details">
                    <div className="country">
                      <FormControl className="form-control">
                        <InputLabel className="label">المحافظه</InputLabel>
                        <Select onChange={this.handleChange} name="country">
                          <MenuItem value="Cairo">القاهره</MenuItem>
                          <MenuItem value="Alex">الاسكندريه</MenuItem>
                          <MenuItem value="Dmitta">دمياط</MenuItem>
                          <MenuItem value="Daqhlia">الدقهليه</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="city">
                      <FormControl className="form-control">
                        <InputLabel className="label">البلد</InputLabel>
                        <Select onChange={this.handleChange} name='city'>
                          <MenuItem value="mansura">المنصوره</MenuItem>
                          <MenuItem value="giza ">الجيزه</MenuItem>
                          <MenuItem value="fayom">الفيوم</MenuItem>
                          <MenuItem value="suis">السويس</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="address">
                    <input
                      type="text"
                      placeholder="العنوان"
                      name="address"
                      onChange={this.handleChange}
                      value={this.state.address}
                      required
                    />
                  </div>
                </div>

                <div className="register">
                  <button type="submit">تسجيل</button>
                  <div className="login">
                    <a href="#d">تسجيل دخول</a>
                    <a href="#d">لديك حساب؟</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
