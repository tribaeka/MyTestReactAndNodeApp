import React from "react";


export default function LoginPage() {

    return (
        <div className="container">
            <div className="row form-wrapper">
                <div className="col-8 offset-2">
                    <form className="border border-info rounded p-3">
                        <div className="form-group">
                            <label htmlFor="inputEmail">Email address</label>
                            <input type="text" className="form-control" id="inputEmail" aria-describedby="emailHelp"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
