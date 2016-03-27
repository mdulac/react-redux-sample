import React, {PropTypes} from "react";
import Table from "material-ui/lib/table/table";
import TableRow from "material-ui/lib/table/table-row";
import TableRowColumn from "material-ui/lib/table/table-row-column";
import TableBody from "material-ui/lib/table/table-body";

const TodoList = ({todos, onTodoClick}) => (
        <Table multiSelectable={true}
               onCellClick={(id) => {
                    onTodoClick(id);
               }}>
            <TableBody deselectOnClickaway={false}
                       showRowHover={true}>
                {todos.map(todo =>
                    <TableRow
                        key={todo.id}
                        selected={todo.completed}>
                        <TableRowColumn>{todo.id}</TableRowColumn>
                        <TableRowColumn>{todo.text}</TableRowColumn>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
    ;

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList