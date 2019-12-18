import React from "react";


export default function LoginPage() {

    return (
        <div className="container">
            <div className="row form-wrapper">
                <div className="col-8 offset-2">
                    <form className="border border-info rounded p-3"
                          method="post"
                          action="/auth/login"
                    >
                        <div className="form-group">
                            <label htmlFor="inputUsername">Username</label>
                            <input type="text" className="form-control" id="inputUsername"/>
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
