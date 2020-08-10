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
            contador1: 0,
            contador2: 0,
            contador3: 0,
            contador4: 0,
            contador5: 0,

        }
    }

    componentDidMount () {
        this.countID = setInterval ( 
            () => {
                this.content();
                this.content1();
                this.content2();
                this.content3();
                this.content4();
                this.content5();
            },
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.countID);
    }

    content() {
        this.setState({
            contador: Math.floor(this.state.contador / 1) + 1,
        });
    }

    content1() {
        this.setState({
            contador1: Math.floor(this.state.contador / 10) % 10,
        });
    }

    content2() {
        this.setState({
            contador2: Math.floor(this.state.contador / 100) % 10,
        });
    }

    content3() {
        this.setState({
            contador3: Math.floor(this.state.contador / 1000) % 10,
        });
    }

    content4() {
        this.setState({
            contador4: Math.floor(this.state.contador / 1000) % 10,
        });
    }

    content5() {
        this.setState({
            contador5: Math.floor(this.state.contador / 10000) % 10,
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
                    <Button variant="secondary" className="mr-1 disabled">{this.state.contador5}</Button>
                    <Button variant="secondary" className="mr-1 disabled">{this.state.contador4}</Button>
                    <Button variant="secondary" className="mr-1 disabled">{this.state.contador3}</Button>
                    <Button variant="secondary" className="mr-1 disabled">{this.state.contador2}</Button>
                    <Button variant="secondary" className="mr-1 disabled">{this.state.contador1}</Button>
                    <Button variant="secondary" className="mr-1 disabled">{this.state.contador % 10}</Button>
                </Container>
            </div>
        )
    }
}

export default Contador;