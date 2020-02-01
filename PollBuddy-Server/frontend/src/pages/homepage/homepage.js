import React, {Component} from 'react';
import './homepage.scss'
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Router, Link } from '@reach/router';

export default class homepage extends Component {
  render() {
    return (
        <MDBContainer className="page-homepage">
            <header className="Homepage-header">

                <h1>
                    Welcome to PollBuddy!
                </h1>

                <MDBContainer className="d-flex p-2 Homepage-box">
                    PollBuddy is an interactive platform for educators to connect with their students in a virtual classroom, where
                    educators can ask questions during class.
                </MDBContainer>

                <MDBContainer className="text-right">
                    <Link to={"/login"}>
                        <MDBBtn size = "lg"  color = "secondary">Sign In</MDBBtn>
                    </Link>
                    <MDBBtn size = "lg"  color = "secondary">Sign Up</MDBBtn>
                </MDBContainer>

            </header>
        </MDBContainer>
    )
  }
}
