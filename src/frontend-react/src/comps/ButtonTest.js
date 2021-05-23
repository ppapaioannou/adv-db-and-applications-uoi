import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
//import BookService from '../services/BookService';

class ButtonTest extends React.Component {

    constructor(props){
        super(props)
        //this.state = {
        //    books:[]
        //}
    }

    //componentDidMount(){
    //    BookService.getBooks().then((response) => {
    //        this.setState({ books: response.data})
    //    });
    //}

    render (){
      return (
      <ButtonGroup>
        <Button> Group 1 </Button>
        <Button> Group 2 </Button>
      </ButtonGroup>
    );
    }
}

export default ButtonTest
