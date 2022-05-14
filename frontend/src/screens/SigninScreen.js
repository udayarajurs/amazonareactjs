import Button from 'react-bootstrap/Button';
import {Helmet} from 'react-helmet-async';
import {Link, useLocation} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default function SigninScreen() {
  const {search} = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form>
        <Form.Group className="mb-3" controlID="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlID="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" placeholder="Enter Password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}
