import { fetchProducts } from '@/actions/fetchProduct'
import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import DetailCard from '@/components/DetailCard'
import YouMayAlsoLike from '@/components/YouMayAlsoLike'
import React from 'react'

const Details = async ({params}) => {
  console.log(params.detail);
   const products = await fetchProducts();
   const current = products.filter((product) => product.path == params.detail)[0];
  return (
    <>
      <Container>
            <Breadcrumb
               current={current.path.replaceAll("-", " ")}
               links={[
                  { name: "Products", path: "/products" }
               ]}
            />
            <DetailCard current={current} />
            <YouMayAlsoLike category={params.type} />
         </Container>
    </>
  )
}

export default Details