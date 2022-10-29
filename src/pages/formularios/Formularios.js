import React, {useEffect, useState} from "react";
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
    FormControl,
    FormHelperText,
    
} from '@mui/material';
import { useSelector ,useDispatch } from 'react-redux';
import { appSelector, appActions } from '../../redux/appRedux';

const Formularios = () => {
    const dispatch = useDispatch()
    const initialData={
        name: '',
        age: '',
       }

    const initialErrors={
        name: '',
        age: '',
    }

    const [data, setData]=useState(initialData)
    const [errors, setErrors]=useState(initialErrors)
    const [hasErr, setHasErr]=useState(false)
    useEffect(()=>{
        dispatch(appActions.setPageTitle('LISTAS'))
        
    },[])

    const handleChange=(e)=>{
        setData(prev=>{
            return({
                ...prev,
                [e.target.name]: e.target.value,
            })
        })
    }

    /*const handleSubmit =async()=>{
        if(data.name=== ''){
            setHasErr(true)
            setErrors(err=>{
                return({
                    ...errors,
                    name: 'El nombre no puede estar en blanco'
                })
            })
            return false
        }
        if(data.age=== ''){
            setHasErr(true)
            setErrors(err=>{
                return({
                    ...errors,
                    age: 'La edad no puede estar en blanco'
                })
            })
            return false
        }
        if(hasErr){
            console.log('no es valido')
        }else{
            console.log('es valido')
        }      
        

    }*/
    const handleSubmit =()=>{
        
        dispatch(appActions.setLoading(true))  
         setTimeout(()=> dispatch(appActions.loading(false),3000))

    }
    
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Card>
                <CardHeader title="Formulario" />
                    <CardContent>
                        <Typography>{data.name}</Typography>
                        <Typography>{data.name1}</Typography>
                        <Typography>{data.name2}</Typography>
                        <Stack spacing={2} >
                            <Stack sx={{justifyContent:'space-around'}} direction='row'>
                                
                                <Grid item md={6}>
                                <FormControl required={true} error={true}>
                                    
                                    <TextField initialValue={data.name} name={'name'} label="Nombre" variant="outlined"
                                    onBlur={handleChange} />
                                    {
                                        errors.name && (<FormHelperText id="my-helper-text">{errors.name}</FormHelperText>)
                                    }
                                    
                                </FormControl>
                                </Grid>
                                                        
                            </Stack>
                            <Stack sx={{justifyContent:'space-around'}} direction='row'>
                                
                                <Grid item md={6}>
                                <FormControl required={true} error={true}>
                                    
                                    <TextField initialValue={data.age} age={'age'} label="Edad" variant="outlined"
                                    onBlur={handleChange} />
                                    {
                                        errors.age && (<FormHelperText id="my-helper-text">{errors.age}</FormHelperText>)
                                    }
                                    
                                </FormControl>
                                </Grid>
                                                        
                            </Stack>    
                        </Stack>
                        <Grid item md={6}>
                        <Button variant="contained"
                        onClick={()=>handleSubmit()}>Enviar</Button>
                        </Grid>
                        
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
    
};

export default Formularios;