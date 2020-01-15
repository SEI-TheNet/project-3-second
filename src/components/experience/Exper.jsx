import React, {Component} from 'react';
import "../experience/Exper.css"
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormLabel} from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Container }from 'react-bootstrap';
import { Col }from 'react-bootstrap';
class Exper extends Component {
    state = {
        posts: [],
        addedData: {
            user: "",
            img: "",
            description: ""
        }
     }
  addedDataHandler = (event) => {
    const key = event.target.name  //name in the input tage
    const value = event.target.value // value that user enter in the input tag
    this.setState(({...copyState}) => {
    copyState.addedData[key] = value
    return copyState
    })
  }
     onSubmitHandler = event => {
      event.preventDefault()
      this.setState(({...copyState}) => {
      copyState.posts.push(copyState.addedData)
      copyState.addedData = {
      user: "",
      img: "",
      description: ""
    }
    return copyState
    })
  }
      render() {
      return (
        <Container>
         <Col xs lg="6">
          <div className="container">
          <div className="form">
          {this.state.posts.map(post => (
          <div>
          <h4>{post.user}</h4>
          <p>{post.description}</p>
          <img class="mw-100" src={post.img} alt="Max-width 100%" />
          </div>
          ))}
          <Form onSubmit={this.onSubmitHandler}>
          <FormGroup controlId="formBasicEmail">
          <FormLabel> Name </FormLabel>
          <FormControl
          type="text"
          placeholder="Enter your name"
          name="user"
          value={this.state.addedData.user}
          onChange={this.addedDataHandler} />
          </FormGroup>
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
          </Form.Text> */}
          <FormGroup controlId="formBasicPassword">
          <FormLabel>Image</FormLabel>
          <FormControl
          type="text"
          placeholder="post your experience image"
          name="img"
          value={this.state.addedData.img}
          onChange={this.addedDataHandler} />
          </FormGroup>
          <FormGroup controlId="formBasicPassword">
          <FormLabel> Share your magic</FormLabel>
          <FormControl
          // type="text"
          as="textarea" rows="3"
          placeholder="write comment"
          name="description"
          value={this.state.addedData.description}
          onChange={this.addedDataHandler}/>
          </FormGroup>
          <Button variant="primary" type="submit"> Post </Button>
          </Form>
          </div>
          </div>
          </Col>
      </Container>
         );
    }
}
export default Exper;