# Mat-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Alejandro

## Ejemplo

```
import {ProductCard ,ProductImage,ProductTitle, ProductButtons} from 'mat-product-card
;```

```
            <ProductCard 
                product={product} 
                initialValues={{
                  count:2,
                  maxCount:10
                }}
                >
                  {
                    ({reset,count,increaseBy, isMaxCountReached,maxCount})=>(
                      <>
                        <ProductImage/>
                        <ProductTitle/>
                        <ProductButtons/>
                      </>
                    )

                  }
            </ProductCard>
```