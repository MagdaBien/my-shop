import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addUserRequest, getUser } from '../../../redux/usersRedux';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderUserDataForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const actionHandler = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      address,
      phone,
      email,
    };

    dispatch(addUserRequest(newUser));
  };

  if (user.name) {
    return (
      <p>
        {setTimeout(() => {
          navigate('/endOrder');
        }, 500)}
      </p>
    );
  }

  return (
    <Form onSubmit={actionHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Name: </Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address: </Form.Label>
        <Form.Control
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone: </Form.Label>
        <Form.Control
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email: </Form.Label>
        <Form.Control
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Button variant="dark" type="submit">
        SEND ORDER
      </Button>
    </Form>
  );
};

export default OrderUserDataForm;
