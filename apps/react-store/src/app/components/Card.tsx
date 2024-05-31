import { Fragment } from 'react';

interface Props {
  body: string;
}

function Card(props: Props) {
  const { body } = props;
  return (
    <div
      className="card"
      style={{
        width: '350px',
      }}
    >
      <div className="card-body">{body}</div>
    </div>
  );
}

export function CardBody() {
  return (
    <Fragment>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </Fragment>
  );
}

export default Card;
