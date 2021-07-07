import React, { Component } from 'react';
import AppNav from './AppNav';
import { Table,Container,Input,Button,Label, FormGroup, Form} from 'reactstrap';

class Category extends Component {

    state = {  
        isLoading : true,
        Categories : []
    }
 
    async componentDidMount(){
        // const response=await fetch('/api/categories');
        // const body = await response.json();
        // this.setState({Categories : body , isLoading: false});
    }

    render() { 
        const {Categories , isLoading} = this.state;
        const title =<h3>Category</h3>;
        // if(isLoading) 
        //     return (<div>Loading...</div>);
        
        return ( 
            
                <div>
                    <AppNav/>
                    <Container>
                        {title}
                    </Container>
                </div>
         );
    }
}
 
export default Category;