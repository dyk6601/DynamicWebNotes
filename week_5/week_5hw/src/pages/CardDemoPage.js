import React from 'react';
import Card, { 
  CardHeader, 
  CardBody, 
  CardFooter, 
  CardTitle, 
  CardText
} from '../components/Card';

const CardDemoPage = () => {
  return (
    <>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText>This is a basic card with default styling.</CardText>
          </CardBody>
          <CardFooter>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
          </CardFooter>
        </Card>
      </div>
      
      <div>
        <Card variant="primary">
          <CardHeader variant="primary">
            <CardTitle>Primary Card</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText>A primary variant with blue theming.</CardText>
          </CardBody>
        </Card>
      </div>
      
      <div>
        <Card variant="success" hover>
          <CardBody>
            <CardTitle>Success Card</CardTitle>
            <CardText>Green variant with hover effects.</CardText>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CardDemoPage;
