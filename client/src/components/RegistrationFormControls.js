import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const RegistrationFormControls = (props) => {
  return (
    <div>
      <Form onSubmit={props.submit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={props.name}
            onChange={props.changed}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Surname</Label>
          <Input
            type="text"
            name="surname"
            value={props.surname}
            onChange={props.changed}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            value={props.email}
            onChange={props.changed}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>ID Number</Label>
          <Input
            type="number"
            name="idNumber"
            value={props.idNumber}
            onChange={props.changed}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Home Address</Label>
          <Input
            type="textarea"
            name="homeAddress"
            value={props.homeAddress}
            onChange={props.changed}
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </div>
  );
};

export default RegistrationFormControls;
