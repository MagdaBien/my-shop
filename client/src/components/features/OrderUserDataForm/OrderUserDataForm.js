import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const OrderUserDataForm = () => {
  return (
    <>
      <Row>
        <Col className="col-md-4 mb-3">
          <label for="validationTooltip01">First name</label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip01"
            placeholder="First name"
            value="Mark"
            required
          />
          <div className="valid-tooltip">Fill your name!</div>
        </Col>
        <Col className="col-md-4 mb-3">
          <label for="validationTooltip02">Last name</label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip02"
            placeholder="Last name"
            value="Otto"
            required
          />
          <div className="valid-tooltip">Fill your last name!</div>
        </Col>
        <Col className="col-md-4 mb-3">
          <label for="validationTooltipUsername">Username</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                @
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="validationTooltipUsername"
              placeholder="Username"
              aria-describedby="validationTooltipUsernamePrepend"
              required
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col class="col-md-6 mb-3">
          <label for="validationTooltip03">City</label>
          <input
            type="text"
            class="form-control"
            id="validationTooltip03"
            placeholder="City"
            required
          />
          <div class="invalid-tooltip">Please provide a valid city.</div>
        </Col>
        <Col class="col-md-3 mb-3">
          <label for="validationTooltip04">State</label>
          <input
            type="text"
            class="form-control"
            id="validationTooltip04"
            placeholder="State"
            required
          />
          <div class="invalid-tooltip">Please provide a valid state.</div>
        </Col>
        <Col class="col-md-3 mb-3">
          <label for="validationTooltip05">Zip</label>
          <input
            type="text"
            class="form-control"
            id="validationTooltip05"
            placeholder="Zip"
            required
          />
          <div class="invalid-tooltip">Please provide a valid zip.</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary">SEND ORDER</Button>
        </Col>
      </Row>
    </>
  );
};

export default OrderUserDataForm;
