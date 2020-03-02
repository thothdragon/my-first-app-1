import React from 'react';
import { ListGroup } from 'react-bootstrap';
import data from '../data';

const Sidebar = () =>
  <aside>
    <ListGroup>
      {data.map( (item, index) =>
        <ListGroup.Item>{item.title}</ListGroup.Item>
      )}
    </ListGroup>
  </aside>
;

export default Sidebar;
