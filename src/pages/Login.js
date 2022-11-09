import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  isDisabled = () => {
    const { email, name } = this.state;
    const minValue = 0;
    const isValidName = name.length > minValue;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;

    return !(emailRegex.test(email) && isValidName);
  };

  render() {
    const { email, name } = this.state;
    return (
      <div className="login-content">
        <h1>Hello World</h1>
        <label htmlFor="name">
          Nome
          <input
            data-testid="input-player-name"
            value={ name }
            onChange={ this.handleChange }
            name="name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="input-gravatar-email"
            value={ email }
            onChange={ this.handleChange }
            name="email"
          />
        </label>
        <button
          type="submit"
          data-testid="btn-play"
          disabled={ this.isDisabled() }
        >
          Play
        </button>
      </div>
    );
  }
}

export default Login;
