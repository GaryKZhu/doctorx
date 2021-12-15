import React, { Component } from "react";
import aboutCSS from './about.css';
class about extends Component {
  render() {
    return (
      <div>
        <h2 classname = {aboutCSS} >HELLO</h2>
        <p classname = {aboutCSS} >Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p classname = {aboutCSS}>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
}
 
export default about;