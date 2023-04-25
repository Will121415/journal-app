import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import React from "react";

export const NothingSelectedView = () => {
    return (
        <Grid container
            borderRadius={2}
            spacing={0}
            direction={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{ minHeight: 'calc(100vh - 96px)', backgroundColor: 'primary.main'}}
        >

            <Grid item>
                <StarOutline sx={{ fontSize: 100, color: 'white' }}/>
            </Grid>
            <Grid item>
                <Typography color={'white'} variant='h5'>Selecciona o crea una entrada</Typography>
            </Grid>


        </Grid>
    );
};
