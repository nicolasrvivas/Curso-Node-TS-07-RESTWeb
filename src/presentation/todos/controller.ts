import { Request, Response } from "express";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";
import { CreateTodo, CustomError, DeleteTodo, GetTodo, GetTodos, TodoRepository, UpdateTodo } from "../../domain";

export class TodosController {

    //* DI Dependency inyection
    constructor(
        private readonly todoRepository: TodoRepository,
    ) { }

    private handleError = ( res: Response, error: unknown ) => {
        if ( error instanceof CustomError ) {
            res.status(error.statusCode).json({error: error.message});
            return;
        }

        res.status(500).json({error: 'Internal server error - check logs'});

    }
        
    //* GET const todo = await prisma.todo.find();
    public getTodos = (req: Request, res: Response) => {
        new GetTodos( this.todoRepository )
        .execute()
        .then( todos => res.json(todos))
        .catch( error => this.handleError(res, error));
    };

    //* GET ID
    public getTodoById = (req: Request, res: Response) => {
        const id = +req.params.id!;

        new GetTodo( this.todoRepository )
        .execute( id )
        .then( todos => res.json(todos))
        .catch( error => this.handleError(res, error));
    };

    //* POST
    public createTodos = (req: Request, res: Response) => {
        const [error, createTodoDto] = CreateTodoDto.create(req.body);
        if (error) return res.status(400).json({ error });

        new CreateTodo( this.todoRepository )
        .execute( createTodoDto! )
        .then( todos => res.status(201).json(todos))
        .catch( error => this.handleError(res, error));
    };

    //* PUT
    public updateTodo = (req: Request, res: Response) => {

        const id = +req.params.id!;
        const [error, updateTodoDto] = UpdateTodoDto.create({...req.body, id});

        if ( error ) return res.status(400).json({ error });

        new UpdateTodo( this.todoRepository )
        .execute( updateTodoDto! )
        .then( todos => res.json(todos))
        .catch( error => this.handleError(res, error));
    }

    //* DELETE
    public deleteTodo = (req: Request, res: Response) => {

        const id = +req.params.id!;

        new DeleteTodo( this.todoRepository )
        .execute( id! )
        .then( todos => res.json(todos))
        .catch( error => this.handleError(res, error));

    }

}