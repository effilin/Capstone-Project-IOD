


 export default function SignupForm() {
    return(
        <div className='modal fade' id="sign-up-modal" tabIndex='-1' aria-labelledby="signupModalLabel" aria-hidden="true">
            <div className='modal-dialog'>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="signupModalLabel">SignUp</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <form className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor='name' className="form-label">Name</label>
                                    <input type='text' id='name' name='name' className="form-control" ></input><br />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor='zipCode'className="form-label"> Zipcode: for weather updates</label>
                                    <input type='text' id='zipCode' name='zipCode' className="form-control"></input><br />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor='password'className="form-label"> Create a Password </label>
                                    <input type='text' id='password' name='password'className="form-control"></input><br />
                                </div>
                                <p> Choose Your Theme </p>
                                <div className="form-check">
                                    <input type="radio" id="garden" name="garden" value="1" className="form-check-input"></input>
                                    <label htmlFor="garden" className="form-check-label">Garden</label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" id="synth" name="synth" value="2" className="form-check-input"></input>
                                    <label htmlFor="synth" className="form-check-label">SynthWave</label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" id="night" name="night" value="3" className="form-check-input"></input>
                                    <label htmlFor="night" className="form-check-label">Night Sky</label>
                                </div>
                                <div className="modal-footer">
                                    <button type='submit' className='btn btn-outline-success'>Submit</button>
                                </div>
                    
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
 }