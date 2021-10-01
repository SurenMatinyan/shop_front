import React from 'react';
import styles from './style.module.css'
import {Card,Typography,CardContent,TextField} from '@material-ui/core'
export default function FiltreBar(){
    return (
        
            <Card className={styles.container}>
               <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Categori
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Price Range
                    </Typography>
                    <div className={styles.price_bolck}>
                        <TextField id="outlined-basic" label="min" variant="outlined" size="small" style={{width: "40%"}}/>
                        _
                        <TextField id="outlined-basic" label="max" variant="outlined" size="small" style={{width: "40%"}}/>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
       
    )
}