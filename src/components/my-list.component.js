import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const MyExercise = props => (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0,10)}</td>
      <Link to={"/new/"+props.exercise._id}>edit</Link>
    </tr>
  )



export default class MyList extends Component {

    constructor(props) {
        super(props);

        // this.deleteExercise = this.deleteExercise.bind(this);
        
     this.state = {
            myExercises: [],

        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/new/')
          .then(response => {
              this.setState({
                myExercises: response.data
              })
            //   console.log(this.state);
              
          })
          .catch((error) => {
            console.log(error);
          })
    
      }

    //   deleteExercise(id) {
    //     axios.delete('http://localhost:5000/exercises/'+id)
    //       .then(response => { console.log(response.data)});
    
    //     this.setState({
    //       exercises: this.state.exercises.filter(el => el._id !== id)
    //     })
    //   }


      myExerciseList() {
        return this.state.myExercises.map(currentexercise => {
          return <MyExercise exercise={currentexercise}/>;
        })
      }

    render() {
        return (
            <div>
            <h3>Exercises</h3>
          
                <div>{ this.myExerciseList() }</div>
            
          </div>
        )
      }
    }