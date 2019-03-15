import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  FormControl: {
    width: '100%',
    margin: '0 auto',
    fontSize: '2rem',
    color: 'white',
    marginBottom: '.8rem'
  },
  resize: {
    fontSize: '1.4rem',
    marginTop: '.5rem'
  }
})

class Contact extends Component {
  state = {
    form: {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }


  render() {
    const { classes } = this.props;

    return (
      <div className="container">
        <div className="contact-section">
          <h2 className="section-title">Contact us</h2>
          <div className="bottom-line"></div>
          <div className="form-container">
            <form className={classes.container}>
              <TextField
                id="name"
                label="Name"
                type="name"
                onChange={this.handleChange('name')}
                margin="normal"
                className={classes.FormControl}
                InputProps={{
                  classes: {
                    input: classes.resize,
                  }
                }}
                InputLabelProps={{
                  fontSize: '5rem'
                }}
              />
              <TextField
                id="email"
                label="Email"
                type="email"
                margin="normal"
                className={classes.FormControl}
                InputProps={{
                  classes: {
                    input: classes.resize
                  }
                }}
              />
              <TextField
                id="message"
                label="Message"
                multiline
                rows="4"
                margin="normal"
                className={classes.FormControl}
                InputProps={{
                  classes: {
                    input: classes.resize
                  }
                }}
              />
              <Button variant="contained" className='submit-btn'>
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);