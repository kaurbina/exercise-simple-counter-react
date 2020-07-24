import React from 'react';

import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import './SecondsCounter.css';

class Contador extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: props.second,
            contador1: 0
        }
    }

    componentDidMount () {
        this.countID = setInterval ( 
            () => this.content(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.countID);
    }

    content() {
        this.setState({
            contador: this.state.contador +1
        });
    }

    render() {
        return (
            <div className="bg-dark m-3 p-3">
                <p className="h3 text-center text-white">Contador</p>
                <Container className="d-flex justify-content-center">
                    <Button variant="secondary" className="mr-1">
                        <FontAwesomeIcon icon={faClock} />
                    </Button>
                    <Button variant="secondary" className="mr-1">{this.state.contador1}</Button>
                    <Button variant="secondary" className="mr-1">{this.state.contador1}</Button>
                    <Button variant="secondary" className="mr-1">{this.state.contador1}</Button>
                    <Button variant="secondary" className="mr-1">{this.state.contador1}</Button>
                    <Button variant="secondary" className="mr-1">{this.state.contador1}</Button>
                    <Button variant="secondary" className="mr-1">{this.state.contador}</Button>
                </Container>
            </div>
        )
    }
}

export default Contador;