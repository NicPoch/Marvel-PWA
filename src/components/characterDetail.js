import React,{useState} from 'react';
import {Card,Row,Col} from "react-bootstrap";

const CharacterDetail=(props)=>{
    const [state, setstate] = useState({info:props.info});

    const renderDescription=()=>{
        if(state.info.description==="")
        {
            return(
                <p>
                   No Description Available
                </p>
                );    
        }
        else
        {
            return(
                <p>
                   {state.info.description}
                </p>
                );    
        }
    };

    return(
        <Card.Body>
            <Row>                
                <Col>
                    <h3>{state.info.name}</h3>
                </Col>
                <Col>
                    <h3>ID:{state.info.id}</h3>
                </Col>
            </Row>
            <Row>
                <h4>Description</h4>
                {renderDescription()}
            </Row>            
        </Card.Body>
    );
};

export default CharacterDetail;