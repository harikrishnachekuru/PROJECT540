import React, { Component } from 'react';

import close from '../Assets/close.png';


 class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                
                    <div>
                       
                        <img src={close}  onClick={() => this.closeModal()} width="50px" alt="close"/>
                    </div>
              
            </section>
        );
    }
}
       
export default Examples;