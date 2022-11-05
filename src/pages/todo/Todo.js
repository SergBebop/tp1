import React, {useEffect, useState} from "react";
import { v4 as uuid } from 'uuid';
import {
    Grid,
    Card,
    Box,
    TextField,
    Button,
    Stack,
    CardHeader,
    CardContent,
    Typography,
    Checkbox,
} from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../../redux/appRedux";

const Todo = () => {
    const title = useSelector(appSelector.todo)
    const dispatch = useDispatch()
    const todo = useSelector(appSelector.todo)
    const [text, setText] = useState(null)

    useEffect(()=>{
        dispatch(appActions.setPageTitle('Tareas'))  
    },[])



    const handleChange = (e) => {
        setText(e.target.value)
        }

    const addTask = async () => {
        dispatch(appActions.addTodo({text:text, id:uuid()}))
        await setText(prev=>'')
        }

    const handleChecked = (e, id) => {
        dispatch(appActions.setCompletedTodo({id, completed:e.target.checked}))
        }    
    
    const delTask = async (id) => {
        dispatch(appActions.deleteTodo(id))
        }

return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
        <Card>
            <CardHeader title="Agrega una tarea" />
                <CardContent>
                    <Stack sx={{justifyContent:'space-around'}} direction='row'>
                        <Grid item md={6}>
                            <TextField value={text} label="tarea" variant="outlined"
                            onChange={handleChange} />
                        </Grid>
                        <Grid item md={6}>
                    <Button disabled={!text}variant="contained"
                    onClick={()=>addTask()}>Agregar</Button>
                    </Grid>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12}>
            <Card>
                <CardHeader title="Tareas" />
                <CardContent>
                    <Box>
                        {JSON.stringify(todo)}
                    </Box>
                    {todo.map((t, index)=>
                    (
                    <Stack key={t.id} sx={{justifyContent:'space-between'}}
                    direction='row'>
                        <Grid item md={1}>
                            <Checkbox onChange={e=>handleChecked(e,t.id)} />
                        </Grid>
                        <Grid item md={9} sx={{pt: 1}}>
                            <Typography sx={{fontSize:18,
                            fontWeight:700}}>{t.text}</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Button variant="contained"
                            onClick={()=>delTask(t.id)}>Eliminar</Button>
                        </Grid>
                    </Stack>
                    )
                )}
                </CardContent>
            </Card>

        </Grid>
    </Grid>
    );
    
};

export default Todo;