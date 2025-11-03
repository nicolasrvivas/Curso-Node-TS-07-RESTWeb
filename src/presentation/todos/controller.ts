import { Request, Response } from "express";

const todos = [
    { id: 1, text: 'Buy milk', completedAt: new Date() },
    { id: 2, text: 'Buy bread', completedAt: null },
    { id: 3, text: 'Buy butter', completedAt: new Date() },
];

export class TodosController {

    //* DI Dependency inyection
    constructor() { }

    public getTodos = (req: Request, res: Response) => {
        return res.json(todos);
    };

    public getTodoById = (req: Request, res: Response) => {
        const id = +req.params.id!;
        const todo = todos.find(todo => todo.id === id);
        if (isNaN(id)) return res.status(400).json({ error: 'ID argumen is not a number' });
        return todo
            ? res.json(todo)
            : res.status(404).json({ error: `TODO with id ${id} not found` })
    };

    public createTodos = (req: Request, res: Response) => {
        const { text } = req.body;

        if (!text) return res.status(400).json({ error: 'text property is requerid' });

        const newTodo = {
            id: todos.length + 1,
            text: text,
            completedAt: null
        }

        todos.push(newTodo);

        res.json(newTodo);
    };

    public updateTodo = (req: Request, res: Response) => {

        const id = +req.params.id!;
        if (isNaN(id)) return res.status(400).json({ error: 'ID argumen is not a number' });

        const todo = todos.find(todo => todo.id === id);
        if (!todo) return res.status(400).json({ error: `Todo with id ${id} not found` });

        const { text, completedAt } = req.body;
        // if (!text) return res.status(400).json({ error: 'text property is requerid' });

        todo.text = text || todo.text;
        (completedAt === 'null')
            ? todo.completedAt = null
            : todo.completedAt = new Date(completedAt || todo.completedAt);

        res.json(todo);
    }

    public deleteTodo = (req: Request, res: Response) => {

        const id = +req.params.id!;
        if (isNaN(id)) return res.status(400).json({ error: 'ID argumen is not a number' });

        //! Referencia al objeto
        const todo = todos.find(todo => todo.id === id);
        if (!todo) return res.status(400).json({ error: `Todo with id ${id} not found` });

        todos.splice(todos.indexOf(todo), 1);

        res.json(todo);
    }

}