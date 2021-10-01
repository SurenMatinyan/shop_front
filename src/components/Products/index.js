import React from 'react'
import ProductContainer from '../../assets/ProductContainer/index'
import styles from './style.module.css'
import { Container, } from '@material-ui/core'
import FiltreBar from './filtreBar/index'
import { Pagination } from '@material-ui/lab'
import Stack from '@mui/material/Stack';
export default function Products() {
    return (

        <Container maxWidth="fixed" >
            <div className={styles.filtre_and_products_container}>
                <div style={{ width: "25%", marginLeft: 20, marginTop: 20 }}><FiltreBar /></div>
                <div className={styles.container}>
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", }}>
                        <ProductContainer />
                        <ProductContainer />
                        <ProductContainer />
                        <ProductContainer />
                        <ProductContainer />
                        <ProductContainer />
                    </div>
                    <div className={styles.pagination}>
                    <Stack spacing={2} >
                        <Pagination count={10} variant="outlined" shape="rounded" onChange={(e, v) => console.log(v)} />
                    </Stack>
                    </div>
                </div>
            </div>
        </Container>
    )
}
