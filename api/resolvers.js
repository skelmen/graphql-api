const crypto = require('crypto');
const Todo = require('./model');

// class Todo {
//     static id(){
//         return crypto.randomBytes(10).toString('hex');
//     }

//     constructor({title, completed = false, steps = []}){
//         this.id = Todo.id();
//         this.title = title;
//         this.completed = completed;
//         this.steps = steps;
//     }
// }

module.exports = {
    todo: ({id}) => Todo.findById(id),
    todos: ({status}) => Todo.find({status}),
    
    createTodo: ({input}) => {
        return Todo.create(input);
    },
    updateTodo: ({id, input}) => {
        return Todo.findByIdAndUpdate(id, input, { new: true });
    },
    deleteTodo: ({id}) => {
        return Todo.deleteOne({_id: id}).then( ()=> id );
    }
}