import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'Task 1'
                  }
            ]
        };
    }
    
    //metoda dodawnia nowych zadań 
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),  //metoda stworzenia kombinacji cyfr połączona z kluczem ID
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    //usunięcie rzeczy do zrobienia
    removeTodo(id){
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }


    render() {
        return (
            <div className={style.TodoApp}>
                {/* Tutaj pojawią się komponenty naszej aplikacji. */}
                <Title title='Moje zadania.' lengthTask={this.state.data.length} />
            </div>
        );
    }
}
export default App;